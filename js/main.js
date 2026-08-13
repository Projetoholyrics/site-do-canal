document.addEventListener('DOMContentLoaded', function () {
  const btnShare = document.getElementById('btnCompartilhar');
  if (btnShare) {
    btnShare.addEventListener('click', async function () {
      const title = document.title;
      const url = window.location.href;
      if (navigator.share) {
        try {
          await navigator.share({ title, url });
        } catch (error) {
          console.warn('Erro ao compartilhar:', error);
        }
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(url);
        alert('✅ Link copiado para a área de transferência.');
      } else {
        prompt('Copie este link para compartilhar:', url);
      }
    });
  }

  const btnMenu = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (btnMenu && mobileMenu) {
    btnMenu.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }

  const cookieBox = document.getElementById('cookie-box');
  if (!cookieBox) {
    return;
  }

  if (!localStorage.getItem('cookieConsent')) {
    setTimeout(function () {
      cookieBox.classList.add('show');
    }, 300);
  }

  const acceptCookies = document.getElementById('acceptCookies');
  const declineCookies = document.getElementById('declineCookies');

  if (acceptCookies) {
    acceptCookies.addEventListener('click', function () {
      localStorage.setItem('cookieConsent', 'accepted');
      cookieBox.classList.remove('show');
    });
  }

  if (declineCookies) {
    declineCookies.addEventListener('click', function () {
      localStorage.setItem('cookieConsent', 'declined');
      cookieBox.classList.remove('show');
      console.log('Cookies recusados pelo usuário.');
    });
  }
});
