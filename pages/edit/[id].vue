<script setup lang="ts">
import { useNotesStorage } from '~/composables/useNotesStorage';

const { currentNote, notesState } = useNotesStorage();
notesState.value.isEdit = true;
</script>

<template>
  <div v-if="currentNote" class="note-details">
    <div class="note-details__title">
      <input v-model="currentNote.title" class="notes-input notes-input--block" placeholder="Title" />
    </div>
    <div class="note-details__content">
      <textarea v-model="currentNote.content" class="notes-textarea"> </textarea>
    </div>
  </div>
</template>

<style lang="scss">
.note-details {
  height: 100%;

  &__title {
    padding-bottom: $gap;
  }

  &__content {
    height: 100%;
    padding-bottom: $gap;
    box-sizing: border-box;
  }
}
</style>
