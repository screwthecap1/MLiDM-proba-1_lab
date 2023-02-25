function getData(forms) {
  const fData = new FormData(forms);
  console.log(fData);
  console.log(fData.get("mas1"));
  console.log(fData.get("mas2"));
  return false;
}

function validateElement(element) {
  return (
    element[0] >= "a" &&
    element[0] <= "z" &&
    element[1] >= "0" &&
    element[1] <= "9" &&
    element[2] >= "0" &&
    element[2] <= "9" &&
    element[3] % 2 == 0
  );
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
      strError += "Ошибка в " + (i + 1) + " элементе первого массива\n";
  }

  for (let i = 0; i < mas2.length; i++) {
    if (!validateElement(mas2[i]))
      strError += "Ошибка в " + (i + 1) + " элементе второго массива\n";
  }

  if (strError == "") {
    document.getElementById("result").innerHTML = "Результат расчета: <br>";
  } else {
    document.getElementById("result").innerHTML = strError;
  }
}
