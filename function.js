//валидация элементов
function validateElement(element) {
  return (
    ((element[0] >= "A" && element[0] <= "Z") ||
      (element[0] >= "a" && element[0] <= "z")) &&
    element[1] >= "0" &&
    element[1] <= "9" &&
    element[2] >= "0" &&
    element[2] <= "9" &&
    element[3] % 2 == 0
  );
}
//объединение массивов
function unionMas(mas1, mas2) {
  let uMas = Array.from(new Set(mas1.concat(mas2)));
  document.getElementById("union").innerHTML =
    "Объединение множеств: " + "{" + uMas + "}";
}
//пересечение массивов
function intersectionMas(mas1, mas2) {
  let intMas = mas1.concat(mas2);
  let intMas1 = Array.from(new Set(intMas));
  let intMasR = new Array();
  for (let i = 0; i < intMas1.length; i++) {
    let q = 0;
    for (let j = i; j < intMas.length; j++) {
      if (intMas[j] == intMas1[i]) {
        q++;
      }
    }
    if (q >= 2) {
      intMasR.push(intMas1[i]);
    }
  }
  document.getElementById("intersection").innerHTML =
    "Пересечение множеств: " + "{" + intMasR + "}";
}

//дополнения множеств
function additionMas(mas1, mas2) {
  let addMas1 = Array.from(mas1);
  let addMas2 = Array.from(mas2);

  // a/b
  for (let i = 0; i < mas2.length; i++) {
    if (addMas1.indexOf(mas2[i], 0) != -1)
      addMas1.splice(addMas1.indexOf(mas2[i], 0), 1);
  }

  // b/a
  for (let i = 0; i < mas1.length; i++) {
    if (addMas2.indexOf(mas1[i]) != -1)
      addMas2.splice(addMas2.indexOf(mas1[i], 0), 1);
  }

  document.getElementById("addition").innerHTML =
    "Дополнение множеств А/В: " +
    "{" +
    addMas1 +
    "} " +
    "<br>" +
    "Дополнение множеств B/A: " +
    "{" +
    addMas2 +
    "}";
}

//симметрическая разность
function symmetricAddMas(mas1, mas2) {
  let addMas1 = Array.from(mas1);
  let addMas2 = Array.from(mas2);

  // a/b
  for (let i = 0; i < mas2.length; i++) {
    if (addMas1.indexOf(mas2[i], 0) != -1)
      addMas1.splice(addMas1.indexOf(mas2[i], 0), 1);
  }

  // b/a
  for (let i = 0; i < mas1.length; i++) {
    if (addMas2.indexOf(mas1[i]) != -1)
      addMas2.splice(addMas2.indexOf(mas1[i], 0), 1);
  }

  // a/b + b/a
  let symAddMas = addMas1.concat(addMas2);
  document.getElementById("symmetricAdd").innerHTML =
    "Симметрическая разность множеств: " + "{" + symAddMas + "}";
}

function Main() {
  let mas1 = document.getElementById("id_mas1").value;
  let mas2 = document.getElementById("id_mas2").value;
  let strError = "";
  mas1 = mas1.split(" ");
  mas2 = mas2.split(" ");
  console.log(mas1);
  for (let i = 0; i < mas1.length; i++) {
    if (!validateElement(mas1[i]))
      strError += "Ошибка в " + (i + 1) + " элементе первого массива<br>";
  }

  for (let i = 0; i < mas2.length; i++) {
    if (!validateElement(mas2[i]))
      strError += "Ошибка в " + (i + 1) + " элементе второго массива<br>";
  }

  if (strError == "") {
    document.getElementById("result").innerHTML = "Результат расчета: <br>";
    unionMas(mas1, mas2);
    intersectionMas(mas1, mas2);
    additionMas(mas1, mas2);
    symmetricAddMas(mas1, mas2);
  } else {
    document.getElementById("result").innerHTML = strError;
  }
}

