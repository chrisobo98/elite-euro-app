<template>
  <button
    :class="buttonClasses"
    @click="onClick"
  >
    <span v-if="iconComponent" class="icon mr-2">
      <component :is="iconComponent"></component>
    </span>
    <span>{{ label }}</span>
  </button>
</template>

<script setup>
import { computed } from 'vue';
import { PencilSquareIcon } from "@heroicons/vue/24/solid"; // Make sure to import all icons you want to use

const props = defineProps({
  icon: String,
  label: String,
  type: {
    type: String,
    default: 'button' // 'button', 'submit', 'reset', etc.
  }
});

const emit = defineEmits(['click']);

const buttonClasses = computed(() => {
  let baseClasses = 'text-white font-medium rounded-full text-sm px-5 py-2.5 shadow-lg transition-colors duration-150 ease-in-out';
  let typeClasses = {
    submit: 'bg-green-500 hover:bg-green-700 focus:ring-green-300',
    reset: 'bg-red-500 hover:bg-red-700 focus:ring-red-300',
    button: 'bg-blue-500 hover:bg-blue-700 focus:ring-blue-300'
  };
  return `${baseClasses} ${typeClasses[props.type] || typeClasses.button}`;
});

const iconsMap = {
  PencilSquareIcon, // Add other icons to this map
};

const iconComponent = computed(() => {
  return iconsMap[props.icon];
});

function onClick(event) {
  emit('click', event);
}
</script>
