function bolhanãotimizada(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function bolhaotimizada(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
    return arr;
}

// Função para gerar um vetor em ordem reversa
function generateReverseArray(size: number): number[] {
    return Array.from({ length: size }, (_, i) => size - i);
}

// Função para gerar um vetor aleatório
function generateRandomArray(size: number): number[] {
    return Array.from({ length: size }, () => Math.floor(Math.random() * size));
}

// Função para medir o tempo de execução
function measureExecutionTime(sortFunc: (arr: number[]) => number[], arr: number[]): number {
    const start = performance.now();
    sortFunc(arr);
    const end = performance.now();
    return end - start;
}

// Tamanhos dos vetores a serem testados
const sizes = [1000, 10000, 100000];
const results: { size: number; unoptimized: { reverse: number; random: number; }; optimized: { reverse: number; random: number; }; }[] = [];

sizes.forEach(size => {
    const reverseArray = generateReverseArray(size);
    const randomArray = generateRandomArray(size);

    // Medir tempo para bubble sort não otimizado
    const timeUnoptimizedReverse = measureExecutionTime(bolhanãotimizada, [...reverseArray]);
    const timeUnoptimizedRandom = measureExecutionTime(bolhanãotimizada, [...randomArray]);

    // Medir tempo para bubble sort otimizado
    const timeOptimizedReverse = measureExecutionTime(bolhaotimizada, [...reverseArray]);
    const timeOptimizedRandom = measureExecutionTime(bolhaotimizada, [...randomArray]);

    results.push({
        size,
        unoptimized: { reverse: timeUnoptimizedReverse, random: timeUnoptimizedRandom },
        optimized: { reverse: timeOptimizedReverse, random: timeOptimizedRandom }
    });
});

// Exibir resultados
console.table(results);