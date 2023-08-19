const iranProvinces = [
    {
        id: 1,
        name: "آذربایجان شرقی",
        link: "/list/east-azerbaijan",
        cities: [
            { id: 1, name: "تبریز", link: "/list/tabriz" },
            { id: 2, name: "ترکمانچای", link: "/list/turkamanchay" },
            { id: 3, name: "مراغه", link: "/list/maragheh" },
            { id: 4, name: "میانه", link: "/list/mianeh" },
            { id: 5, name: "سراب", link: "/list/sarab" },
            { id: 6, name: "سهند", link: "/list/sahand" }
        ]
    },
    {
        id: 2,
        name: "آذربایجان غربی",
        link: "/list/west-azerbaijan",
        cities: [
            { id: 1, name: "ارومیه", link: "/list/urmia" },
            { id: 2, name: "خوی", link: "/list/khoy" },
            { id: 3, name: "مهاباد", link: "/list/mahabad" },
            { id: 4, name: "سلماس", link: "/list/salmas" },
            { id: 5, name: "نقده", link: "/list/naqadeh" },
            { id: 6, name: "پیرانشهر", link: "/list/piranshahr" }
        ]
    },
    {
        id: 3,
        name: "اردبیل",
        link: "/list/ardabil",
        cities: [
            { id: 1, name: "اردبیل", link: "/list/ardabil" },
            { id: 2, name: "پارس‌آباد", link: "/list/parsabad" },
            { id: 3, name: "مشکین‌شهر", link: "/list/meshkin-shahr" },
            { id: 4, name: "خلخال", link: "/list/khalkhal" },
            { id: 5, name: "نمین", link: "/list/namin" },
            { id: 6, name: "پیله‌سر", link: "/list/pileh-savar" }
        ]
    },
    {
        id: 4,
        name: "اصفهان",
        link: "/list/isfahan",
        cities: [
            { id: 1, name: "اصفهان", link: "/list/isfahan" },
            { id: 2, name: "کاشان", link: "/list/kashan" },
            { id: 3, name: "نجف‌آباد", link: "/list/najafabad" },
            { id: 4, name: "شهرضا", link: "/list/shahr-eza" },
            { id: 5, name: "فولادشهر", link: "/list/fuladshahr" },
            { id: 6, name: "نطنز", link: "/list/natanz" }
        ]
    },
    {
        id: 5,
        name: "البرز",
        link: "/list/alborz",
        cities: [
            { id: 1, name: "کرج", link: "/list/karaj" },
            { id: 2, name: "اشتهارد", link: "/list/eshtehard" },
            { id: 3, name: "فردیس", link: "/list/fardis" },
            { id: 4, name: "نظرآباد", link: "/list/nazrabad" },
            { id: 5, name: "طالقان", link: "/list/talaghun" },
            { id: 6, name: "کمال‌شهر", link: "/list/kamalshahr" }
        ]
    },
    {
        id: 6,
        name: "ایلام",
        link: "/list/ilam",
        cities: [
            { id: 1, name: "ایلام", link: "/list/ilam" },
            { id: 2, name: "دهلران", link: "/list/dehloran" },
            { id: 3, name: "شیروان‌و‌چرداول", link: "/list/shirvan-chardavol" },
            { id: 4, name: "آبدانان", link: "/list/abadan" },
            { id: 5, name: "ایوان", link: "/list/ivan" },
            { id: 6, name: "ملکشاهی", link: "/list/malekshahi" }
        ]
    },
    {
        id: 7,
        name: "بوشهر",
        link: "/list/bushehr",
        cities: [
            { id: 1, name: "بوشهر", link: "/list/bushehr" },
            { id: 2, name: "بندرگناوه", link: "/list/bandar-ganaveh" },
            { id: 3, name: "دشتستان", link: "/list/dashtestan" },
            { id: 4, name: "دیر", link: "/list/dir" },
            { id: 5, name: "گناوه", link: "/list/ganaveh" },
            { id: 6, name: "کنگان", link: "/list/kangan" }
        ]
    },
    {
        id: 8,
        name: "تهران",
        link: "/list/tehran",
        cities: [
            { id: 1, name: "تهران", link: "/list/tehran" },
            { id: 2, name: "ورامین", link: "/list/varamin" },
            { id: 3, name: "پاکدشت", link: "/list/pakdasht" },
            { id: 4, name: "اندیشه", link: "/list/andishe" },
            { id: 5, name: "شهریار", link: "/list/shahriar" },
            { id: 6, name: "پاسداران", link: "/list/pasdaran" },
            { id: 7, name: "تجریش", link: "/list/tajrish" },
            { id: 8, name: "چیتگر", link: "/list/chitgar" },
            { id: 9, name: "صادقیه", link: "/list/sadeghie" },
            { id: 8, name: "زعفرانیه", link: "/list/zaferanie" },
        ]
    },
    {
        id: 9,
        name: "چهارمحال و بختیاری",
        link: "/list/chaharmahal-and-bakhtiari",
        cities: [
            { id: 1, name: "شهرکرد", link: "/list/shahr-e-kord" },
            { id: 2, name: "بروجن", link: "/list/boroujen" },
            { id: 3, name: "فارسان", link: "/list/farssan" },
            { id: 4, name: "لردگان", link: "/list/lordegan" },
            { id: 5, name: "سامان", link: "/list/saman" },
            { id: 6, name: "شهریاری", link: "/list/shahryari" }
        ]
    },
    {
        id: 10,
        name: "خراسان جنوبی",
        link: "/list/south-khorasan",
        cities: [
            { id: 1, name: "بیرجند", link: "/list/birjand" },
            { id: 2, name: "خوسف", link: "/list/khusf" },
            { id: 3, name: "قائنات", link: "/list/qaenat" },
            { id: 4, name: "سرایان", link: "/list/sarayan" },
            { id: 5, name: "نهبندان", link: "/list/nehbandan" },
            { id: 6, name: "درمیان", link: "/list/darmiyan" }
        ]
    },
    {
        id: 11,
        name: "خراسان رضوی",
        link: "/list/razavi-khorasan",
        cities: [
            { id: 1, name: "مشهد", link: "/list/mashhad" },
            { id: 2, name: "سبزوار", link: "/list/sabzevar" },
            { id: 3, name: "تربت حیدریه", link: "/list/torbat-heydarieh" },
            { id: 4, name: "نیشابور", link: "/list/neyshabur" },
            { id: 5, name: "گناباد", link: "/list/gonabad" }
        ]
    },
    {
        id: 12,
        name: "خراسان شمالی",
        link: "/list/north-khorasan",
        cities: [
            { id: 1, name: "بجنورد", link: "/list/bojnurd" },
            { id: 2, name: "جاجرم", link: "/list/jajarm" },
            { id: 3, name: "شیروان", link: "/list/shirvan" },
            { id: 4, name: "گرمه", link: "/list/garmeh" },
            { id: 5, name: "راز و جرگلان", link: "/list/raz-va-jargalan" },
            { id: 6, name: "فاروج", link: "/list/farooj" }
        ]
    },
    {
        id: 13,
        name: "خوزستان",
        link: "/list/khuzestan",
        cities: [
            { id: 1, name: "اهواز", link: "/list/ahvaz" },
            { id: 2, name: "مهران", link: "/list/mahshahr" },
            { id: 3, name: "کارون", link: "/list/khorramshahr" },
            { id: 4, name: "هفتگل", link: "/list/behbahan" },
            { id: 5, name: "شادگان", link: "/list/shadegan" },
            { id: 6, name: "بندر ماهشهر", link: "/list/bandar-mahshahr" }
        ]
    },
    {
        id: 14,
        name: "زنجان",
        link: "/list/zanjan",
        cities: [
            { id: 1, name: "زنجان", link: "/list/zanjan" },
            { id: 2, name: "خدابنده", link: "/list/khodabandeh" },
            { id: 3, name: "ابهر", link: "/list/abhar" },
            { id: 4, name: "طارم", link: "/list/tarom" },
            { id: 5, name: "خرمدره", link: "/list/khorramdarreh" },
            { id: 6, name: "ماهنشان", link: "/list/mahneshan" }
        ]
    },
    {
        id: 15,
        name: "سمنان",
        link: "/list/semnan",
        cities: [
            { id: 1, name: "سمنان", link: "/list/semnan" },
            { id: 2, name: "شاهرود", link: "/list/shahroud" },
            { id: 3, name: "گرمسار", link: "/list/garmsar" },
            { id: 4, name: "دامغان", link: "/list/damghan" },
            { id: 5, name: "سرخه", link: "/list/sorkheh" },
            { id: 6, name: "مهدی‌شهر", link: "/list/mahdi-shahr" }
        ]
    },
    {
        id: 16,
        name: "سیستان و بلوچستان",
        link: "/list/sistan-and-baluchestan",
        cities: [
            { id: 1, name: "زاهدان", link: "/list/zahedan" },
            { id: 2, name: "زابل", link: "/list/zabol" },
            { id: 3, name: "چابهار", link: "/list/chabahar" },
            { id: 4, name: "خاش", link: "/list/khash" },
            { id: 5, name: "ایرانشهر", link: "/list/iran-shahr" },
            { id: 6, name: "سراوان", link: "/list/saravan" }
        ]
    },
    {
        id: 17,
        name: "فارس",
        link: "/list/fars",
        cities: [
            { id: 1, name: "شیراز", link: "/list/shiraz" },
            { id: 2, name: "کازرون", link: "/list/kazerun" },
            { id: 3, name: "لارستان", link: "/list/lar" },
            { id: 4, name: "مرودشت", link: "/list/marvdasht" },
            { id: 5, name: "فیروزآباد", link: "/list/firuzabad" },
            { id: 6, name: "ممسنی", link: "/list/mamasani" }
        ]
    },
    {
        id: 18,
        name: "قزوین",
        link: "/list/qazvin",
        cities: [
            { id: 1, name: "قزوین", link: "/list/qazvin" },
            { id: 2, name: "البرز", link: "/list/alborz" },
            { id: 3, name: "بوئین‌زهرا", link: "/list/buin-zahra" },
            { id: 4, name: "تاکستان", link: "/list/takestan" },
            { id: 5, name: "ایجرود", link: "/list/eyjroud" },
            { id: 6, name: "آوج", link: "/list/avaj" }
        ]
    },
    {
        id: 19,
        name: "قم",
        link: "/list/qom",
        cities: [
            { id: 1, name: "قم", link: "/list/qom" },
            { id: 2, name: "جعفریه", link: "/list/jafarieh" },
            { id: 3, name: "دستجرد", link: "/list/dastjerd" },
            { id: 4, name: "قنوات", link: "/list/ghanavat" },
            { id: 5, name: "سلفچگان", link: "/list/salafchegan" },
            { id: 6, name: "کهک", link: "/list/kahak" }
        ]
    },
    {
        id: 20,
        name: "کردستان",
        link: "/list/kurdistan",
        cities: [
            { id: 1, name: "سنندج", link: "/list/sanandaj" },
            { id: 2, name: "مریوان", link: "/list/marivan" },
            { id: 3, name: "بیجار", link: "/list/bijar" },
            { id: 4, name: "سقز", link: "/list/saqqez" },
            { id: 5, name: "قروه", link: "/list/qorveh" },
            { id: 6, name: "کامیاران", link: "/list/kamyaran" }
        ]
    },
    {
        id: 21,
        name: "کرمان",
        link: "/list/kerman",
        cities: [
            { id: 1, name: "کرمان", link: "/list/kerman" },
            { id: 2, name: "رفسنجان", link: "/list/rafsanjan" },
            { id: 3, name: "بم", link: "/list/bam" },
            { id: 4, name: "جیرفت", link: "/list/jiroft" },
            { id: 5, name: "سیرجان", link: "/list/sirjan" },
            { id: 6, name: "بردسیر", link: "/list/bardesir" }
        ]
    },
    {
        id: 22,
        name: "کرمانشاه",
        link: "/list/kermanshah",
        cities: [
            { id: 1, name: "کرمانشاه", link: "/list/kermanshah" },
            { id: 2, name: "اسلام‌آبادغرب", link: "/list/islamabad-gharb" },
            { id: 3, name: "جوانرود", link: "/list/javanrud" },
            { id: 4, name: "سرپل ذهاب", link: "/list/sar-pol-e-zahab" },
            { id: 5, name: "قصرشیرین", link: "/list/qasr-shirin" },
            { id: 6, name: "هرسین", link: "/list/harsin" }
        ]
    },
    {
        id: 23,
        name: "کهگیلویه و بویراحمد",
        link: "/list/kohgiluyeh-and-boyer-ahmad",
        cities: [
            { id: 1, name: "یاسوج", link: "/list/yasuj" },
            { id: 2, name: "دهدشت", link: "/list/dehdasht" },
            { id: 3, name: "گچساران", link: "/list/gachsaran" },
            { id: 4, name: "دوگنبدان", link: "/list/dogonbadan" },
            { id: 5, name: "بهمن", link: "/list/bahman" },
            { id: 6, name: "دیشموک", link: "/list/dishmok" }
        ]
    },
    {
        id: 24,
        name: "گلستان",
        link: "/list/golestan",
        cities: [
            { id: 1, name: "گرگان", link: "/list/gorgan" },
            { id: 2, name: "گنبدکاووس", link: "/list/gonbad-kavous" },
            { id: 3, name: "علی‌آباد", link: "/list/aliabad" },
            { id: 4, name: "کلاله", link: "/list/kalaleh" },
            { id: 5, name: "آزادشهر", link: "/list/azadshahr" },
            { id: 6, name: "بندر ترکمن", link: "/list/bandar-torkaman" }
        ]
    },
    {
        id: 25,
        name: "گیلان",
        link: "/list/gilan",
        cities: [
            { id: 1, name: "رشت", link: "/list/rasht" },
            { id: 2, name: "لاهیجان", link: "/list/lahijan" },
            { id: 3, name: "رودبار", link: "/list/roud-bar" },
            { id: 4, name: "رودسر", link: "/list/roud-sar" },
            { id: 5, name: "فومن", link: "/list/fuman" },
            { id: 6, name: "آستانه", link: "/list/astaneh" }
        ]
    },
    {
        id: 26,
        name: "لرستان",
        link: "/list/lorestan",
        cities: [
            { id: 1, name: "خرم‌آباد", link: "/list/khorramabad" },
            { id: 2, name: "الیگودرز", link: "/list/aligudarz" },
            { id: 3, name: "بروجرد", link: "/list/borujerd" },
            { id: 4, name: "کوهدشت", link: "/list/kuhdasht" },
            { id: 5, name: "دورود", link: "/list/dorud" },
            { id: 6, name: "پل‌دختر", link: "/list/pol-dokhtar" }
        ]
    },
    {
        id: 27,
        name: "مازندران",
        link: "/list/mazandaran",
        cities: [
            { id: 1, name: "ساری", link: "/list/sari" },
            { id: 2, name: "بابل", link: "/list/babol" },
            { id: 3, name: "قائم‌شهر", link: "/list/qaim-shahr" },
            { id: 4, name: "نوشهر", link: "/list/noshahr" },
            { id: 5, name: "چالوس", link: "/list/chalus" },
            { id: 6, name: "رامسر", link: "/list/ramsar" }
        ]
    },
    {
        id: 28,
        name: "مرکزی",
        link: "/list/markazi",
        cities: [
            { id: 1, name: "اراک", link: "/list/arak" },
            { id: 2, name: "خمین", link: "/list/khomein" },
            { id: 3, name: "دلیجان", link: "/list/delijan" },
            { id: 4, name: "تفرش", link: "/list/tafresh" },
            { id: 5, name: "شازند", link: "/list/shazand" },
            { id: 6, name: "خنداب", link: "/list/khondab" }
        ]
    },
    {
        id: 29,
        name: "هرمزگان",
        link: "/list/hormozgan",
        cities: [
            { id: 1, name: "بندرعباس", link: "/list/bandar-abbas" },
            { id: 2, name: "بندرلنگه", link: "/list/bandar-lengeh" },
            { id: 3, name: "حاجی‌آباد", link: "/list/haji-abad" },
            { id: 4, name: "قشم", link: "/list/qeshm" },
            { id: 5, name: "بستک", link: "/list/bastak" },
            { id: 6, name: "میناب", link: "/list/minab" }
        ]
    },
    {
        id: 30,
        name: "همدان",
        link: "/list/hamadan",
        cities: [
            { id: 1, name: "همدان", link: "/list/hamadan" },
            { id: 2, name: "ملایر", link: "/list/malayer" },
            { id: 3, name: "نهاوند", link: "/list/nahavand" },
            { id: 4, name: "تویسرکان", link: "/list/tuyserkan" },
            { id: 5, name: "اسدآباد", link: "/list/asadabad" },
            { id: 6, name: "رزن", link: "/list/razen" }
        ]
    },
    {
        id: 31,
        name: "یزد",
        link: "/list/yazd",
        cities: [
            { id: 1, name: "یزد", link: "/list/yazd" },
            { id: 2, name: "ابرکوه", link: "/list/abarkuh" },
            { id: 3, name: "تفت", link: "/list/taft" },
            { id: 4, name: "بافق", link: "/list/baft" },
            { id: 5, name: "اردکان", link: "/list/ardakan" },
            { id: 6, name: "مهریز", link: "/list/mehriz" }
        ]
    }
];


const popularStates = [
    {
        id: 1,
        name: "تهران",
        link: "/list/tehran",
        cities: [
            { id: 1, name: "تهران", link: "/list/tehran" },
            { id: 2, name: "ورامین", link: "/list/varamin" },
            { id: 3, name: "پاکدشت", link: "/list/pakdasht" },
            { id: 4, name: "ری", link: "/list/rey" },
        ]
    },
    {
        id: 2,
        name: "مازندران",
        link: "/list/mazandaran",
        cities: [
            { id: 1, name: "ساری", link: "/list/sari" },
            { id: 2, name: "بابل", link: "/list/babol" },
            { id: 3, name: "قائم‌شهر", link: "/list/qaim-shahr" },
            { id: 4, name: "نوشهر", link: "/list/noshahr" },
            { id: 5, name: "چالوس", link: "/list/chalus" },
            { id: 6, name: "رامسر", link: "/list/ramsar" }
        ]
    },
    {
        id: 3,
        name: "گیلان",
        link: "/list/gilan",
        cities: [
            { id: 1, name: "رشت", link: "/list/rasht" },
            { id: 2, name: "لاهیجان", link: "/list/lahijan" },
            { id: 3, name: "رودبار", link: "/list/roud-bar" },
            { id: 4, name: "رودسر", link: "/list/roud-sar" },
            { id: 5, name: "فومن", link: "/list/fuman" },
            { id: 6, name: "آستانه", link: "/list/astaneh" }
        ]
    },
    {
        id: 4,
        name: "اصفهان",
        link: "/list/isfahan",
        cities: [
            { id: 1, name: "اصفهان", link: "/list/isfahan" },
            { id: 2, name: "کاشان", link: "/list/kashan" },
            { id: 3, name: "نجف‌آباد", link: "/list/najafabad" },
            { id: 4, name: "شهرضا", link: "/list/shahr-eza" },
            { id: 5, name: "فولادشهر", link: "/list/fuladshahr" },
            { id: 6, name: "نطنز", link: "/list/natanz" }
        ]
    },
]

export { iranProvinces, popularStates } 