local function generateInstanceInterfaces(includedClasses, lib)
	local generatorOptions = lib.generatorOptions
	local fileWriter = lib.fileWriter
	local toTypescript = lib.toTypescript
	local propertyUtils = lib.propertyUtils

	local file = fileWriter.new()
	-- stylua: ignore start
	file:writeLine('import { Enum } from "./enums";')
	file:writeLine('import { Color3, UDim, UDim2, Vector2, Rect, NumberSequence, ColorSequence, Font } from "../datatypes";')
	file:writeLine("")
	-- stylua: ignore end

	local creatableClasses = {}
	local uncreatableClasses = {}

	for _, classApi in includedClasses do
		local className = classApi.Name
		local interfaceMembers = {}

		if propertyUtils.isClassCreatable(classApi) then
			table.insert(creatableClasses, className)
		else
			table.insert(uncreatableClasses, className)
		end

		for propertyName, property in pairs(classApi:Properties()) do
			if propertyUtils.isPropertyFiltered(property) then
				continue
			end

			local doesSuperHaveProperty = propertyUtils.doesSuperHaveProperty(propertyName, classApi)
			local isPropertyBlacklisted = generatorOptions.blacklistedInterfaceProperties[propertyName]

			if doesSuperHaveProperty or isPropertyBlacklisted then
				continue
			end

			local valueType = toTypescript.typeByApiValueType(property.ValueType)

			table.insert(interfaceMembers, {
				propertyName = propertyName,
				type = valueType,
			})
		end

		-- ALphabetize the members
		table.sort(interfaceMembers, function(a, b)
			return a.propertyName < b.propertyName
		end)

		-- Add "ClassName" field to the Instance interface
		if not classApi:Superclass() then
			table.insert(interfaceMembers, 1, {
				propertyName = "readonly ClassName",
				type = "keyof Instances",
			})
		end

		local extends = if classApi:Superclass() then `extends {classApi:Superclass().Name} ` else ""
		if #interfaceMembers > 0 then
			file:writeLine(`export interface {className} {extends}\{`)
			file:tabIn()
			for _, interfaceMember in interfaceMembers do
				file:writeLine(`{interfaceMember.propertyName}: {interfaceMember.type};`)
			end
			file:tabOut()
			file:writeLine("}")
		else
			file:writeLine(`export interface {className} {extends}\{}`)
		end
		file:writeLine("")
	end

	table.sort(creatableClasses)
	table.sort(uncreatableClasses)

	file:writeLine("export interface CreatableInstances {")
	file:tabIn()
	for _, className in creatableClasses do
		file:writeLine(`{className}: {className};`)
	end
	file:tabOut()
	file:writeLine("}")
	file:writeLine("")
	file:writeLine("export interface Instances extends CreatableInstances {")
	file:tabIn()
	for _, className in uncreatableClasses do
		file:writeLine(`{className}: {className};`)
	end
	file:tabOut()
	file:writeLine("}")

	return file.content, "instanceInterfaces.ts"
end

return generateInstanceInterfaces
