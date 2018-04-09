// obtener los elementos html
let btnPrev = document.querySelector('.slider__nav__btn--left'),
    btnNext = document.querySelector('.slider__nav__btn--right'),
    slide = [...document.querySelectorAll('.slider__item')],
    paginationContent = document.querySelector('.pagination'),
    slideCount = slide.length;



// pagination
const pagination = (number) => {
    for(let i=1;i<=number;i++){
      let item = `<li class="pagination__item"></li>`;
      paginationContent.insertAdjacentHTML('beforeend',item);
    }

    itemPagination = [...document.querySelectorAll('.pagination__item')]
    itemPagination[0].classList.add("active");

    itemPagination.map((li,i,arr) => {
        li.addEventListener('click',() => {
                let liSelected = arr[i];
                 slideSelected = slide[i];

              slide.map((slide) => slide.classList.remove("active"));
              itemPagination.map((item) => item.classList.remove("active"));
              if(slideSelected.getAttribute("class").includes("active"))
              {
                slideSelected.classList.remove("active");
                liSelected.classList.remove("active");
              }
              else
              {
                slideSelected.classList.add("active");
                liSelected.classList.add("active");
              }
          });
    })
}



pagination(slideCount);

