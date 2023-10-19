<template>
  <div class="notes-list-item">
    <div class="notes-list-item__title">{{ props.note.title }}</div>
    <div class="notes-list-item__body">
      <div class="notes-list-item__date">{{ createdAt }}</div>
      <div class="notes-list-item__content">{{ props.note.content || 'No additional text' }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import { INote } from '~/types';
import { formatDateToTime } from '~/utils';

const props = defineProps({
  note: {
    type: Object as PropType<INote>,
    required: true,
  },
});

const createdAt = computed(() => formatDateToTime(props.note.createdAt));
</script>

<style lang="scss">
.notes-list-item {
  padding: $gap;

  &__body {
    display: flex;
  }

  &__date {
    margin-right: $gap-small;
  }

  &__title {
    font-weight: bolder;
    margin-bottom: $gap-small;
  }

  &__content {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    color: $text-color-secondary;
  }
}
</style>
