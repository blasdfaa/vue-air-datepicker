# vue-air-datepicker

Vue3 wrapper for [air-datepicker](https://github.com/t1m0n/air-datepicker)

## Install

```bash
npm i vue-air-datepicker
```

## Usage

### Install the plugin

```ts
import { createApp } from 'vue'
import { createAirDatepicker } from 'vue-air-datepicker'
import App from './App.vue'

const vad = createAirDatepicker()
const app = createApp(App)

app.use(vad)
app.mount('#app')
```

### Init calendar

You can initialize the calendar on a text field, as well as on a block or string element.

```vue
<script setup>
import { useDatepicker } from 'vue-air-datepicker'

useDatepicker('#datepicker')
</script>

<template>
  <input id="datepicker" type="text">
  <!-- OR <div id="datepicker"></div> -->
</template>
```

## License

[MIT](./LICENSE) License © 2024-PRESENT [Zdorovtsev Viktor](https://github.com/blasdfaa)
