<template>
  <div class="notes-menu">
    <div>
      <button class="notes-icon-button" @click="addHandler">
        <Icon name="material-symbols:add" size="22" color="#929292" />
      </button>
      <button class="notes-icon-button" :disabled="!props.canDelete" @click="deleteHandler">
        <Icon name="material-symbols:delete" size="22" color="#929292" />
      </button>
    </div>
    <button class="notes-icon-button notes-menu__close" @click="closeMenuHandler">
      <Icon name="material-symbols:close" size="22" color="#929292" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useNotesStorage } from '~/composables/useNotesStorage';
const { notesState } = useNotesStorage();

const emit = defineEmits(['add', 'delete']);

const props = defineProps({
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

const closeMenuHandler = () => {
  notesState.value.isSidebarVisible = false;
};
</script>

<style lang="scss">
.notes-menu {
  display: flex;
  width: 100%;
  justify-content: space-between;

  &__close {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
}
</style>
