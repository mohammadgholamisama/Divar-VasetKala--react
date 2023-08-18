import React, { useLayoutEffect, useState } from 'react'
import './MobileProductPage.css'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'
import { useNavigate, useParams } from 'react-router-dom'
import products from '../../../assets/fakeData/products'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia'
import ProductGallery from '../../../components/ProductGallery/ProductGallery'
import ContactSellerModal from '../../../components/ContactSellerModal/ContactSellerModal'

export default function MobileProductPage() {

  const [sellerContactModal, setSellerContactModal] = useState(false)
  const [product, setProduct] = useState(null)
  const navigate = useNavigate()

  const params = useParams()

  useLayoutEffect(() => {
    const mainProduct = products.filter(p => p.id === +params.productID)
    setProduct(mainProduct)
  }, [params.productID])

  return (
    <>
      <div className='product-page__prev-div'>
        <button onClick={() => navigate(-1)}>
          <LiaAngleRightSolid />برگشت
        </button>
      </div>
      <section className='mobile-product-page'>
        {product && product.map(item => (
          <div className="product-page__product" key={item.id}>
            {/* product info */}
            <div className="product-page__info-container">
              {/* product right */}
              <div className="product-page__right">
                <h1 className='product-page__info-title'>{item.title}</h1>
                <div className="product-page__info-time">
                  <span>{item.time}</span>
                  <span>{item.presianState}</span>
                  <span>{item.presianCity}</span>
                </div>
                <div className="product-page__info-Contact-btns">
                  <button>
                    <BiMessageSquareDetail />
                    <span>چت</span>
                  </button>
                  <button onClick={() => setSellerContactModal(true)}>تماس با فروشنده</button>
                </div>
                <div className="product-page__info-tabel">
                  {product[0].infoArray.map(item => (
                    <div className="product-page__info-tabel-item dfb" key={item.id}>
                      <span>{item.title}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                  <div className="product-page__info-tabel-item dfb">
                    <span>قیمت</span>
                    <span>{product[0].price.toLocaleString()} تومان</span>
                  </div>
                </div>
                <div className="product-page__info-more">
                  <h6>جزئیات بیشتر</h6>
                  <span className='product-page__info-more-desk'>
                    {item.desk}
                  </span>
                </div>
              </div>
              {/* product left */}
              <div className="product-page__left">
                {product[0].group === 'املاک' && (
                  <div className="product-page__left-group-box dfb">
                    <div>
                      <span>آژانس املاک</span>
                      <h2>بهارستان</h2>
                    </div>
                    <div>
                      <a href="#">
                        <span>آگهی های دیگر</span>
                        <LiaAngleLeftSolid />
                      </a>
                    </div>
                  </div>
                )}
                {/* gallery */}
                {product && <ProductGallery images={product[0].imgArray} />}
                <Breadcrumb group={item.group} item={item.groupTitle} />

              </div>
            </div>
          </div>
        ))}
      </section>
      <ContactSellerModal openModal={sellerContactModal} closeModal={setSellerContactModal} />
    </>
  )
}
