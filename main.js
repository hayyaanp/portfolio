import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hayyaan Paurobally</h1>
    <p class="read-the-docs">
      More projects coming soon
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
