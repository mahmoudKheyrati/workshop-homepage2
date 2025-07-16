<script lang="ts" setup>
</script>
<template>
  <div
    class="max-h-full bg-white/85 rounded-xl flex flex-col gap- text-gray-1000 dark:text-black/70 p-4 "
  >
    <h2 class="text-4xl font-bold">Workshop News</h2>
    <UDivider
      size="xs"
      :ui="{
        border: {
          base: 'flex border-gray-600 dark:border-gray-800',
        },
      }"
    />

    <div class="overflow-y-auto flex-1 flex flex-col">
      <p class="grid grid-cols-6 gap-2 lg:gap-0 pt-3">
        <span class="col-span-1 opacity-75 text-sm text-center text-blue-950"
        >21 Mar. 2025</span
        >
        <span class="col-span-5">
          The workshop program is now available.
        </span>
      </p>
      <UDivider
        size="xs"
        type="dotted"
        class="py-2"
        :ui="{
          border: {
            base: 'flex border-gray-600 dark:border-gray-800',
          },
        }"
      />
      <p class="grid grid-cols-6 gap-2 lg:gap-0 pt-3">
        <span class="col-span-1 opacity-75 text-sm text-center text-blue-950"
        >21 Mar. 2025</span
        >
        <span class="col-span-5">
          The homepage of the International Online Workshop "In-Memory and In-storage Processing" is launched.
        </span>
      </p>
      <UDivider
        size="xs"
        type="dotted"
        class="py-2"
        :ui="{
          border: {
            base: 'flex border-gray-600 dark:border-gray-800',
          },
        }"
      />

     
    </div>
  </div>
</template>
