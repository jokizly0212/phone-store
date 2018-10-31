// import * as Types from './../constants/ActionType';

const productsInitialState = [
    {
        id: 1,
        image: 'http://cdn.iphonehacks.com/wp-content/uploads/2018/03/SamsungGalaxyS9review.jpg',
        price: 899,
        specification: '147.7 x 68.7 x 8.5 mm, Super AMOLED capacitive touchscreen, 16M colors, 5.8 inches, 84.8 cm2, Exynos 9810 Octa - EMEA Qualcomm SDM845 Snapdragon 845 , 2 MP, f/1.5-2.4, 26mm, 1/2.5", 1.4µm, OIS, dual pixel PDAF, t64/128/256 GB, 4 GB RAM... ',
        name: 'Samsung Galaxy S9',
        rating: 4,
        origin: 'Vietnam'
    },
    {
        id: 2,
        image: 'https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/gallery1/iphone8-gallery1-2017?wid=2000&hei=1536&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1506703285757',
        price: 1099,
        specification: '158.4 x 78.1 x 7.5 mm, Front/back glass, aluminum frame, 12 MP, f/1.8, 28mm, OIS, PDAF, 7 MP, f/2.2, 32mm, 64/256 GB, 3 GB RAM, rs\\tFingerprint (front-mounted), accelerometer, gyro...',
        name: 'Apple iPhone X',
        rating: 5,
        origin: 'California'
    },
    {
        id: 3,
        image: 'http://media.idownloadblog.com/wp-content/uploads/2017/11/solefield-iphone-x-wallpapers-splash.jpg',
        price: 1499,
        specification: 'Super AMOLED capacitive touchscreen, 16M colors, 5.8 inches, Scratch-resistant glass, oleophobic coating, Camera 12 MP, f/1.8, 28mm, OIS, PDAF, Memory 64/256 GB, 3 GB RAM...',
        name: 'Apple iPhone X',
        rating: 5,
        origin: 'California'
    },
    {
        id: 4,
        image: 'https://cdn.macrumors.com/article-new/2015/07/Apple-Watch-Brown-Band.jpg',
        price: 799,
        specification: 'Faster dual-core processor, Apple wireless chip, Water resistant 50 meters, Capacity 8GB, Sapphire crystal (stainless steel and ceramic cases), Up to 18 hrs... ',
        name: 'Apple iWatch Series 3',
        rating: 3,
        origin: 'California'
    },
    {
        id: 5,
        image: 'https://5pluss.ee/image/cache/data/HUAWEI-P20-Pro-blue.jpg-600x500.png',
        price: 875,
        specification: '155 x 73.9 x 7.8 mm, P67 dust/water resistant, 128 GB, 6 GB RAM,  Octa-core (4x2.4 GHz Cortex-A73 & 4x1.8 GHz Cortex-A53), 1080 x 2240 pixels, 18.7:9 ratio... ',
        name: 'Huawei P20 Pro',
        rating: 4,
        origin: 'China'
    },
    {
        id: 6,
        image: 'https://techcrunch.com/wp-content/uploads/2018/08/Screen-Shot-2018-08-03-at-11.56.24-AM.png?w=730&crop=1',
        price: 1299,
        specification: '	Front/back glass (Gorilla Glass 5), 6.4 inches, 103.2 cm2, Exynos 9810 Octa - EMEA, Qualcomm SDM845 Snapdragon 845 - USA/LATAM, 512 GB, 8 GB RAM or 128 GB, 6 GB RAM... ',
        name: 'Samsung Galaxy Note 9',
        rating: 5,
        origin: 'Vietnam'
    },
    {
        id: 7,
        image: 'https://c.slashgear.com/wp-content/uploads/2018/07/2018-macbook-pro-980x620.jpg',
        price: 2199,
        specification: '13.3-inch (diagonal) LED-backlit display with IPS technology; 2560-by-1600 native ,2.3GHz quad-core Intel Core i5, Turbo Boost up to 3.8GHz, with 128MB of eDRAM, 8GB of 2133MHz LPDDR3 onboard memory, Up to 10 hours wireless web, USB-C Charge Cable (2 m)... ',
        name: 'Macbook Pro 2018',
        rating: 5,
        origin: 'California'
    },
    {
        id: 8,
        image: 'https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge_wm_blb/public/field/image/2018/03/xps-13-9370-1.jpg?itok=-yTuk5G2',
        price: 1799,
        specification: 'Intel Core i5 (8th Gen) 8250U / 1.6 GHz, 3.4 GHz, 4 GB LPDDR3 1866MHz, Corning Gorilla glass 4, Infinity Edge display, anti-reflective, Intel UHD Graphics 620... ',
        name: 'Dell XPS 13 2018',
        rating: 4,
        origin: 'Malaysia'
    },
    {
        id: 9,
        image: 'https://cdn.macrumors.com/article-new/2015/07/Apple-Watch-Brown-Band.jpg',
        price: 799,
        specification: 'Faster dual-core processor, Apple wireless chip, Water resistant 50 meters, Capacity 8GB, Sapphire crystal (stainless steel and ceramic cases), Up to 18 hrs... ',
        name: 'Apple iWatch Series 3',
        rating: 3,
        origin: 'California'
    },
    {
        id: 10,
        image: 'https://cdn.macrumors.com/article-new/2015/07/Apple-Watch-Brown-Band.jpg',
        price: 799,
        specification: 'Faster dual-core processor, Apple wireless chip, Water resistant 50 meters, Capacity 8GB, Sapphire crystal (stainless steel and ceramic cases), Up to 18 hrs... ',
        name: 'Apple iWatch Series 3',
        rating: 3,
        origin: 'California'
    },
    {
        id: 11,
        image: 'https://cdn.macrumors.com/article-new/2015/07/Apple-Watch-Brown-Band.jpg',
        price: 799,
        specification: 'Faster dual-core processor, Apple wireless chip, Water resistant 50 meters, Capacity 8GB, Sapphire crystal (stainless steel and ceramic cases), Up to 18 hrs... ',
        name: 'Apple iWatch Series 3',
        rating: 3,
        origin: 'California'
    },
    {
        id: 12,
        image: 'https://cdn.macrumors.com/article-new/2015/07/Apple-Watch-Brown-Band.jpg',
        price: 799,
        specification: 'Faster dual-core processor, Apple wireless chip, Water resistant 50 meters, Capacity 8GB, Sapphire crystal (stainless steel and ceramic cases), Up to 18 hrs... ',
        name: 'Apple iWatch Series 3',
        rating: 3,
        origin: 'California'
    }
];
const products = (state = productsInitialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}
export default products;
