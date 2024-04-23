<template>
  <BaseCard class="card">
    <DataTable
      v-model:expandedRows="expandedRows"
      :value="appointments"
      dataKey="id"
      @rowExpand="onRowExpand"
      @rowCollapse="onRowCollapse"
      tableStyle="min-width: 60rem"
    >
      <Column expander style="width: 3rem"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="date" header="Date"></Column>
      <Column field="service" header="Service"></Column>

      <template #expansion="slotProps">
        <div class="flex justify-content-between align-items-center p-3">
          <div>
            <h5>Details for {{ slotProps.data.vehicle }}</h5>
            <p>{{ slotProps.data.serviceType }} appointment scheduled for <br/> {{ slotProps.data.date }}  at {{ slotProps.data.time }}</p>
            <!-- other details... -->
          </div>
        </div>
          <div>
            <Button
              label="Reschedule"
              icon="pi pi-calendar-plus"
              class="p-button-text mr-2"
              @click="reschedule(slotProps.data)"
            />
            <Button
              label="Cancel"
              icon="pi pi-times"
              class="p-button-text p-button-danger"
              @click="cancel(slotProps.data)"
            />
          </div>

      </template>
    </DataTable>
  </BaseCard>
</template>

<script setup>
import { ref } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";

const appointments = ref([
  {
    id: 1,
    serviceType: "Oil Change",
    vehicle: "BMW 320i - 2019",
    date: "2024-04-22",
    time: "10:00 AM",
  },
  {
    id: 2,
    serviceType: "Tire Rotation",
    vehicle: "Audi A4 - 2020",
    date: "2024-04-23",
    time: "02:00 PM",
  },
  // more appointments...
]);
const expandedRows = ref(null);

const onRowExpand = (event) => {
  // Handle row expand event
};

const onRowCollapse = (event) => {
  // Handle row collapse event
};

const reschedule = (appointment) => {
  // Logic for rescheduling an appointment
  console.log("Rescheduling appointment", appointment);
};

const cancel = (appointment) => {
  // Logic for canceling an appointment
  console.log("Canceling appointment", appointment);
};
</script>
