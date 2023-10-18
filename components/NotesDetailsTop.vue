<template>
  <div class="notes-details-top">
    <div class="notes-details-top__menu">
      <button v-if="props.isEdit" @click="toggleEditHandler">M↓</button>
      <button v-else @click="toggleEditHandler">edit</button>

      <NotesSearchForm @submit="searchHandler" />
    </div>
    <div class="notes-details-top__title">
      {{ props.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
import NotesSearchForm from '~/components/NotesSearchForm.vue';

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

const searchHandler = (query: string) => {
  emit('search', { query });
};

const toggleEditHandler = () => {
  emit('toggle-edit');
};
</script>

<style scoped></style>
