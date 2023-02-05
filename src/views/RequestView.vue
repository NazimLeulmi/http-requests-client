<script setup lang="ts">
import { ref, Suspense, onBeforeMount } from "vue";
import axios from "axios";
import StatusCard from "@/components/StatusCard.vue";
import UrlCard from "@/components/UrlCard.vue";
import ResponseCard from "@/components/ResponseCard.vue";
import { useRoute } from "vue-router";

const responseData = ref<any>(null);
const route = useRoute();

onBeforeMount(async () => {
  try {
    const response = await axios.get(
      "http://localhost:8000/" + route.params.id
    );
    responseData.value = response.data.responseData;
  } catch (err) {
    console.log(err);
  }
});
</script>

<template>
  <div v-if="responseData">
    <main class="container">
      <h1 class="text-uppercase my-3">{{ responseData.request.method }}</h1>
      <v-card class="w-100">
        <h1 class="text-h2 text-center my-6">
          {{ responseData.response.status }}
        </h1>
        <p class="text-h5 text-center mb-3 font-weight-light">
          {{ responseData.response.statusText }}
        </p>
      </v-card>
      <div class="res-container">
        <UrlCard
          :path="responseData.url.path"
          :scheme="responseData.url.scheme"
          :host="responseData.url.host"
        />
        <ResponseCard
          :status="responseData.response.status"
          :statusText="responseData.response.statusText"
          :server="responseData.response.server"
          :date="responseData.response.date"
          :httpVersion="responseData.request.http"
        />
      </div>
    </main>
  </div>
  <div v-else>Loading.....</div>
</template>

<style scoped>
main {
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.res-container {
  overflow-x: scroll;
  overflow-y: auto;
  display: flex;
  /* height: 500px; */
  width: 100vw;
  position: relative;
}
h3 {
  font-weight: 200;
  margin: 12px;
  text-align: center;
}

.link {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.1);
  width: 90%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px;
  border-radius: 10px;
}
</style>
