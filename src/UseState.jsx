//ЕСЛИ ПЕРЕМЕННАЯ НЕ ДОЛЖНА МЕНЯТЬСЯ ПРИ КАКОМ ЛИБО ДЕЙСТВИИ ТО НЕ НАДО ИСПОЛЬЗОВАТЬ USESTATE

import React from "react";

function UseState() {

  //!!!Warning: Each child in a list should have a unique "key" prop.
  //когда я беру список-массив и как-то его изменяю напрмер чеорез map
  //в моем случае преобразовываю массив в список через метод map
  //и каждое значение которе будет преобразовано и отрендерино должно иметь свой уникпльный ключ
  //это всё изза virualdom реакта и рекату надо дать понять что у преобращованного элемента
  //есть свой уникальный ключ, для этого могу мз метода map вщять индекс элемента 
  //и передать его как уникальный ключ, но это КОСТЫЛЬ и лучге передавать другие уникальные значения если они есть
  //key не попадёт в дом он нужен только для react и будет виртуальным

  //каждый раз при клике на баттон работает обработчик котрый вызывает вызывает фенкуцию addnumber
  //в массив добавляется чило 4 только в js 
  //react про это ничего не знает ему тоже надо об этом сказать что бы он добавил это в дом
  //для этого надо переписать let numbers = [1, 2, 3]; в hook usestate 
  //let numbers = [1, 2, 3]
  // const addNumber = () =>{
  //     numbers.push(4)
  //     console.log(numbers)
  //   }

  //использую ДЕСТРУКТУРИЗАЦИЮ-это значит взять из обьекта или массива какие-то значения или свойства
  //и превратить их в переменные
  //обращаюсь к библиотеке react
  //вызываю функцию usestate и в нее передаю что-то
  //в моем случае usestate хранит массив
  //и теперь use state хранит значения-массив в переменной numbers
  //setnumbers-функция которая будет что-то делать с numbers
  //а usestate будет оповещать react о том что произшоло с перменной и что в итогк получилочь
  //use state хранит в себе массив данных 1-переменная 2-функция
  //console.log(React.useState('variable-somedata'))

  const [numbers, setNumbers] = React.useState([1, 2, 3])

  //функция добавления числа в массив
  //каждый раз когда будет вызвана функция addnumber
  //в ней будет срабатывать функция setnumber 
  //которая изменяет numbers в которой лежит массив
  //а уже потом react понимает что надо перерендерить  
  //в переменную кладу значение длина массива(число) + 1 
  //и в параметр setnumbers говорю: ...взять весь массив numbers и добавить к нему nextnumbers
  //setnumbers меняет numbers а usestate хранит новое состояние 
  const addNumber = () => {
    const nextNumber = numbers.length + 1;
    setNumbers([...numbers, nextNumber])
  }

  return (
    <div>
      <h1>useState example</h1>
      <ul>
        {
          numbers.map((number, index) =>
            (<li key={index}>{number}</li>))
        }
      </ul>
      <button onClick={addNumber} >next number</button>
    </div>
  )
  //на баттон выешаю обработчик при клике который будет вызщывать функцию addnumber
}
export default UseState