//-----------------------點擊跳至下一個區塊----------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
  const blocks = document.querySelectorAll('.block');
  let currentIndex = 0;

  function showBlock(index) {
    blocks.forEach(function(block) {
      block.classList.remove('active');
    });

    blocks[index].classList.add('active');
  }

  document.getElementById('prevButton').addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? blocks.length - 1 : currentIndex - 1;
    showBlock(currentIndex);
  });

  document.getElementById('nextButton').addEventListener('click', function() {
    currentIndex = (currentIndex === blocks.length - 1) ? 0 : currentIndex + 1;
    showBlock(currentIndex);
  });

  showBlock(currentIndex);
});
    const tabs = document.querySelectorAll(".navtext");
    const blocks = document.querySelectorAll(".block");

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        tabs.forEach((tab) => tab.classList.remove("active"));
        blocks.forEach((block) => block.classList.remove("active"));

        tab.classList.add("active");
        blocks[index].classList.add("active");
      });
    });


//--------------------------------圖片輪播-----------------------------------------------------------------------------

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//-----------