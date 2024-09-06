// Методы массивов своими ручками (с типизацией)
// forEach
export function forEach1(numbers:number[], callback: (n:number, index:number) => void):void {
  for (let i = 0; i < numbers.length; i++) {
      callback(numbers[i], i)
  }
}

export function map1(numbers:number[], callback:(n:number, index:number) => number):number[] {
    const arr:number[]|null = [];
    numbers.forEach((num, index) => {
        arr.push(callback(num, index));
    })
return arr;
}

export function filter1(numbers: number[], pred: (n:number) => boolean ) {
    const arr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (pred(numbers[i])) arr.push(numbers[i]);
    }
    return arr;
}

// Асинхронный Map
export function asyncMap<T>(arr: Promise<T>[], callback: (value: T, index: number) => T):Array<T> {
    const result:Array<T> = []

    arr.forEach(async (value, index) => { 
        const data = await value;
        result.push(callback(data, index));
    })
    
    return result;
}




