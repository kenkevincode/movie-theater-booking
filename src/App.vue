<script setup>
import { onBeforeMount } from 'vue'

import ChairPicker from "@/components/ChairPicker.vue"

import { useUser } from "@/composables/useUser"

const { setUser } = useUser()

onBeforeMount(() => {
  setUser({
    id: crypto.randomUUID(),
  })
})
</script>

<template>
  <div :class="$style.root">
    <ChairPicker />
  </div>
</template>

<style module>
 .root {
    display: grid;
    place-items: center;
    height: 100vh;
 }
</style>