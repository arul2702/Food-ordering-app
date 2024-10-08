import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../Contexts/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {
  // console.log(category);
  
    const {food_list} = useContext(StoreContext); 
  return (
    <div className="food-display" id="food-display">
        <h2>Top dishes near you</h2>
        {/* {console.log(category)} */}
        <div className="food-display-list">
          {/* {console.log(food_list)} */}
            {food_list.map((item,index)=>{
              // {console.log(category,item.category)}  
                if(category==="All" || category===item.category){
                  return <FoodItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} category={item.category}/>
                }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay