<script setup>
import Tooltip from "@/components/ChairTooltip.vue"

defineProps({
  order: { type: Number, required: true },
  isReserved: { type: Boolean, required: true }
})

const title = 'Мстители'
</script>

<template>
  <div :class="[$style.root, isReserved && $style.disabled]">
    {{ order }}

    <Tooltip
      :class="$style.tooltip"
      :order="order"
      :title="title"
    />
  </div>
</template>

<style module>
.root {
  position: relative;
  display: grid;
  place-items: center;
  height: 40px;
  width: 40px;
  color: white;
  font-weight: 500;
  font-size: 20px;
  border-radius: 8px;
  background: rgb(120, 120, 255);
  cursor: pointer;
}

.root:hover {
  background: rgb(25, 25, 255);
}
.root:hover .tooltip {
  visibility: visible;
}

.tooltip {
  position: absolute;
  top: -124px;
  right: -150px;
  visibility: hidden;
}

.root.disabled {
  pointer-events: none;
  background: rgb(196, 196, 196);
  color: rgb(29, 29, 29);
}
</style>