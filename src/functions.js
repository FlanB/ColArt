export function scrollX(el, speed) {
  el.style.transform = `translateX(${
    (window.scrollY - el.offsetTop + window.innerHeight / 2) * speed
  }px`
}
export function scrollY(el, speed) {
  el.style.transform = `translateY(${
    (window.scrollY - el.offsetTop + window.innerHeight / 2) * speed
  }px`
}
