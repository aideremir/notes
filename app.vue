<template>
  <div class="notes-app">
    <NotesSidebar :notes="notesState.notes" :can-delete="!!currentNote" @delete="deleteHandler" @add="addHandler" />
    <div class="note-details">
      <div v-if="currentNote" class="note-details__head">
        <NotesDetailsTop
          :title="currentNoteDateFormatted"
          :is-edit="notesState.isEdit"
          @search="searchHandler"
          @toggle-edit="toggleEditHandler"
        />
      </div>
      <div class="note-details__content">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'nuxt/app';
import { computed, onMounted, Ref } from 'vue';
import { useNotesStorage } from '~/composables/useNotesStorage';
import { generateUniqueId, formatDate } from '~/utils';

import NotesDetailsTop from '~/components/NotesDetailsTop.vue';
import NotesSidebar from '~/components/NotesSidebar.vue';

const router = useRouter();
const { fetchNotes, addNote, deleteNote, notesState, currentNote } = useNotesStorage();

const currentNoteDateFormatted: Ref<string> = computed(() =>
  currentNote.value ? formatDate(currentNote.value.createdAt) : '',
);

const searchHandler = (query: string) => {
  // eslint-disable-next-line no-console
  console.log('search', query);
};

const toggleEditHandler = () => {
  if (!currentNote) {
    return;
  }

  notesState.value.isEdit = !notesState.value.isEdit;

  if (notesState.value.isEdit) {
    router.push(`/edit/${currentNote.value?.id}`);
  } else {
    router.push(`/${currentNote.value?.id}`);
  }
};

const deleteHandler = async () => {
  if (!currentNote) {
    return;
  }

  await deleteNote(currentNote.value?.id as string);
  router.push('/');
};

const addHandler = async () => {
  const addedNoteId = await addNote({
    id: generateUniqueId(),
    title: '',
    content: '',
    createdAt: new Date(),
  });

  router.push(`/edit/${addedNoteId}`);
};

onMounted(async () => {
  await fetchNotes();
});
</script>
