import { MainState } from "@/store/types/main";
import { ActionTree, GetterTree, Module, MutationTree } from "vuex";

export const state: MainState = {
  count: 0,
  loading: false,
};

const actions: ActionTree<MainState, MainState> = {
  INCREMENT_COUNTER({ state, commit }, $payload: number = 1) {
    commit("SET_COUNT", (state.count += $payload));
  },
  DECREMENT_COUNTER({ state, commit }, $payload: number = 1) {
    commit("SET_COUNT", (state.count -= $payload));
  },
  RESET_COUNTER({ state, commit }) {
    commit("SET_COUNT", 0);
  },
};

const getters: GetterTree<MainState, MainState> = {
  GET_LOADING: ({ loading }) => loading,
  GET_COUNT: ({ count }) => count,
};

const mutations: MutationTree<MainState> = {
  SET_LOADING(state, payload: boolean) {
    state.loading = payload;
  },
  SET_COUNT(state, payload: number) {
    state.count = payload;
  },
};

const namespaced: boolean = true;

export const main: Module<MainState, MainState> = {
  namespaced,
  state,
  mutations,
  actions,
  getters,
};
