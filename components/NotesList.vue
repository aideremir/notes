<template>
  <ul class="notes-list">
    <li v-for="note of props.notes" :key="note.id" class="notes-list__item">
      <NuxtLink
        :to="`/${note.id}`"
        class="notes-list__item-link"
        :class="{ 'notes-list__item-link--active': currentNote === note }"
      >
        <NotesListItem :note="note" />
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { INote } from '~/types';
import NotesListItem from '~/components/NotesListItem.vue';
import { useNotesStorage } from '~/composables/useNotesStorage';

const { currentNote } = useNotesStorage();

const props = defineProps({
  notes: {
    type: Array as PropType<INote[]>,
    required: true,
  },
});
</script>

<style lang="scss">
.notes-list {
  margin: 0;
  padding: 0;
  list-style: none;

  &__item-link {
    color: $text-color-primary;
    text-decoration: none;
    display: block;
    border-bottom: 1px solid $border-color;

    &--active {
      background: $active-color;
      border-radius: $border-radius;
      border-bottom: none;
    }
  }
}
</style>
