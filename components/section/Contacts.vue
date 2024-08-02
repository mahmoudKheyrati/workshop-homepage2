<script lang="ts" setup>
import { contacts } from "~/data.json";
</script>
<template>
  <AppSection title="Contacts">
<!--    <p class="">-->
<!--      {{ contacts.text }}-->
<!--    </p>-->
    <p class="contact-description" v-html="contacts.text"></p>

  </AppSection>
</template>
