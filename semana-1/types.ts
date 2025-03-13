// Tipágem
// Tipos basicos do TypeScript:
// number -> Os tipos númericos basicos são agrupados em somente um tipo
// boolean -> Verdadeiro ou falso
// string -> Textos
// Variáveis sem tipagem explicita irão possuir o tipo do valor atribuido
let num = 1;
// num = "string"; // Erro!!
//
// Também podem ter tipágem indefinida
let undefinedVariable;
console.log(undefinedVariable);
// `undefined` também é um tipo, é usado em variáveis opcionais
let optionalVariable: number | undefined = undefined;
optionalVariable = 10;

// Variáveis também podem ter mais de um tipo
let numberOrString: number | string = 0;
numberOrString = "Também pode ser string";
// TypeScript também possibilita a criação de tipos costumizados
type WeekDays =
  | "Segunda"
  | "Terça"
  | "Quarta"
  | "Quinta"
  | "Sexta"
  | "Sábado"
  | "Domingo";

// Aplicação do tipo:
const weekday: WeekDays = "Segunda";

// Tipos também podem ser compostos de outros tipos, assim como structs em C
type MultType = {
  num: number;
  str: string;
  optionalBool?: boolean; // Variáveis opcionais também podem ser declaradas dessa forma. Funciona da mesma maneira que boolean | undefined
};

const multType: MultType = { num: 1, str: "str", optionalBool: true };
