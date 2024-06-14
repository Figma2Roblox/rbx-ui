local fileWriter = {}
fileWriter.__index = fileWriter

fileWriter.new = function()
	local self = setmetatable({}, fileWriter)
	self.content = ""
	self._tab = 0

	return self
end

function fileWriter:writeLine(line)
	self.content = `{self.content}{string.rep("\t", self._tab)}{line}\n`
end

function fileWriter:tabIn()
	self._tab += 1
end

function fileWriter:tabOut()
	self._tab -= 1
	self._tab = math.max(0, self._tab)
end

return fileWriter
