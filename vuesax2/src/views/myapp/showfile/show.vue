<!-- =========================================================================================
    File Name: TableStriped.vue
    Description: Rendering default table with striped style
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vx-card title="Striped" code-toggler>
    <div class="demo-alignment">
      <vs-button @click="popupActive" color="primary" type="filled">Add User</vs-button>

      <vs-popup
        class="holamundo"
        title="Lorem ipsum dolor sit amet"
        :active.sync="$store.state.myapp.popupActive"
      >
        <form @submit.prevent="addUser">
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>From</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vs-input class="w-full" type="text" v-model="form.input1" required />
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>To</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vs-input class="w-full" type="text" v-model="form.input2" required />
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>Message</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vs-textarea class="w-full" type="text" v-model="form.input3" required />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col sm:w-2/3 w-full ml-auto">
              <vs-button class="mr-3 mb-2">Submit</vs-button>
            </div>
          </div>
        </form>
      </vs-popup>
    </div>
    <!-- <p>You can have a sebra effect by adding the property <code>stripe</code></p><br> -->
    <vs-table search>
      <template slot="thead">
        <vs-th sort-key="email">Email</vs-th>
        <vs-th sort-key="username">Name</vs-th>
        <vs-th sort-key="id">Nro</vs-th>
      </template>

      <template>
        <vs-tr v-for="(tr, indextr) in $store.state.myapp.users" :key="indextr">
          <vs-td>{{ tr.npp }}</vs-td>

          <vs-td>{{ tr.nama_lengkap }}</vs-td>

          <vs-td>{{ tr.alamat }}</vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </vx-card>
</template>

<script>
import axios from "axios";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    form: {
      input1: "",
      input2: "",
      input3: ""
    }
  }),
  computed: {
    ...mapState({})
  },
  async mounted() {
    this.init();
  },
  methods: {
    ...mapActions(["setUsers"]),
    ...mapMutations(["sendMessageNotif"]),
    init() {
      this.setUsers();
      // this.$store.dispatch("registerWS");
    },
    popupActive() {
      this.$store.commit("popupIsActive", true);
    },
    addUser() {
      this.$store.dispatch("setDataPost", this.form);
      this.$store.commit("popupIsActive", false);
    }
  }
};
</script>



