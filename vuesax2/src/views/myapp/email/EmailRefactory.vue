<template>
  <div class="vx-row">
    <!-- HORIZONTAL LAYOUT -->
    <div class="vx-col md:w-full w-full mb-base">
      <vx-card title="Compose New Email">
        <form @submit.prevent="sendMail">
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>From</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vs-input class="w-full" type="email" v-model="form.input1" required />
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>To</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vs-input class="w-full" type="email" v-model="form.input2" required />
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>Subject</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vs-input class="w-full" v-model="form.input3" required />
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>Message</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vs-textarea class="w-full" type="text" v-model="form.input4" required />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col sm:w-2/3 w-full ml-auto">
              <vs-button class="mr-3 mb-2">Submit</vs-button>
              <!-- <vs-button
                color="warning"
                type="border"
                class="mb-2"
                @click="input1 = input2 = input3 = input4 = input4 = ''; check1 = false;"
              >Reset</vs-button>-->
            </div>
          </div>
        </form>
      </vx-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    form: {
      input1: "a@a.com",
      input2: "a@a.com",
      input3: "nyobaan lur",
      input4: "eta si opik jeung si emus"
    }
  }),
  methods: {
    async sendMail() {
      console.log(this.form);
      const response = await axios.post("mails/sendmail", this.form);
    },
  }
};
</script>