<script lang="ts" setup>
import { timeTable } from "~/data.json";
</script>
<template>
  <UContainer class="pt-32 flex flex-col gap-16">
    <h2 class="text-4xl font-bold">Time Table</h2>
    <div class="flex flex-wrap items-stretch">
      <div
        class="p-4 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3%]"
        v-for="(data, index) in timeTable"
        :key="index"
      >
        <UCard class="h-full flex flex-col justify-between">
          <template #header>
            <h3 class="flex flex-col gap-2">
              <span class="text-3xl font-bold">
                {{ index + 1 }}. {{ data.topic }}
              </span>
              <span class="text-lg"> {{ data.time }} </span>
            </h3>
          </template>

          <p class="text-justify">{{ data.description }}</p>

          <template #footer>
            <UButton class="" :to="data.link" target="_blank" variant="link">
              Click here to join the meeting.
            </UButton>
          </template>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>
