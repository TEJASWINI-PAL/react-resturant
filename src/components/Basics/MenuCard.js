import React from 'react'

const MenuCard = ({menuData}) => {
  return (
    <>
    <section className='main-card--cointainer'>
    {menuData.map((curElement) => {

      const {id,name,category,image,description} = curElement;
      console.log("curElement ", curElement)
          
        return(
            
            <>
             {/* {console.log(curElem)} */}
            <div className='card-container' key={id}>
            <div className='card'>
                <div className='card-body'>
                    <span className='card-number  card-circle subtle'>{id}</span>
                    <span className='card-author subtle'>{category}</span>
                    <h2 className='card-title'>{name}
                    </h2>
                     <span className='card-description subtle'>
                     Laborum esse nisi enim in esse nostrud aliqua exercitation laborum. Consequat nostrud amet nostrud 
                      proident duis aliquip nostrud duis eiusmod magna.Proident ex aliquip commodo sint est officia minim eiusmod 
                      deserunt ipsum voluptate aliqua dolor sint.{description}
                    
                    </span>
                    <div className='card-read'>Read</div>
                </div>
                <img src={image} alt="images" className='card-media' />
                <span className='card-tag subtle'>Order Now</span>
            </div>
          </div>
          </>
        )
    })}
    </section>
    </>

  )
}

export default MenuCard;
