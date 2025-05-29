// Carrega o conteúdo de um arquivo em um elemento com ID "header"
fetch('header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header').innerHTML = data;
});

// Carrega o conteúdo de um arquivo em um elemento com ID "footer"
fetch('footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
});

// Js vakinhas

// Configurações iniciais
let progress = 10;
let valorArrecadadoAtual = 10000;
let doadores = 389;
const valorMeta = 60000;

// Seletores
const divBarra = document.getElementById('barra');
const btnBarra = document.getElementById('btnBarra');
const arrecadadoEl = document.querySelector('.pts-arrecado');
const doadoresEl = document.querySelectorAll('.pts-vakinha-info p')[1]; // Segundo <p> = Doadores

// Inicializa visualmente
divBarra.innerHTML = `<span>${progress}%</span>`;
divBarra.style.setProperty('--progress', `${progress}%`);
arrecadadoEl.textContent = `R$ ${valorArrecadadoAtual.toLocaleString('pt-BR')}`;
doadoresEl.textContent = `Doadores: ${doadores}`;

// Evento de clique
btnBarra.addEventListener('click', doar);

function doar() {
    if (progress >= 100) {
        console.log('Meta atingida!');
        return;
    }

    progress += 10;
    if (progress > 100) progress = 100;

    // Calcula novo valor baseado no progresso
    valorArrecadadoAtual = Math.floor((valorMeta * progress) / 100);

    // Simula novos doadores
    doadores += Math.floor(Math.random() * 25) + 1;

    // Atualiza barra de progresso
    divBarra.style.setProperty('--progress', `${progress}%`);
    divBarra.innerHTML = `<span>${progress}%</span>`;

    // Atualiza valores na interface
    arrecadadoEl.textContent = `R$ ${valorArrecadadoAtual.toLocaleString('pt-BR')}`;
    doadoresEl.textContent = `Doadores: ${doadores}`;
}
const crypto = require('crypto');

const secret = 'j9m7h1djma6f4lsodxqcte6cyn4qbpn1'; // Your verification secret key
const userId = current_user.id // A string UUID to identify your user

const hash = crypto.createHmac('sha256', secret).update(userId).digest('hex');



// API DO BOT DE CONVERSA

async function obterHMAC(userId) {
  const response = await fetch('/assets/api/gerar-hmac.js', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId })
  });

  const data = await response.json();
  return data.hash;
}
