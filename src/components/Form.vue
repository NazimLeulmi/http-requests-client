<script setup lang="ts">
import { ref } from "vue";
import { onMounted } from "vue";
import axios from "axios";

const url = ref("");
const method = ref("GET");

const csrfToken = ref(null);
</script>

<template>
  <form
    @submit.prevent="
      $emit('submit-form', { url: url, method: method, _csrf: csrfToken })
    "
  >
    <!-- @ts-ignore -->
    <!-- <input name="_csrf" v-model="csrfToken" type="hidden" /> -->
    <v-select
      class="select"
      label="method"
      variant="solo"
      v-model="method"
      :items="['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'HEAD']"
    ></v-select>
    <v-text-field
      label="url"
      placeholder="http://domain.com"
      class="input"
      v-model="url"
      variant="filled"
      required
      type="url"
    />
    <v-btn class="btn" type="submit">
      <v-icon icon="mdi-magnify" size="24" />
    </v-btn>
  </form>
</template>

<style scoped>
form {
  height: 50px;
  width: 100%;
  display: flex;
}
.input {
  flex: 1 !important;
}
.select {
  height: 100% !important;
  flex: 0.5 !important;
  margin-right: 6px;
}
.btn {
  width: 50px;
  height: 56px !important;
  margin-left: 6px;
}
</style>
