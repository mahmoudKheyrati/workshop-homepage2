<script lang="ts" setup>
import { description } from "~/data.json";
</script>
<template>
  <AppSection title="The Workshop">
    <p class="" v-html="description"/>
  </AppSection>
</template>
