/// Mes sélecteurs et mes variables, constantes
const digit = document.querySelector(".digits");
const operator = document.querySelector(".operators");
const operations = document.querySelector(".for-operations");
const screen = document.querySelector(".screen");
const display = document.querySelector(".display");
const clear = document.querySelector(".clear");
const suppr = document.querySelector(".delete");
const equalSign = document.querySelector(".equal");
let num1;
let num2;
let isSecondNumberStarting = false;
let sign;
let keyboard = "desactive";
const keyboardDigits = "0123456789.=";
let result;
let target;

/*** MES EVENEMENTS  ***/

/// Evènement (principal) pour attribuer les nombres et l'opérateur
operations.addEventListener("click", (e) => getNumberAndOperator(e));
window.addEventListener("keydown", (e) => {
  (getNumberAndOperator(e), triggerOperation(e));
});

/// Evènement pour clear
clear.addEventListener("click", (e) => {
  display.textContent = "";
  screen.textContent = "0";
  num1 = undefined;
  num2 = undefined;
  sign = undefined;
  result = undefined;
});

/// Evènement pour supprimer un chiffre à la fois
suppr.addEventListener("click", deleteNumber);

/// Evènement pour effectuer l'opération
equalSign.addEventListener("click", (e) => triggerOperation(e));

/*** MES FONCTIONS ***/

/// Fonction pour attribuer les nombres et l'opérateur
function getNumberAndOperator(event) {
  if (event.type === "keydown") {
    target = event.key;
    keyboard = "active";
    getNumAndOpByKey(event);
  } else {
    target = event.target;
    getNumAndOpByClick(event);
  }
}

/// Fonction pour update les nombres
function getNumber(event) {
  if (event.type === "click") {
    target = event.target;
    getNumberByClick();
  } else {
    target = event.key;

    keyboard = "active";
    getNumberByKey();
  }
}

/// Fonction qui update les nombres par click
function getNumberByClick() {
  if (target.textContent === "=") {
    number = "";
  } else {
    number = target.textContent;

    if (sign === undefined) {
      // Si le premier nombre affiché est 0
      if (screen.textContent === "0") {
        putDot(number);
      } else {
        checkTheDot(number);
      }
      number = screen.textContent;
      console.log(`number : ${number}`);
    } else {
      //Je vérifie si c'est le début du deuxième nombre
      if (isSecondNumberStarting === true) {
        // Si le nombre affiché est 0
        if (screen.textContent === "0") {
          putDot(number);
        } else {
          screen.textContent = number;
        }

        isSecondNumberStarting = false;
      } else {
        //je vérifie si c'est d'abord 0 qu'on à taper pour qu'il ne soit pas le premier chiffre
        if (screen.textContent === "0") {
          putDot(number);
        } else {
          checkTheDot(number);
        }
      }

      number = screen.textContent;
    }
  }
}

/// Fonction qui update les nombres par touche clavier
function getNumberByKey() {
  if (target === "=") {
    number = "";
  } else {
    number = target;

    if (sign === undefined) {
      // Si le premier nombre affiché est 0
      if (screen.textContent === "0") {
        putDot(number);
      } else {
        checkTheDot(number);
      }
      number = screen.textContent;
      console.log(`number : ${number}`);
    } else {
      //Je vérifie si c'est le début du deuxième nombre
      if (isSecondNumberStarting === true) {
        // Si le nombre affiché est 0
        if (screen.textContent === "0") {
          putDot(number);
        } else {
          screen.textContent = number;
        }

        isSecondNumberStarting = false;
      } else {
        //je vérifie si c'est d'abord 0 qu'on à taper pour qu'il ne soit pas le premier chiffre
        if (screen.textContent === "0") {
          putDot(number);
        } else {
          checkTheDot(number);
        }
      }

      number = screen.textContent;
    }
  }
}

/// Fonction pour avoir le nombre et l'opérateur par clic
function getNumAndOpByClick(event) {
  if (target.matches("button")) {
    if (target.matches(".digit")) {
      getNumber(event);
    } else {
      if (target.matches(".op")) {
        if (sign !== undefined) {
          // Je verifie si c'est un changement de signe d'opération
          if (isSecondNumberStarting) {
            getOperationSign(event);
            display.textContent = `${num1} ${sign} `;
          } else {
            doTheOperation(event);
          }
        } else {
          getOperationSign(event);

          if (num1 === undefined) {
            num1 = screen.textContent;
            display.textContent = `${num1} ${sign} `;
          } else {
            display.textContent = `${screen.textContent} ${sign} `;
          }
        }
      }
    }
  }
}

/// Fonction pour avoir le nombre et l'opérateur par key
function getNumAndOpByKey(event) {
  if (keyboardDigits.includes(target)) {
    console.log(target + " est un digit");
    getNumber(event);
  } else {
    //Je vérifie si c'est un signe d'opération
    if (target == "+" || target == "-" || target == "/" || target == "*") {
      if (sign !== undefined) {
        // Je verifie si c'est un changement de signe d'opération
        if (isSecondNumberStarting) {
          getOperationSign(event);
          display.textContent = `${num1} ${sign} `; // ATTENTION
        } else {
          doTheOperation(event);
        }
      } else {
        getOperationSign(event);

        if (num1 === undefined) {
          num1 = screen.textContent;
          display.textContent = `${num1} ${sign} `;
        } else {
          display.textContent = `${screen.textContent} ${sign} `;
        }
      }
    } else {
    }
  }
}

/// Fonction pour savoir quel signe d'opération a été choisit
function getOperationSign(event) {
  if (event.type === "click") {
    target = event.target;

    if (target.matches(".op")) {
      sign = target.textContent;
      isSecondNumberStarting = true;
    }
  } else {
    target = event.key;

    if (target == "+" || target == "-" || target == "/" || target == "*") {
      sign = target;
      isSecondNumberStarting = true;
    } else {
      console.log(`${target} n'est pas un signe`);
    }
  }
}

/// Fonction d'addition
function add(num1, num2) {
  return num1 + num2;
}

//// Fonction de soustraction
function subtract(num1, num2) {
  return num1 - num2;
}

/// Fonction de multiplication
function multiply(num1, num2) {
  return num1 * num2;
}

/// Fonction divide
function divide(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    alert("Can't divide by zero");
  }
  return num1 / num2;
}

/// Fonction pour effectuer les opérations
function operate(num1, num2, operation) {
  let result;

  switch (operation) {
    case "+":
      operation = add;
      break;
    case "-":
      operation = subtract;
      break;
    case "/":
      operation = divide;
      break;
    case "x":
      operation = multiply;
      break;
    case "*":
      operation = multiply;
      break;
  }

  result = operation(+num1, +num2);
  console.log(`num1: ${num1} ${operation} num2: ${num2} = ${result}`);

  return result;
}

///Fonction qui déclenche l'opération
function triggerOperation(event) {
  if (event.type === "click") {
    let target = event.target;

    if (target.matches(".equal")) {
      if (sign !== undefined) {
        num2 = screen.textContent;
        display.textContent = `${num1} ${sign} ${num2} = `;
        console.log("num2 = " + num2);

        result = operate(num1, num2, sign);
        console.log(`${num1} ${sign} ${num2} = ${result}`);
        screen.textContent = result;
        sign = undefined;
      }
    }
  } else {
    let target = event.key;

    if (target === "=") {
      if (sign !== undefined) {
        num2 = screen.textContent;
        display.textContent = `${num1} ${sign} ${num2} = `;
        console.log("num2 = " + num2);

        result = operate(num1, num2, sign);
        console.log(`${num1} ${sign} ${num2} = ${result}`);
        screen.textContent = result;
        sign = undefined;
      }
    }
  }
}

/// Fonction qui effectue l'operation
function doTheOperation(e) {
  if (sign !== undefined) {
    num2 = screen.textContent;
    result = operate(num1, num2, sign);

    display.textContent = `${num1} ${sign} ${num2} = `;
    console.log("num2 = " + num2);
    console.log(`${num1} ${sign} ${num2} = ${result}`);
    screen.textContent = result;

    // // Je vérifie si on a déjà effectuer un premier calcul
    if (result !== undefined) {
      if (e.type === "click") {
        target = e.target;
        sign = target.textContent;
        num1 = result;
        display.textContent = `${num1} ${sign} `;
        isSecondNumberStarting = true;
      } else {
        target = e.key;
        sign = target;
        num1 = result;
        display.textContent = `${num1} ${sign} `;
        isSecondNumberStarting = true;
      }
    }
  }
}

/// Fonction pour supprimer des chiffre
function deleteNumber() {
  let content = screen.textContent;

  if (content.length === 1) {
    screen.textContent = "0";
  } else {
    content = content.slice(0, -1);
    screen.textContent = content;
  }
}

/// Foncton pour ajouter le "."
function putDot(number) {
  if (number === ".") {
    screen.textContent += number;
  } else {
    screen.textContent = number;
  }
}

/// Fonction pour savoir si le "." est déjà présent
function checkTheDot(number) {
  if (screen.textContent.includes(".") && number === ".") {
  } else {
    screen.textContent += number;
  }
}
