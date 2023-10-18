<template>
  <div class="notes-list-item">
    <div>{{ props.note.title }}</div>
    <div>{{ props.note.createdAt }}</div>
    <div>{{ props.note.content || 'No additional text' }}</div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { INote } from '~/types';

const props = defineProps({
  note: {
    type: Object as PropType<INote>,
    required: true,
  },
});
</script>

<style scoped></style>
