import React, { useLayoutEffect, useState } from 'react'
import './ProductPage.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ContactSellerModal from '../../components/ContactSellerModal/ContactSellerModal'
import ProductMoreBox from '../../components/ProductMoreBox/ProductMoreBox'
import { useParams } from 'react-router-dom'
import products from '../../assets/fakeData/products'
import ProductInfo from '../../components/ProductInfo/ProductInfo'
export default function ProductPage() {

    const [sellerContactModal, setSellerContactModal] = useState(false)
    const [product, setProduct] = useState(null)

    const params = useParams()

    useLayoutEffect(() => {
        const mainProduct = products.filter(p => p.id === +params.productID)
        setProduct(mainProduct)
    }, [params.productID])

    return (
        <>
            {product && (
                <>
                    <Navbar />
                    {/* Product Info */}
                    <ProductInfo product={product} setModalSellerHandler={setSellerContactModal}/>
                    {/* Contact Seller Modal */}
                    <ContactSellerModal openModal={sellerContactModal} closeModal={setSellerContactModal} />
                    {/* More Products */}
                    <ProductMoreBox product={product[0]} />
                    {/* Footer */}
                    <Footer />
                </>
            )}
        </>
    )
}