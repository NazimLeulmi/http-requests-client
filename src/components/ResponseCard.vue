<script setup lang="ts">
defineProps({
  status: Number,
  statusText: String,
  date: String,
  server: String,
  httpVersion: String,
});
</script>

<template>
  <section class="url-section">
    <p class="mb-3">Response Info</p>
    <div>
      <v-card class="group">
        <label>Status</label>
        <small
          >HTTP/{{ httpVersion }} [ {{ status }} ] [ {{ statusText }} ]</small
        >
      </v-card>
      <v-card class="group">
        <label>Date</label>
        <small>{{ date }}</small>
      </v-card>
      <v-card class="group">
        <label>Server</label>
        <small>{{ server }}</small>
      </v-card>
    </div>
  </section>
</template>
