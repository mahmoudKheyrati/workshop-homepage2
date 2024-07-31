<script lang="ts" setup>
import { speakersData } from "~/data.json";
</script>
<template>
  <AppSection title="Speakers">
    <div class="flex flex-wrap items-stretch justify-center gap-8">
      <div
        class="flex-[0_0_100%] md:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(25%-1.5rem)]"
        v-for="(data, index) in speakersData"
        :key="index"
      >
        <UCard class="h-full">
          <div class="flex flex-col gap-2 justify-center items-center">
            <NuxtImg
              class="rounded-full size-32"
              :src="data.profile"
              alt="Avatar"
            />
            <p class="text-xl font-bold">{{ data.name }}</p>

            <p class="text-center text-white/75">
              {{ data.description }}
            </p>
          </div>
        </UCard>
      </div>
    </div>
  </AppSection>
</template>
