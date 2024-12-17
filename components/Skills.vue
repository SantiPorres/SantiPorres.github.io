<template>
  <section class="bg-black py-20 px-2 lg:px-8 flex flex-col gap-6" id="skills">
    <div class="flex flex-col">
      <h1 class="text-4xl font-bold text-white w-full text-center">{{ $t('skills.title') }}</h1>
      <p class="text-gray-300/70 text-center">{{ $t('skills.description') }}</p>
    </div>
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white w-full">
      <div class="text-center" v-for="technology in technologies">
        {{ technology.name }}
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

import type { Technology } from '~/models/technology';

const technologies: Technology[] = [
  {
    name: 'Vue',
    icon: 'assets/icon/php.svg',
  },
  {
    name: 'Laravel',
    icon: 'assets/icon/php.svg',
  },
  {
    name: 'PHP',
    icon: 'assets/icon/php.svg',
  },
  {
    name: 'TailwindCSS',
    icon: 'assets/icon/php.svg',
  },
  {
    name: 'Docker',
    icon: 'assets/icon/php.svg',
  },
  {
    name: 'Oracle Cloud Infrastructure',
    icon: 'assets/icon/php.svg',
  },
  {
    name: 'PostgreSQL',
    icon: 'assets/icon/php.svg',
  },
  {
    name: 'Linux',
    icon: 'assets/icon/php.svg',
  },
  {
    name: 'MongoDB',
    icon: 'assets/icon/php.svg',
  },
  {
    name: 'NuxtJS',
    icon: 'assets/icon/php.svg',
  },
  {
    name: '.NET',
    icon: 'assets/icon/php.svg',
  },
  {
    name: 'Entity Framework Core',
    icon: 'assets/icon/php.svg',
  },
  {
    name: 'Vuetify',
    icon: 'assets/icon/php.svg',
  },
  {
    name: 'PiniaJS',
    icon: 'assets/icon/php.svg',
  },
  {
    name: 'NestJS',
    icon: 'assets/icon/php.svg',
  },
  {
    name: 'SQL Server',
    icon: 'assets/icon/php.svg',
  },
]

</script>

<style></style>