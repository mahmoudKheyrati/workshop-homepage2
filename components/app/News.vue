<script lang="ts" setup></script>
<template>
  <div
    class="max-h-full bg-black/40 rounded-xl flex flex-col gap-4 text-gray-300 dark:text-white/70"
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
      <p>
        <b>Workshop Proceedings:</b> A special issue in The Journal of Supercomputing is arranged to  publish papers based on the presented talks in the workshop. 4 aug. 2024
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
      <p>
        The homepage of the International Online Workshop "Recent Advances in SSD Research and Practice" is launched. 4 aug. 2024
      </p>
    </div>
  </div>
</template>
