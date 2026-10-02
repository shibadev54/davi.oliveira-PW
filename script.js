const html   = document.documentElement;
const btn    = document.getElementById('themeToggle');
const DARK   = 'dark';
const LIGHT  = 'light';
const saved = localStorage.getItem('theme') || LIGHT;
const svg = document.getElementsByTagName("img")[1];
localStorage.setItem('svg', "svg-light");
applyTheme(saved);
btn.addEventListener('click', () => {
  const next = html.dataset.theme === DARK ? LIGHT : DARK;
  applyTheme(next);
  localStorage.setItem('theme', next);
  let corsvg = localStorage.getItem("svg");
  if(corsvg === "svg-light"){
  svg.classList.add("svg-dark");
  svg.classList.remove("svg-light");
  localStorage.setItem('svg', "svg-dark");
  }
else{
  svg.classList.add("svg-light");
  svg.classList.remove("svg-dark");
    localStorage.setItem('svg',"svg-light" );}

});
function applyTheme(theme) {
  html.dataset.theme   = theme;
  btn.setAttribute('aria-label', theme === DARK ? 'Ativar modo claro' : 'Ativar modo escuro');
  localStorage.getItem('svg');
}