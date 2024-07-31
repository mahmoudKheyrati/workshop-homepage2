<script lang="ts" setup>
import { heroData } from "~/data.json";

function scrollDown() {
  const height = document.documentElement.clientHeight;
  window.scrollTo({ top: height, behavior: "smooth" });
}
</script>
<template>
  <div class="relative w-full h-screen">
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
    <UContainer class="grid grid-cols-1 lg:grid-cols-2 h-full items-center">
      <div
        class="flex flex-col gap-4 items-start p-4 lg:p-0 text-gray-200 dark:to-gray-900"
      >
        <h1
          class="text-5xl bg-gradient-to-r from-blue-800 to-gray-400 inline-block text-transparent bg-clip-text"
        >
          {{ heroData.pitch }}
        </h1>
        <p class="text-4xl">{{ heroData.title }}</p>
        <p class="text-lg">{{ heroData.subTitle }}</p>
        <UButton @click="scrollDown" color="black" size="xl" class="mt-4">
          {{ heroData.CTAButton }}
        </UButton>
      </div>
    </UContainer>
  </div>
</template>
