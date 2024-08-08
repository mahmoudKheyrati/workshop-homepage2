<script setup lang="ts">
import { workshop_program } from "~/data.json";
</script>
<template>
  <AppSection title="Workshop Program">
    <div
      v-for="(plan, index) in workshop_program"
      :key="index"
      class="flex flex-col gap-8 mb-8"
    >
      <div class="flex gap-4 items-baseline  no-underline">
        <h2
          class="text-3xl  bg-gradient-to-r from-blue-800 to-gray-600 dark:to-gray-400 inline-block text-transparent bg-clip-text"
        >
          {{ plan.title }}
        </h2>
        <span class="text-xl">{{ plan.date }}</span>
      </div>
      <UAccordion
        :items="plan.timeTable"
        :ui="{
          wrapper: 'flex flex-col w-full gap-8',
          item: {
            padding: 'p-0',
          },
        }"
        multiple
      >
        <template #default="{ item }">
          <UButton
            color="gray"
            variant="link"
            :ui="{
              rounded: 'rounded-none',
              base: 'flex-shrink-0 !no-underline',
            }"
            :padded="false"
          >
            <AppTimeLine :event="item"> TimeLine </AppTimeLine>
          </UButton>
        </template>

        <template #item="{ item }">
          <p class="lg:ps-[200px] mt-2">
            <span v-if="item.speaker!=''" class="font-bold">Abstract: </span>
            {{ item.content }}
          </p>
        </template>
      </UAccordion>
      <div v-if="index==0" class="space-y-6"></div>
    </div>

  </AppSection>
</template>
