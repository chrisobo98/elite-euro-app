<template>
    <div
      :class="[
        'p-6 rounded-xl mx-4 my-4 transition-all duration-300 ease-in-out',
        useShadow ? 'shadow-2xl' : '',
        `bg-white h-auto`,
      ]"
      :style="{ opacity: transparent ? '0.9' : '1' }"
    >
      <slot></slot> <!-- to insert content into the card -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'BaseCard',
    props: {
      backgroundColor: {
        type: String,
        default: 'white',
      },
      transparent: {
        type: Boolean,
        default: false,
      },
      useShadow: {
        type: Boolean,
        default: true,
      },
    },
  };
  </script>
  