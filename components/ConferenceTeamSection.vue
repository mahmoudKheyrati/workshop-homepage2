<script lang="ts" setup>
import { conferenceTeam } from "~/data.json";
</script>
<template>
  <UContainer class="pt-32 flex flex-col gap-16">
    <h2 class="text-4xl font-bold">Conference Team</h2>
    <div class="flex flex-wrap items-stretch">
      <div
        class="p-2 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%]"
        v-for="data in conferenceTeam.team"
        :key="data.name"
      >
        <UCard class="h-full">
          <div class="flex flex-col gap-4 justify-center items-center">
            <NuxtImg
              class="rounded-full size-32"
              :src="data.profile"
              alt="Avatar"
            />
            <p class="text-xl font-bold">{{ data.name }}</p>

            <p class="">
              {{ data.description }}
            </p>
          </div>
        </UCard>
      </div>
    </div>
    <h2 class="text-4xl font-bold">About</h2>
    <UAccordion
      :items="conferenceTeam.moreInfo"
      color="gray"
      variant="ghost"
      size="xl"
    />
  </UContainer>
</template>
