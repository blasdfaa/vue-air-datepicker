<script setup>
import { useDatepicker } from 'vue-air-datepicker'

useDatepicker('#input')
useDatepicker('#static')
</script>

<template>
  <div>
    <input id="input" autocomplete="off">
    <div id="static" />
  </div>
</template>
