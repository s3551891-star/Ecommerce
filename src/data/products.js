const products = [
  // =========================================================
  // ELECTRONICS - 10 PRODUCTS
  // =========================================================

  {
    id: 1,
    title: "Premium Wireless Headphones",
    category: "Electronics",
    price: 89.99,
    oldPrice: 119.99,
    rating: 4.8,
    reviews: 124,
    stock: 18,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    description:
      "Premium wireless headphones with powerful sound, comfortable ear cushions, and long battery life.",
    features: [
      "Bluetooth connectivity",
      "Up to 30 hours battery",
      "Noise isolation",
      "Comfortable over-ear design",
    ],
  },

  {
    id: 2,
    title: "Smart Fitness Watch",
    category: "Electronics",
    price: 69.99,
    oldPrice: 89.99,
    rating: 4.6,
    reviews: 98,
    stock: 25,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    description:
      "Modern smartwatch for tracking fitness activities, notifications, and daily health metrics.",
    features: [
      "Activity tracking",
      "Heart-rate monitoring",
      "Smart notifications",
      "Multiple workout modes",
    ],
  },

  {
    id: 3,
    title: "Wireless Bluetooth Speaker",
    category: "Electronics",
    price: 49.99,
    oldPrice: 69.99,
    rating: 4.6,
    reviews: 91,
    stock: 21,
    badge: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80",
    description:
      "Portable Bluetooth speaker delivering powerful sound in a compact and stylish design.",
    features: [
      "Bluetooth connectivity",
      "Portable design",
      "Powerful audio",
      "Long battery life",
    ],
  },

  {
    id: 4,
    title: "Mechanical Gaming Keyboard",
    category: "Electronics",
    price: 74.99,
    oldPrice: 99.99,
    rating: 4.7,
    reviews: 86,
    stock: 15,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",
    description:
      "Responsive mechanical keyboard designed for gaming, programming, and everyday productivity.",
    features: [
      "Mechanical switches",
      "RGB lighting",
      "Anti-ghosting keys",
      "Gaming-friendly design",
    ],
  },

  {
    id: 5,
    title: "Wireless Gaming Mouse",
    category: "Electronics",
    price: 39.99,
    oldPrice: 54.99,
    rating: 4.5,
    reviews: 74,
    stock: 28,
    badge: "Sale",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80",
    description:
      "Fast and accurate wireless gaming mouse with ergonomic design and responsive controls.",
    features: [
      "Wireless connectivity",
      "High precision sensor",
      "Ergonomic shape",
      "Rechargeable battery",
    ],
  },

  {
    id: 6,
    title: "USB-C Fast Charger",
    category: "Electronics",
    price: 29.99,
    oldPrice: 39.99,
    rating: 4.6,
    reviews: 113,
    stock: 40,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=80",
    description:
      "Compact fast USB-C charger suitable for smartphones, tablets, and compatible devices.",
    features: [
      "Fast charging",
      "USB-C output",
      "Compact design",
      "Multiple device support",
    ],
  },

  {
    id: 7,
    title: "1080p HD Webcam",
    category: "Electronics",
    price: 54.99,
    oldPrice: 69.99,
    rating: 4.4,
    reviews: 67,
    stock: 19,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=80",
    description:
      "Full HD webcam for online classes, video calls, meetings, and content creation.",
    features: [
      "1080p Full HD",
      "Built-in microphone",
      "Wide-angle lens",
      "Plug and play",
    ],
  },

  {
    id: 8,
    title: "Portable Power Bank",
    category: "Electronics",
    price: 44.99,
    oldPrice: 59.99,
    rating: 4.7,
    reviews: 105,
    stock: 32,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1609592424982-b2bcd3d7d7e4?auto=format&fit=crop&w=900&q=80",
    description:
      "High-capacity portable power bank designed to keep your devices charged while traveling.",
    features: [
      "High capacity",
      "Fast charging",
      "Portable design",
      "Multiple charging ports",
    ],
  },

  {
    id: 9,
    title: "Smart LED Desk Lamp",
    category: "Electronics",
    price: 42.99,
    oldPrice: 54.99,
    rating: 4.5,
    reviews: 59,
    stock: 17,
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
    description:
      "Smart LED desk lamp with adjustable brightness for study, work, and gaming setups.",
    features: [
      "Adjustable brightness",
      "LED lighting",
      "Modern design",
      "Flexible lamp head",
    ],
  },

  {
    id: 10,
    title: "Tablet Stand Holder",
    category: "Electronics",
    price: 24.99,
    oldPrice: 34.99,
    rating: 4.4,
    reviews: 48,
    stock: 35,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=900&q=80",
    description:
      "Adjustable tablet and phone stand perfect for desks, offices, studying, and entertainment.",
    features: [
      "Adjustable angle",
      "Stable base",
      "Foldable design",
      "Multi-device support",
    ],
  },

  // =========================================================
  // FASHION - 10 PRODUCTS
  // =========================================================

  {
    id: 11,
    title: "Classic Cotton T-Shirt",
    category: "Fashion",
    price: 24.99,
    oldPrice: 34.99,
    rating: 4.6,
    reviews: 87,
    stock: 50,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    description:
      "Comfortable everyday cotton t-shirt with a clean and versatile design.",
    features: [
      "Soft cotton fabric",
      "Breathable material",
      "Comfortable fit",
      "Everyday styling",
    ],
  },

  {
    id: 12,
    title: "Classic Denim Jacket",
    category: "Fashion",
    price: 64.99,
    oldPrice: 84.99,
    rating: 4.7,
    reviews: 76,
    stock: 22,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80",
    description:
      "Classic denim jacket with a timeless design suitable for casual everyday outfits.",
    features: [
      "Durable denim",
      "Classic design",
      "Button closure",
      "Multiple pockets",
    ],
  },

  {
    id: 13,
    title: "Casual Polo Shirt",
    category: "Fashion",
    price: 32.99,
    oldPrice: 44.99,
    rating: 4.5,
    reviews: 62,
    stock: 38,
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=900&q=80",
    description:
      "Smart casual polo shirt suitable for everyday wear, university, and casual events.",
    features: [
      "Soft fabric",
      "Classic collar",
      "Comfortable fit",
      "Everyday wear",
    ],
  },

  {
    id: 14,
    title: "Premium Casual Hoodie",
    category: "Fashion",
    price: 49.99,
    oldPrice: 64.99,
    rating: 4.8,
    reviews: 119,
    stock: 31,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80",
    description:
      "Warm and comfortable casual hoodie designed for relaxed everyday outfits.",
    features: [
      "Soft fleece interior",
      "Adjustable hood",
      "Front pocket",
      "Comfortable fit",
    ],
  },

  {
    id: 15,
    title: "Slim Fit Casual Shirt",
    category: "Fashion",
    price: 39.99,
    oldPrice: 49.99,
    rating: 4.4,
    reviews: 53,
    stock: 26,
    badge: "Sale",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80",
    description:
      "Smart slim-fit casual shirt designed for a clean and modern appearance.",
    features: [
      "Slim fit",
      "Soft fabric",
      "Button closure",
      "Modern design",
    ],
  },

  {
    id: 16,
    title: "Classic Chino Pants",
    category: "Fashion",
    price: 44.99,
    oldPrice: 59.99,
    rating: 4.6,
    reviews: 71,
    stock: 29,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80",
    description:
      "Versatile chino pants designed for comfortable everyday and smart-casual outfits.",
    features: [
      "Comfortable fabric",
      "Classic fit",
      "Multiple pockets",
      "Versatile styling",
    ],
  },

  {
    id: 17,
    title: "Premium Casual Sweatshirt",
    category: "Fashion",
    price: 46.99,
    oldPrice: 59.99,
    rating: 4.5,
    reviews: 58,
    stock: 24,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=900&q=80",
    description:
      "Soft casual sweatshirt designed for comfort during cooler days.",
    features: [
      "Soft fabric",
      "Warm construction",
      "Relaxed fit",
      "Minimalist design",
    ],
  },

  {
    id: 18,
    title: "Lightweight Summer Shirt",
    category: "Fashion",
    price: 29.99,
    oldPrice: 39.99,
    rating: 4.3,
    reviews: 44,
    stock: 33,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=80",
    description:
      "Lightweight shirt designed for comfortable everyday wear during warmer weather.",
    features: [
      "Lightweight material",
      "Breathable design",
      "Relaxed fit",
      "Easy to style",
    ],
  },

  {
    id: 19,
    title: "Classic Formal Blazer",
    category: "Fashion",
    price: 109.99,
    oldPrice: 139.99,
    rating: 4.7,
    reviews: 38,
    stock: 12,
    badge: "Premium",
    image:
      "https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&w=900&q=80",
    description:
      "Elegant formal blazer designed for professional meetings, events, and formal occasions.",
    features: [
      "Premium finish",
      "Modern fit",
      "Professional design",
      "Multiple pockets",
    ],
  },

  {
    id: 20,
    title: "Everyday Jogger Pants",
    category: "Fashion",
    price: 36.99,
    oldPrice: 49.99,
    rating: 4.6,
    reviews: 83,
    stock: 42,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=80",
    description:
      "Comfortable jogger pants ideal for casual outfits, travel, and everyday activities.",
    features: [
      "Stretch fabric",
      "Elastic waistband",
      "Side pockets",
      "Comfortable fit",
    ],
  },

  // =========================================================
  // SHOES - 10 PRODUCTS
  // =========================================================

  {
    id: 21,
    title: "Modern Running Shoes",
    category: "Shoes",
    price: 79.99,
    oldPrice: 109.99,
    rating: 4.8,
    reviews: 143,
    stock: 30,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    description:
      "Lightweight running shoes with comfortable cushioning for everyday walking and running.",
    features: [
      "Lightweight construction",
      "Cushioned sole",
      "Breathable upper",
      "Flexible outsole",
    ],
  },

  {
    id: 22,
    title: "Classic White Sneakers",
    category: "Shoes",
    price: 69.99,
    oldPrice: 89.99,
    rating: 4.7,
    reviews: 112,
    stock: 26,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
    description:
      "Clean and versatile white sneakers designed for everyday casual outfits.",
    features: [
      "Classic design",
      "Comfortable sole",
      "Durable construction",
      "Everyday styling",
    ],
  },

  {
    id: 23,
    title: "High Top Casual Sneakers",
    category: "Shoes",
    price: 74.99,
    oldPrice: 94.99,
    rating: 4.5,
    reviews: 68,
    stock: 20,
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
    description:
      "Stylish high-top sneakers combining classic streetwear design with everyday comfort.",
    features: [
      "High-top design",
      "Comfortable interior",
      "Durable outsole",
      "Streetwear style",
    ],
  },

  {
    id: 24,
    title: "Lightweight Training Shoes",
    category: "Shoes",
    price: 84.99,
    oldPrice: 109.99,
    rating: 4.7,
    reviews: 95,
    stock: 23,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=80",
    description:
      "Lightweight training shoes designed for gym sessions and active daily routines.",
    features: [
      "Lightweight sole",
      "Breathable upper",
      "Flexible support",
      "Training design",
    ],
  },

  {
    id: 25,
    title: "Classic Leather Loafers",
    category: "Shoes",
    price: 94.99,
    oldPrice: 119.99,
    rating: 4.6,
    reviews: 54,
    stock: 16,
    badge: "Premium",
    image:
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=900&q=80",
    description:
      "Elegant leather loafers suitable for office wear, formal events, and smart casual outfits.",
    features: [
      "Premium leather finish",
      "Classic design",
      "Comfortable interior",
      "Durable sole",
    ],
  },

  {
    id: 26,
    title: "Comfort Walking Shoes",
    category: "Shoes",
    price: 64.99,
    oldPrice: 84.99,
    rating: 4.8,
    reviews: 121,
    stock: 34,
    badge: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80",
    description:
      "Comfort-focused walking shoes designed for long days and everyday movement.",
    features: [
      "Soft cushioning",
      "Lightweight design",
      "Breathable material",
      "Flexible sole",
    ],
  },

  {
    id: 27,
    title: "Classic Canvas Shoes",
    category: "Shoes",
    price: 49.99,
    oldPrice: 64.99,
    rating: 4.4,
    reviews: 61,
    stock: 28,
    badge: "Sale",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    description:
      "Simple canvas shoes with a casual design for everyday wear.",
    features: [
      "Canvas upper",
      "Casual style",
      "Lightweight sole",
      "Comfortable fit",
    ],
  },

  {
    id: 28,
    title: "Outdoor Hiking Shoes",
    category: "Shoes",
    price: 99.99,
    oldPrice: 129.99,
    rating: 4.7,
    reviews: 47,
    stock: 14,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80",
    description:
      "Durable outdoor shoes designed for hiking, trails, and outdoor adventures.",
    features: [
      "Durable outsole",
      "Outdoor traction",
      "Supportive construction",
      "Trail-ready design",
    ],
  },

  {
    id: 29,
    title: "Casual Slip-On Shoes",
    category: "Shoes",
    price: 54.99,
    oldPrice: 69.99,
    rating: 4.5,
    reviews: 73,
    stock: 31,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=900&q=80",
    description:
      "Easy-to-wear slip-on shoes designed for comfortable everyday movement.",
    features: [
      "Slip-on design",
      "Soft interior",
      "Lightweight construction",
      "Casual styling",
    ],
  },

  {
    id: 30,
    title: "Performance Sports Shoes",
    category: "Shoes",
    price: 89.99,
    oldPrice: 114.99,
    rating: 4.6,
    reviews: 88,
    stock: 19,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=900&q=80",
    description:
      "Performance-focused sports shoes designed for active training and workouts.",
    features: [
      "Performance cushioning",
      "Breathable upper",
      "Flexible sole",
      "Sport-ready design",
    ],
  },

  // =========================================================
  // ACCESSORIES - 10 PRODUCTS
  // =========================================================

  {
    id: 31,
    title: "Premium Sunglasses",
    category: "Accessories",
    price: 39.99,
    oldPrice: 54.99,
    rating: 4.4,
    reviews: 51,
    stock: 22,
    badge: "Sale",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
    description:
      "Stylish sunglasses with a modern frame designed for everyday outdoor use.",
    features: [
      "UV protection",
      "Modern frame",
      "Lightweight design",
      "Comfortable fit",
    ],
  },

  {
    id: 32,
    title: "Classic Leather Wallet",
    category: "Accessories",
    price: 34.99,
    oldPrice: 44.99,
    rating: 4.7,
    reviews: 94,
    stock: 36,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80",
    description:
      "Compact leather wallet with multiple card slots and a timeless design.",
    features: [
      "Premium leather",
      "Multiple card slots",
      "Compact design",
      "Durable construction",
    ],
  },

  {
    id: 33,
    title: "Minimalist Wrist Watch",
    category: "Accessories",
    price: 74.99,
    oldPrice: 99.99,
    rating: 4.5,
    reviews: 64,
    stock: 20,
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=80",
    description:
      "Minimalist wrist watch combining elegant design with everyday functionality.",
    features: [
      "Minimalist dial",
      "Premium strap",
      "Lightweight design",
      "Everyday styling",
    ],
  },

  {
    id: 34,
    title: "Canvas Travel Backpack",
    category: "Accessories",
    price: 59.99,
    oldPrice: 79.99,
    rating: 4.7,
    reviews: 76,
    stock: 14,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    description:
      "Durable travel backpack with multiple compartments for everyday essentials.",
    features: [
      "Multiple compartments",
      "Laptop section",
      "Comfortable straps",
      "Travel friendly",
    ],
  },

  {
    id: 35,
    title: "Classic Leather Belt",
    category: "Accessories",
    price: 29.99,
    oldPrice: 39.99,
    rating: 4.5,
    reviews: 58,
    stock: 41,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=80",
    description:
      "Classic leather belt with a clean buckle design suitable for everyday outfits.",
    features: [
      "Leather construction",
      "Classic buckle",
      "Adjustable fit",
      "Durable design",
    ],
  },

  {
    id: 36,
    title: "Everyday Baseball Cap",
    category: "Accessories",
    price: 19.99,
    oldPrice: 29.99,
    rating: 4.4,
    reviews: 45,
    stock: 55,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=80",
    description:
      "Comfortable everyday baseball cap with an adjustable back strap.",
    features: [
      "Adjustable strap",
      "Lightweight fabric",
      "Classic design",
      "Everyday wear",
    ],
  },

  {
    id: 37,
    title: "Premium Leather Handbag",
    category: "Accessories",
    price: 89.99,
    oldPrice: 119.99,
    rating: 4.6,
    reviews: 39,
    stock: 11,
    badge: "Premium",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
    description:
      "Elegant leather handbag with spacious compartments and a premium finish.",
    features: [
      "Premium finish",
      "Spacious interior",
      "Multiple compartments",
      "Durable handles",
    ],
  },

  {
    id: 38,
    title: "Travel Luggage Organizer",
    category: "Accessories",
    price: 27.99,
    oldPrice: 37.99,
    rating: 4.5,
    reviews: 52,
    stock: 30,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=900&q=80",
    description:
      "Convenient luggage organizer set designed to keep travel items neatly arranged.",
    features: [
      "Multiple compartments",
      "Lightweight",
      "Travel friendly",
      "Space saving design",
    ],
  },

  {
    id: 39,
    title: "Metal Key Organizer",
    category: "Accessories",
    price: 16.99,
    oldPrice: 24.99,
    rating: 4.3,
    reviews: 37,
    stock: 48,
    badge: "Sale",
    image:
      "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=900&q=80",
    description:
      "Compact key organizer designed to keep your everyday keys neatly arranged.",
    features: [
      "Compact design",
      "Metal construction",
      "Easy organization",
      "Pocket friendly",
    ],
  },

  {
    id: 40,
    title: "Classic Scarf",
    category: "Accessories",
    price: 22.99,
    oldPrice: 32.99,
    rating: 4.5,
    reviews: 43,
    stock: 27,
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=900&q=80",
    description:
      "Soft and stylish scarf designed to complement casual and formal outfits.",
    features: [
      "Soft material",
      "Comfortable feel",
      "Versatile styling",
      "Lightweight design",
    ],
  },

  // =========================================================
  // HOME & LIVING - 10 PRODUCTS
  // =========================================================

  {
    id: 41,
    title: "Modern Desk Lamp",
    category: "Home & Living",
    price: 34.99,
    oldPrice: 44.99,
    rating: 4.6,
    reviews: 83,
    stock: 16,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
    description:
      "Modern desk lamp perfect for study tables, offices, bedrooms, and workspaces.",
    features: [
      "Modern design",
      "Adjustable lighting",
      "Compact size",
      "Workspace friendly",
    ],
  },

  {
    id: 42,
    title: "Ceramic Coffee Mug",
    category: "Home & Living",
    price: 14.99,
    oldPrice: 19.99,
    rating: 4.7,
    reviews: 112,
    stock: 45,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80",
    description:
      "Simple and elegant ceramic coffee mug suitable for home and office use.",
    features: [
      "Durable ceramic",
      "Comfortable handle",
      "Easy to clean",
      "Everyday use",
    ],
  },

  {
    id: 43,
    title: "Decorative Indoor Plant",
    category: "Home & Living",
    price: 29.99,
    oldPrice: 39.99,
    rating: 4.5,
    reviews: 66,
    stock: 18,
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80",
    description:
      "Beautiful decorative indoor plant designed to add a fresh touch to your living space.",
    features: [
      "Indoor friendly",
      "Decorative design",
      "Easy maintenance",
      "Home decoration",
    ],
  },

  {
    id: 44,
    title: "Minimalist Wall Clock",
    category: "Home & Living",
    price: 39.99,
    oldPrice: 49.99,
    rating: 4.4,
    reviews: 57,
    stock: 21,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=900&q=80",
    description:
      "Minimalist wall clock designed to complement modern home and office interiors.",
    features: [
      "Minimalist design",
      "Easy wall mounting",
      "Quiet mechanism",
      "Modern appearance",
    ],
  },

  {
    id: 45,
    title: "Soft Decorative Cushion",
    category: "Home & Living",
    price: 18.99,
    oldPrice: 24.99,
    rating: 4.6,
    reviews: 71,
    stock: 40,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=80",
    description:
      "Soft decorative cushion that adds comfort and style to sofas and bedrooms.",
    features: [
      "Soft filling",
      "Decorative design",
      "Comfortable texture",
      "Easy maintenance",
    ],
  },

  {
    id: 46,
    title: "Wooden Storage Box",
    category: "Home & Living",
    price: 32.99,
    oldPrice: 44.99,
    rating: 4.5,
    reviews: 49,
    stock: 23,
    badge: "Sale",
    image:
      "https://images.unsplash.com/photo-1533234427049-9e9bb093186d?auto=format&fit=crop&w=900&q=80",
    description:
      "Decorative wooden storage box for organizing small household items.",
    features: [
      "Wooden construction",
      "Storage friendly",
      "Decorative design",
      "Durable build",
    ],
  },

  {
    id: 47,
    title: "Modern Table Vase",
    category: "Home & Living",
    price: 24.99,
    oldPrice: 34.99,
    rating: 4.4,
    reviews: 36,
    stock: 29,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=900&q=80",
    description:
      "Modern decorative vase suitable for tables, shelves, and living room decoration.",
    features: [
      "Modern shape",
      "Decorative finish",
      "Stable base",
      "Home decoration",
    ],
  },

  {
    id: 48,
    title: "Cozy Home Blanket",
    category: "Home & Living",
    price: 44.99,
    oldPrice: 59.99,
    rating: 4.8,
    reviews: 91,
    stock: 25,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=80",
    description:
      "Soft and cozy blanket designed for comfortable evenings at home.",
    features: [
      "Soft material",
      "Warm design",
      "Comfortable texture",
      "Easy to maintain",
    ],
  },

  {
    id: 49,
    title: "Kitchen Storage Jar Set",
    category: "Home & Living",
    price: 27.99,
    oldPrice: 37.99,
    rating: 4.5,
    reviews: 63,
    stock: 32,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=900&q=80",
    description:
      "Stylish storage jar set for organizing kitchen ingredients and pantry items.",
    features: [
      "Multiple jars",
      "Secure lids",
      "Kitchen organization",
      "Easy to clean",
    ],
  },

  {
    id: 50,
    title: "Modern Table Organizer",
    category: "Home & Living",
    price: 21.99,
    oldPrice: 29.99,
    rating: 4.3,
    reviews: 41,
    stock: 37,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=80",
    description:
      "Compact desk organizer for keeping stationery and everyday office items arranged.",
    features: [
      "Multiple sections",
      "Compact design",
      "Desk friendly",
      "Modern appearance",
    ],
  },

  // =========================================================
  // SPORTS - 10 PRODUCTS
  // =========================================================

  {
    id: 51,
    title: "Travel Water Bottle",
    category: "Sports",
    price: 19.99,
    oldPrice: 29.99,
    rating: 4.6,
    reviews: 72,
    stock: 35,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80",
    description:
      "Reusable water bottle designed for gym sessions, travel, university, and everyday use.",
    features: [
      "Reusable design",
      "Leak-resistant lid",
      "Lightweight",
      "Travel friendly",
    ],
  },

  {
    id: 52,
    title: "Professional Yoga Mat",
    category: "Sports",
    price: 34.99,
    oldPrice: 44.99,
    rating: 4.7,
    reviews: 93,
    stock: 27,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=900&q=80",
    description:
      "Comfortable non-slip yoga mat suitable for yoga, stretching, and home workouts.",
    features: [
      "Non-slip surface",
      "Comfortable cushioning",
      "Easy to clean",
      "Workout friendly",
    ],
  },

  {
    id: 53,
    title: "Adjustable Dumbbells",
    category: "Sports",
    price: 79.99,
    oldPrice: 99.99,
    rating: 4.6,
    reviews: 64,
    stock: 15,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80",
    description:
      "Adjustable dumbbells designed for convenient strength training at home.",
    features: [
      "Adjustable weight",
      "Compact storage",
      "Strong construction",
      "Home workout friendly",
    ],
  },

  {
    id: 54,
    title: "Fitness Resistance Bands",
    category: "Sports",
    price: 24.99,
    oldPrice: 34.99,
    rating: 4.5,
    reviews: 88,
    stock: 43,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1598971639058-9996d8a9c3f2?auto=format&fit=crop&w=900&q=80",
    description:
      "Portable resistance bands for strength training, stretching, and home workouts.",
    features: [
      "Multiple resistance levels",
      "Portable design",
      "Easy storage",
      "Full-body workouts",
    ],
  },

  {
    id: 55,
    title: "Professional Basketball",
    category: "Sports",
    price: 29.99,
    oldPrice: 39.99,
    rating: 4.7,
    reviews: 52,
    stock: 20,
    badge: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80",
    description:
      "Durable basketball designed for training, practice, and recreational games.",
    features: [
      "Durable outer surface",
      "Good grip",
      "Training friendly",
      "Indoor and outdoor use",
    ],
  },

  {
    id: 56,
    title: "Professional Football",
    category: "Sports",
    price: 34.99,
    oldPrice: 44.99,
    rating: 4.6,
    reviews: 69,
    stock: 24,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=900&q=80",
    description:
      "Durable football suitable for training sessions, practice, and recreational matches.",
    features: [
      "Durable construction",
      "Good grip",
      "Training friendly",
      "Outdoor use",
    ],
  },

  {
    id: 57,
    title: "Sports Gym Bag",
    category: "Sports",
    price: 39.99,
    oldPrice: 54.99,
    rating: 4.6,
    reviews: 74,
    stock: 29,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    description:
      "Spacious sports gym bag designed to carry workout clothes, shoes, and accessories.",
    features: [
      "Spacious interior",
      "Separate compartments",
      "Durable material",
      "Comfortable straps",
    ],
  },

  {
    id: 58,
    title: "Jump Rope Fitness Trainer",
    category: "Sports",
    price: 14.99,
    oldPrice: 19.99,
    rating: 4.4,
    reviews: 57,
    stock: 50,
    badge: "Sale",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80",
    description:
      "Lightweight jump rope suitable for cardio workouts, fitness training, and home exercise.",
    features: [
      "Lightweight design",
      "Comfortable handles",
      "Adjustable length",
      "Portable",
    ],
  },

  {
    id: 59,
    title: "Sports Training Gloves",
    category: "Sports",
    price: 22.99,
    oldPrice: 29.99,
    rating: 4.5,
    reviews: 61,
    stock: 36,
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80",
    description:
      "Comfortable training gloves designed to provide grip and support during workouts.",
    features: [
      "Comfortable fit",
      "Improved grip",
      "Breathable material",
      "Workout support",
    ],
  },

  {
    id: 60,
    title: "Sports Training Cone Set",
    category: "Sports",
    price: 18.99,
    oldPrice: 24.99,
    rating: 4.3,
    reviews: 35,
    stock: 44,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80",
    description:
      "Training cone set for agility drills, football practice, running exercises, and sports training.",
    features: [
      "Multiple cones",
      "Lightweight",
      "Easy to carry",
      "Agility training",
    ],
  },
];

// =========================================================
// CATEGORIES
// =========================================================

export const categories = [
  {
    id: 1,
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=700&q=80",
  },

  {
    id: 2,
    name: "Fashion",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=700&q=80",
  },

  {
    id: 3,
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
  },

  {
    id: 4,
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&w=700&q=80",
  },

  {
    id: 5,
    name: "Home & Living",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80",
  },

  {
    id: 6,
    name: "Sports",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=700&q=80",
  },
];

export default products;