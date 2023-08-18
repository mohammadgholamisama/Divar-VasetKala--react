const menus = [
    {
        id: 1, title: 'کالای دیجیتال', link: "#", img: '/images/sub-menu/icon1.png', subMenus: [
            {
                sub: [
                    {
                        id: 1, subTitle: 'موبایل و تبلت', subMenuItems: [
                            { id: 1, title: "گوشی موبایل", link: '#', },
                            { id: 2, title: "تبلت", link: '#' },
                            { id: 3, title: "لوازم جانبی موبایل و تبلت", link: '#' },
                            { id: 4, title: "سیمکارت", link: '#' },
                        ]
                    },
                    {
                        id: 2, subTitle: 'رایانه', subMenuItems: [
                            { id: 1, title: "رایانه همراه", link: '#', },
                            { id: 2, title: "رایانه رو میزی", link: '#' },
                            { id: 3, title: "قطعات و لوازم جانبی", link: '#' },
                            { id: 4, title: "مودم و تجهیزات شبکه", link: '#' },
                            { id: 5, title: "پرینتر/اسکنر/کپی/فکس", link: '#', },
                            { id: 6, title: "کنسول، بازی‌ ویدئویی و آنلاین", link: '#', },
                            { id: 7, title: "صوتی و تصویری", link: '#', },
                            { id: 8, title: "فیلم و موسیقی", link: '#' },
                            { id: 9, title: "دوربین عکاسی و فیلم‌برداری", link: '#' },
                        ]
                    },

                ]
            }
        ]
    },
    {
        id: 2, title: 'وسایل نقلیه', link: "#", img: '/images/sub-menu/icon2.png', subMenus: [
            {
                sub: [
                    {
                        id: 1, subTitle: 'خودرو', subMenuItems: [
                            { id: 1, title: "سواری", link: '#', },
                            { id: 2, title: "وانت", link: '#' },
                            { id: 3, title: "اجاره ای", link: '#' },
                            { id: 4, title: "کلاسیک", link: '#' },
                        ]
                    },
                    {
                        id: 2, subMenuItems: [
                            { id: 1, title: "موتورسیکلت", link: '#', },
                            { id: 2, title: "قطعات یدکی و لوازم جانبی", link: '#' },
                            { id: 3, title: "قایق و سایر وسایل نقلیه", link: '#' },
                        ]
                    },

                ]
            }
        ]
    },
    {
        id: 3, title: 'خانه و اپارتمان', link: "#", img: '/images/sub-menu/icon3.png', subMenus: [
            {
                sub: [
                    {
                        id: 1, subTitle: 'فروش مسکونی', subMenuItems: [
                            { id: 1, title: "آپارتمان", link: '#', },
                            { id: 2, title: "خانه و ویلا", link: '#' },
                            { id: 3, title: "زمین و کلنگی", link: '#' },
                        ]
                    },
                    {
                        id: 2, subTitle: 'اجاره مسکونی', subMenuItems: [
                            { id: 1, title: "آپارتمان", link: '#', },
                            { id: 2, title: "خانه و ویلا", link: '#' },
                        ]
                    },
                    {
                        id: 3, subTitle: 'اجاره اداری و تجاری', subMenuItems: [
                            { id: 1, title: "دفتر کار، اتاق اداریو مطب", link: '#', },
                            { id: 2, title: "مغازه و غرفه", link: '#' },
                        ]
                    },

                ]
            }
        ]
    },
    {
        id: 4, title: 'خدماتی', link: "#", img: '/images/sub-menu/icon4.png', subMenus: [
            {
                sub: [
                    {
                        id: 1, subMenuItems: [
                            { id: 1, title: "موتور و ماشین", link: '#', },
                            { id: 2, title: "پذیرایی و مراسم", link: '#' },
                            { id: 3, title: "خدمات رایانه ای و موبایل", link: '#' },
                            { id: 4, title: "مالی و حسابداری", link: '#' },
                        ]
                    },

                ]
            }
        ]
    },
    {
        id: 5, title: 'استخدام و کاریابی', link: "#", img: '/images/sub-menu/icon5.png', subMenus: [
            {
                sub: [
                    {
                        id: 1, subMenuItems: [
                            { id: 1, title: "اداری و مدیریت", link: '#', },
                            { id: 2, title: "سرایداری", link: '#' },
                            { id: 3, title: "آموزشی", link: '#' },
                            { id: 3, title: "حمل و نقل", link: '#' },
                        ]
                    },

                ]
            }
        ]
    },
    {
        id: 6, title: 'مد و پوشاک', link: "#", img: '/images/sub-menu/icon6.png', subMenus: [
            {
                sub: [
                    {
                        id: 1, subTitle: 'کیف وکفش و لباس', subMenuItems: [
                            { id: 1, title: "کیف", link: '#', },
                            { id: 2, title: "کفش", link: '#' },
                            { id: 3, title: "کمربند", link: '#' },
                        ]
                    },
                    {
                        id: 2, subTitle: 'زیور آلات و اکسسوری', subMenuItems: [
                            { id: 1, title: "ساعت", link: '#', },
                            { id: 2, title: "جواهرات", link: '#' },
                            { id: 3, title: "بدلیجات", link: '#' },
                        ]
                    },
                    {
                        id: 3, subTitle: 'وسایل بچه و اسباب بازی', subMenuItems: [
                            { id: 1, title: "اسباب بازی", link: '#', },
                            { id: 2, title: "کالکسه", link: '#' },
                            { id: 3, title: "صندلی بچه", link: '#' },
                            { id: 4, title: "اسباب و اساس بچه", link: '#' },
                        ]
                    },
                ]
            }
        ]
    },
    { id: 7, title: 'خانه و آشپزخانه', link: "#", img: '/images/sub-menu/icon7.png', subMenus: [
        {
            sub: [
                {
                    id: 1, subTitle: 'لوازم خانگی برقی', subMenuItems: [
                        { id: 1, title: "یخچال و فریزر", link: '#', },
                        { id: 2, title: "آب‌سردکن و تصفیه آب", link: '#' },
                        { id: 3, title: "ماشین لباسشویی و خشک‌کن لباس", link: '#' },
                        { id: 4, title: "ماشین ظرفشویی", link: '#' },
                        { id: 5, title: "جاروبرقی، جاروشارژی و بخارشو", link: '#' },
                        { id: 6, title: "هود", link: '#' },
                    ]
                },
                {
                    id: 2, subTitle: 'ظروف و لوازم آشپزخانه', subMenuItems: [
                        { id: 1, title: "سفره، حوله و دستمال آشپزخانه", link: '#', },
                        { id: 2, title: "آب‌چکان و نظم‌دهنده ظروف", link: '#' },
                        { id: 3, title: "قوری، کتری و قهوه‌ساز دستی", link: '#' },
                        { id: 4, title: "ظروف سرو و پذیرایی", link: '#' },
                        { id: 5, title: "ظروف پخت‌وپز", link: '#' },
                    ]
                },
                {
                    id: 3, subTitle: 'مبلمان و صنایع چوب', subMenuItems: [
                        { id: 1, title: "مبلمان خانگی و میزعسلی", link: '#', },
                        { id: 2, title: "میز و صندلی غذاخوری", link: '#' },
                        { id: 3, title: "بوفه، ویترین و کنسول", link: '#' },
                        { id: 4, title: "کتابخانه، شلف و قفسه‌های دیواری", link: '#' },
                    ]
                },
            ]
        }
    ] },
    { id: 8, title: 'اجتماعی', link: "#", img: '/images/sub-menu/icon8.png', subMenus: [
        {
            sub: [
                {
                    id: 1, subTitle: 'رویداد', subMenuItems: [
                        { id: 1, title: "حراج", link: '#', },
                        { id: 2, title: "گرد همایی و همایش", link: '#' },
                        { id: 3, title: "ورزشی", link: '#' },
                    ]
                },
                {
                    id: 2, subTitle: 'داوطلبانه', subMenuItems: [
                        { id: 1, title: "تحقیقاتی", link: '#', },
                    ]
                },
                {
                    id: 3, subTitle: 'گم شده ها', subMenuItems: [
                        { id: 1, title: "حیوانات", link: '#', },
                        { id: 2, title: "اشیا", link: '#' },
                    ]
                },
            ]
        }
    ] },
];

export default menus