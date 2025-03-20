const pinDigitFrequencies: Record<string, number> = {
  "0": 15.0,
  "1": 25.0,
  "2": 12.0,
  "3": 8.0,
  "4": 10.0,
  "5": 9.0,
  "6": 6.0,
  "7": 5.0,
  "8": 5.0,
  "9": 5.0,
};

function weightedRandomDigit(): string {
  const weights = pinDigitFrequencies;

  const total = 100;
  const rand = Math.random() * total;

  let cumulative = 0;
  for (const digit in weights) {
    cumulative += weights[digit];
    if (rand < cumulative) {
      return digit;
    }
  }
  return "0";
}

function genRandomPin(): string {
  let pin = "";

  for (let i = 0; i < 4; i++) {
    pin += weightedRandomDigit();
  }

  return pin;
}

function countCorrect(guess: string, secret: string): number {
  let correct: number = 0;
  for (let i = 0; i < 4; i++) {
    if (guess[i] === secret[i]) correct++;
  }

  return correct;
}

function guessPin(secret: string) {
  console.log(`Secret is: ${secret}`);

  const digits: number[] = Object.entries(pinDigitFrequencies)
    .sort((a, b) => a[1] - b[1])
    .map(([num, _]) => Number(num));

  const inSecret: Record<string, number> = {};
  const notInSecret: string[] = [];
  let correct: number = -1;
  let guess = "";

  for (let i = 0; i < digits.length; i++) {
    const strDigit = digits[i].toString();
    guess = strDigit.repeat(4);
    correct = countCorrect(guess, secret);

    console.log(`Guess ${guess} -> Correct: ${correct}`);
    if (correct === 4) break;

    if (correct > 0) {
      inSecret[strDigit] = correct;
    } else {
      notInSecret.push(strDigit);
    }
  }

  if (correct === 4) {
    console.log(`The PIN ${secret} was successfully deduced.`);
  }

  console.log(
    `\nDigits in PIN: ${Object.entries(inSecret).map(([num, _]) => num)}\n`,
  );

  const filler = notInSecret[0];

  const confirmed: (string | null)[] = [null, null, null, null];

  for (const digit in inSecret) {
    for (let pos = 0; pos < 4; pos++) {
      if (confirmed[pos] !== null) continue;

      const guessArr = [filler, filler, filler, filler];
      guessArr[pos] = digit;
      guess = guessArr.join("");

      correct = countCorrect(guess, secret);
      console.log(
        `Testing digit ${digit} at position ${pos}: ${guess} -> Correct: ${correct}`,
      );

      if (correct >= 1) {
        confirmed[pos] = digit;
      }
    }
  }

  let finalGuess = confirmed.join("");

  if (finalGuess === secret) {
    console.log(`\nConfirmed PIN digits by position: ${finalGuess}`);
  } else {
    console.log(`Failed to deduce the correct PIN. Final guess: ${finalGuess}`);
  }
}

guessPin("0649");
