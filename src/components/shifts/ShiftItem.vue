<template>
  <article>
    <h2>Смена N{{ props.shift.id }}</h2>
    <p>Начало смены в {{ props.shift.start }}</p>
    <p>Конец смены в {{ props.shift.end }}</p>
    <p class="working">Статус: {{ props.shift.active === 1 ? 'Открыта' : 'Закрыта'  }}</p>
    <button @click="openModalShift" class="approve_button">Управление</button>
    <modal-shift-details
        :opened-modal="openedModal"
        @close-modal="closeModal"
        :shift="shiftDetails"
    />
  </article>
</template>

<script setup>
import ModalShiftDetails from "@/components/shifts/ModalShiftDetails.vue";
import {ref} from "vue";
import { api } from "@/stores/store";

const props = defineProps({
  shift: {
    type: Object,
    required: true
  }
})

let shiftDetails = ref([])

let openedModal = ref(false)

const openModalShift =async () => {
  openedModal.value = !openedModal.value
  const { data } = await api(`work-shift/${props.shift.id}`)
  shiftDetails.value = data
  document.body.style.overflowY = "hidden"

}

const closeModal = () => {
  openedModal.value = false
  document.body.style.overflowY = "auto"
}
</script>

<style scoped>
article {
  gap: 10px
}
</style>