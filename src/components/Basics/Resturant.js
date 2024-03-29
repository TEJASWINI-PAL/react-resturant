import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi.js"
import MenuCard from './MenuCard.js'
import Navbar from './navbar';

const uniqueList = [
    ...new Set(
        Menu.map((curElement) => {
            return curElement.category;
        })
    ),
    "All",
];
console.log(uniqueList);

const Resturant = () =>{
const[menuData,setMenuData] =useState(Menu);
const [menuList,setMenuList] = useState(uniqueList)

const filterItem = (category)=> {

    if(category === "All"){
        setMenuData(Menu);
        return;
    }
      const updatedList =Menu.filter((curElement) =>{
        return curElement.category === category;
});
setMenuData(updatedList);
};
return(
<>
<Navbar filterItem={filterItem} menuList={menuList}/>
<MenuCard menuData={menuData} />
</>
)
    
}

export default Resturant;
