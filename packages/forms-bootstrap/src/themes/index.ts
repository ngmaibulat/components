import thDefault from "./default.js";
import thGreen from "./green.js";

const registry = {
    default: thDefault,
    green: thGreen,
};

export type Theme = typeof thDefault;
export type ThemeName = keyof typeof registry;

let current: Theme = registry["default"];

export default current;

export function getTheme(): Theme {
    return current;
}

export function setTheme(name: ThemeName) {
    current = registry[name];
}
