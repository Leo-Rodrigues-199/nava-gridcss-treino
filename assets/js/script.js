const valuesInfo = document.querySelectorAll(".Info [data-value]");
//Animação pronta
function numberAnimation() {
  valuesInfo.forEach((value) => {
    const valueNumber = +value.innerText;
    const valueMedia = valueNumber / 100;

    let base = 0;
    const time = setInterval(() => {
      base = base + valueMedia;
      const lang = document.documentElement.lang;
      value.innerText = new Intl.NumberFormat(lang).format(base);
      if (base === valueNumber) {
        clearInterval(time);
      }
    }, 20);
  });
}
numberAnimation();
//Ativar animação apenas na view em andamento
