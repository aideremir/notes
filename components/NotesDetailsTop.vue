<template>
  <div class="notes-details-top">
    <div class="notes-details-top__menu">
      <input class="notes-input notes-details-top__search" type="search" placeholder="Search" @input="searchHandler" />
      <div v-if="currentNote">
        <button v-if="props.isEdit" class="notes-icon-button" @click="toggleEditHandler">
          <Icon name="material-symbols:markdown" size="22" color="#929292" />
        </button>
        <button v-else class="notes-icon-button" @click="toggleEditHandler">
          <Icon name="material-symbols:edit-square-outline" size="22" color="#929292" />
        </button>
      </div>
    </div>
    <div class="notes-details-top__title">
      {{ props.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
import { useNotesStorage } from '~/composables/useNotesStorage';

const { currentNote } = useNotesStorage();

const emit = defineEmits(['search', 'toggle-edit']);

const props = defineProps({
  isEdit: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
});

const searchHandler = (event: Event) => {
  emit('search', (event.target as HTMLInputElement).value);
};

const toggleEditHandler = () => {
  emit('toggle-edit');
};
</script>

<style lang="scss">
.notes-details-top {
  &__menu {
    padding: $gap;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }

  &__title {
    color: $text-color-secondary;
    text-align: center;
  }
}
</style>
