<script lang="ts" setup>
import { organizers } from "~/data.json";
</script>
<template>
  <AppSection title="Organizers">
    <div class="flex flex-wrap items-stretch justify-center gap-8">
      <div
        class="flex-[0_0_100%] md:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(25%-1.5rem)]"
        v-for="(data, index) in organizers"
        :key="index"
      >
        <UCard class="h-full">
          <div class="flex flex-col justify-center items-center">
            <NuxtImg
              class="rounded-full size-32 mb-4"
              :src="data.profile"
              alt="Avatar"
            />
            <p class="text-xl font-bold">{{ data.name }}</p>
            <p class="text-center opacity-95">{{ data.rank }}</p>

            <p class="text-center opacity-75 mb-2">
              {{ data.description }}
            </p>
            <span class="flex gap-2 items-center">
              <a v-if="data.linkedin" :href="data.linkedin">
                <UIcon
                  name="radix-icons:linkedin-logo"
                  class="size-5 opacity-75 cursor-pointer"
                />
              </a>
              <p class="text-center">{{ data.email }}</p>
            </span>
          </div>
        </UCard>
      </div>
    </div>
  </AppSection>
</template>
