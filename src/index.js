import { request } from '/src/sdk/store.js'
import { createHeader } from "./components/header.js"
import { createMain } from "./components/main.js"

request()

createHeader()
createMain()
