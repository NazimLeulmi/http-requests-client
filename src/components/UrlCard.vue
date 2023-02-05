<script setup lang="ts">
defineProps({
  host: String,
  scheme: String,
  path: String,
});
</script>

<template>
  <section class="xsOnly url-section">
    <p class="mb-3">Url Info</p>
    <div>
      <v-card class="group">
        <label>Domain</label>
        <small>{{ host }}</small>
      </v-card>
      <v-card class="group">
        <label>Schema</label>
        <small>{{ scheme }}</small>
      </v-card>
      <v-card class="group">
        <label>Path</label>
        <small>{{ path }}</small>
      </v-card>
    </div>
  </section>
</template>
