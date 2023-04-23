// Dados do usuário
const intolerancias = ['lactose', 'glúten']; // lista de intolerâncias
const alergias = ['amendoim']; // lista de alergias

// Dados de outros usuários
const usuarios = [
  {
    nome: 'João',
    intolerancias: ['glúten'],
    alergias: []
  },
  {
    nome: 'Maria',
    intolerancias: [],
    alergias: ['amendoim']
  },
  {
    nome: 'José',
    intolerancias: ['lactose'],
    alergias: []
  }
];

// Função para encontrar usuários compatíveis
function encontrarCompativeis() {
  const compativeis = [];

  // Iterar sobre cada usuário
  for (let usuario of usuarios) {
    // Verificar se o usuário tem algo que o usuário atual precisa evitar
    if (usuario.intolerancias.some(i => intolerancias.includes(i)) || 
        usuario.alergias.some(a => alergias.includes(a))) {
      // Se sim, adicionar usuário à lista de compatíveis
      compativeis.push(usuario);
    }
  }

  return compativeis;
}

// Encontrar usuários compatíveis
const usuariosCompativeis = encontrarCompativeis();

// Mostrar lista de usuários compatíveis
if (usuariosCompativeis.length > 0) {
  console.log('Usuários compatíveis:');
  for (let usuario of usuariosCompativeis) {
    console.log(usuario.nome);
  }
} else {
  console.log('Não há usuários compatíveis no momento.');
}