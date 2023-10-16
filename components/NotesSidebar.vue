<template>
  <div class="notes-sidebar">
    <div class="notes-sidebar__head">
      <NotesMenu />
    </div>
    <div class="notes-sidebar__content">
      <NotesList :notes="props.notes" />
    </div>
  </div>
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

<style lang="scss">
.notes-sidebar {
  position: relative;
}
</style>
