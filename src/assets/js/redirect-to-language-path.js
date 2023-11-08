var navigatorLang = navigator.language;

var pathName = window.location.pathname;
var pathNameWithoutLang = pathName.replace('/es/', '/').replace('/pt/', '/');
var pathNameWithRedirectLang;

var webLang = 'en'
if (pathName.includes('/es/')) webLang = 'es';
if (pathName.includes('/pt/')) webLang = 'pt';

var langStored = localStorage.getItem('lang')
if (langStored) {
  if (langStored != webLang) {
    if (langStored == 'en') pathNameWithRedirectLang = pathNameWithoutLang;
    else pathNameWithRedirectLang = '/' + langStored + pathNameWithoutLang;
  }
} else {
  let navigatorLang;
  if (navigator.language.includes('en') && webLanguages.en) navigatorLang = 'en';
  if (navigator.language.includes('es') && webLanguages.es) navigatorLang = 'es';
  if (navigator.language.includes('pt') && webLanguages.pt) navigatorLang = 'pt';

  if (navigatorLang && navigatorLang != webLang) {
    if (navigatorLang == 'en') pathNameWithRedirectLang = pathNameWithoutLang;
    else pathNameWithRedirectLang = '/' + navigatorLang + pathNameWithoutLang;
  }
}

if (pathNameWithRedirectLang) window.location.href = pathNameWithRedirectLang;