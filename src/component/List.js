import React from 'react';
import "../App.css";
import  "./List.css";
function List({list, updateList}) {

//const [first, setfirst] = useState(second);

const deleteItemFromList = key =>
{
    const newList = list.filter(itemObj => {
    return itemObj.key !==key;
    });
    updateList(newList);
};

  return (
     <div>
      {  list.map(itemObj => {
              return (
              <div className= "Item">
              <p> {itemObj.item}</p>
              <button onClick={()=> deleteItemFromList(itemObj.key)}>x</button>
              </div>
              );
          })}
  </div>
  );
}

export default List;
