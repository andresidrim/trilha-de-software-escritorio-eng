// Arrays no TypeScript
// Diferente de C, JavaScript e TypeScript possuem arrays dinâmicos
// O que isso significa?
// Arrays no TypeScript não são declaradas com um limite de tamanho
// Itens podem ser adicionados e removidos por meio de métodos inclusos nas
// arrays (ex: push() para adicionar itens ao final do array, pop() para remover
// itens no final do array)
const numberArray: number[] = [1, 2, 3];
console.log(numberArray);

// Modificando uma array:
// Adicionando itens:
numberArray.push(4);
console.log(numberArray);

// Removendo itens:
console.log("Item removido: " + numberArray.pop());
console.log(numberArray);

// Pergunta: Porque eu pude modificar numberArray, mesmo sendo uma constante?

// Resposta: Arrays não podem ser reatribuidas, mas o seu conteúdo pode ser
// modificado

//numberArray = []; // Erro!! Reatribuindo valor para constante
