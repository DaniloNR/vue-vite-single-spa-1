// store.ts
import { InjectionKey } from 'vue';
import { createLogger, createStore, Store } from 'vuex';
import { MainState } from '@/store/types/main';
import { main } from '@/store/modules/main';

// import { user } from "navigation/userStore";

const plugins = [createLogger()];

// define injection keys
export const key: InjectionKey<Store<MainState>> = Symbol();

export const store = createStore({
  plugins,
  modules: { main /* user */ },
});
