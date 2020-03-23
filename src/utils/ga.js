const today = new Date();

const nextWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + 7,
);

const nextYear = new Date(
  today.getFullYear() + 1,
  today.getMonth(),
  today.getDate(),
);

const enableCookies = () => {
  document.cookie = `mr_ga=true; expires=${nextYear.toUTCString()}; path=/`;
};

const disableCookies = () => {
  document.cookie = `mr_ga=false; expires=${nextWeek.toUTCString()}; path=/`;
};
const toggleAnalyticsCookies = (bool) => {
  document.cookie = `mr_ga=${bool}; expires=${nextWeek.toUTCString()}; path=/`;
};

const getCookie = (cname) => {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

const isCookieGaCookie = () => {
  return getCookie('mr_ga') === 'true';
};
const isCookieGaCookieEnabled = () => {
  const cookieValue = getCookie('mr_ga');
  if (cookieValue) {
    return cookieValue;
  }
};

export {
  toggleAnalyticsCookies,
  enableCookies,
  disableCookies,
  isCookieGaCookie,
  isCookieGaCookieEnabled,
};
