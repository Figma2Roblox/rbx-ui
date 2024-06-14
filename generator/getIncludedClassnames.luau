local function getIncludedClassNames(apiDump, generatorOptions)
	local includedClasses = {}

	-- Include class names for instances in generator options as well as names
	-- for all their superclasses.
	local function includeSuperclassesRecursive(classApi)
		local superclass = classApi:Superclass()
		if not superclass then
			return
		end

		if not table.find(includedClasses, superclass) then
			table.insert(includedClasses, superclass)
			includeSuperclassesRecursive(superclass)
		end
	end

	for _, className in generatorOptions.includedClassNames do
		local classApi = apiDump.Classes[className]
		table.insert(includedClasses, classApi)
		includeSuperclassesRecursive(classApi)
	end

	-- Sort the list of classes such that a class is always listed after its
	-- superclass. Unrelated classes are sorted alphabetically.

	local function doesInherentFromSuperclassRecursive(classApi, superclassApi)
		local superclass = classApi:Superclass()
		if not superclass then
			return false
		elseif superclass.Name == superclassApi.Name then
			return true
		else
			return doesInherentFromSuperclassRecursive(superclass, superclassApi)
		end
	end

	table.sort(includedClasses, function(classA, classB)
		if doesInherentFromSuperclassRecursive(classB, classA) then
			return true
		elseif doesInherentFromSuperclassRecursive(classA, classB) then
			return false
		else
			return classA.Name < classB.Name
		end
	end)

	return includedClasses
end

return getIncludedClassNames
