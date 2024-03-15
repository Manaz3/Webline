import * as arrMethods from '../../methods'

const Methods = () => {
  
    const forEachResult: number[] = [];
    arrMethods.forEach1([3, 9], (n: number) => forEachResult.push(n + 1))
    console.log(forEachResult)
  

    const mapResult = arrMethods.map1([3, 9], (n: number) => n + 3);
    console.log(mapResult)

    const filterArr = [3, 2, 8, 9]
    const filterCallback = (n:number) => n > 3
    const filterResult = arrMethods.filter1(filterArr, filterCallback)
    console.log(`Метод filter в массиве ${filterArr} при ${filterCallback} выведет ${filterResult}`)

    const [arr, callback] = [[Promise.resolve('one'), Promise.resolve('two'), Promise.resolve('three')], (item: string) => item.toUpperCase()]
    console.log(arrMethods.asyncMap(arr, callback))

    return (
    <div>
          Some text here  
    </div>
  );
  }
    
export default Methods;