<script setup lang="ts">
import { useNotesStorage } from '~/composables/useNotesStorage';

const { currentNote, notesState } = useNotesStorage();
notesState.value.isEdit = false;
</script>

<template>
  <div v-if="currentNote" class="note-details">
    <h1>{{ currentNote.title }}</h1>
    <p>{{ currentNote.content }}</p>
  </div>
</template>

<style scoped></style>
