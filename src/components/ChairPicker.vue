<script setup>
import { reactive } from 'vue'

import Chair from "@/components/Chair.vue"

import api from "@/api/book-place.js"
import { useUser } from "@/composables/useUser"

const { user } = useUser()

const chairCount = 40

const reservedIdslist = reactive([])

const reserv = async order => {
    try {
        const reservedId = await api.reserv({
            pointId: order,
            userId: user.value.id
        })

        reservedIdslist.push(reservedId)
    } catch (err) {
        console.error(err)
    }
}

</script>

<template>
  <div :class="$style.root">
    <Chair
        v-for="order in chairCount"
        :key="order"
        :order="order"
        :is-reserved="reservedIdslist.includes(order)"
        @click="reserv(order)"
    />
  </div>
</template>

<style module>
 .root {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(10, 1fr);
    gap: 16px;
 }
</style>