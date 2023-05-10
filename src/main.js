import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from "element-plus"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"

// PRIMITIVES
import Button from './components/primitives/Button.vue'
import ButtonGroup from './components/primitives/ButtonGroup.vue'
import Dropdown from './components/primitives/Dropdown.vue'
import Form from './components/primitives/Form.vue'
import Modal from './components/primitives/Modal.vue'
import Row from './components/primitives/Row.vue'
import Tag from './components/primitives/Tag.vue'
import TextArea from './components/primitives/TextArea.vue'
import TextInput from './components/primitives/TextInput.vue'

// UI
import AddOrderButton from './components/ui/AddOrderButton.vue'
import AddOrderModal from './components/ui/AddOrderModal.vue'
import CloudModal from './components/ui/CloudModal.vue'
import CloudButton from './components/ui/CloudButton.vue'
import DirectionTag from './components/ui/DirectionTag.vue'
import DownloadButton from './components/ui/DownloadButton.vue'
import Header from './components/ui/Header.vue'
import MainForm from './components/ui/MainForm.vue'
import MainButtons from './components/ui/MainButtons.vue'
import Results from './components/ui/Results.vue'
import StatusDropdown from './components/ui/StatusDropdown.vue'
import UploadButton from './components/ui/UploadButton.vue'

// ICONS
import IconArrowUpRight from './components/icons/IconArrowUpRight.vue'
import IconArrowDownRight from './components/icons/IconArrowDownRight.vue'
import IconArrowsCollapse from './components/icons/IconArrowsCollapse.vue'
import IconClose from './components/icons/IconClose.vue'
import IconCloudFill from './components/icons/IconCloudFill.vue'
import IconGearFill from './components/icons/IconGearFill.vue'
import IconPlus from './components/icons/IconPlus.vue'

import App from './App.vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// PRIMITIVE COMPONENTS
app.component("c-button", Button)
app.component("c-button-group", ButtonGroup)
app.component("c-dropdown", Dropdown)
app.component("c-form", Form)
app.component("c-modal", Modal)
app.component("c-row", Row)
app.component("c-tag", Tag)
app.component("c-text-area", TextArea)
app.component("c-text-input", TextInput)

// UI COMPONENTS
app.component("c-add-button", AddOrderButton)
app.component("c-add-modal", AddOrderModal)
app.component("c-cloud-modal", CloudModal)
app.component("c-cloud-button", CloudButton)
app.component("c-direction-tag", DirectionTag)
app.component("c-download-button", DownloadButton)
app.component("c-header", Header)
app.component("c-main-form", MainForm)
app.component("c-main-buttons", MainButtons)
app.component("c-results", Results)
app.component("c-status-dropdown", StatusDropdown)
app.component("c-upload-button", UploadButton)

// ICONS
app.component("IconArrowUpRight", IconArrowUpRight)
app.component("IconArrowDownRight", IconArrowDownRight)
app.component("IconArrowsCollapse", IconArrowsCollapse)
app.component("IconClose", IconClose)
app.component("IconCloudFill", IconCloudFill)
app.component("IconGearFill", IconGearFill)
app.component("IconPlus", IconPlus)

app.use(ElementPlus)
app.mount('#app')
