<script setup lang="ts">
import VueMarkdown from 'vue-markdown-render';
import { useNotesStorage } from '~/composables/useNotesStorage';

const { currentNote, notesState } = useNotesStorage();
notesState.value.isEdit = false;
</script>

<template>
  <div v-if="currentNote" class="note-details">
    <h1>{{ currentNote.title }}</h1>
    <vue-markdown :source="currentNote.content" />
  </div>
</template>

<style scoped></style>
