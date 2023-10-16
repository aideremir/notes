<template>
  <form class="notes-search-form" @submit.prevent="search">
    <input v-model="query" class="notes-search-form__input" type="text" placeholder="search" />
    <button class="notes-search-form__button" type="submit">search</button>
  </form>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';

const query: Ref<string> = ref('');
const emit = defineEmits(['submit']);

const search = () => {
  if (query.value === '') {
    return;
  }

  emit('submit', query.value);
};
</script>

<style lang="scss">
.notes-search-form {
  position: relative;
}
</style>
