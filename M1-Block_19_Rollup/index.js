import './index.css'
import imgs from './assets/javascript.png'

const titleH1 = document.createElement('h1')
const images = document.createElement('img')
titleH1.textContent = 'I love JavaScript'
images.src = imgs
images.classList.add('image')
document.body.append(titleH1)
document.body.append(images)
