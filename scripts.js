const projetos = [
  {
    titulo: "Jogo Prometeu",
    descricao: "Um jogo criado no aplicativo Constructive",
    link: "https://chshizu.itch.io/aprovacaodeprometeu",
    imagem: "imagens/prometeu.png",
  },
  {
    titulo: "Jogo da Velha",
    descricao: "Jogo da velha com JavaScript puro.",
  },
  {
    titulo: "Relógio Digital",
    descricao: "Um relógio digital em tempo real com HTML, CSS e JS.",
  }
];

const lista = document.getElementById('lista-projetos');

projetos.forEach(proj => {
  const item = document.createElement('li');
  item.innerHTML = `
    <a href="${proj.link}" target="_blank">
      <img src="${proj.imagem}" alt="${proj.titulo}" width="250"><br>
      <strong>${proj.titulo}</strong>
    </a>
    <p>${proj.descricao}</p>
  `;
  lista.appendChild(item);
});
