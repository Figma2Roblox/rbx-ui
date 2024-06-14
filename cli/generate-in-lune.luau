local fs = require("@lune/fs")
local stdio = require("@lune/stdio")
local process = require("@lune/process")

local generatorOptions = require("../generator/generatorOptions")
local getIncludedClassnames = require("../generator/getIncludedClassnames")
local ApiDump = require("ApiDump")

local includedClasses = getIncludedClassnames(ApiDump, generatorOptions)
local lib = {
	generatorOptions = generatorOptions,
	fileWriter = require("../generator/fileWriter"),
	toTypescript = require("../generator/toTypescript"),
	propertyUtils = require("../generator/propertyUtils"),
}

local fileSources = {}
for _, path in fs.readDir("generator/fileGenerators") do
	local generate = require(`../generator/fileGenerators/{path}`)
	local success, fileSource, fileName = xpcall(generate, function(err)
		stdio.ewrite(err)
	end, includedClasses, lib)

	if success then
		fileSources[fileName] = fileSource
	else
		process.exit(1)
	end
end

-- We don't write the files until after they've all been generated without error.
for fileName, fileSource in pairs(fileSources) do
	fs.writeFile(`package/src/generated/{fileName}`, fileSource)
	print(`[API GENERATOR]: Generated {fileName}`)
end

process.exit(0)
