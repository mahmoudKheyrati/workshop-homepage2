<script lang="ts" setup>
interface Props {
  title: string;
}
defineProps<Props>();
</script>
<template>
  <UContainer
    class="py-8 flex flex-col gap-8"
    :id="title.toLowerCase().replaceAll(' ', '-')"
  >
    <h2 class="text-4xl font-bold">{{ title }}</h2>
    <slot />
  </UContainer>
</template>
