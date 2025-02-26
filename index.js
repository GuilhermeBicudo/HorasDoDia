// Função botão verificar
function Verificar() {
  // Criado os ouvintes para receber os dados e armazená-los
  let horas = parseFloat(document.querySelector("input#num").value);
  const res = document.querySelector("div.res");

  // Lógica do programa
  if (isNaN(horas) || horas < 0 || horas >= 24) {
    res.innerText = "Coloque os horários corretos!";
  } else if (horas >= 6 && horas < 12) {
    res.innerText = `Bom dia, são ${horas.toFixed(2)} horas.`;
    res.innerHTML += "<img src='imagens/imgdia.jpg' alt='Bom dia'>";
  } else if (horas >= 12 && horas < 18) {
    res.innerText = `Boa tarde, são ${horas.toFixed(2)} horas.`;
    res.innerHTML += "<img src='imagens/imgtarde.jpg' alt='Boa tarde'>";
  } else if (horas >= 18 && horas < 24) {
    res.innerText = `Boa noite, são ${horas.toFixed(2)} horas.`;
    res.innerHTML += "<img src='imagens/imgnoite.jpg' alt='Boa noite'>";
  } else {
    if (horas == 1) {
      res.innerText = `Boa madrugada, são ${horas.toFixed(2)} hora.`;
      res.innerHTML +=
        "<img src='imagens/imgmadrugada.jpg' alt='Boa madrugada'>";
    } else {
      res.innerText = `Boa madrugada, são ${horas.toFixed(2)} horas.`;
      res.innerHTML +=
        "<img src='imagens/imgmadrugada.jpg' alt='Boa madrugada'>";
    }
  }
}

// Função botão resetar
function Resetar() {
  const res = document.querySelector("div.res");
  res.innerText = "";
}
