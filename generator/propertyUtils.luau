local isCreatableCache = {}
local function isClassCreatable(classApi)
	if isCreatableCache[classApi.Name] ~= nil then
		return isCreatableCache[classApi.Name]
	else
		local isCreatable = not (classApi:HasTag("NotCreatable"))
		isCreatableCache[classApi.Name] = isCreatable
		return isCreatable
	end
end

local function getDefaultPropertyFaster(classApi, propertyName)
	if isClassCreatable(classApi) then
		return classApi:GetPropertyDefault(propertyName)
	else
		return nil
	end
end

local function isDefaultSameAsSuper(propertyName, classApi)
	local superclassApi = classApi:Superclass()
	if not classApi:Superclass() then
		return false
	end

	if superclassApi:Properties()[propertyName] == nil then
		return false
	end

	return getDefaultPropertyFaster(classApi, propertyName) == getDefaultPropertyFaster(classApi, propertyName)
end

local function doesSuperHaveProperty(propertyName, classApi)
	local superclassApi = classApi:Superclass()

	if not superclassApi then
		return false
	end

	return superclassApi:Properties()[propertyName] ~= nil
end

local isPropertyFiltered = function(property)
	local tags = property.Tags or {}

	for _, tag in tags do
		if tag == "NotScriptable" or tag == "Deprecated" or tag == "ReadOnly" or tag == "Hidden" then
			return true
		end
	end

	if not property.Serialization.CanLoad or not property.Serialization.CanSave then
		return true
	end

	local unreadable = not (property.Security == "None" or property.Security.Read == "None")
	local unwritable = not (property.Security == "None" or property.Security.Write == "None")

	if unreadable or unwritable then
		return true
	end

	return false
end

local propertyUtils = {
	getDefaultPropertyFaster = getDefaultPropertyFaster,
	isClassCreatable = isClassCreatable,
	isDefaultSameAsSuper = isDefaultSameAsSuper,
	doesSuperHaveProperty = doesSuperHaveProperty,
	isPropertyFiltered = isPropertyFiltered,
}

return propertyUtils
