import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import FileDropContainer from './components/FileDropContainer.vue';
import FilesHistoryContainer from './components/FilesHistoryContainer.vue';
import CalculationsHistory from './components/CalculationsHistory.vue';

const app = createApp(App)
app.component('FilesDropContainer', FileDropContainer)
app.component('FilesHistoryContainer', FilesHistoryContainer)
app.component('CalculationsHistory',CalculationsHistory)

app.mount('#app')
