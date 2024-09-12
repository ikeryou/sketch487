import './style.css'
import { Swiper } from './swiper'

document.querySelectorAll('.js-swiper').forEach((el) => {
  new Swiper({
    el: el as HTMLElement,
  });
})