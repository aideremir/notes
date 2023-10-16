<template>
  <div class="notes-app">
    <NotesSidebar :notes="notes" />
    <div class="note-details">
      <div class="note-details__head">
        <button @click="editModeHandler">edit</button>
        <NotesSearchForm @submit="searchHandler" />
      </div>
      <div class="note-details__content">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter, useState } from 'nuxt/app';
import { INote } from '~/types';

const route = useRoute();
const router = useRouter();
const notes = useState<INote[]>('notes', () => [
  {
    id: '1',
    title: 'Note 1',
    content: 'Content 1',
    createdAt: new Date(),
  },
  {
    id: '2',
    title: 'Note 2',
    content: 'Content 2',
    createdAt: new Date(),
  },
  {
    id: '3',
    title: 'Note 3',
    content: 'Content 3',
    createdAt: new Date(),
  },
]);

const searchHandler = (query: string) => {
  console.log('search', query);
};

const editModeHandler = () => {
  router.push(`/notes/edit/${route.params.id}`);
};
</script>
