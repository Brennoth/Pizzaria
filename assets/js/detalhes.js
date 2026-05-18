document.addEventListener('DOMContentLoaded', () => {
  // 1. Cria a estrutura visual da janela de detalhes de forma limpa
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
        <div class="modal-container">
            <div class="modal-banner">
                <img id="m-img" src="" alt="">
                <button class="modal-close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <h3 id="m-title"></h3>
                <span id="m-price" class="modal-price"></span>
                <h4>Ingredientes / Descrição</h4>
                <p id="m-desc"></p>
                <button id="m-order" class="modal-action-btn">Fazer Pedido no WhatsApp</button>
            </div>
        </div>
    `;
  document.body.appendChild(overlay);

  const mImg = document.getElementById('m-img');
  const mTitle = document.getElementById('m-title');
  const mPrice = document.getElementById('m-price');
  const mDesc = document.getElementById('m-desc');
  const mOrder = document.getElementById('m-order');

  // 2. Procura de forma genérica TODOS os botões que contenham o texto "Ver Detalhes"
  const botoes = Array.from(document.querySelectorAll('button, a')).filter(
    (el) => el.textContent.trim().toLowerCase() === 'ver detalhes',
  );

  botoes.forEach((botao) => {
    botao.addEventListener('click', (e) => {
      e.preventDefault();

      // Sobe até encontrar o container do card correspondente
      const card = botao.closest("div[style*='border-radius: 12px']");
      if (!card) return;

      // Coleta os dados de dentro desse card específico
      const titulo = card.querySelector('h3')?.textContent || 'Prato Especial';
      const preco = card.querySelector('span')?.textContent || '';
      const descricao =
        card.querySelector('p')?.textContent ||
        'Feito com ingredientes frescos selecionados.';
      const imagem = card.querySelector('img')?.src || '';

      // Insere os dados dentro do modal aberto
      mTitle.textContent = titulo;
      mPrice.textContent = preco;
      mDesc.textContent = descricao;
      mImg.src = imagem;
      mImg.alt = titulo;

      // Abre a janela aplicando a classe CSS
      overlay.classList.add('active');
    });
  });

  // 3. Ações para fechar a janela (clicando no X ou fora dela)
  overlay
    .querySelector('.modal-close-btn')
    .addEventListener('click', () => overlay.classList.remove('active'));
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('active');
  });

  // 4. Integração automática com o seu WhatsApp
  mOrder.addEventListener('click', () => {
    const mensagem = encodeURIComponent(
      `Olá! Vi no site o prato *${mTitle.textContent}* e gostaria de saber mais.`,
    );
    window.open(`https://wa.me/5521999983971?text=${mensagem}`, '_blank'); // Substitua os zeros pelo seu número real
  });
});
