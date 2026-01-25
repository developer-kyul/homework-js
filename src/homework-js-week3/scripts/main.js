// ===== 캐러셀 요소 선택 =====
const track = document.querySelector('.carousel__track');
const slides = document.querySelectorAll('.carousel__slide');

const prevBtn = document.querySelector('.pager__btn[data-dir="prev"]');
const nextBtn = document.querySelector('.pager__btn[data-dir="next"]');
const countEl = document.querySelector('.pager__count');

// ===== 상태 =====
let currentIndex = 0;
const totalSlides = slides.length;

// ===== 슬라이드 이동 함수 =====
function updateCarousel() {
  console.log('start');
  const offset = -currentIndex * 100;
  track.style.transform = `translateX(${offset}%)`;

  // 페이지 숫자 업데이트
  countEl.textContent = `${currentIndex + 1} / ${totalSlides}`;
}

// ===== 이전 버튼 =====
prevBtn.addEventListener('click', () => {
  if (currentIndex >= 0) {
    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    }

    updateCarousel();
  }
});

// ===== 다음 버튼 =====
nextBtn.addEventListener('click', () => {
  if (currentIndex <= totalSlides - 1) {
    currentIndex++;

    if (currentIndex === totalSlides) {
      currentIndex = 0;
    }

    updateCarousel();
  }
});

// 초기화
updateCarousel();
