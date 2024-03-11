import jsdom from "jsdom"
const { JSDOM } = jsdom
const dom = new JSDOM()

// @ts-ignore
global.window = dom.window
global.document = dom.window.document
global.DocumentFragment = dom.window.DocumentFragment
