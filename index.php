<!DOCTYPE html>
<html>

<head>
</head>
<body>
    <h1>Пример выполнения лабораторной работы</h1>
    <form action="" method="POST" onSubmit="javascript: return getData(this)">
        Первый массив
        <input type="text" name="mas1" id="id_mas1" value=""><br>
        Второй массив
        <input type="text" name="mas2" id="id_mas2">
        <br>
        <input type="submit" value="Рассчитать значения">
        <input type="button" onClick="Main()" value="Рассчитать значения 2">
    </form>
    <br>
    <div id="result">

    </div>
    <script src="/scripts/function.js" type="text/javascript"></script>

</body>
<html>