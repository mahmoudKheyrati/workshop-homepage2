<script lang="ts" setup>
import { contacts } from "~/data.json";
</script>
<template>
  <AppSection title="Contacts">
    <p>
      For any inquiries or to get in touch with the organizers, please use the
      following email addresses:
    </p>
    <div class="flex gap-2">
      <UButton
        v-for="contact in contacts"
        :key="contact"
        :to="`mailto:${contact}`"
        variant="link"
        :padded="false"
        class="text-md"
      >
        {{ contact }}
      </UButton>
    </div>
  </AppSection>
</template>
