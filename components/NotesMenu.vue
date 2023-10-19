<template>
  <div class="notes-menu">
    <button class="notes-icon-button" @click="addHandler">
      <Icon name="material-symbols:add" size="22" color="#929292" />
    </button>
    <button class="notes-icon-button" :disabled="!props.canDelete" @click="deleteHandler">
      <Icon name="material-symbols:delete" size="22" color="#929292" />
    </button>
  </div>
</template>

<script setup lang="ts">
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
</script>

<style lang="scss">
.notes-menu {
  position: relative;
}
</style>
