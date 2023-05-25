# location-app

This is a simple map web application created using Vue 2 with Vite.

## Supporting devices
Desktop

## Supporting browsers
Chrome, Firefox, Safari, Edge

[CodeSandbox](https://codesandbox.io/p/github/nicoletangsy/location-app/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522clhy6w46c000a3n6p3bmfqgsu%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522clhy6w46c000c3n6p9l7w7w21%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clhy6w46c000a3n6p3bmfqgsu%2522%253A%257B%2522id%2522%253A%2522clhy6w46c000a3n6p3bmfqgsu%2522%252C%2522activeTabId%2522%253A%2522cli2rslzf004e3n6p5p98tuix%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clhy6w46c00093n6p9s3wcnij%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Fcomponents%252FSearchLocation.vue%2522%252C%2522id%2522%253A%2522cli2rslzf004e3n6p5p98tuix%2522%252C%2522mode%2522%253A%2522temporary%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%257D%252C%2522clhy6w46c000c3n6p9l7w7w21%2522%253A%257B%2522id%2522%253A%2522clhy6w46c000c3n6p9l7w7w21%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clhy6w57k007k3n6phdwbdmfn%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522id%2522%253A%2522clhy6w7co00cs3n6py2g7oyja%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%2522%257D%252C%257B%2522id%2522%253A%2522cli2rue7v000a3n6p5a97ls9f%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%257D%255D%252C%2522activeTabId%2522%253A%2522cli2rue7v000a3n6p5a97ls9f%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

Node version: v18.16.0

```sh
npm install
# Or if you are using yarn
yarn
```

### Compile and Hot-Reload for Development

```sh
npm run dev
# Or if you are using yarn
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
# Or if you are using yarn
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
# Or if you are using yarn
yarn test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
# Or if you are using yarn
yarn lint
```
