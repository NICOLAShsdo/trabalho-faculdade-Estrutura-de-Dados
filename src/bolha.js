function bubbleSort(arr) {
    var n = arr.length; // Obtemos o tamanho do array
    for (var i = 0; i < n - 1; i++) {
        var swapped = false;
        for (var j = 0; j < n - i - 1; j++) { // Ajustando os índices
            if (arr[j] > arr[j + 1]) {
                // Troca
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) { // Se não houve trocas, a lista está ordenada
            break;
        }
    }
    return arr;
}
// Exemplo de uso
var lista = [64, 34, 25, 12, 22, 11, 90];
var ordenada = bubbleSort(lista);
console.log(ordenada);
