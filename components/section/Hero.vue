<script lang="ts" setup>
import { hero } from "~/data.json";

function scrollDown() {
  const scheduleElement = document.getElementById("schedule");
  scheduleElement?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}
</script>
<template>
  <div class="relative w-full h-screen z-0">
    <NuxtImg
      src="/images/hero-desktop.webp"
      class="absolute -z-20 inset-0 object-cover h-full w-full lg:block hidden"
      placeholder
    />
    <NuxtImg
      src="/images/hero-mobile.webp"
      class="absolute -z-20 inset-0 object-cover h-full w-full block lg:hidden"
      placeholder
    />
    <div
      class="absolute -z-10 bg-gradient-to-r from-black to-black/20 inset-0"
    />
    <UContainer
      class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-4 h-full items-center py-8"
    >
      <div class="lg:col-span-1 lg:row-span-2">
        <div
          class="flex flex-col gap-4 items-start p-4 lg:p-0 text-gray-200 dark:text-white/60"
        >
          <h1
            class="text-6xl lg:text-4xl font-bold bg-gradient-to-r from-blue-800 to-gray-600 dark:to-gray-400 inline-block text-transparent bg-clip-text"
          >
            {{ hero.pitch }}
          </h1>
          <p class="text-3xl lg:text-5xl font-bold">{{ hero.title }}</p>
          <p class="text-3xl">{{ hero.subTitle }}</p>
        </div>
      </div>
      <div class="lg:col-span-1 lg:row-start-3 lg:row-span-2 h-full">
        <AppNews />
      </div>
    </UContainer>
  </div>
</template>
