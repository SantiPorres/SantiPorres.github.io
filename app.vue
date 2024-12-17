<template>
  <div>
    <Header />
    <main>
      <Hero next-section="#projects" />
      <Projects />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from '~/components/Header.vue'
import Hero from '~/components/Hero.vue'
import Skills from '~/components/Skills.vue'
import Projects from '~/components/Projects.vue'
import Contact from '~/components/Contact.vue'
import Footer from '~/components/Footer.vue'
import { useI18n } from 'vue-i18n'

const t = useI18n().t

useHead({
  title: t('document.title')
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
