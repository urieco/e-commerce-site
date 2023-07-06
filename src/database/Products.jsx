const Products = [
  {
    key: "1p",
    title: "Dell OptiPlex 7000 Series 7090 Tower Business Desktop",
    description:
      "Intel Core i5-10600, 16GB RAM, 512MB SSD, DVD-RW, Display Port, Wired Keyboard & Mouse, Wi-Fi, Windows 11 Home, Black",
    type: "PC",
    imageURL: "/images/PC - Budget.jpg",
    price: 549,
    discount: 0,
    totalRating: [{ customerId: "admin", value: 5 }],
    rating: function () {
      const avg =
        this.totalRating.reduce((prev, next) => prev + next.value, 0) /
        this.totalRating.length;
      return avg;
    },
  },
  {
    key: "2p",
    title: "CyberpowerPC Gamer Xtreme VR Gaming PC",
    description:
      "Intel Core i7-12700F 2.1GHz, GeForce RTX 3060 12GB, 16GB DDR4, 1TB NVMe SSD, WiFi & Win 11 Home (GXiVR8040A12), Black ",
    type: "PC",
    imageURL: "/images/PC - MediumTier.jpg",
    price: 1169,
    discount: 0.19,
    totalRating: [{ customerId: "admin", value: 5 }],
    rating: function () {
      const avg =
        this.totalRating.reduce((prev, next) => prev + next.value, 0) /
        this.totalRating.length;
      return avg;
    },
  },
  {
    key: "3p",
    title: "Apple Mac Mini Desktop Computer",
    description:
      "M2 Pro Chip with 10-Core CPU and 16-Core GPU, 32GB Memory, 1TB SSD , Early 2023",
    type: "PC",
    imageURL: "/images/PC - MacMini.jpg",
    price: 1899,
    discount: 0.29,
    totalRating: [{ customerId: "admin", value: 5 }],
    rating: function () {
      const avg =
        this.totalRating.reduce((prev, next) => prev + next.value, 0) /
        this.totalRating.length;
      return avg;
    },
  },
  {
    key: "4p",
    title: "CyberpowerPC Gamer Ultimate Gaming PC",
    description:
      "Intel Core i9-13900KF 3.0GHz, GeForce RTX 4070 Ti 12GB, 16GB DDR5, 1TB NVMe PCIe SSD, WiFi Ready & Windows 11 Home (GXiVR8080A34), White ",
    type: "PC",
    imageURL: "/images/PC - HighTier.jpg",
    price: 2299,
    discount: 0.49,
    totalRating: [{ customerId: "admin", value: 5 }],
    rating: function () {
      const avg =
        this.totalRating.reduce((prev, next) => prev + next.value, 0) /
        this.totalRating.length;
      return avg;
    },
  },
  {
    key: "1l",
    title: "AcerAspire5A515-56-347N",
    description:
      'Slim Laptop - 15.6" Full HD IPS Display - 11th Gen Intel i3-1115G4 Dual Core Processor - 8GB DDR4 - 128GB NVMe SSD - WiFi 6 - Amazon Alexa - Windows 11 Home in S Mode"',
    type: "Laptop",
    imageURL: "/images/Laptop - AcerAspire5.jpg",
    price: 368,
    discount: 0,
    totalRating: [{ customerId: "admin", value: 5 }],
    rating: function () {
      const avg =
        this.totalRating.reduce((prev, next) => prev + next.value, 0) /
        this.totalRating.length;
      return avg;
    },
  },

  {
    key: "2l",
    title: "ASUS FX506HF-ES51 TUF Gaming F15 Gaming Laptop",
    description:
      "15.6â€ 144Hz FHD Display, Intel Core i5-11400H Processor, GeForce RTX 2050, 8GB DDR4 RAM, 512GB PCIe SSD Gen 3, Wi-Fi 6, Windows 11, FX506HF-ES51",
    type: "Laptop",
    imageURL: "/images/Laptop - AsusFX506HF-ES51.jpg",
    price: 700,
    discount: 0.1,
    totalRating: [{ customerId: "admin", value: 5 }],
    rating: function () {
      const avg =
        this.totalRating.reduce((prev, next) => prev + next.value, 0) /
        this.totalRating.length;
      return avg;
    },
  },
  {
    key: "3l",
    title: "Lenovo ThinkPad E15 Gen 4 21E6007GUS",
    description:
      '15.6" Notebook - Full HD - 1920 x 1080 - Intel Core i7 12th Gen i7-1255U Deca-core (10 Core) - 16 GB Total RAM - 8 GB On-Board Memory - 512 GB SSD - Mineral',
    type: "Laptop",
    imageURL: "/images/Laptop - LenovoThinkPadE15.jpg",
    price: 992,
    discount: 0.2,
    totalRating: [{ customerId: "admin", value: 5 }],
    rating: function () {
      const avg =
        this.totalRating.reduce((prev, next) => prev + next.value, 0) /
        this.totalRating.length;
      return avg;
    },
  },
  {
    key: "4l",
    title: "Apple 2023 MacBook Air Laptop with M2 chip",
    description:
      "15.3-inch Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage, 1080p FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Midnight",
    type: "Laptop",
    imageURL: "/images/Laptop - MacbookAir2023.jpg",
    price: 1275,
    discount: 0.3,
    totalRating: [{ customerId: "admin", value: 5 }],
    rating: function () {
      const avg =
        this.totalRating.reduce((prev, next) => prev + next.value, 0) /
        this.totalRating.length;
      return avg;
    },
  },
  //
  {
    key: "1s",
    title: "Google Pixel 7-5G",
    description:
      "Android Phone - Unlocked Smartphone with Wide Angle Lens and 24-Hour Battery - 128GB - Obsidian",
    type: "Smartphone",
    imageURL: "/images/Smarphone - Pixel7.jpg",
    price: 599,
    discount: 0.05,
    totalRating: [{ customerId: "admin", value: 5 }],
    rating: function () {
      const avg =
        this.totalRating.reduce((prev, next) => prev + next.value, 0) /
        this.totalRating.length;
      return avg;
    },
  },
  {
    key: "2s",
    title: "AMSUNG Galaxy S23 Ultra Cell Phone",
    description:
      "Factory Unlocked Android Smartphone, 256GB, 200MP Camera, Night Mode, Long Battery Life, S Pen, US Version, 2023, Lavender",
    type: "Smartphone",
    imageURL: "/images/Smartphone - SamsungS23Ultra.jpg",
    price: 999,
    discount: 0.1,
    totalRating: [{ customerId: "admin", value: 5 }],
    rating: function () {
      const avg =
        this.totalRating.reduce((prev, next) => prev + next.value, 0) /
        this.totalRating.length;
      return avg;
    },
  },
  {
    key: "3s",
    title: "Xiaomi 13 Pro",
    description: "256GB, 6.73 Inches, 50MP Cameras, AMOLED",
    type: "Smartphone",
    imageURL: "/images/Smartphone - Xiaomi13Pro.jpg",
    price: 1049,
    discount: 0.15,
    totalRating: [{ customerId: "admin", value: 5 }],
    rating: function () {
      const avg =
        this.totalRating.reduce((prev, next) => prev + next.value, 0) /
        this.totalRating.length;
      return avg;
    },
  },
  {
    key: "4s",
    title: "iPhone 14 Pro Max 256GB",
    description: "48MP Camera, Apple A16 Bionic 6 Cores",
    type: "Smartphone",
    imageURL: "/images/Smartphone - iPhone14ProMax.jpg",
    price: 1299,
    discount: 0.05,
    totalRating: [{ customerId: "admin", value: 5 }],
    rating: function () {
      const avg =
        this.totalRating.reduce((prev, next) => prev + next.value, 0) /
        this.totalRating.length;
      return avg;
    },
  },
  {
    key: "1a",
    title: "Apple Air Pods",
    description: "",
    type: "Accessories",
    imageURL: "/images/Accessories - AppleAirPods.jpg",
    price: 120,
    discount: 0.1,
    totalRating: [{ customerId: "admin", value: 5 }],
    rating: function () {
      const avg =
        this.totalRating.reduce((prev, next) => prev + next.value, 0) /
        this.totalRating.length;
      return avg;
    },
  },
  {
    key: "2a",
    title: "NEW Razer BlackShark V2 Pro Wireless Gaming Headset 2023 Edition",
    description:
      "50MM Titanium Drivers - HyperClear Super Wideband Mic - Noise-isolating Earcups - Ultra-Soft Memory Foam- 70 Hour Battery Life - Black",
    type: "Accessories",
    imageURL: "/images/Accessories - RazerBlackSharkV2Pro.jpg",
    price: 199,
    discount: 0.15,
    totalRating: [{ customerId: "admin", value: 5 }],
    rating: function () {
      const avg =
        this.totalRating.reduce((prev, next) => prev + next.value, 0) /
        this.totalRating.length;
      return avg;
    },
  },
  {
    key: "3a",
    title: "Logitech G G502 11 Button Wireless Gaming Mouse",
    description:
      "USB Black & Logitech G Wireless Gaming Mice Cloth Or Hard Gaming Mouse Pad, Black",
    type: "Accessories",
    imageURL: "/images/Accessories - LogitechGG502.jpg",
    price: 288,
    discount: 0.16,
    totalRating: [{ customerId: "admin", value: 5 }],
    rating: function () {
      const avg =
        this.totalRating.reduce((prev, next) => prev + next.value, 0) /
        this.totalRating.length;
      return avg;
    },
  },
  {
    key: "4a",
    title: "Satisfaction75 Round 2",
    description: "",
    type: "Accessories",
    imageURL: "/images/Accessories - Satisfaction75Round2.jpg",
    price: 480,
    discount: 0,
    totalRating: [{ customerId: "admin", value: 5 }],
    rating: function () {
      const avg =
        this.totalRating.reduce((prev, next) => prev + next.value, 0) /
        this.totalRating.length;
      return avg;
    },
  },
];

export default Products;
