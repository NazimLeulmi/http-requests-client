<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import Form from "@/components/Form.vue";
import StatusCard from "@/components/StatusCard.vue";
import UrlCard from "@/components/UrlCard.vue";
import ResponseCard from "@/components/ResponseCard.vue";
import BtnGroup from "@/components/BtnGroup.vue";

const responseData = ref<any>(null);
const csrfToken = ref(null);

// get an initial CSRF token from the server
onMounted(async () => {
  const response = await axios.get("http://localhost:8000/csrf", {
    withCredentials: true,
  });
  csrfToken.value = response.data.csrfToken;
});

// Send an http request to the backend with the payload
async function sendRequest(data: {
  url: String;
  method: String;
  _csrf: String;
}) {
  const response = await axios.post(
    `http://localhost:8000/api/http/${data.method}`,
    {
      url: data.url,
      _csrf: csrfToken.value,
    },
    { withCredentials: true }
  );
  responseData.value = response.data;

  // get a fresh CSRF token
  const res = await axios.get("http://localhost:8000/csrf", {
    withCredentials: true,
  });

  csrfToken.value = res.data.csrfToken;
}
</script>

<template>
  <main>
    <Form v-on:submit-form="sendRequest($event)" />
    <div v-if="responseData">
      <StatusCard
        :status="responseData.response.status"
        :statusText="responseData.response.statusText"
      />
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
      <p class="link mt-2">localhost:5173/{{ responseData._id }}</p>
      <BtnGroup :id="responseData._id" />
    </div>
    <h3 v-else>Waiting for a response from the server</h3>
  </main>
</template>

<style scoped>
main {
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  position: relative !important;
  left: 50%;
  transform: translateX(-50%);
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
  max-width: 600px;
}

@media (min-width: 600px) {
  .res-container {
    overflow-x: hidden;
    overflow-y: hidden;
    display: flex;
    width: 100vw;
    max-width: 1000px !important;
    position: relative;
  }
}
</style>
