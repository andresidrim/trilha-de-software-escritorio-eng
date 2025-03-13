// Funções
// Estrutura básica:
// function nomeDaFuncção(parametros) {
//    Ação
//    retorno se necessário (vai depender do tipo da função)
// }

function funcName(/* Parametros podem ser inclusos aqui */) {
  // Ação
}

// A função acima não possui tipo de retorno (equivalente à funções void no C)

// Exemplo de função com retorno tipado:
function typedFunc(): number /* Função *DEVE* retornar um número */ {
  // Ação
  return 0;
}

// Parametros/Argumentos da função são declarados assim:
function funcWithParams(a: number, b?: number) {
  // Ação
}
// `a` é um parametro obrigatório do tipo number
// `b` é um parametro opcional do tipo number

// Funções são chamadas assim:
funcName();

// Ou, se existirem parametros obrigatórios
funcWithParams(10 /* 5 -> valor opcional */);
