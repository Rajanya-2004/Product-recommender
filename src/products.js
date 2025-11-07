import iphone13 from "./assets/iphone_13.png";
import galaxyS21 from "./assets/Samsun_galaxys21.jpg";
import hpPavilion from "./assets/HP Pavilion Gaming.png";
import sonyHeadphones from "./assets/Sony WH-1000XM5 headphone.png";
import OnePlus from "./assets/OnePlus Nord.png";
import Redmi from "./assets/Redmi Note 12.jpeg";
import Google from "./assets/pixel-7-pro.png";
import MacBook from "./assets/MacBook Air M2.jpg";
import Dell from "./assets/Dell Inspiron 15.png";
import Acer from "./assets/Acer Aspire 5.png";
import Boat from "./assets/boat-airdopes-441-earbuds.png";
import JBL from "./assets/JBL Tune 760NC.jpeg";
import Apple from "./assets/Apple Watch Series 8.jpeg";
import Noise from "./assets/Noise ColorFit Pro 4.jpeg";
import LG from "./assets/monitor1.jpeg";
import Samsung from "./assets/monitor2.jpeg";
import jblspeaker from "./assets/speaker1.jpeg";
import sonyspeaker from "./assets/speaker2.jpeg";
import sonyplay from "./assets/game1.jpeg";
import Xbox from "./assets/game2.jpeg";
import Dyson from "./assets/Dyson Air Purifier.jpeg";
import Philips from "./assets/Philips Air Fryer.jpeg";
import lg from "./assets/LG Refrigerator 260.jpeg";
import samsung2 from "./assets/Samsung Washing Machine.jpeg";


const products = [
  // Phones
  { id: 1, name: "iPhone 13", category: "phone", price: 799, image:iphone13  },
  { id: 2, name: "Samsung Galaxy S21", category: "phone", price: 699, image:galaxyS21 },
  { id: 3, name: "OnePlus Nord", category: "phone", price: 499, image:OnePlus },
  { id: 4, name: "Redmi Note 12", category: "phone", price: 299, image:Redmi},
  { id: 5, name: "Google Pixel 7", category: "phone", price: 599, image:Google },

  // Laptops
  { id: 6, name: "MacBook Air M2", category: "laptop", price: 999 , image:MacBook},
  { id: 7, name: "Dell Inspiron 15", category: "laptop", price: 650 , image:Dell},
  { id: 8, name: "HP Pavilion Gaming", category: "laptop", price: 850 , image:hpPavilion},
  { id: 9, name: "Acer Aspire 5", category: "laptop", price: 550, image:Acer},

  // Headphones & Earbuds
  { id: 10, name: "Sony WH-1000XM5", category: "headphones", price: 399, image:sonyHeadphones },
  { id: 11, name: "Boat Airdopes 441", category: "earbuds", price: 499 , image:Boat},
  { id: 12, name: "JBL Tune 760NC", category: "headphones", price: 129 , image:JBL},

  // Smartwatches
  { id: 13, name: "Apple Watch Series 8", category: "smartwatch", price: 399 , image:Apple},
  { id: 14, name: "Noise ColorFit Pro 4", category: "smartwatch", price: 699, image:Noise },

  // Monitors
  { id: 15, name: "LG Ultragear 27GL850", category: "monitor", price: 350, image:LG  },
  { id: 16, name: "Samsung Odyssey G5", category: "monitor", price: 420, image:Samsung},

  // Speakers
  { id: 17, name: "JBL Flip 6", category: "speaker", price: 120 , image:jblspeaker},
  { id: 18, name: "Sony SRS-XB13", category: "speaker", price: 599 , image:sonyspeaker},

  // Gaming Consoles
  { id: 19, name: "Sony PlayStation 5", category: "gaming", price: 499 , image:sonyplay},
  { id: 20, name: "Xbox Series S", category: "gaming", price: 299, image:Xbox },

  // Home Appliances
  { id: 21, name: "Dyson Air Purifier", category: "home-appliance", price: 499 , image:Dyson},
  { id: 22, name: "Philips Air Fryer", category: "home-appliance", price: 199 , image:Philips},
  { id: 23, name: "LG Refrigerator 260L", category: "home-appliance", price: 499, image:lg},
  { id: 24, name: "Samsung Washing Machine", category: "home-appliance", price: 599 , image:samsung2},
];

export default products;
