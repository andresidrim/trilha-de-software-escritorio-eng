# Semana 2 - Lógica de Programação

## Parte 1

- ### Bate papo sobre uso de IAs

- ### Passos para resolução de problemas

  - #### Análise do problema

    - ##### Leitura do problema

    - ##### Definir dados de entrada e saída

      - ###### Valores já recebidos

      - ###### Valores a serem obtidos

    - ##### Estruturação da ideia

      - ##### Passos para resolução da ideia

        - ###### Dica: Anotações e Diagramas

      - ##### "Tradução" das ideias para código

    - #### Programação da solução

## Parte 2

- ### Desafios

  - #### [Two Sum Problem](https://leetcode.com/problems/two-sum/)

    - ```
        Dado um array de inteiros nums e um inteiro target, retorne índices dos dois números de forma que eles somem target.

        Você pode assumir que cada entrada teria exatamente uma solução, e você não pode usar o mesmo elemento duas vezes.

        Você pode retornar a resposta em qualquer ordem.

        Exemplo 1:

        Entrada: nums = [2,7,11,15], target = 9
        Saída: [0,1]
        Explicação: Como nums[0] + nums[1] == 9, retornamos [0, 1].
        Exemplo 2:

        Entrada: nums = [3,2,4], alvo = 6
        Saída: [1,2]
        Exemplo 3:

        Entrada: nums = [3,3], alvo = 6
        Saída: [0,1]

        Restrições:

        2 <= nums.length <= 104
        -109 <= nums[i] <= 109
        -109 <= alvo <= 109
        Existe apenas uma resposta válida.

        Acompanhamento: Você consegue criar um algoritmo com complexidade de tempo menor que O(n2)?
      ```

  - #### Verificar se (), [], {} fecham corretamente

    - ```
        Dada uma string contendo os símbolos "()", "[]" e "{}", determine se a sequência está corretamente balanceada.

        A string é considerada válida se:

        - Cada par de parênteses, colchetes e chaves está corretamente fechado.
        - A ordem dos fechamentos respeita a sequência de abertura.
        - Nenhum símbolo extra ou desbalanceado está presente.
        - Você pode retornar a resposta como true ou false.

        Exemplo 1

        Entradas: str = "{[()]}[]"
        Saídas: String é válida
                true

        Exemplo 2

        Entrada: str = "{[(])}"
        Saídas: String é inválida
                false

        Restrições:
        - 1 <= str.length <= 10⁴
        - A string contém apenas os caracteres "()[]{}".
      ```

  - #### Calcular quando todos os dias da semana de um ano

    - ```
        Dado um ano com 12 meses e um primeiro dia da semana definido, retorne um objeto contendo todas as ocorrências de um determinado dia da semana ao longo do ano.

        Você pode assumir que o ano tem exatamente 365 dias (não considerando anos bissextos).

        Exemplo 1:

        Entradas: firstDay = "Quarta", targetDay = "Sexta"
        Saída: {
            Janeiro: [ 3, 10, 17, 24, 31 ],
            Fevereiro: [ 7, 14, 21, 28 ],
            Março: [ 7, 14, 21, 28 ],
            Abril: [ 4, 11, 18, 25 ],
            Maio: [ 2, 9, 16, 23, 30 ],
            Junho: [ 6, 13, 20, 27 ],
            Julho: [ 4, 11, 18, 25 ],
            Agosto: [ 1, 8, 15, 22, 29 ],
            Setembro: [ 5, 12, 19, 26 ],
            Outubro: [ 3, 10, 17, 24, 31 ],
            Novembro: [ 7, 14, 21, 28 ],
            Dezembro: [ 5, 12, 19, 26 ]
          }

       Restrições:
       - O ano sempre terá 365 dias (não bissexto).
       - O primeiro dia do ano será sempre um dos dias válidos ("Segunda", "Terça", "Quarta", etc.).
      ```

  - ### Quebrar senha de 4 dígitos

    - ```
      Dado um código PIN de 4 dígitos, desenvolva um algoritmo que tente adivinhar a senha utilizando um ataque de força bruta.

      O sistema informa apenas quantos dígitos estão corretos, sem indicar quais deles estão na posição correta.

      O algoritmo deve determinar quais dígitos fazem parte da senha e, posteriormente, encontrar a ordem correta para formar o PIN secreto.

      Exemplo 1:

      Entrada: secret = '0649'
      Saída:
      -------------------------------------------------
      Secret is: 0649
      Guess 7777 -> Correct: 0
      Guess 8888 -> Correct: 0
      Guess 9999 -> Correct: 1
      Guess 6666 -> Correct: 1
      Guess 3333 -> Correct: 0
      Guess 5555 -> Correct: 0
      Guess 4444 -> Correct: 1
      Guess 2222 -> Correct: 0
      Guess 0000 -> Correct: 1
      Guess 1111 -> Correct: 0

      Digits in PIN: 0,4,6,9

      Testing digit 0 at position 0: 0777 -> Correct: 1
      Testing digit 0 at position 1: 7077 -> Correct: 0
      Testing digit 0 at position 2: 7707 -> Correct: 0
      Testing digit 0 at position 3: 7770 -> Correct: 0
      Testing digit 4 at position 1: 7477 -> Correct: 0
      Testing digit 4 at position 2: 7747 -> Correct: 1
      Testing digit 4 at position 3: 7774 -> Correct: 0
      Testing digit 6 at position 1: 7677 -> Correct: 1
      Testing digit 6 at position 3: 7776 -> Correct: 0
      Testing digit 9 at position 3: 7779 -> Correct: 1
      Confirmed PIN digits by position: 0649
      -------------------------------------------------

      Restrições:
        - O PIN contém exatamente 4 dígitos.
        - Cada dígito está entre 0-9.
        - O sistema retorna apenas a quantidade de dígitos corretos, sem informar suas posições.
        - Sempre existe exatamente um PIN válido para cada execução.
      ```
