<script setup lang="ts">
import { schedule } from "~/data.json";
</script>
<template>
  <AppSection title="Schedule">
    <div
      v-for="(plan, index) in schedule"
      :key="index"
      class="flex flex-col gap-8 mb-8"
    >
      <div class="flex gap-4 items-baseline justify-center">
        <h2
          class="text-6xl font-bold bg-gradient-to-r from-blue-800 to-gray-600 dark:to-gray-400 inline-block text-transparent bg-clip-text"
        >
          {{ plan.title }}
        </h2>
        <span class="text-xl">{{ plan.date }}</span>
      </div>
      <div class="flex flex-col gap-8">
        <div
          v-for="(event, index) in plan.timeTable"
          :key="index"
          class="flex flex-col lg:flex-row flex-wrap gap-4 lg:gap-2 items-start lg:items-center"
        >
          <span class="text-3xl font-bold lg:me-16 opacity-50">{{
            event.time
          }}</span>
          <span class="text-3xl font-black">{{ event.topic }},</span>
          <span class="text-2xl lg:flex-1 opacity-85">
            speaker:{{ event.speaker }}
          </span>
          <UButton :to="event.link" variant="ghost" size="xl" class="">
            Workshop Link
          </UButton>
        </div>
      </div>
    </div>
  </AppSection>
</template>
