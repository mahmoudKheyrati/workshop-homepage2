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
      class="absolute -z-10 bg-gradient-to-r from-black to-black/40 inset-0"
    />
    <UContainer
      class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-4 h-full items-center"
    >
      <div class="lg:col-span-1 lg:row-span-3">
        <div
          class="flex flex-col gap-4 items-start p-4 lg:p-0 text-gray-200 dark:text-white/60"
        >
          <h1
            class="text-6xl font-bold bg-gradient-to-r from-blue-800 to-gray-600 dark:to-gray-400 inline-block text-transparent bg-clip-text"
          >
            {{ hero.pitch }}
          </h1>
          <p class="text-5xl font-bold">{{ hero.title }}</p>
          <p class="text-2xl">{{ hero.subTitle }}</p>
        </div>
      </div>
      <div class="lg:col-span-2">
        <div class="flex flex-wrap items-center gap-4 justify-center">
          <UButton
            color="blue"
            size="xl"
            variant="solid"
            class="rounded-full font-bold px-8 py-2 text-xl leading-9"
            to="https://hpcan-homepage.vercel.app/"
          >
            Register Workshop
          </UButton>
          <UButton
            @click="scrollDown"
            color="blue"
            size="xl"
            variant="ghost"
            class="rounded-full font-bold px-8 py-2 text-xl leading-9 light:hover:bg-blue-200/20"
          >
            Schedule
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>
