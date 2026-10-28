document.addEventListener('DOMContentLoaded', () => {
  // 1. Калькулятор скорости чтения (index.html)
  const calcBtn = document.getElementById('calc-btn');
  const calcPages = document.getElementById('calc-pages');
  const calcSpeed = document.getElementById('calc-speed');
  const calcResult = document.getElementById('calc-result');

  if (calcBtn && calcPages && calcSpeed && calcResult) {
    calcBtn.addEventListener('click', () => {
      const pages = Math.max(10, Number(calcPages.value) || 300);
      const speed = Number(calcSpeed.value) || 35;
      const originalHours = (pages / speed).toFixed(1);
      const briefMinutes = Math.max(5, Math.round(pages / 35));

      calcResult.innerHTML = `Чтение оригинала (${pages} стр.) займёт около <strong>${originalHours} ч.</strong> На портале LitBrief вы разберёте сюжет и смысл за <strong>${briefMinutes} мин.</strong>!`;
    });
  }

  // 2. Копирование цитат в буфер обмена (product.html)
  const copyButtons = document.querySelectorAll('.copy-quote-btn');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const quote = btn.dataset.quote;
      if (navigator.clipboard && quote) {
        navigator.clipboard.writeText(quote);
      }
      const prevText = btn.textContent;
      btn.textContent = 'Скопировано! ✓';
      btn.classList.replace('btn-outline-primary', 'btn-success');
      setTimeout(() => {
        btn.textContent = prevText;
        btn.classList.replace('btn-success', 'btn-outline-primary');
      }, 2000);
    });
  });

  // 3. Обработка отправки формы заявки (order.html)
  const orderForm = document.getElementById('order-form');
  const orderSuccess = document.getElementById('order-success');

  if (orderForm) {
    orderForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!orderForm.checkValidity()) {
        orderForm.reportValidity();
        return;
      }
      if (orderSuccess) {
        orderSuccess.hidden = false;
      }
      orderForm.reset();
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Настройка модального окна для передачи названия выбранной книги
  const orderModal = document.getElementById('orderModal');
  if (orderModal) {
    orderModal.addEventListener('show.bs.modal', (event) => {
      const button = event.relatedTarget;
      const bookTitle = button.getAttribute('data-book-title') || 'Выбранное произведение';
      const modalBookNameSpan = document.getElementById('modal-book-name');
      if (modalBookNameSpan) {
        modalBookNameSpan.textContent = bookTitle;
      }
    });
  }
});