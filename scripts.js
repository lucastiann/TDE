const projetos = [
  {
    titulo: "Jogo Prometeu",
    descricao: "Um jogo criado no aplicativo Constructive",
    link: "https://chshizu.itch.io/aprovacaodeprometeu",
    imagem: "imagens/prometeu.png",
  },
  {
    titulo: "Aplicativo Calculadora Ambiental",
    descricao: "Um apllicativo feito no Processing, que calcula quantidade necessária de árvores que precisam ser plantadas para compensar a emissão de CO2 dos meio de transportes utilizados.",
    imagem: "imagens/calculadora.jpeg",
    
  },
  {
    titulo: "Esse Site",
    descricao: "Site criado no VS Code",
  }
];

const lista = document.getElementById('lista-projetos');


projetos.forEach(proj => {
  const item = document.createElement('li');
  let conteudo = '';
  

  // Se tiver link e imagem, a imagem vira clicável
  if (proj.link && proj.imagem) {
    conteudo += `
      <a href="${proj.link}" target="_blank">
        <img src="${proj.imagem}" alt="${proj.titulo}" width="250">
      </a><br>
    `;
  } else if (proj.imagem) {
    // Se tiver imagem mas sem link
    conteudo += `<img src="${proj.imagem}" alt="${proj.titulo}" width="250"><br>`;
  }

  // Título fora do link
  conteudo += `<strong>${proj.titulo}</strong>`;
  conteudo += `<p>${proj.descricao}</p>`;

  item.innerHTML = conteudo;
  lista.appendChild(item);
});
