<template>
  <header class="fixed w-full z-10 flex flex-col">
    <div class="bg-gray-900/90 backdrop-blur-sm shadow-md ">
      <div class="flex justify-between text-white px-4 items-center lg:px-8 max-w-7xl mx-auto"
        :class="isScrollingDown ? 'py-2' : 'py-4'">
        <h1 class="text-xl lg:text-2xl font-semibold">
          <span :class="isScrollingDown ? 'hidden' : ''">{{ $t('header') }}</span> Santiago Porres Restrepo
        </h1>
        <nav class="hidden lg:flex">
          <ul class="flex gap-4 text-base items-center">
            <li class="text-gray-300 hover:text-white transition-colors duration-300">
              <a href="#projects">{{ $t('nav.projects') }}</a>
            </li>
            <li class="text-gray-300 hover:text-white transition-colors duration-300">
              <a href="#skills">{{ $t('nav.skills') }}</a>
            </li>
            <li class="text-gray-300 hover:text-white transition-colors duration-300">
              <a :href="'#contact'" class="bg-gray-700/70 rounded-full py-2 px-4">{{ $t('nav.contact') }}</a>
            </li>
          </ul>
        </nav>
        <button type="button" class="hover:bg-gray-700/70 rounded-full p-1 lg:hidden">
          <svg class="size-6" viewBox="0 0 512 512">
            <path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48"
              d="M88 152h336M88 256h336M88 360h336" />
          </svg>
        </button>
      </div>
    </div>
    <div class="flex justify-between w-full px-4 py-1.5 lg:px-8 max-w-7xl mx-auto">
      <div class="flex gap-2 items-center">
        <button type="button" v-for="link in externalLinks"
          :class="`hover:bg-[#fff] hover:text-black transition-colors duration-300`"
          class="group ml-auto font-medium text-white items-center flex py-0.5 px-1 rounded-lg">
          <span v-html="link.svg" class="size-5"></span>
          <p class="transition-all group-hover:ease-out group-hover:w-16 w-0 overflow-hidden text-sm">
            {{ link.name }}
          </p>
        </button>
      </div>
      <div>
        <button type="button" @click="onToggleLanguage"
          class="bg-gray-300/10 rounded-full text-white flex gap-2 items-center text-xs py-0.5">
          <span :class="selectedLanguage === 'en' ? 'selected-language' : ''"
            class="my-0.5 ml-2 px-0.5 rounded-md">English</span>
          <span :class="selectedLanguage === 'es' ? 'selected-language' : ''"
            class="m  y-0.5 mr-2 px-0.5 rounded-md">Español</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const t = useI18n().t
const { locale } = useI18n()
const selectedLanguage = ref(locale.value)

const externalLinks = [
  { name: 'Github', svg: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>', url: '', bg: '#fff' },
  { name: 'Gitlab', svg: '<svg viewBox="0 0 128 128"><path fill="#E24329" d="m124.755 51.382l-.177-.452L107.47 6.282a4.46 4.46 0 0 0-1.761-2.121a4.58 4.58 0 0 0-5.236.281a4.6 4.6 0 0 0-1.518 2.304L87.404 42.088H40.629L29.077 6.746a4.5 4.5 0 0 0-1.518-2.31a4.58 4.58 0 0 0-5.236-.281a4.5 4.5 0 0 0-1.761 2.121L3.422 50.904l-.17.452c-5.059 13.219-.763 28.192 10.537 36.716l.059.046l.157.111l26.061 19.516l12.893 9.758l7.854 5.93a5.28 5.28 0 0 0 6.388 0l7.854-5.93l12.893-9.758l26.218-19.634l.065-.052c11.273-8.526 15.562-23.472 10.524-36.677"/><path fill="#FC6D26" d="m124.755 51.382l-.177-.452a57.8 57.8 0 0 0-23.005 10.341L64 89.682c12.795 9.68 23.934 18.09 23.934 18.09l26.218-19.634l.065-.052c11.291-8.527 15.586-23.488 10.538-36.704"/><path fill="#FCA326" d="m40.066 107.771l12.893 9.758l7.854 5.93a5.28 5.28 0 0 0 6.388 0l7.854-5.93l12.893-9.758s-11.152-8.436-23.947-18.09a18379 18379 0 0 0-23.935 18.09"/><path fill="#FC6D26" d="M26.42 61.271A57.7 57.7 0 0 0 3.422 50.904l-.17.452c-5.059 13.219-.763 28.192 10.537 36.716l.059.046l.157.111l26.061 19.516L64 89.655z"/></svg>', url: '', bg: '#fff' },
  { name: 'LinkedIn', svg: '<svg viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#fff" rx="60"/><rect width="256" height="256" fill="#0A66C2" rx="60"/><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"/></g></svg>', url: '', bg: '#fff' },
]

const isScrollingDown = ref(false);
let lastScrollY = 0;

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  isScrollingDown.value = currentScrollY > lastScrollY && currentScrollY > 50;
  lastScrollY = currentScrollY;
};

function onToggleLanguage() {
  if (selectedLanguage.value === 'en') {
    locale.value = 'es';
    selectedLanguage.value = 'es';
  } else {
    locale.value = 'en';
    selectedLanguage.value = 'en';
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

</script>

<style scoped>
.selected-language {
  background-color: #fff;
  color: #000;
}
</style>