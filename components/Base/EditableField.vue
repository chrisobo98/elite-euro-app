<template>
    <div>
      <label :for="field" class="block mb-2 text-sm font-medium text-gray-900">{{ label }}</label>
      <div v-if="!editMode" class="py-1">{{ value }}</div>
      <div v-else>
        <input
          :id="field"
          v-model="innerValue"
          @blur="emitUpdate"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter value"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from "vue";
  
  const props = defineProps({
    field: String,
    label: String,
    value: String,
    editMode: Boolean,
  });
  const emit = defineEmits(["updateValue"]);
  const innerValue = ref(props.value);
  
  watch(
    () => props.value,
    (newVal) => {
      innerValue.value = newVal;
    }
  );
  
  function emitUpdate() {
    emit("updateValue", props.field, innerValue.value);
  }
  </script>
  