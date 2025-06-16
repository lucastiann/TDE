const projetos = [
  {
    titulo: "Jogo Prometeu - Matéria Experiência Criativa",
    descricao: "Um jogo criado no aplicativo Constructive",
    link: "https://chshizu.itch.io/aprovacaodeprometeu",
    imagem: "imagens/prometeu.png",
  },
  {
    titulo: "Aplicativo Calculadora Ambiental - Matéria Experiência Criativa",
    descricao: "Um apllicativo feito no Processing, que calcula quantidade necessária de árvores que precisam ser plantadas para compensar a emissão de CO2 dos meio de transportes utilizados.",
    imagem: "imagens/calculadora.jpeg",
    
  },
  {
    titulo: "Site Calculadora Ambiental - Matéria Experiência Criativa",
    descricao: "Mesma proposta do aplicativo, porém em formato de site.", 
    imagem: "imagens/site_calculadora.png",
  },
  {
    titulo: "Site Portifólio - Matéria Experiência Criativa",
    descricao: "Esse site criado usando: HTML, CSS e JavaScript no VS Code.",
  },
  {
    titulo: "Jogo Jokenpo - Matéria Raciocício Algorítmico",
    descricao: "Jogo criado usando linguagem Phyton no PyCharm",
  },
  {
    titulo: "Máquina de Venda de Bebidas - Matéria Raciocício Algorítmico",
    descricao: "Algorítmo criado usando inguagem Phyton que simula uma máquina de vendas de bebidas, contendo controle de estoque e troco.",
  },  
  {
    titulo: "Listas de exercício - Matéria Resolução de Problemas com Lógica Matemática",
    descricao: "Listas que me ajudaram a exercitar a lógica, contribuindo para o raciocínio de problemas em outras matérias.",
  },
  {
    titulo: "TDE Entrevista: Futuro da Profissão - Matéria Filosofia",
    descricao: "Esse trabalho ajudou a ter uma percepção mais ampla do futuro e do mercado de trabalho para essa área da tecnologia, como também me alertou a estar preparado para as mudanças que estão por vir.",

  },
];

const lista = document.getElementById('lista-projetos');


projetos.forEach(proj => {
  const item = document.createElement('li');
  let conteudo = '';
  

  // Se tiver link e imagem, a imagem vira clicável //
  if (proj.link && proj.imagem) {
    conteudo += `
      <a href="${proj.link}" target="_blank">
        <img src="${proj.imagem}" alt="${proj.titulo}" width="250">
      </a><br>
    `;
  } else if (proj.imagem) {
    // Se tiver imagem mas sem link //
    conteudo += `<img src="${proj.imagem}" alt="${proj.titulo}" width="250"><br>`;
  }

  conteudo += `<strong>${proj.titulo}</strong>`;
  conteudo += `<p>${proj.descricao}</p>`;

  item.innerHTML = conteudo;
  lista.appendChild(item);
});
