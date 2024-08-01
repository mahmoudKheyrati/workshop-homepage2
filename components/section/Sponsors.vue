<script lang="ts" setup>
import { sponsors } from "~/data.json";
</script>
<template>
  <AppSection title="Sponsors">
    <div class="flex flex-wrap items-stretch justify-center gap-8">
      <div
        class="flex-[0_0_100%] md:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(25%-1.5rem)]"
        v-for="(data, index) in sponsors"
        :key="index"
      >
        <a target="_blank" :href="data.link">
          <div
            class="p-4 rounded-lg h-full hover:-translate-y-1 transition hover:dark:bg-gray-900 hover:bg-neutral-200"
          >
            <div class="flex flex-col gap-2 justify-center items-center w-full">
              <NuxtImg
                class="rounded-lg size-48 object-contain"
                :src="data.logo"
                alt="Avatar"
              />
              <p class="text-center dark:text-white/75">
                {{ data.description }}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </AppSection>
</template>
