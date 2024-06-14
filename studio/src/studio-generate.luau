local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Workspace = game:GetService("Workspace")

local generatorOptions = require(ReplicatedStorage.Generator.generatorOptions)
local getIncludedClassnames = require(ReplicatedStorage.Generator.getIncludedClassnames)
local ApiDumpStatic = require(ReplicatedStorage.Packages.ApiDumpStatic)

return function()
	local generated = Workspace:FindFirstChild("Generated")

	if not generated then
		generated = Instance.new("Folder")
		generated.Name = "Generated"
		generated.Parent = Workspace
	else
		generated:ClearAllChildren()
	end

	local includedClasses = getIncludedClassnames(ApiDumpStatic, generatorOptions)
	local lib = {
		generatorOptions = generatorOptions,
		fileWriter = require(ReplicatedStorage.Generator.fileWriter),
		toTypescript = require(ReplicatedStorage.Generator.toTypescript),
		propertyUtils = require(ReplicatedStorage.Generator.propertyUtils),
	}

	for _, generator in ReplicatedStorage.Generator.fileGenerators:GetChildren() do
		local fileSource, fileName = require(generator)(includedClasses, lib)

		local file = Instance.new("ModuleScript")
		file.Name = fileName
		file.Source = fileSource
		file.Parent = generated
	end
end
