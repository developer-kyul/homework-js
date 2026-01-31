const planCards = document.querySelectorAll('.plan-card');
const selectionInfo = document.querySelector('.selection-info');

const planNameEl = document.querySelector('[data-id="plan-name"]');
const planPriceEl = document.querySelector('[data-id="plan-price"]');

function choice(e) {
  const clickedCard = e.target.closest('.plan-card');
  if (!clickedCard) return;

  const isSelected = clickedCard.classList.contains('selected');

  // 1️⃣ 모든 카드 선택 해제
  planCards.forEach((card) => card.classList.remove('selected'));

  // 2️⃣ 이미 선택된 카드를 다시 클릭한 경우 → 취소
  if (isSelected) {
    selectionInfo.classList.remove('show');
    planNameEl.textContent = '';
    planPriceEl.textContent = '';
    return;
  }

  // 3️⃣ 새로 선택하는 경우
  clickedCard.classList.add('selected');

  planNameEl.textContent = clickedCard.dataset.plan;
  planPriceEl.textContent = clickedCard.dataset.price;

  selectionInfo.classList.add('show');
}

planCards.forEach((card) => {
  card.addEventListener('click', choice);
});
