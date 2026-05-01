export const allQuestions = [
  // 1-10: Sayuran & Karbohidrat
  { q: {id: "Apa bahan utama pembuatan tempe?", en: "What is the main ingredient of tempe?"}, a: {id: ["Kedelai", "Gandum", "Jagung"], en: ["Soybean", "Wheat", "Corn"]}, c: 0 },
  { q: {id: "Warna alami dari kunyit adalah...", en: "The natural color of turmeric is..."}, a: {id: ["Merah", "Kuning", "Hijau"], en: ["Red", "Yellow", "Green"]}, c: 1 },
  { q: {id: "Sayuran yang identik dengan kelinci adalah...", en: "Vegetable identical with rabbits is..."}, a: {id: ["Bayam", "Wortel", "Kol"], en: ["Spinach", "Carrot", "Cabbage"]}, c: 1 },
  { q: {id: "Karbohidrat utama di Indonesia adalah...", en: "Main carbohydrate in Indonesia is..."}, a: {id: ["Nasi", "Kentang", "Roti"], en: ["Rice", "Potato", "Bread"]}, c: 0 },
  { q: {id: "Bahan dasar pembuatan tahu adalah...", en: "Base ingredient for making tofu is..."}, a: {id: ["Kacang Hijau", "Kedelai", "Kacang Tanah"], en: ["Mung Bean", "Soybean", "Peanut"]}, c: 1 },
  { q: {id: "Bayam mengandung banyak zat...", en: "Spinach contains a lot of..."}, a: {id: ["Besi", "Emas", "Tembaga"], en: ["Iron", "Gold", "Copper"]}, c: 0 },
  { q: {id: "Bawang merah berasal dari bagian...", en: "Shallots come from the..."}, a: {id: ["Akar", "Batang", "Umbi"], en: ["Root", "Stem", "Bulb"]}, c: 2 },
  { q: {id: "Sagu berasal dari pohon...", en: "Sago comes from which tree?"}, a: {id: ["Kelapa", "Pinus", "Rumbia"], en: ["Coconut", "Pine", "Sago Palm"]}, c: 2 },
  { q: {id: "Kentang termasuk jenis...", en: "Potatoes are a type of..."}, a: {id: ["Buah", "Umbi", "Daun"], en: ["Fruit", "Tuber", "Leaf"]}, c: 1 },
  { q: {id: "Warna wortel disebabkan oleh...", en: "Carrot's color is caused by..."}, a: {id: ["Klorofil", "Beta-karoten", "Zat Besi"], en: ["Chlorophyll", "Beta-carotene", "Iron"]}, c: 1 },

  // 11-20: Protein & Hewani
  { q: {id: "Bahan dasar pembuatan keju adalah...", en: "Base ingredient for cheese is..."}, a: {id: ["Santan", "Susu", "Telur"], en: ["Coconut Milk", "Milk", "Egg"]}, c: 1 },
  { q: {id: "Telur asin biasanya menggunakan telur...", en: "Salted eggs usually use eggs from..."}, a: {id: ["Ayam", "Bebek", "Puyuh"], en: ["Chicken", "Duck", "Quail"]}, c: 1 },
  { q: {id: "Susu dipasteurisasi untuk membunuh...", en: "Milk is pasteurized to kill..."}, a: {id: ["Vitamin", "Bakteri", "Protein"], en: ["Vitamin", "Bacteria", "Protein"]}, c: 1 },
  { q: {id: "Daging 'Wagyu' berasal dari negara...", en: "Wagyu beef comes from..."}, a: {id: ["Korea", "Jepang", "China"], en: ["Korea", "Japan", "China"]}, c: 1 },
  { q: {id: "Bagian daging sapi yang empuk adalah...", en: "Tender part of beef is..."}, a: {id: ["Has Dalam", "Punuk", "Kaki"], en: ["Tenderloin", "Chuck", "Shank"]}, c: 0 },
  { q: {id: "Ikan salmon hidup di air...", en: "Salmon lives in which water?"}, a: {id: ["Tawar", "Asin", "Keduanya"], en: ["Fresh", "Salt", "Both"]}, c: 2 },
  { q: {id: "Kuning telur mengandung banyak...", en: "Egg yolk contains a lot of..."}, a: {id: ["Lemak", "Kalsium", "Serat"], en: ["Fat", "Calcium", "Fiber"]}, c: 0 },
  { q: {id: "Caviar adalah telur dari ikan...", en: "Caviar is the eggs of which fish?"}, a: {id: ["Salmon", "Sturgeon", "Lele"], en: ["Salmon", "Sturgeon", "Catfish"]}, c: 1 },
  { q: {id: "Daging domba dalam bahasa Inggris adalah...", en: "Lamb meat is..."}, a: {id: ["Beef", "Pork", "Mutton"], en: ["Beef", "Pork", "Mutton"]}, c: 2 },
  { q: {id: "Ayam petelur dipelihara untuk...", en: "Laying hens are kept for..."}, a: {id: ["Bulu", "Telur", "Suara"], en: ["Feather", "Eggs", "Voice"]}, c: 1 },

  // 21-30: Buah-buahan
  { q: {id: "Raja buah adalah julukan untuk...", en: "The King of Fruits is..."}, a: {id: ["Mangga", "Durian", "Apel"], en: ["Mango", "Durian", "Apple"]}, c: 1 },
  { q: {id: "Buah yang mengandung banyak Vitamin C...", en: "Fruit rich in Vitamin C is..."}, a: {id: ["Pisang", "Jeruk", "Salak"], en: ["Banana", "Orange", "Snakefruit"]}, c: 1 },
  { q: {id: "Tomat secara botani termasuk...", en: "Botanically, tomatoes are..."}, a: {id: ["Buah", "Sayur", "Kacang"], en: ["Fruit", "Vegetable", "Nut"]}, c: 0 },
  { q: {id: "Buah yang bentuknya seperti bintang...", en: "Fruit shaped like a star is..."}, a: {id: ["Belimbing", "Nanas", "Pepaya"], en: ["Starfruit", "Pineapple", "Papaya"]}, c: 0 },
  { q: {id: "Pisang yang digoreng enaknya pisang...", en: "Best banana for frying is..."}, a: {id: ["Ambon", "Kepok", "Susu"], en: ["Ambon", "Kepok", "Susu"]}, c: 1 },
  { q: {id: "Buah tropis dengan rambut di kulitnya...", en: "Tropical fruit with hair on skin..."}, a: {id: ["Kelapa", "Rambutan", "Duku"], en: ["Coconut", "Rambutan", "Duku"]}, c: 1 },
  { q: {id: "Apel berasal dari pohon keluarga...", en: "Apples belong to which tree family?"}, a: {id: ["Mawar", "Melati", "Pinus"], en: ["Rose", "Jasmine", "Pine"]}, c: 0 },
  { q: {id: "Jeruk nipis biasanya dipakai untuk...", en: "Lime is usually used for..."}, a: {id: ["Manisan", "Menghilangkan amis", "Selai"], en: ["Candy", "Removing fishy smell", "Jam"]}, c: 1 },
  { q: {id: "Semangka mengandung banyak...", en: "Watermelon contains a lot of..."}, a: {id: ["Minyak", "Air", "Susu"], en: ["Oil", "Water", "Milk"]}, c: 1 },
  { q: {id: "Alpukat mengandung lemak yang...", en: "Avocados contain fats that are..."}, a: {id: ["Jahat", "Sehat", "Beracun"], en: ["Bad", "Healthy", "Toxic"]}, c: 1 },

  // 31-40: Bumbu & Teknik Masak
  { q: {id: "Ragi digunakan dalam pembuatan...", en: "Yeast is used for making..."}, a: {id: ["Soto", "Roti", "Rendang"], en: ["Soto", "Bread", "Rendang"]}, c: 1 },
  { q: {id: "Rasa pedas cabai berasal dari...", en: "Chili spiciness comes from..."}, a: {id: ["Kalsium", "Kapsaisin", "Glukosa"], en: ["Calcium", "Capsaicin", "Glucose"]}, c: 1 },
  { q: {id: "Garam dihasilkan dari air...", en: "Salt is produced from which water?"}, a: {id: ["Tawar", "Hujan", "Laut"], en: ["Fresh", "Rain", "Sea"]}, c: 2 },
  { q: {id: "Merica memberikan rasa...", en: "Pepper gives a flavor of..."}, a: {id: ["Manis", "Pedas Hangat", "Asam"], en: ["Sweet", "Warm Spicy", "Sour"]}, c: 1 },
  { q: {id: "Kecap manis terbuat dari...", en: "Sweet soy sauce is made from..."}, a: {id: ["Kacang Tanah", "Kedelai Hitam", "Jagung"], en: ["Peanut", "Black Soybean", "Corn"]}, c: 1 },
  { q: {id: "Cuka memberikan rasa...", en: "Vinegar gives a flavor of..."}, a: {id: ["Asin", "Manis", "Asam"], en: ["Salty", "Sweet", "Sour"]}, c: 2 },
  { q: {id: "Santan berasal dari parutan...", en: "Coconut milk comes from grated..."}, a: {id: ["Kelapa", "Singkong", "Nangka"], en: ["Coconut", "Cassava", "Jackfruit"]}, c: 0 },
  { q: {id: "Gula merah terbuat dari nira...", en: "Brown sugar is made from sap of..."}, a: {id: ["Tebu", "Aren", "Pisang"], en: ["Sugarcane", "Palm", "Banana"]}, c: 1 },
  { q: {id: "Teknik masak dengan sedikit minyak...", en: "Cooking with little oil is..."}, a: {id: ["Deep fry", "Tumis", "Rebus"], en: ["Deep fry", "Sauté", "Boil"]}, c: 1 },
  { q: {id: "Menumis bawang disebut teknik...", en: "Sautéing onions is called..."}, a: {id: ["Grilling", "Sautéing", "Baking"], en: ["Grilling", "Sautéing", "Baking"]}, c: 1 },

  // 41-50: Minuman & Dessert
  { q: {id: "Kopi mengandung zat...", en: "Coffee contains..."}, a: {id: ["Nikotin", "Kafein", "Alkohol"], en: ["Nicotine", "Caffeine", "Alcohol"]}, c: 1 },
  { q: {id: "Teh berasal dari bagian...", en: "Tea comes from the..."}, a: {id: ["Akar", "Bunga", "Daun"], en: ["Root", "Flower", "Leaf"]}, c: 2 },
  { q: {id: "Cokelat berasal dari biji...", en: "Chocolate comes from which beans?"}, a: {id: ["Kopi", "Kakao", "Kedelai"], en: ["Coffee", "Cocoa", "Soybean"]}, c: 1 },
  { q: {id: "Gelato adalah es krim khas...", en: "Gelato is ice cream from..."}, a: {id: ["Prancis", "Italia", "Amerika"], en: ["France", "Italy", "USA"]}, c: 1 },
  { q: {id: "Minuman fermentasi dari Korea...", en: "Fermented drink from Korea..."}, a: {id: ["Sake", "Soju", "Tuak"], en: ["Sake", "Soju", "Tuak"]}, c: 1 },
  { q: {id: "Es campur biasanya pakai sirup...", en: "Mixed ice usually uses which syrup?"}, a: {id: ["Maple", "Cocopandan", "Cokelat"], en: ["Maple", "Cocopandan", "Chocolate"]}, c: 1 },
  { q: {id: "Boba terbuat dari tepung...", en: "Boba is made from which flour?"}, a: {id: ["Terigu", "Tapioka", "Beras"], en: ["Wheat", "Tapioka", "Rice"]}, c: 1 },
  { q: {id: "Yoghurt adalah hasil fermentasi...", en: "Yoghurt is fermented..."}, a: {id: ["Buah", "Susu", "Sayur"], en: ["Fruit", "Milk", "Veggie"]}, c: 1 },
  { q: {id: "Minuman bersoda mengandung gas...", en: "Soda contains which gas?"}, a: {id: ["Oksigen", "Karbon Dioksida", "Nitrogen"], en: ["Oxygen", "Carbon Dioxide", "Nitrogen"]}, c: 1 },
  { q: {id: "Madu dihasilkan oleh...", en: "Honey is produced by..."}, a: {id: ["Semut", "Lebah", "Lalat"], en: ["Ant", "Bee", "Fly"]}, c: 1 }
];