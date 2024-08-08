<script lang="ts" setup>
import { description } from "~/data.json";
</script>
<template>
  <AppSection title="The Workshop">
    <p class="lg:text-xl" v-html="description"/>
  </AppSection>
</template>
