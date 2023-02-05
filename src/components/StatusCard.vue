<script setup lang="ts">
defineProps({
  status: Number,
  statusText: String,
});
</script>

<template>
  <v-card class="status-code">
    <h1 class="text-h2 text-center my-6">
      {{ status }}
    </h1>
    <p class="text-h5 text-center mb-3 font-weight-light">
      {{ statusText }}
    </p>
  </v-card>
</template>

<style scoped>
.status-code {
  margin: 18px;
  align-self: center;
}
</style>
