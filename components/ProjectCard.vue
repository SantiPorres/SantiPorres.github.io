<template>
  <div
    class="relative rounded-lg overflow-hidden hover:shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105 bg-gray-700">
    <img class="w-full" :src="project.image" alt="Sunset in the mountains">
    <span
      class="inline-block top-4 right-4 absolute bg-gray-200 shadow-xl rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{
        participationType }}</span>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ project.title }}</div>
      <p class="text-gray-100/50 text-base" v-if="project.description">
        {{ project.description }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2 flex justify-between flex-wrap">
      <span v-for="tag in project.tags" :key="tag"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ tag
        }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Project } from '~/models/project';
import { PARTICIPATION_TYPES } from '~/utils/participationTypes';

const { project } = defineProps<{
  project: Project
}>();

const participationTypes = PARTICIPATION_TYPES();
const participationType = participationTypes[project.participationType];
</script>

<style></style>