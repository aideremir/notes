<template>
  <ul class="notes-list">
    <li v-for="note of props.notes" :key="note.id" class="notes-list__item">
      <NuxtLink :to="`/notes/${note.id}`">
        {{ note.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { INote } from '~/types';

const props = defineProps({
  notes: {
    type: Array as PropType<INote[]>,
    required: true,
  },
});
</script>

<style lang="scss"></style>
