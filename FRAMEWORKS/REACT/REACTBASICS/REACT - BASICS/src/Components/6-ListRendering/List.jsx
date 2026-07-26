import React from 'react'

function List(props) {
  const category = props.category;
  const itemlist = props.items;
  // const fruits = [
  //   { id: 1, name: "orange", calories: 45 },
  //   { id: 2, name: "apple", calories: 95 },
  //   { id: 3, name: "banana", calories: 105 },
  //   { id: 4, name: "coconut", calories: 159 },
  //   { id: 5, name: "pinapple", calories: 37 }];

  //SORTING
  // fruits.sort((a,b) => a.name.localeCompare(b.name));//ALPHABETICAL
  // fruits.sort((a, b) => b.name.localeCompare(a.name));//REVERSE ALPHABETICAL
  // fruits.sort((a, b) => a.calories - b.calories);//NUMERIC
  // fruits.sort((a, b) => b.calories - a.calories);//REVERSE NUMERIC

  //FILTERING 
  // const lowcalfruits  = fruits.filter(fruit =>  fruit.calories<100);
  // const highcalfruits  = fruits.filter(fruit => fruit.calories>100);


  // const listitems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;<b>{fruit.calories}</b></li>)
  // const listitems = lowcalfruits.map(lowcalfruit => <li key={lowcalfruit.id}>{lowcalfruit.name}: &nbsp;<b>{lowcalfruit.calories}</b></li>)
  // const listitems = highcalfruits.map(highcalfruit => <li key={highcalfruit.id}>{highcalfruit.name}: &nbsp;<b>{highcalfruit.calories}</b></li>)

  const listitems = itemlist.map(item => <li key={item.id}>{item.name}: &nbsp;<b>{item.calories}</b></li>)


  return (
    <>
      <h3>{category}</h3>
      <ol className='li'>
        <li className='lii'>Fruit Name &nbsp; Calories</li>
        {listitems}
      </ol>
    </>

  )
}

export default List
//You can also add some default props that if there is no value in an array you fill it and also proptypes
