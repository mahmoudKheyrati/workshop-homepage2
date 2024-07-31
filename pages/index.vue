<script lang="ts" setup>
import { heroData } from "~/data.json";
useHead({
  title: heroData.websiteTitle,
});
</script>
<template>
  <HeroSection />
  <SpeakersSection />
  <TimeTableSection />
  <ConferenceTeamSection />
  <SponsorSection />
</template>
