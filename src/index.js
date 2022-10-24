import './styles/app.scss'
import { Card } from './components/card.js'


document.querySelector('#app').innerHTML = `
  <div id='card'>
  </div>
`

Card(document.querySelector('#card'))
