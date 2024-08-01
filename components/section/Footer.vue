<script lang="ts" setup>
import { footer } from "~/data.json";
</script>
<template>
  <footer
    class="dark:bg-neutral-900 border-t border-gray-300 dark:border-gray-700 py-4 text-md"
  >
    <UContainer>
      <div class="flex flex-col gap-2">
        <div class="flex gap-2 items-center justify-between">
          <p>
            {{ footer.labName }}
          </p>
          <NuxtImg class="size-16" :src="footer.logo" />
        </div>
        <div>
          {{ footer.address }}
        </div>
        <UButton
          :to="`tel:${footer.tel}`"
          variant="link"
          :padded="false"
          class="text-md"
        >
          {{ footer.tel }}
        </UButton>
      </div>
    </UContainer>
  </footer>
</template>
