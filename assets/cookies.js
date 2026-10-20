 if (localStorage.getItem('cookies') === 'ja') {
    document.querySelector('.cookiebanner').classList.add('closed');
  }
  document.querySelector('.accept').onclick = () => {
    localStorage.setItem('cookies', 'ja');
    document.querySelector('.cookiebanner').classList.add('closed');
  };
  document.querySelector('.decline').onclick = () => {
    localStorage.removeItem('cookies');
    window.close();
    window.location.href = 'https://www.google.com'; //hier was eerst die hazes is de basis banger, nav feedback aangepast naar pagina verlaten (naar google.com)
  };
  document.querySelector('.cookiesettings').onclick = () => {
    localStorage.removeItem('cookies');
    document.querySelector('.cookiebanner').classList.remove('closed');
  };
