<template>
  <section class=" bg-black h-[100vh] w-full flex justify-center items-center relative">
    <div class="mx-auto flex flex-col gap-4 p-8">
      <h1 class="text-4xl lg:text-6xl text-white font-bold text-center">
        {{ $t('hero.title') }}
      </h1>
      <p class="text-xl lg:text-3xl text-white font-semibold text-center">{{ $t('hero.subtitle') }}</p>

      <button type="button" class="px-4 py-2 w-fit mx-auto rounded-full bg-white text-black">
        <a href="#contact">{{ $t('nav.contact') }}</a>
      </button>
    </div>

    <button class="absolute bottom-3 text-white animate-bounce">
      <a :href="nextSection">
        <svg class="size-6" viewBox="0 0 16 16">
          <path fill="currentColor"
            d="m13.707 9.707l-5 5a1 1 0 0 1-1.414 0l-5-5a.999.999 0 1 1 1.414-1.414L7 11.586V2a1 1 0 0 1 2 0v9.586l3.293-3.293a.997.997 0 0 1 1.414 0a1 1 0 0 1 0 1.414" />
        </svg>
      </a>
    </button>
  </section>
</template>

<script lang="ts" setup>

const { nextSection } = defineProps<{
  nextSection: string
}>()
</script>

<style></style>