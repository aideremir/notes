<template>
  <div class="notes-details-top">
    <div class="notes-details-top__menu">
      <input class="notes-input notes-details-top__search" type="search" placeholder="Search" @input="searchHandler" />
      <div style="display: flex">
        <button class="notes-icon-button notes-details-top__mobile" @click="openMenuHandler">
          <Icon name="material-symbols:menu" size="22" color="#929292" />
        </button>
        <template v-if="currentNote">
          <button v-if="props.isEdit" class="notes-icon-button" @click="toggleEditHandler">
            <Icon name="material-symbols:markdown" size="22" color="#929292" />
          </button>
          <button v-else class="notes-icon-button" @click="toggleEditHandler">
            <Icon name="material-symbols:edit-square-outline" size="22" color="#929292" />
          </button>
        </template>
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

const { currentNote, notesState } = useNotesStorage();

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

const openMenuHandler = () => {
  notesState.value.isSidebarVisible = true;
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

  &__mobile {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }
}
</style>
