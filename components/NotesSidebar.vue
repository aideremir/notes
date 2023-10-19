<template>
  <div class="notes-sidebar">
    <div class="notes-sidebar__head">
      <NotesMenu :can-delete="props.canDelete" @add="addHandler" @delete="deleteHandler" />
    </div>
    <div class="notes-sidebar__content">
      <NotesList :notes="props.notes" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { INote } from '~/types';
import NotesMenu from '~/components/NotesMenu.vue';
import NotesList from '~/components/NotesList.vue';

const emit = defineEmits(['add', 'delete']);

const props = defineProps({
  notes: {
    type: Array as PropType<INote[]>,
    required: true,
  },
  canDelete: {
    type: Boolean,
    default: false,
  },
});

const deleteHandler = () => {
  emit('delete');
};

const addHandler = () => {
  emit('add');
};
</script>

<style lang="scss">
.notes-sidebar {
  height: 100%;
  display: flex;
  flex-direction: column;
  &__head {
    padding: $gap;
  }
  &__content {
    flex-grow: 1;
    padding: $gap;
    overflow: auto;
  }
}
</style>
