<template>
  <div>
    <aside>
      <header>
        <button>+</button>
        <button>delete</button>
      </header>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/notes/1">note 1</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/notes/2">note 2</NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>
    <div class="note-details">
      <div class="note-details__head">
        <button>edit</button>
        <search-form @submit="searchHandler" />
      </div>
      <div class="note-details__content">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const searchHandler = (query: string) => {
  console.log('search', query);
}
</script>
