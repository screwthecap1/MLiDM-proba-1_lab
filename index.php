<!DOCTYPE html>
<html>
<head>
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>МЛиДМ_1</title>
</head>
<body>
    <h1>Лабораторная работа по дискретной математике №1 (вариант 8)</h1>
    <br>
    <form action="" method="POST" onSubmit="javascript: return getData(this)">
        <h2>Введите данные: буква, число, число, четное число (bcci)</h2>
        Первый массив
        <input type="text" name="mas1" id="id_mas1"><br>
        Второй массив
        <input type="text" name="mas2" id="id_mas2">
        <br>
        <input type="button" onClick="Main()" value="Рассчитать значения">
    </form>
    <br>
    <div id = "result"></div>
    <div id = "union"></div>
    <div id = "intersection"></div> 
    <div id = "addition"></div>
    <div id = "symmetricAdd"></div>
    <script src="/scripts/function.js" type="text/javascript"></script>
</body>
<html>
