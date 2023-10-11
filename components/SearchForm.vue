<template>
  <form class="search-form" @submit.prevent="search">
    <input class="search-form__input" v-model="query" type="text" placeholder="search" />
    <button class="search-form__button" type="submit">search</button>
  </form>
</template>

<script setup lang="ts">
import {Ref} from "vue";

const query: Ref<string> = ref('');
const emit = defineEmits(['submit']);

const search = () => {
  if (query.value === '') {
    return;
  }

  emit('submit', query.value);
}
</script>

<style lang="scss">
.search-form {
  position: relative;
}
</style>
