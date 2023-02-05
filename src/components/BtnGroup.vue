<script setup lang="ts">
import router from "@/router";

const props = defineProps({
  id: String,
});

async function copyContent() {
  try {
    await navigator.clipboard.writeText("http://localhost:5173/" + props.id);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

function navigate() {
  router.push(`${props.id}`);
}
</script>

<template>
  <div class="btn-group my-4">
    <v-btn class="mr-3" @click="copyContent">
      SHARE
      <v-icon icon="mdi-clipboard" size="20" class="ml-2" />
    </v-btn>
    <v-btn @click="navigate">
      VIEW
      <v-icon icon="mdi-share" size="20" class="ml-2" />
    </v-btn>
  </div>
</template>

<style scoped>
.btn-group {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}
</style>
