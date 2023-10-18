<script setup lang="ts">
import { useNotesStorage } from '~/composables/useNotesStorage';

const { currentNote } = useNotesStorage();
</script>

<template>
  <div v-if="currentNote" class="note-details">
    <div>
      <input v-model="currentNote.title" />
    </div>
    <div>
      <textarea v-model="currentNote.content"> </textarea>
    </div>
  </div>
</template>
