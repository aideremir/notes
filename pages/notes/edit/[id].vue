<script setup lang="ts">
import { useRoute, useState } from 'nuxt/app';

const route = useRoute();

const notes = useState('notes');
const note = notes.value.find((note) => note.id === route.params.id);
</script>

<template>
  <div class="note-details">
    <textarea v-model="note.content"> </textarea>
  </div>
</template>

<style scoped></style>
