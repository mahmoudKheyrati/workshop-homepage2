<script lang="ts" setup>
import { register_workshop } from "~/data.json";
</script>
<template>
  <AppSection title="Workshop Registration">

    <div class="lg:col-span-2">
      <p class="">
        {{ register_workshop.text }}
      </p>
      <div class="flex flex-wrap items-right gap-4 justify-center">
        <UButton
          color="blue"
          size="l"
          variant="solid"
          class="rounded-full font-bold px-4 py-2 text-xl leading-9"
        >
          <a :href="register_workshop.link" target="_blank" class="no-underline text-white">
            Register Workshop
          </a>
        </UButton>

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