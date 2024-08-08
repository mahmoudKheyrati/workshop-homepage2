<script setup lang="ts">
const props = defineProps<{
  event: {
    time: string;
    speaker: string;
    topic: string;
    description: string;
    link: string;
    bio: string;
  };
}>();

const isOpen = ref(false);

function openModal(e: Event) {
  e.stopPropagation();
  isOpen.value = true;
}
</script>
<template>
  <div
    class="flex flex-col lg:flex-row flex-wrap gap-4 lg:gap-2 items-start lg:items-center w-full"
  >
    <span class="text-2xl font-bold lg:me-16 opacity-70  self-baseline text-blue-950">{{
      event.time
    }}</span>
    <p class="inline-flex flex-col flex-1 text-start items-start">

      <span v-if="event.speaker" class="text-3xl font-black">{{
        event.topic
      }}</span>
      <span v-else class="text-3xl font-black">{{ event.topic }}</span>

      <span
        v-if="event.speaker"
        class="text-2xl lg:flex-1 opacity-85 underline underline-offset-4"
        @click="openModal"
      >
        {{ event.speaker }}
      </span>
    </p>
    <UButton
      v-if="event.link"
      :to="event.link"
      variant="ghost"
      size="xl"
      class="self-baseline text-xl"
    >
      Session Link
    </UButton>

    <UModal v-model="isOpen">
      <UCard
        :ui="{
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
        class="p-4"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
            >
              {{ event.speaker }}'s Short Bio
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpen = false"
            />
          </div>
        </template>

        {{ event.bio }}
      </UCard>
    </UModal>
  </div>
</template>
