--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
-- Lua Library inline imports
local __TS__Unpack = table.unpack or unpack

-- End of Lua Library inline imports
local ____exports = {}
____exports.name = "SpoonsPackageManager"
____exports.version = "1.0"
____exports.author = "yehvaed <jaroslaw.walach@gmail.com>"
____exports.homepage = "https://github.com/yehvaed/SpoonsPackageManager.spoon"
____exports.license = "MIT - https://opensource.org/licenses/MIT"
____exports.logger = hs.logger.new("window-snap-assist-spoon")
local edgeDetectionScanner = hs.timer.doEvery(
    0.2,
    function()
        local mouse = hs.mouse.getRelativePosition()
        local leftMouseButton = __TS__Unpack(hs.mouse:getButtons())
        local screen = hs.screen.mainScreen():fullFrame()
        if math.abs(mouse.x - screen.x) < 15 and leftMouseButton then
            print(
                math.abs(mouse.x - screen.x) > 350,
                "snap to left"
            )
        end
        if math.abs(mouse.x - screen.w) < 15 and leftMouseButton then
            print(
                math.abs(mouse.x - screen.x) > 350,
                "snap to right"
            )
        end
    end
)
____exports.start = function()
    edgeDetectionScanner:start()
end
____exports.stop = function()
    edgeDetectionScanner:stop()
end
return ____exports
