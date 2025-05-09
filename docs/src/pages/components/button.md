# Button

## Examples

button with brand colors

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <dv-button>neutral</dv-button>
  <dv-button variant="primary">secondary</dv-button>
  <dv-button variant="secondary">secondary</dv-button>
  <dv-button variant="accent">accent</dv-button>
  <dv-button variant="ghost">ghost</dv-button>
  <dv-button variant="link">link</dv-button>
</div>
```

active state button

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <dv-button active>neutral</dv-button>
  <dv-button active variant="primary">secondary</dv-button>
  <dv-button active variant="secondary">secondary</dv-button>
  <dv-button active variant="accent">accent</dv-button>
  <dv-button active variant="ghost">ghost</dv-button>
  <dv-button active variant="link">link</dv-button>
</div>
```

outline button

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <dv-button outline>neutral</dv-button>
  <dv-button variant="primary" outline>secondary</dv-button>
  <dv-button variant="secondary" outline>secondary</dv-button>
  <dv-button variant="accent" outline>accent</dv-button>
</div>
```

disabled button

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <dv-button disabled>neutral</dv-button>
  <dv-button variant="primary" disabled>secondary</dv-button>
  <dv-button variant="secondary" disabled>secondary</dv-button>
  <dv-button variant="accent" disabled>accent</dv-button>
  <dv-button variant="ghost" disabled>ghost</dv-button>
</div>
```

button with state colors

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <dv-button variant="info">info</dv-button>
  <dv-button variant="success">success</dv-button>
  <dv-button variant="warning">warning</dv-button>
  <dv-button variant="error">error</dv-button>
</div>
```

glass button

```html :::demo
<div
  class="p-20 bg-cover dv-bgbase200 w-80 h-52 rounded-lg"
  style='background-image: url("https://placeimg.com/1000/300/arch");'
>
  <dv-button variant="glass">Glass Button</dv-button>
</div>
```

button size

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <dv-button size="lg">Large</dv-button>
  <dv-button>Normal</dv-button>
  <dv-button size="sm">Small</dv-button>
  <dv-button size="xs">Tiny</dv-button>
</div>
```

button wide

```html :::demo
<div class="flex items-start space-y-2 flex-col">
  <dv-button wide size="lg">Large</dv-button>
  <dv-button wide>Normal</dv-button>
  <dv-button wide size="sm">Small</dv-button>
  <dv-button wide size="xs">Tiny</dv-button>
</div>
```

button shapes

```html :::demo
<div
  class="w-full flex justify-center items-center flex-wrap md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row mb-4"
>
  <dv-button shape="circle" size="lg">
    <icon-close size="1.5em" />
  </dv-button>
  <dv-button shape="circle">
    <icon-close size="1.25em" />
  </dv-button>
  <dv-button outline shape="circle" size="sm">
    <icon-close />
  </dv-button>
  <dv-button outline shape="circle" size="xs">
    <icon-close />
  </dv-button>
</div>

<div
  class="w-full flex justify-center items-center flex-wrap md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <dv-button shape="square" size="lg">A</dv-button>
  <dv-button shape="square">B</dv-button>
  <dv-button outline shape="square" size="sm">C</dv-button>
  <dv-button outline shape="square" size="xs">D</dv-button>
</div>
```

button block

```html :::demo
<dv-button block>Blcok Button</dv-button>
```

button loading

```html :::run
<template>
  <div
    class="w-full flex flex-wrap justify-center items-center md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row mb-4"
  >
    <dv-button loading>neutral</dv-button>
    <dv-button loading variant="primary">secondary</dv-button>
    <dv-button loading variant="accent">accent</dv-button>
    <dv-button loading variant="ghost">ghost</dv-button>
    <dv-button loading variant="link">link</dv-button>
  </div>

  <div
    class="w-full flex flex-wrap justify-center items-center md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
  >
    <dv-button :onClick="asyncFunction">Loading after click</dv-button>
    <dv-button :onClick="asyncFunction" variant="primary"
      >Loading after click</dv-button
    >
    <dv-button :onClick="asyncFunction" variant="secondary" outline>
      Loading after click
    </dv-button>
  </div>
</template>

<script lang="tsx" setup>
  function asyncFunction() {
    return new Promise((r) => setTimeout(r, 3000));
  }
</script>
```

button loading without content

```html :::run
<template>
  <div
    class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
  >
    <dv-button loading shape="circle">A</dv-button>
    <dv-button :onClick="asyncFunction" outline shape="circle">GO</dv-button>
  </div>
</template>

<script lang="tsx" setup>
  function asyncFunction() {
    return new Promise((r) => setTimeout(r, 3000));
  }
</script>
```

button doesn't have click animation

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <dv-button variant="primary" noAnimation
    >I don't have click animation</dv-button
  >
</div>
```

button group size

```html :::demo
<div class="space-y-2">
  <dv-button-group>
    <dv-button variant="info">info</dv-button>
    <dv-button variant="warning">warning</dv-button>
    <dv-button variant="error">error</dv-button>
  </dv-button-group>

  <dv-button-group size="sm">
    <dv-button variant="info">info</dv-button>
    <dv-button variant="warning">warning</dv-button>
    <dv-button variant="error">error</dv-button>
  </dv-button-group>
</div>
```

button group shape

```html :::demo
<div class="space-y-2">
  <dv-button-group size="sm" shape="circle">
    <dv-button variant="info">A</dv-button>
    <dv-button variant="warning">B</dv-button>
    <dv-button variant="error">C</dv-button>
  </dv-button-group>

  <dv-button-group size="sm" shape="square">
    <dv-button variant="info">A</dv-button>
    <dv-button variant="warning">B</dv-button>
    <dv-button variant="error">C</dv-button>
  </dv-button-group>

  <dv-button-group size="sm" shape="square">
    <dv-button variant="info">A</dv-button>
    <dv-button variant="warning" shape="default"
      >this is default shape</dv-button
    >
    <dv-button variant="error">C</dv-button>
  </dv-button-group>
</div>
```

button group outline

```html :::demo
<div class="space-y-2">
  <dv-button-group size="sm" outline>
    <dv-button variant="primary">primary</dv-button>
    <dv-button variant="secondary">secondary</dv-button>
    <dv-button variant="accent">accent</dv-button>
  </dv-button-group>
</div>
```

## Button

### Attributes

| name        | description                            | type                                                                                   | default |
| ----------- | -------------------------------------- | -------------------------------------------------------------------------------------- | ------- |
| variant     | button color type                      | neutral, primary, secondary, accent, info, success, warning, error, ghost, link, glass | neutral |
| size        | button size                            | ISize                                                                                  | md      |
| shape       | button shape                           | default, circle, square                                                                | default |
| block       | full with button                       | boolean                                                                                | false   |
| wide        | wide button (more horizontal padding)  | boolean                                                                                | false   |
| disabled    | force button to show disabled state    | boolean                                                                                | false   |
| outline     | transparent Button with colored border | boolean                                                                                | false   |
| active      | force button to show active state      | boolean                                                                                | false   |
| loading     | shows loading spinner                  | boolean                                                                                | false   |
| noAnimation | disables click animation               | boolean                                                                                | false   |
| tag         | button with diffrent HTML tags         | button, a, input                                                                       | button  |
| onClick     | button click handle                    | Function                                                                               | -       |

## ButtonGroup

### Attributes

| name    | description                            | type                    | default |
| ------- | -------------------------------------- | ----------------------- | ------- |
| size    | button size                            | ISize                   | md      |
| shape   | button shape                           | default, circle, square | default |
| outline | transparent Button with colored border | boolean                 | false   |
