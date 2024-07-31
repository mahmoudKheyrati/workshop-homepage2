<script lang="ts" setup>
import { FAQ } from "~/data.json";
</script>
<template>
  <AppSection title="FAQ">
    <UAccordion :items="FAQ" color="gray" variant="ghost" size="xl" />
  </AppSection>
</template>
