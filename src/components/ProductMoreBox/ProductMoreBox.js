import React, { useEffect, useState } from 'react'
import './ProductMoreBox.css'
import products from '../../assets/fakeData/products'
import ListItemBox from '../ListItemBox/ListItemBox'
import { LiaAngleLeftSolid } from 'react-icons/lia'

export default function ProductMoreBox({ product }) {

  const [productsItems, setProductsItems] = useState([])

  useEffect(() => {

    let mainsProducts = products.filter(p => p.group === product.group)

    const updateProducts = () => {
      if (window.innerWidth < 1230) {
        setProductsItems(mainsProducts.slice(0, 3));
      } else {
        setProductsItems(mainsProducts.slice(0, 4));
      }
    };

    updateProducts();
    window.addEventListener('resize', updateProducts);

  }, []);

  return (
    <div className="product-page__more">
      <div className="product-page__more-box">
        <div className="product-page__more-title-box dfb">
          <h3>آگهی های دیگر {product.group}</h3>
          <a href="#"><span>آگهی های بیشتر</span> <LiaAngleLeftSolid /></a>
        </div>
        <div className='product-page__more-box-items'>
          {productsItems && productsItems.map(item => (
            <ListItemBox title={item.title} price={item.price} time={item.time} img={item.imgArray[0]} id={item.id} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
