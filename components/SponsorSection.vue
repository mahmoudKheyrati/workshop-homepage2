<script lang="ts" setup>
import { sponsors } from "~/data.json";
</script>
<template>
  <UContainer class="py-32 flex flex-col gap-16">
    <h2 class="text-4xl font-bold">Sponsors</h2>
    <div class="flex flex-wrap justify-center items-stretch">
      <div
        class="p-2 flex-[0_0_100%] md:flex-[0_0_50%]"
        v-for="(data, index) in sponsors"
        :key="index"
      >
        <UCard class="h-full">
          <div class="flex gap-8 items-stretch justify-stretch">
            <NuxtImg
              class="rounded-lg size-32"
              :src="data.profile"
              alt="Avatar"
            />

            <p class="">
              {{ data.description }}
            </p>
          </div>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>
