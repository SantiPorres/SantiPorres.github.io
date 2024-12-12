<template>
  <section class="bg-[#0B2031] py-20 px-2 lg:px-8 flex flex-col gap-6">
    <div class="flex flex-col">
      <h1 class="text-4xl font-bold text-white w-full text-center">{{ $t('projects.title') }}</h1>
      <p class="text-gray-300/70 text-center">{{ $t('projects.description') }}</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white w-full">
      <div class="" v-for="project in projects">
        <ProjectCard :project="project" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Project } from '~/models/project';

const projects: Project[] = [
  {
    title: 'ZAJUNA LMS',
    description: 'Contributed to all phases of the software development lifecycle for multiple modules of the ZAJUNA LMS national project. This includes the implementation of clean code practices, architectures, design patterns, and diverse technologies.',
    participationType: 2,
    image: 'assets/img/zajuna1.webp',
    url: 'https://zajuna.sena.edu.co/',
    tags: [
      'Laravel',
      'Vue',
      'PHP',
      'TailwindCSS',
      'Docker',
      'Oracle Cloud Infrastructure',
      'PostgreSQL',
      'Linux',
      'MongoDB',
      'NuxtJS',
    ],
  },
]

</script>

<style></style>