<template>
  <section class="bg-[#0B2031] py-20 px-8 flex flex-col gap-6">
    <h1 class="text-4xl font-bold text-white w-full text-center">{{ $t('projects.title') }}</h1>
    <div class="flex gap-4 text-white w-full justify-around">
      <div class="" v-for="project in projects">
        <ProjectCard />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

const projects = [
  {
    title: 'Project 1',
    description: 'Description 1',
    image: 'image1.jpg',
    url: 'https://project1.com'
  },
  // {
  //   title: 'Project 2',
  //   description: 'Description 2',
  //   image: 'image2.jpg',
  //   url: 'https://project2.com'
  // },
  // {
  //   title: 'Project 3',
  //   description: 'Description 3',
  //   image: 'image3.jpg',
  //   url: 'https://project3.com'
  // },
]

</script>

<style></style>