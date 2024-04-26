<template>
  <div class="card p-4">
    <Toast />
    <FileUpload
      name="demo[]"
      url="/api/upload"
      @uploader="onTemplatedUpload"
      :multiple="false"
      accept="image/*"
      customUpload
      :maxFileSize="1000000"
      @select="onSelectedFiles"
      class="space-y-4"
    >
      <!-- Header Template -->
      <template
        #header="{ chooseCallback, uploadCallback, clearCallback, files }"
      >
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
          <Button
            @click="chooseCallback()"
            icon="pi pi-images"
            label="Choose"
            class="w-full"
          />
          <Button
            @click="uploadEvent(uploadCallback)"
            icon="pi pi-cloud-upload"
            label="Upload"
            class="w-full"
            :disabled="!files || files.length === 0"
          />
          <Button
            @click="clearCallback()"
            icon="pi pi-times"
            label="Clear"
            class="w-full"
            :disabled="!files || files.length === 0"
          />
        </div>
      </template>

      <!-- Content Template -->
      <template
        #content="{
          files,
          uploadedFiles,
          removeUploadedFileCallback,
          removeFileCallback,
        }"
      >
        <div class="grid grid-cols-1 gap-4">
          <!-- Pending Files -->
          <div v-if="files.length > 0" class="space-y-2">
            <h5>Pending Files</h5>
            <div class="grid grid-cols-1 gap-2">
              <div
                v-for="(file, index) in files"
                :key="file.name"
                class="flex justify-between items-center"
              >
                <span>{{ file.name }}</span>
                <Button
                  icon="pi pi-times"
                  @click="
                    onRemoveTemplatingFile(file, removeFileCallback, index)
                  "
                  class="p-button-rounded p-button-danger"
                />
              </div>
            </div>
          </div>

          <!-- Uploaded Files -->
          <div v-if="uploadedFiles.length > 0" class="space-y-2">
            <h5>Completed Files</h5>
            <div class="grid grid-cols-1 gap-2">
              <div
                v-for="(file, index) in uploadedFiles"
                :key="file.name"
                class="flex justify-between items-center"
              >
                <span>{{ file.name }}</span>
                <Button
                  icon="pi pi-times"
                  @click="removeUploadedFileCallback(index)"
                  class="p-button-rounded p-button-danger"
                />
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- Empty Template -->
      <template #empty>
        <div class="flex flex-col items-center justify-center">
          <i class="pi pi-cloud-upload text-6xl" />
          <p>Drag and drop files here to upload.</p>
        </div>
      </template>
    </FileUpload>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { usePrimeVue } from "primevue/config";
import { useToast } from "primevue/usetoast";
import FileUpload from "primevue/fileupload";

const emit = defineEmits(['image-uploaded']);

const uploadedImageUrl = ref('');

const onTemplatedUpload = (event) => {
  console.log(event)
  if (event.files[0].response) {
    uploadedImageUrl.value = event.files[0].response.imageUrl; // Assuming the server returns { imageUrl: '...' }
    emit('image-uploaded', uploadedImageUrl.value);
    alert("File Uploaded: " + uploadedImageUrl.value);
  } else {
    alert("Upload Failed: No URL received.");
  }
};
const $primevue = usePrimeVue();
const toast = useToast();

const totalSize = ref(0);
const totalSizePercent = ref(0);
const files = ref([]);

const onRemoveTemplatingFile = (file, removeFileCallback, index) => {
  removeFileCallback(index);
  totalSize.value -= parseInt(formatSize(file.size));
  totalSizePercent.value = totalSize.value / 10;
};

const onSelectedFiles = (event) => {
  files.value = event.files;
  files.value.forEach((file) => {
    totalSize.value += parseInt(formatSize(file.size));
  });
};

const uploadEvent = (callback) => {
  totalSizePercent.value = totalSize.value / 10;
  callback();
};

const formatSize = (bytes) => {
  const k = 1024;
  const dm = 3;
  const sizes = $primevue.config.locale.fileSizeTypes;

  if (bytes === 0) {
    return `0 ${sizes[0]}`;
  }

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

  return `${formattedSize} ${sizes[i]}`;
};
</script>
