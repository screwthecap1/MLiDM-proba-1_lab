function validateArr(el) {
    let result = false;
    if ((el[0] % 2 == 0) && ( (el[1] >= 'A' && el[1] <= 'Z') || (el[1] >= 'a' && el[1] <= 'z') ) && (el[2] % 2 == 0) && (el[3] % 2 != 0)) {
        result = true;
    }
    return result;
}

function unionArr(arr1, arr2) {
    let uArr = Array.from(new Set(arr1.concat(arr2)));
    document.getElementById("union").innerHTML = "Объединение множеств: " + "{" + uArr + "}";
}

function intersectionArr(arr1, arr2) {
    let intArr = arr1.concat(arr2);
    let intArr1 = Array.from(new Set(intArr));
    let intArrR = new Array();
    for (let i = 0; i < intArr1.length; i++)
    {
        let fl = 0;
        for (let j = i; j < intArr.length; j++)
        {
            if (intArr[j] == intArr1[i])
            {
                fl++;
            }
        }
        if (fl == 2)
        {
            intArrR.push(intArr1[i]);
        }
    }
    document.getElementById("intersection").innerHTML = "Пересечение множеств: " + "{" + intArrR + "}";
}

function additionArr(arr1, arr2) {
    let addArr1 = Array.from(arr1);
    let addArr2 = Array.from(arr2);

    // a/b
    for (let i = 0; i < arr2.length; i++)
    {
        if (addArr1.indexOf(arr2[i], 0) != -1) addArr1.splice(addArr1.indexOf(arr2[i], 0), 1);
    }

    // b/a
    for (let i = 0; i < arr1.length; i++)
    {
        if (addArr2.indexOf(arr1[i]) != - 1) delete addArr2.splice(addArr2.indexOf(arr1[i], 0), 1);
    }

    document.getElementById("addition").innerHTML = "Дополнение множеств А&#47В: " + "{" + addArr1 + "} " + '<br>' + "Дополнение множеств B&#47A: " + "{" + addArr2 + "}";
}

function symmetricAddArr(arr1, arr2) {
    let addArr1 = Array.from(arr1);
    let addArr2 = Array.from(arr2);

    // a/b
    for (let i = 0; i < arr2.length; i++)
    {
        if (addArr1.indexOf(arr2[i], 0) != -1) addArr1.splice(addArr1.indexOf(arr2[i], 0), 1);
    }

    // b/a
    for (let i = 0; i < arr1.length; i++)
    {
        if (addArr2.indexOf(arr1[i]) != - 1) delete addArr2.splice(addArr2.indexOf(arr1[i], 0), 1);
    }

    // a/b + b/a
    let symAddArr = addArr1.concat(addArr2);
    document.getElementById("symmetricAdd").innerHTML = "Симметрическая разность множеств: " + "{" + symAddArr + "}";
}

function Main ()
{
    // получение данных с формы
    let mas1 = document.getElementById('mas1').value;
    let mas2 = document.getElementById('mas2').value;

    // создание массивов
    arr1 = arr1.split(' ');
    arr2 = arr2.split(' ');

    // валидация элементов массивов
    let mess1 = "";
    for (let i = 0; i < arr1.length; i++)
    {
        if (!validateArr(arr1[i]))
        {
            mess1 += "Ошибка в "+ (i + 1) + " элементе ";
        }
    }
    document.getElementById("val1").innerHTML = mess1;

    let mess2 = "";
    for (let i = 0; i < arr2.length; i++)
    {
        if (!validateArr(arr2[i]))
        {
            mess2 += "Ошибка в "+ (i + 1) + " элементе ";
        }
    }
    document.getElementById("val2").innerHTML = mess2;

    if (mess1 == "" && mess2 == "") {
        unionArr(arr1, arr2);
        intersectionArr(arr1, arr2);
        additionArr(arr1, arr2);
        symmetricAddArr(arr1, arr2);
    }
}
