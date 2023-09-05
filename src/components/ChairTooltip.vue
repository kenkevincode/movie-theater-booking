<script setup>
defineProps({
  title: { type: String, required: true },
  order: { type: Number, required: true },
  price: { type: Number, required: true }
})
</script>

<template>
  <div :class="$style.root">
    <span>Фильм:</span>
    <strong>{{ title }}</strong>

    <span>Место:</span>
    <strong>{{ order }}</strong>

    <span>Цена:</span>
    <strong>{{ price }}р</strong>
  </div>
</template>

<style module>
.root {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 8px;
  padding: 16px;
  color: rgb(23, 23, 23);
  font-weight: 500;
  font-size: 20px;
  border-radius: 8px;
  background: rgb(210, 255, 195);
  cursor: poinrgb(174, 174, 174);
}
</style>