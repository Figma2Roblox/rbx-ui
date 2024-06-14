local function generateInstanceConstructors(includedClasses, lib)
	local generatorOptions = lib.generatorOptions
	local fileWriter = lib.fileWriter
	local toTypescript = lib.toTypescript
	local propertyUtils = lib.propertyUtils

	local file = fileWriter.new()
	file:writeLine('import { Instances, CreatableInstances } from "./instanceInterfaces";')
	file:writeLine(
		'import { Color3, UDim, UDim2, Vector2, Rect, NumberSequence, ColorSequence, Font } from "../datatypes";'
	)
	file:writeLine('import { Enum } from "./enums";')
	file:writeLine("")

	for _, classApi in includedClasses do
		local className = classApi.Name
		local defaultMembers = {}

		for propertyName, property in classApi:Properties() do
			local isPropertyBlacklisted = generatorOptions.blacklistedDefaultProperties[propertyName]
			if propertyUtils.isPropertyFiltered(property) or isPropertyBlacklisted then
				continue
			end

			local isDefaultSame = propertyUtils.isDefaultSameAsSuper(propertyName, classApi)

			if isDefaultSame or isPropertyBlacklisted then
				continue
			end

			local defaultValue = propertyUtils.getDefaultPropertyFaster(classApi, propertyName)
			local valueType = toTypescript.typeByApiValueType(property.ValueType)
			if propertyUtils.isClassCreatable(classApi) then
				assert(
					property.ValueType.Category ~= "Class" and defaultValue ~= nil,
					`{className}.{propertyName}'s default value is not yet defined in the Lune runtime.`
				)

				-- Lune doesn't implement tostring(Enum) and tostring(EnumItem)
				-- yet, so we can't use the toTypescript module to convert the
				-- value into a string directly. Instead, we'll have to do it
				-- manually.
				if pcall(require, "@lune/process") and property.ValueType.Category == "Enum" then
					defaultValue = `Enum.{property.ValueType.Name}.{defaultValue.Name}`
				else
					defaultValue = toTypescript.value(defaultValue)
				end
			end

			table.insert(defaultMembers, {
				propertyName = propertyName,
				defaultValue = defaultValue,
				type = valueType,
			})
		end

		-- Alphabetize the members
		table.sort(defaultMembers, function(a, b)
			return a.propertyName < b.propertyName
		end)

		-- Insert stuff at the top
		if not classApi:Superclass() then
			table.insert(defaultMembers, 1, {
				propertyName = "Parent",
				type = "Instance | undefined",
				defaultValue = "undefined",
			})
		end

		table.insert(defaultMembers, 1, { propertyName = "Name", type = "string", defaultValue = `"{className}"` })
		table.insert(
			defaultMembers,
			1,
			{ propertyName = "readonly ClassName", type = "keyof Instances", defaultValue = `"{className}"` }
		)

		file:writeLine(
			`export class {className} {if classApi:Superclass() then `extends {classApi:Superclass().Name} ` else ""}implements {className} \{`
		)
		file:tabIn()
		for _, member in defaultMembers do
			local definition = member.defaultValue ~= nil and ` = {member.defaultValue}` or ""
			file:writeLine(`{member.propertyName}{definition == "" and "!" or ""}: {member.type}{definition};`)
		end
		file:tabOut()
		file:writeLine("}")
		file:writeLine("")
	end

	file:writeLine("export const instanceConstructors: { [K in keyof CreatableInstances]: new () => Instances[K] } = {")
	file:tabIn()
	for _, classApi in includedClasses do
		if propertyUtils.isClassCreatable(classApi) then
			file:writeLine(`{classApi.Name}: {classApi.Name},`)
		end
	end
	file:tabOut()
	file:writeLine("}")

	return file.content, "instanceClasses.ts"
end

return generateInstanceConstructors
