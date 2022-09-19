//import {createApp} from "vue";
import { createApp } from 'vue/dist/vue.esm-bundler';
import naive from "naive-ui";
//import App from "./App.vue";
const app = createApp({});
import Test from "./components/Test.vue";
app.component('test',Test);
//app.use(naive);


app.mount("#vue-app__magic-form");
