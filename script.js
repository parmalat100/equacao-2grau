

function calcular() {
    var a = Number(window.document.getElementById('ax').value)
    var b = Number(window.document.getElementById('bx').value)
    var c = Number(window.document.getElementById('c').value)
    var res = window.document.getElementById('res')

    if (a == 0) {
        alert('X ao quadrado nao pode ser zero')
    } else {
        delta = ((b * b) - 4 * a * c)
    }

    if (delta < 0) {
        alert('delta Negativo, Não possui raizes reais')
    } else {
        x1 = (-b + Math.sqrt(delta)) / (2 * a)
        x2 = (-b - Math.sqrt(delta)) / (2 * a)
    }


    res.innerHTML = ``
    res.innerHTML = `<br>O valor de X' é: ${x1.toFixed(2)}`
    res.innerHTML += `<p>O valor de X'' é: ${x2.toFixed(2)}`

}
