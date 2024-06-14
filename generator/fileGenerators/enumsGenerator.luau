local isLune, roblox = pcall(require, "@lune/roblox")

local function generateInstanceInterfaces(includedClasses, lib)
	local generatorOptions = lib.generatorOptions
	local fileWriter = lib.fileWriter
	local propertyUtils = lib.propertyUtils

	local file = fileWriter.new()

	local includedEnums = table.clone(generatorOptions.manuallyIncludedEnumNames)
	local enumsSet = {}

	for _, classApi in includedClasses do
		for _propertyName, property in pairs(classApi:Properties()) do
			if propertyUtils.isPropertyFiltered(property) then
				continue
			end

			if property.ValueType.Category == "Enum" then
				local enumType = property.ValueType.Name

				if not enumsSet[enumType] then
					table.insert(includedEnums, enumType)
					enumsSet[enumType] = true
				end
			end
		end
	end

	file:writeLine('import { EnumItems, createEnumItems, EnumItem } from "../enumsHelper')
	file:writeLine("export { EnumItems, EnumItem }")
	file:writeLine("")
	file:writeLine("export namespace Enum {")
	file:tabIn()

	for _, enumName in includedEnums do
		local enum = if isLune then roblox.Enum[enumName] else Enum[enumName]
		local enumExportsString
		for _, enumItem in enum:GetEnumItems() do
			if not enumExportsString then
				enumExportsString = `{enumItem.Name}`
			else
				enumExportsString = `{enumExportsString}, {enumItem.Name}`
			end
		end

		file:writeLine(`export namespace {enumName} \{`)
		file:tabIn()

		file:writeLine(`const enumItems = createEnumItems("{enumName}", [`)
		file:tabIn()
		for _, enumItem in enum:GetEnumItems() do
			file:writeLine(`\{ Name: "{enumItem.Name}", Value: {enumItem.Value} \},`)
		end
		file:tabOut()
		file:writeLine(`])`)
		file:writeLine("")
		file:writeLine(`export const [{enumExportsString}] = enumItems`)
		file:writeLine(`export const GetEnumItems = () => enumItems`)
		file:tabOut()
		file:writeLine("}")
		file:writeLine(`export type {enumName} = EnumItem<"{enumName}">`)
		file:writeLine("")
	end
	file:tabOut()
	file:writeLine("}")

	return file.content, "enums.ts"
end

return generateInstanceInterfaces
