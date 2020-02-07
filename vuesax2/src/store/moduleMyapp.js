
import axios from "axios";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const url = "ws://localhost:8000";

export default {
  namespaced: false,
  state: {
    users: [],
    form: {
      input1: "",
      input2: "",
      input3: ""
    },
    notifier: new Notyf(),
    popupActive: false,
    connection: new WebSocket(url),
    notif: false
    // postData:""
  },
  mutations: {
    updateUsers(state, value) {
      state.users = value;
    },
    popupIsActive(state, value) {
      state.popupActive = value;
    },
    sendMessageNotif(state, value) {
      // state.connection.send(value);
    }
  },
  actions: {
    async setUsers({ commit }) {
      const response = await axios.get("shows/getuser");
      commit("updateUsers", response.data);
    },
    setPopUpIsActive({ commit }) {
      commit("popUpIsActive", false);
    },
    async setDataPost({ commit, state, dispatch }, kiriman) {
      const response = await axios.post("shows/adduser", kiriman);
      dispatch("setUsers");
    },

    //WEB SOCKET
    sendMessage({ commit, dispatch }) {
      commit("sendMessageNotif", false);
      dispatch("sendNotif");
    },
    sendNotif({ commit }) {
      const data = JSON.stringify({
        notif: false
      });
    },
    registerWS({ commit, state, dispatch }) {
      state.connection.onopen = event => {
        console.log("We are connected", event);
      };

      state.connection.onerror = error => {
        console.log(`WebSocket error: ${error}`);
      };

      state.connection.onmessage = async event => {
        const data = JSON.parse(event.data);
        dispatch("setUsers");
        state.notifier.success("Data Berhasil di Input ke Dalam Sistem");
      };
    }
  }
};
