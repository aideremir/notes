<template>
  <div class="notes-details-top">
    <div class="notes-details-top__menu">
      <button v-if="props.isEdit" @click="toggleEditHandler">M↓</button>
      <button v-else @click="toggleEditHandler">edit</button>

      <input class="notes-details-top__search" type="search" placeholder="search" @input="searchHandler" />
    </div>
    <div class="notes-details-top__title">
      {{ props.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['search', 'toggle-edit']);

const props = defineProps({
  isEdit: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
});

const searchHandler = (event: Event) => {
  emit('search', (event.target as HTMLInputElement).value);
};

const toggleEditHandler = () => {
  emit('toggle-edit');
};
</script>

<style scoped></style>
