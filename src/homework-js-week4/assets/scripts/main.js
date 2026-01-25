//선택자
const tabButtons = document.querySelectorAll('.tab-nav__button');
const tabPanels = document.querySelectorAll('.tab-panel');

//탭 버튼을 누르면 작동하는 함수
function activateTab(button) {
  const targetId = button.dataset.target;
  const targetPanel = document.getElementById(targetId);

  // 전부 비활성화
  tabButtons.forEach((btn) => {
    btn.classList.remove('tab-nav__button--active');
    btn.setAttribute('aria-selected', 'false');
    btn.setAttribute('tabindex', '-1');
  });

  tabPanels.forEach((panel) => {
    panel.classList.remove('tab-panel--active');
    panel.setAttribute('hidden', '');
  });

  // 선택한 것만 활성화
  button.classList.add('tab-nav__button--active');
  button.setAttribute('aria-selected', 'true');
  button.setAttribute('tabindex', '0');

  if (targetPanel) {
    targetPanel.classList.add('tab-panel--active');
    targetPanel.removeAttribute('hidden');
    targetPanel.focus();
  }
}

// 이벤트 연결
tabButtons.forEach((button) => {
  button.addEventListener('click', () => activateTab(button));
});
