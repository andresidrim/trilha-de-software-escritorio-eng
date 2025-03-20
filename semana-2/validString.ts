function isSymbolStringValid(str: string): boolean {
  const arr: string[] = [];

  for (let i = 0; i < str.length; i++) {
    const lastIndex = arr.length - 1;
    if (
      (arr[lastIndex] === "(" && str[i] === ")") ||
      (arr[lastIndex] === "[" && str[i] === "]") ||
      (arr[lastIndex] === "{" && str[i] === "}")
    )
      arr.pop();
    else arr.push(str[i]);
  }

  if (arr.length === 0) {
    console.log("String é valída");
    return true;
  } else {
    console.log("String é inválida");
    return false;
  }
}

console.log(isSymbolStringValid("{[()]}[]"));
