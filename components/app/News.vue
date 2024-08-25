<script lang="ts" setup></script>
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
      <p class="grid grid-cols-6 gap-2 lg:gap-0">
        <span class="col-span-1 opacity-75 text-sm text-center text-blue-950"
          >4 Aug. 2024</span
        >
        <span class="col-span-5">
          A special issue in The Journal of Supercomputing is arranged to
          publish papers based on the presented talks in the workshop.
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
   <div class="overflow-y-auto flex-1 flex flex-col">
        <p class="grid grid-cols-6 gap-2 lg:gap-0">
          <span class="col-span-1 opacity-75 text-sm text-center text-blue-950"
            >25 Aug. 2024</span
          >
          <span class="col-span-5">
            Workshop programs is finalized.
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
      <p class="grid grid-cols-6">
        <span class="col-span-1 opacity-75 text-sm text-center text-blue-950"
          >4 Aug. 2024</span
        >
        <span class="col-span-5">
          The homepage of the International Online Workshop "Recent Advances in
          SSD Research and Practice" is launched.</span
        >
      </p>
    </div>
  </div>
</template>
