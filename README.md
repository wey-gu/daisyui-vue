# daisyui-vue

基于 daisyui 封装的 vue 组件库。

## Usage

全局注册：

```tsx
// main.ts
import daisyui from 'daisyui-vue';
import { createApp, defineComponent } from 'vue';

app.use(daisyui); // 注册

// App.tsx
const App = defineComponent({
  // ...
  setup: () => {
    return () => {
      return (
        <div>
          <dv-button>click</dv-button>
        </div>
      );
    };
  },
});
```

按需使用：

```tsx
// main.ts
import { installContext } from 'daisyui-vue';

const app = createApp({
  // ...
});

app.use(installContext); // 注册组件库 context，当需要提取首屏样式时使用，否则可以不注册

// App.tsx
import { Button } from 'daisyui-vue';

const App = defineComponent({
  // ...
  setup: () => {
    return () => {
      return (
        <div>
          <Button>click</Button>
        </div>
      );
    };
  },
});
```

SSR 提取首屏样式，避免 FOUC 问题：

```tsx
// entry-server.ts

export function render() {
  const app = createApp({
    // ...
  });

  const style = app.config.globalProperties.$daisyui.styles.extractStyles();

  const html = renderToString(app);

  return html.replace('<!-- 自定义占位标识 -->', style);
}
```

## Todo

- [x] style files
  - [x] auto require style conntent when using a component (now css-in-js)
    - [x] ~~it is easy to use in SSR, but there is no style on first render (`FOUC`, because css inserted by js)~~. Use `extractStyles` to extract critical css.

## Components

- [x] alert
- [x] artboard
- [x] avatar
- [x] badge
- [x] breadcrumb
- [x] button
- [x] button-group
- [x] card
- [ ] carousel
- [ ] collapse
- [ ] countdown
- [x] divider
- [x] drawer
- [ ] dropdown
- [ ] footer
- [ ] hero
- [ ] indicator
- [ ] kbd
- [ ] link
- [ ] mask
- [x] menu
- [ ] modal
- [ ] navbar
- [ ] pagination
- [ ] progress
- [ ] stack
- [ ] stat
- [ ] steps
- [x] tab
- [x] table
- [x] tooltip
- [ ] form-checkbox
- [ ] form-input
- [ ] form-radio
- [ ] form-range
- [ ] form-select
- [ ] form-textarea
- [ ] form-toggle
- [ ] mockup-code
- [ ] mockup-phone
- [ ] mockup-window
