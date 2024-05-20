<template>
  <BaseCard>
    <div class="file-upload-container">
      <h2 class="text-lg font-semibold mb-4">Service Documentation</h2>
      <div class="documents-recieved">
        <h3 class="text-md font-semibold mb-3">Documents Recieved</h3>
        <ul class="document-list space-y-2">
          <li
            v-for="(document, index) in documents"
            :key="index"
            class="flex justify-between items-center"
          >
            <span class="document-name">{{ document.name }}</span>
            <span class="document-actions">
              <Button
                icon="pi pi-download"
                class="p-button-rounded px-2 p-button-secondary"
                @click="downloadDocument(document)"
              />
            </span>
          </li>
        </ul>
      </div>

      <div class="uploaded-documents">
        <h3 class="text-md font-semibold mb-3">Uploaded Documents</h3>
        <ul class="document-list space-y-2">
          <li
            v-for="(document, index) in documents"
            :key="index"
            class="flex justify-between items-center"
          >
            <span class="document-name">{{ document.name }}</span>
            <span class="document-actions">
              <Button
                icon="pi pi-download"
                class="p-button-rounded mx-1 p-button-secondary"
                @click="downloadDocument(document)"
              />
              <Button
                icon="pi pi-times"
                class="p-button-rounded p-button-danger"
                @click="deleteDocument(index)"
              />
            </span>
          </li>
        </ul>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import Button from "primevue/button";
import { ref } from "vue";

const documents = ref([
  { name: "Maintenance Log 2021.pdf", url: "/docs/maintenance-log-2021.pdf" },
  {
    name: "Oil Change Receipt March 2021.doc",
    url: "/docs/oil-change-receipt-2021.doc",
  },
  // other documents
]);

const downloadDocument = (document) => {
  window.open(document.url, "_blank");
};

const deleteDocument = (index) => {
  documents.value.splice(index, 1);
};
</script>
