<template>
  <div class="container mx-auto">
    <div class="px-4">
      <h1 class="text-3xl font-bold">Notifications</h1>
      <div class="flex justify-between items-center mb-4">
        <span>You have {{ notifications.length }} unviewed notification(s)</span>
        <BaseButton label="Mark all as read" />
      </div>
    </div>

    <!-- <div class="card my-5 mx-5">
        <TabMenu class="rounded-lg" :model="items" />
    </div> -->

    <div class="space-y-4">
      <BaseCard
        v-for="notification in notifications"
        :key="notification.id"
        class="p-4"
      >
        <div
          class="flex flex-col md:flex-row justify-between items-start md:items-center"
        >
          <div class="flex items-center space-x-3 mb-2 md:mb-0">
            <!-- Use different icons based on notification type -->
            <span class="icon">
              <component :is="notification.icon"></component>
            </span>
            <div>
              <p class="font-bold">{{ notification.title }}</p>
              <p class="text-sm">{{ notification.description }}</p>
              <p class="text-xs text-gray-500">
                {{ new Date(notification.date).toLocaleString() }}
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <BaseButton
              v-if="notification.state === 'reschedule'"
              label="Reschedule"
              class="bg-blue-500 hover:bg-blue-700"
            />
            <BaseButton
              v-if="notification.state === 'reply'"
              label="Reply"
              class="bg-green-500 hover:bg-green-700"
            />
            <BaseButton
              label="Delete"
              class="col-span-1 bg-red-500 hover:bg-red-700"
              @click="deleteNotification(notification.id)"
            />
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BaseCard from "@/components/Base/BaseCard.vue";
import BaseButton from "@/components/Base/BaseButton.vue";
import {
  BellIcon,
  CalendarIcon,
  ExclamationCircleIcon,
  EnvelopeIcon,
  UserIcon,
} from "@heroicons/vue/24/solid";

const items = ref([
    { label: 'Dashboard', icon: 'pi pi-home' },
    { label: 'Transactions', icon: 'pi pi-chart-line' },
    { label: 'Products', icon: 'pi pi-list' },
    { label: 'Messages', icon: 'pi pi-inbox' }
]);

const notifications = ref([
  {
    id: 1,
    title: "Meeting at 07:30 PM.",
    description:
      "You have an upcoming meeting with Alex regarding digital marketing.",
    date: "2022-04-04T19:30:00Z",
    state: "reschedule",
    type: "meeting",
    icon: "BellIcon",
  },
  {
    id: 2,
    title: "New Session booked by Anthony M.",
    description:
      "New session is booked by Anthony, on 27th January at 05:30 PM.",
    date: "2022-01-27T17:30:00Z",
    state: "reschedule",
    type: "session",
    icon: "CalendarIcon", 
  },
  {
    id: 3,
    title: "Error processing payment!",
    description:
      "Please review the wallet details and fix the error to process your payments.",
    date: "2022-04-01T12:00:00Z",
    state: "unread",
    type: "error",
    icon: "ExclamationCircleIcon", 
  },
  {
    id: 4,
    title: "You have a new message from Luke.",
    description: "You have a new message in conversations from Luke Wield.",
    date: "2022-04-03T15:00:00Z",
    state: "reply",
    type: "message",
    icon: "EnvelopeIcon",
  },
  {
    id: 5,
    title: "Your vehicle has a broken control arm.",
    description: "You have a vehicle notification, view in my garage.",
    date: "2022-03-29T18:45:00Z",
    state: "read",
    type: "meeting",
    icon: "UsersIcon",
  },
]);

const deleteNotification = (id) => {
  const index = notifications.value.findIndex((n) => n.id === id);
  if (index !== -1) {
    notifications.value.splice(index, 1);
  }
};
</script>
