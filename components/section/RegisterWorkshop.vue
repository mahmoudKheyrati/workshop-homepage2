<script lang="ts" setup>
import { register_workshop } from "~/data.json";
</script>
<template>
  <AppSection title="Workshop Registration">
    <div class="lg:col-span-2">
      <div class="flex flex-col gap-4">
        <p class="">
          {{ register_workshop.text }}
          <UButton
            color="blue"
            variant="link"
            class="rounded-full font-bold text-xl leading-9"
            :to="register_workshop.link"
            target="_blank"
            :padded="false"
          >
            here.
          </UButton>
        </p>
        <div class="text-center">
          <!-- <UButton
            color="blue"
            variant="solid"
            class="rounded-full font-bold px-10 py-2 text-lg leading-9"
            :to="register_workshop.link"
            target="_blank"
          >
            Register Workshop
          </UButton> -->
        </div>
      </div>
    </div>
  </AppSection>
</template>

<!--        <UButton-->
<!--          @click="scrollDown"-->
<!--          color="blue"-->
<!--          size="xl"-->
<!--          variant="ghost"-->
<!--          class="rounded-full font-bold px-8 py-2 text-xl leading-9 light:hover:bg-blue-200/20"-->
<!--        >-->
<!--          Schedule-->
<!--        </UButton>-->
