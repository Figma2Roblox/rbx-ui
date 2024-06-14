local isLune, roblox = pcall(require, "@lune/roblox")

local valueGeneratorByType = {
	UDim = function(udim)
		if udim.Scale ~= 0 or udim.Offset ~= 0 then
			return `new UDim({udim.Scale}, {udim.Offset})`
		else
			return "new UDim"
		end
	end,

	UDim2 = function(udim)
		local usesScale = udim.X.Scale ~= 0 or udim.Y.Scale ~= 0
		local usesOffset = udim.X.Offset ~= 0 or udim.Y.Offset ~= 0

		if usesScale and usesOffset then
			return `new UDim2({udim.X.Scale}, {udim.X.Offset}, {udim.Y.Scale}, {udim.Y.Offset})`
		elseif usesScale then
			return `UDim2.fromScale({udim.X.Scale}, {udim.Y.Scale})`
		elseif usesOffset then
			return `UDim2.fromOffset({udim.X.Offset}, {udim.Y.Offset})`
		else
			return "new UDim2"
		end
	end,

	Vector2 = function(vector2)
		local x = vector2.X
		local y = vector2.Y

		if x ~= 0 or y ~= 0 then
			x = tostring(x) == "inf" and "Infinity" or x
			y = tostring(y) == "inf" and "Infinity" or y
			return `new Vector2({x}, {y})`
		else
			return "new Vector2"
		end
	end,

	Color3 = function(color3)
		return `Color3.fromHex("{string.upper(color3:ToHex())}")`
	end,

	NumberSequence = function(numberSequence)
		return `new NumberSequence({numberSequence.Keypoints[1].Value})`
	end,

	ColorSequence = function(colorSequence)
		return `new ColorSequence(Color3.fromHex("{string.upper(colorSequence.Keypoints[1].Value:ToHex())}"))`
	end,

	Rect = function(rect)
		if rect.Min.X ~= 0 or rect.Min.Y ~= 0 or rect.Max.X ~= 0 or rect.Max.Y ~= 0 then
			return `new Rect({rect.Min.X}, {rect.Min.Y}, {rect.Max.X}, {rect.Max.Y})`
		else
			return "new Rect"
		end
	end,

	Font = function(font)
		local weightAndStyle = ""
		if isLune then
			Enum = roblox.Enum
		end

		if font.Weight ~= Enum.FontWeight.Regular or font.Style ~= Enum.FontStyle.Normal then
			weightAndStyle = `, Enum.FontWeight.{font.Weight.Name}, Enum.FontStyle.{font.Style.Name}}`
		end

		local content = font.Family

		local name = string.match(content, "rbxasset://fonts/families/(%a+).json")
		local id = string.match(content, "rbxassetid://(%d+)")
		if name then
			return `Font.fromName("{name}"{weightAndStyle})`
		elseif id then
			return `Font.fromId({id}{weightAndStyle})`
		else
			return `new Font("{content}"{weightAndStyle})`
		end
	end,

	string = function(str)
		return `"{str}"`
	end,

	Enum = function(enum)
		return `Enum.{enum}`
	end,

	EnumItem = function(enumItem)
		return enumItem
	end,

	["nil"] = function()
		return "undefined"
	end,
}

local typeGeneratorByType = {
	Enums = function(enum)
		return `Enum.{enum}`
	end,

	EnumItem = function(enumItem)
		return `Enum.{enumItem.EnumType}`
	end,
}

local typeByValueName = {
	bool = "boolean",
	float = "number",
	int = "number",
	Content = "string",
	string = "string",
	int64 = "number",
}

local typeGeneratorByValueCategory = {
	Enum = function(apiValueType)
		return `Enum.{apiValueType.Name}`
	end,
	Primitive = function(apiValueType)
		if typeByValueName[apiValueType.Name] then
			return typeByValueName[apiValueType.Name]
		else
			error(`No TypeScript type provided for API type '{apiValueType.Name}'`)
		end
	end,
	Class = function(apiValueType)
		return `{apiValueType.Name} | undefined`
	end,
	DataType = function(apiValueType)
		return `{apiValueType.Name}`
	end,
}

local toTypescript = {}

function toTypescript.value(value)
	if valueGeneratorByType[typeof(value)] then
		return valueGeneratorByType[typeof(value)](value)
	end

	return tostring(value)
end

function toTypescript.typeByValue(value)
	local typeofValue = typeof(value)

	if typeofValue == "Instance" then
		return value.ClassName
	end

	if typeGeneratorByType[typeofValue] then
		return typeGeneratorByType[typeofValue](value)
	end

	return typeofValue
end

function toTypescript.typeByApiValueType(valueType)
	if typeByValueName[valueType.Name] then
		return typeByValueName[valueType.Name]
	elseif typeGeneratorByValueCategory[valueType.Category] then
		return typeGeneratorByValueCategory[valueType.Category](valueType)
	else
		error(`No type or type generator for [{valueType.Category}]: [{valueType.Name}]`)
	end
end

return toTypescript
