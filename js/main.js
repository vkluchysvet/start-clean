const chooseColor = document.querySelectorAll('.choose__color-btn');
const contentItem = document.querySelectorAll('.content-item');

const links = document.querySelectorAll(".menu__item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({ behavior: "smooth" });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top");
   
    // Показать/скрыть кнопку при прокрутке страницы
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 600) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    });
   
    // Плавная прокрутка при клике на кнопку
    backToTop.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

chooseColor.forEach(function (element) {
    element.addEventListener('click', open)
})

function open(evt) {
    const target = evt.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);

    chooseColor.forEach(function (item) {
        item.classList.remove('choose__color-btn--active')
    })

    target.classList.add('choose__color-btn--active')

    contentItem.forEach(function (item) {
        item.classList.remove('content-item__active')
    });

    contentActive.forEach(function (item) {
        item.classList.add('content-item__active')
    })

}