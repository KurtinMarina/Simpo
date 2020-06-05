import {RootState} from "@/store/types";
import {ActionsTree} from "@/store/actions";
import {GettersTree} from "@/store/getters";
import {MutationsTree} from "@/store/mutations";
import Vue from "vue";
import Vuex from "vuex";


const initialState: RootState = {
  profileMetadata: [],
  chooseProfile: null
};

Vue.use(Vuex);

export default new Vuex.Store({
  actions: ActionsTree,
  getters: GettersTree,
  mutations: MutationsTree,
  state: initialState
});
