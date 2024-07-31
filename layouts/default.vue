<script lang="ts" setup>
import { hero } from "~/data.json";
useHead({
  title: hero.websiteTitle,
});
</script>

<template>
  <div class="dark:bg-neutral-950 bg-neutral-50">
    <slot />
  </div>
</template>
