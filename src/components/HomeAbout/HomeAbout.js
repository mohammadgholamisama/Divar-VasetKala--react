import React from 'react'
import './HomeAbout.css'

export default function HomeAbout() {
    return (
        <section className='home-page-about site-container'>
            <h4>درباره واسط کالا</h4>
            <p>
                سایت واسط کالا  از فروردین  ماه سال 1404  با موضوع نیازمندی های آنلاین راه اندازی گردیده و هدف اصلی ما در ارتباط قرار دادن خریدار و فروشنده به صورت مستقیم می باشد.
                یه مکان برای ارتقاء کسب و کار هم وطن های عزیز.
            </p>
            <ul>
                <li>
                    <div>
                        <img src="/images/home-page/icon4.svg" alt="icon" />
                    </div>
                    <span>جستجوی سریع</span>
                </li>
                <li>
                    <div>
                        <img src="/images/home-page/icon5.svg" alt="icon" />
                    </div>
                    <span>راحت</span>
                </li>
                <li>
                    <div>
                        <img src="/images/home-page/icon6.svg" alt="icon" />
                    </div>
                    <span>به صرفه</span>
                </li>
                <li>
                    <div>
                        <img src="/images/home-page/icon7.svg" alt="icon" />
                    </div>
                    <span>پرداخت امن</span>
                </li>
            </ul>
        </section>
    )
}
