export const name = "window-snap-assist-spoon";
export const version = "0.0";
export const author = "yehvaed <jaroslaw.walach@gmail.com>";
export const homepage = "https://github.com/yehvaed/windows-snap-assist-spoon";
export const license = "MIT - https://opensource.org/licenses/MIT";

export const logger = hs.logger.new(name);

const edgeDetectionScanner = hs.timer.doEvery(0.5, () => {
    const mouse = hs.mouse.getRelativePosition();
    const [leftMouseButton] = hs.mouse.getButtons();
    const screen = hs.screen.mainScreen().fullFrame();

    if (Math.abs(mouse.x - screen.x) < 15 && leftMouseButton) {
        print(Math.abs(mouse.x - screen.x) > 350, "snap to left");
    }
    if (Math.abs(mouse.x - screen.w) < 15 && leftMouseButton) {
        print(Math.abs(mouse.x - screen.x) > 350, "snap to right");
    }
})

export const start = () => {
    edgeDetectionScanner.start()
}

export const stop = () => {
    edgeDetectionScanner.stop()
}