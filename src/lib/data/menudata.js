export const menuData = [
    {
        id: "XJ92",
        name: { en: "Spaghettini alla puttanesca", id: "Spaghettini alla puttanesca" },
        description: { en: "A savory sauce with tomatoes, olives, capers, and anchovies.", id: "Hidangan gurih dari tomat, minyak zaitun, teri, dan kaper." },
        price: 3.99, image: "/spag.png", rarity: "AVERAGE",
        recipe: {
            ingredients: { id: ["200g Spaghettini", "4 siung Bawang Putih", "5 Fillet Teri", "2 sdm Kaper", "100g Zaitun Hitam", "400g Tomat Kaleng"], en: ["200g Spaghettini", "4 Garlic cloves", "5 Anchovy fillets", "2 tbsp Capers", "100g Black Olives", "400g Canned Tomatoes"] },
            instructions: { 
                id: [
                    "Rebus air dalam panci besar, tambahkan garam, dan masak spaghettini hingga al dente (sekitar 8 menit).",
                    "Sambil menunggu, panaskan minyak zaitun di wajan, tumis bawang putih iris dan teri hingga teri hancur menyatu dengan minyak.",
                    "Masukkan kaper, zaitun, dan tomat kaleng. Hancurkan tomat dengan sendok kayu dan biarkan mendidih selama 10 menit hingga saus mengental.",
                    "Tiriskan pasta dan langsung masukkan ke dalam wajan saus. Aduk rata dengan sedikit air rebusan pasta agar saus menempel sempurna.",
                    "Sajikan panas dengan taburan peterseli segar di atasnya."
                ], 
                en: [
                    "Bring a large pot of salted water to a boil and cook spaghettini until al dente (about 8 minutes).",
                    "Meanwhile, heat olive oil in a pan, sauté sliced garlic and anchovies until the anchovies melt into the oil.",
                    "Add capers, olives, and canned tomatoes. Crush the tomatoes with a wooden spoon and simmer for 10 minutes until thickened.",
                    "Drain the pasta and toss it directly into the sauce pan. Mix well with a splash of pasta water to help the sauce emulsify.",
                    "Serve hot with a sprinkle of fresh parsley on top."
                ] 
            }
        }
    },
    {
        id: "B7K1",
        name: { en: "Beef Yakiniku Bento", id: "Bento Yakiniku Daging Sapi" },
        description: { en: "Grilled beef slices with yakiniku sauce.", id: "Irisan daging sapi panggang saus yakiniku." },
        price: 4.50, image: "/teri.png", rarity: "AVERAGE",
        recipe: {
            ingredients: { id: ["250g Daging Sapi Tipis", "1 Bawang Bombay", "3 sdm Saus Yakiniku", "1 sdt Minyak Wijen", "Biji Wijen", "Nasi Putih"], en: ["250g Thinly sliced Beef", "1 Onion", "3 tbsp Yakiniku Sauce", "1 tsp Sesame Oil", "Sesame Seeds", "Steamed Rice"] },
            instructions: { 
                id: [
                    "Marinasi irisan daging sapi dengan saus yakiniku dan minyak wijen selama minimal 15 menit.",
                    "Iris bawang bombay secara memanjang. Panaskan sedikit minyak di wajan datar, tumis bawang bombay hingga layu dan harum.",
                    "Masukkan daging sapi satu per satu agar tidak menggumpal. Masak dengan api besar hingga daging berubah warna dan terkaramelisasi.",
                    "Tambahkan sisa saus marinasi, masak sebentar hingga meresap dan saus menyusut.",
                    "Tata nasi putih di kotak bento, letakkan daging di sampingnya, lalu taburkan biji wijen sangrai di atas daging."
                ], 
                en: [
                    "Marinate the beef slices with yakiniku sauce and sesame oil for at least 15 minutes.",
                    "Slice the onion lengthwise. Heat a little oil in a flat pan, sauté the onion until soft and fragrant.",
                    "Add the beef slices one by one to prevent clumping. Cook over high heat until browned and caramelized.",
                    "Pour in the remaining marinade, cook briefly until the sauce thickens and coats the meat.",
                    "Arrange rice in the bento box, place the beef next to it, and sprinkle with toasted sesame seeds."
                ] 
            }
        }
    },
    {
        id: "L4P9",
        name: { en: "Salmon Sashimi Bento", id: "Bento Sashimi Salmon" },
        description: { en: "Fresh salmon sashimi served with rice.", id: "Sashimi salmon segar disajikan dengan nasi." },
        price: 8.99, image: "/sas.png", rarity: "RARE",
        recipe: {
            ingredients: { id: ["200g Salmon Grade-A", "Nasi Jepang (Sushi Rice)", "Kecap Asin (Shoyu)", "Wasabi", "Gari (Acar Jahe)"], en: ["200g Fresh Grade-A Salmon", "Japanese Sushi Rice", "Soy Sauce", "Wasabi", "Pickled Ginger"] },
            instructions: { 
                id: [
                    "Pastikan salmon dalam kondisi sangat dingin. Gunakan pisau sashimi yang sangat tajam.",
                    "Potong salmon melawan serat daging dengan sudut 45 derajat (teknik sogizukuri) setebal 0.5 cm.",
                    "Siapkan nasi Jepang hangat yang sudah dicampur sedikit cuka sushi di dalam kotak bento.",
                    "Tata irisan salmon secara estetis di atas atau di samping nasi.",
                    "Sajikan segera dengan wasabi, kecap asin dalam wadah terpisah, dan acar jahe sebagai pembersih palet."
                ], 
                en: [
                    "Ensure the salmon is very cold. Use an extremely sharp sashimi knife.",
                    "Slice the salmon against the grain at a 45-degree angle (sogizukuri technique) about 0.5 cm thick.",
                    "Prepare warm Japanese rice seasoned with sushi vinegar in the bento box.",
                    "Artfully arrange the salmon slices on or next to the rice.",
                    "Serve immediately with wasabi, soy sauce in a separate dish, and pickled ginger as a palate cleanser."
                ] 
            }
        }
    },
    {
        id: "H2V6",
        name: { en: "Spaghettoni Marinara", id: "Spaghettoni Marinara" },
        description: { en: "Spaghetti with simple tomato-based sauce.", id: "Spaghetti dengan saus tomat sederhana." },
        price: 2.99, image: "/ram.png", rarity: "COMMON",
        recipe: {
            ingredients: { id: ["200g Spaghettoni", "500g Tomat Matang", "2 siung Bawang Putih", "Daun Basil Segar", "Minyak Zaitun"], en: ["200g Spaghettoni", "500g Ripe Tomatoes", "2 Garlic cloves", "Fresh Basil", "Olive Oil"] },
            instructions: { 
                id: [
                    "Rebus spaghettoni dalam air garam hingga matang sempurna.",
                    "Blansir tomat dalam air mendidih, kupas kulitnya, lalu cincang kasar.",
                    "Tumis bawang putih geprek dalam minyak zaitun hingga kuning keemasan, lalu angkat bawang putihnya (hanya ambil aromanya).",
                    "Masukkan tomat cincang dan masak dengan api kecil selama 20 menit hingga hancur dan menjadi saus kental. Tambahkan garam dan basil.",
                    "Campurkan pasta ke saus, aduk rata, dan sajikan dengan sedikit tetesan minyak zaitun mentah."
                ], 
                en: [
                    "Boil spaghettoni in salted water until perfectly cooked.",
                    "Blanch tomatoes in boiling water, peel the skin, and chop coarsely.",
                    "Sauté crushed garlic in olive oil until golden, then remove the garlic (infusing the oil with aroma).",
                    "Add chopped tomatoes and simmer over low heat for 20 minutes until broken down into a thick sauce. Season with salt and basil.",
                    "Toss the pasta into the sauce, mix well, and serve with a final drizzle of raw olive oil."
                ] 
            }
        }
    },
    {
        id: "Q1W8",
        name: { en: "Classic Omelette", id: "Telur Dadar Klasik" },
        description: { en: "Fluffy eggs seasoned with salt and pepper.", id: "Telur lembut yang dibumbui garam dan lada." },
        price: 1.50, image: "/omg.jpeg", rarity: "COMMON",
        recipe: {
            ingredients: { id: ["3 Telur Ayam", "1 sdm Mentega", "Garam & Lada", "Sedikit Susu Cair"], en: ["3 Eggs", "1 tbsp Butter", "Salt & Pepper", "A splash of Milk"] },
            instructions: { 
                id: [
                    "Kocok telur bersama garam, lada, dan sedikit susu hingga benar-benar tercampur rata dan berbusa sedikit.",
                    "Panaskan mentega di wajan anti lengket dengan api sedang-kecil hingga meleleh dan mulai berbusa.",
                    "Tuang telur ke wajan. Gunakan spatula untuk mendorong pinggiran telur ke tengah sambil menggoyangkan wajan agar bagian cair mengisi celah.",
                    "Setelah bagian bawah set namun bagian atas masih agak lembap, lipat omelette menjadi dua atau gulung perlahan.",
                    "Segera pindahkan ke piring agar sisa panas tidak membuat telur terlalu kering."
                ], 
                en: [
                    "Whisk eggs with salt, pepper, and a splash of milk until well combined and slightly foamy.",
                    "Heat butter in a non-stick pan over medium-low heat until melted and starting to bubble.",
                    "Pour the eggs into the pan. Use a spatula to push the edges toward the center while tilting the pan to let the liquid fill the gaps.",
                    "When the bottom is set but the top is still slightly moist, fold the omelette in half or roll it gently.",
                    "Slide onto a plate immediately so the residual heat doesn't overcook the eggs."
                ] 
            }
        }
    },
    {
        id: "F5D2",
        name: { en: "Garlic Bread", id: "Roti Bawang" },
        description: { en: "Toasted bread with butter and minced garlic.", id: "Roti panggang dengan mentega dan bawang putih." },
        price: 2.00, image: "/gar.png", rarity: "COMMON",
        recipe: {
            ingredients: { id: ["Roti Baguette", "50g Mentega (Suhu Ruang)", "3 siung Bawang Putih Cincang", "1 sdt Peterseli Kering"], en: ["Baguette", "50g Butter (Room Temp)", "3 Garlic cloves minced", "1 tsp Dried Parsley"] },
            instructions: { 
                id: [
                    "Dalam mangkuk kecil, campur mentega lunak dengan bawang putih cincang halus dan peterseli.",
                    "Potong baguette menjadi beberapa bagian atau iris miring tanpa memutus bagian bawahnya.",
                    "Oleskan campuran mentega bawang secara merata di setiap sela-sela irisan roti.",
                    "Bungkus dengan aluminium foil dan panggang dalam oven suhu 180°C selama 10 menit.",
                    "Buka foil dan panggang lagi selama 2-3 menit hingga bagian pinggirnya terlihat garing keemasan."
                ], 
                en: [
                    "In a small bowl, mix softened butter with finely minced garlic and parsley.",
                    "Slice the baguette into sections or make diagonal cuts without cutting all the way through the bottom.",
                    "Spread the garlic butter mixture generously between each slice.",
                    "Wrap in aluminum foil and bake in an oven at 180°C for 10 minutes.",
                    "Open the foil and bake for another 2-3 minutes until the edges are golden and crispy."
                ] 
            }
        }
    },
    {
        id: "T7N4",
        name: { en: "Salad Buah", id: "Salad Buah" },
        description: { en: "Fresh seasonal fruits mixed with honey.", id: "Buah musiman segar dicampur madu." },
        price: 2.50, image: "/sal.png", rarity: "COMMON",
        recipe: {
            ingredients: { id: ["Apel", "Pisang", "Anggur", "Stroberi", "2 sdm Madu", "Air Jeruk Lemon"], en: ["Apple", "Banana", "Grapes", "Strawberries", "2 tbsp Honey", "Lemon Juice"] },
            instructions: { 
                id: [
                    "Cuci bersih semua buah-buahan dengan air mengalir.",
                    "Potong apel dan pisang menjadi ukuran dadu kecil. Segera lumuri dengan sedikit air lemon agar tidak berubah warna menjadi cokelat.",
                    "Belah dua anggur dan stroberi. Masukkan semua buah ke dalam mangkuk besar.",
                    "Tuangkan madu di atas buah-buahan tersebut.",
                    "Aduk perlahan agar madu melapisi semua permukaan buah, lalu dinginkan di kulkas sebelum disajikan."
                ], 
                en: [
                    "Thoroughly wash all fruits under running water.",
                    "Dice the apple and banana into small cubes. Immediately toss with a bit of lemon juice to prevent browning.",
                    "Halve the grapes and strawberries. Place all fruit into a large bowl.",
                    "Drizzle honey over the fruits.",
                    "Toss gently to coat all fruit surfaces with honey, then chill in the fridge before serving."
                ] 
            }
        }
    },
    {
        id: "G3H9",
        name: { en: "Chicken Teriyaki", id: "Ayam Teriyaki" },
        description: { en: "Juicy chicken glazed with sweet teriyaki sauce.", id: "Ayam lezat dengan saus teriyaki manis." },
        price: 5.50, image: "/teri.png", rarity: "AVERAGE",
        recipe: {
            ingredients: { id: ["300g Paha Ayam Fillet", "2 sdm Kecap Asin", "2 sdm Mirin/Madu", "1 sdt Jahe Parut", "Wijen"], en: ["300g Chicken Thigh Fillet", "2 tbsp Soy Sauce", "2 tbsp Mirin/Honey", "1 tsp Grated Ginger", "Sesame Seeds"] },
            instructions: { 
                id: [
                    "Potong paha ayam menjadi ukuran sekali makan. Paha ayam lebih juicy dibanding dada untuk teriyaki.",
                    "Panaskan wajan dengan sedikit minyak, letakkan ayam dengan bagian kulit menghadap bawah. Masak hingga kulitnya garing.",
                    "Balik ayam, lalu masukkan campuran kecap asin, madu, dan jahe parut.",
                    "Masak dengan api sedang sambil terus menyiramkan saus ke atas ayam (basting) hingga saus menyusut dan mengental menjadi glaze.",
                    "Angkat dan sajikan dengan taburan biji wijen di atasnya."
                ], 
                en: [
                    "Cut chicken thighs into bite-sized pieces. Thighs are juicier than breasts for teriyaki.",
                    "Heat a pan with a little oil, place the chicken skin-side down. Cook until the skin is crispy.",
                    "Flip the chicken, then add the mixture of soy sauce, honey, and grated ginger.",
                    "Cook over medium heat while constantly spooning the sauce over the chicken (basting) until the sauce reduces into a thick glaze.",
                    "Remove from heat and serve with a sprinkle of toasted sesame seeds on top."
                ] 
            }
        }
    },
    {
        id: "Z2X5",
        name: { en: "Mushroom Risotto", id: "Risotto Jamur" },
        description: { en: "Creamy Italian rice with sautéed mushrooms.", id: "Nasi Italia lembut dengan tumisan jamur." },
        price: 6.00, image: "/mush.png", rarity: "AVERAGE",
        recipe: {
            ingredients: { id: ["200g Beras Arborio", "150g Jamur Champignon", "700ml Kaldu Ayam Hangat", "Bawang Bombay Cincang", "50g Keju Parmesan"], en: ["200g Arborio Rice", "150g Button Mushrooms", "700ml Warm Chicken Stock", "Minced Onion", "50g Parmesan Cheese"] },
            instructions: { 
                id: [
                    "Tumis jamur iris dengan sedikit mentega hingga kecokelatan, lalu sisihkan.",
                    "Di panci yang sama, tumis bawang bombay hingga transparan. Masukkan beras Arborio dan aduk selama 2 menit hingga pinggiran beras terlihat bening.",
                    "Masukkan satu sendok sayur kaldu hangat. Aduk terus hingga kaldu terserap sempurna oleh beras sebelum menambah sendok berikutnya.",
                    "Ulangi proses ini selama 18-20 menit hingga beras empuk tapi masih memiliki tekstur (al dente).",
                    "Matikan api, masukkan jamur tumis, mentega dingin, dan parmesan. Aduk kuat (mantecatura) hingga risotto menjadi sangat creamy."
                ], 
                en: [
                    "Sauté sliced mushrooms with a bit of butter until browned, then set aside.",
                    "In the same pot, sauté minced onion until translucent. Add Arborio rice and stir for 2 minutes until the edges are transparent.",
                    "Add a ladle of warm stock. Stir constantly until the liquid is fully absorbed before adding the next ladle.",
                    "Repeat this process for 18-20 minutes until the rice is tender but still has a bite (al dente).",
                    "Turn off the heat, stir in the sautéed mushrooms, a knob of cold butter, and parmesan. Stir vigorously (mantecatura) until the risotto is creamy."
                ] 
            }
        }
    },
    {
        id: "K8Y1",
        name: { en: "Beef Tacos", id: "Taco Daging" },
        description: { en: "Corn tortillas filled with seasoned beef.", id: "Tortila jagung isi daging berbumbu." },
        price: 4.80, image: "/beef.jpeg", rarity: "AVERAGE",
        recipe: {
            ingredients: { id: ["Kulit Taco Jagung", "200g Daging Giling", "Bubuk Jinten & Paprika", "Selada Iris", "Keju Cheddar Parut"], en: ["Corn Taco Shells", "200g Ground Beef", "Cumin & Paprika Powder", "Shredded Lettuce", "Grated Cheddar"] },
            instructions: { 
                id: [
                    "Masak daging giling di wajan panas tanpa minyak (biarkan lemak daging keluar). Buang kelebihan lemaknya.",
                    "Tambahkan bubuk jinten, paprika, garam, dan lada. Masak hingga daging benar-benar matang dan agak garing.",
                    "Panaskan kulit taco di oven sebentar agar renyah.",
                    "Isi setiap kulit taco dengan daging berbumbu di bagian bawah.",
                    "Tambahkan lapisan selada, tomat potong dadu, dan taburi keju parut di bagian paling atas."
                ], 
                en: [
                    "Cook ground beef in a hot pan without oil (let the fat render). Drain any excess fat.",
                    "Add cumin, paprika, salt, and pepper. Cook until the beef is fully browned and slightly crispy.",
                    "Warm the taco shells in the oven briefly to make them crunchy.",
                    "Fill each taco shell with the seasoned beef at the bottom.",
                    "Layer with shredded lettuce, diced tomatoes, and top with plenty of grated cheese."
                ] 
            }
        }
    },
    {
        id: "P4J6",
        name: { en: "Club Sandwich", id: "Sandwich Club" },
        description: { en: "Triple-layered sandwich with turkey and bacon.", id: "Sandwich tiga lapis dengan kalkun dan daging asap." },
        price: 5.00, image: "/wich.jpeg", rarity: "AVERAGE",
        recipe: {
            ingredients: { id: ["3 lembar Roti Tawar", "Daging Asap", "Telur Mata Sapi", "Tomat & Selada", "Mayones"], en: ["3 slices of White Bread", "Bacon/Smoked Beef", "Fried Egg", "Tomato & Lettuce", "Mayonnaise"] },
            instructions: { 
                id: [
                    "Panggang ketiga lembar roti hingga kuning keemasan.",
                    "Oleskan mayones pada satu sisi setiap roti. Letakkan selada, tomat, dan daging asap di atas roti pertama.",
                    "Tutup dengan roti kedua (bagian bermayones di bawah), oleskan lagi mayones di atasnya, lalu letakkan telur mata sapi.",
                    "Tutup dengan roti ketiga. Tekan perlahan agar sandwich padat.",
                    "Tusuk dengan empat tusuk gigi di setiap sisi, lalu potong secara diagonal menjadi empat bagian segitiga kecil."
                ], 
                en: [
                    "Toast all three slices of bread until golden brown.",
                    "Spread mayo on one side of each slice. Place lettuce, tomato, and smoked beef on the first slice.",
                    "Place the second slice on top (mayo-side down), spread more mayo on its top, and add the fried egg.",
                    "Cover with the third slice of bread. Press down gently to stabilize.",
                    "Secure with four toothpicks on each side, then cut diagonally into four small triangles."
                ] 
            }
        }
    },
    {
        id: "R9S2",
        name: { en: "Shrimp Scampi", id: "Udang Scampi" },
        description: { en: "Shrimp sautéed in garlic and lemon.", id: "Udang tumis bawang putih dan lemon." },
        price: 9.50, image: "/lobs.png", rarity: "RARE",
        recipe: {
            ingredients: { id: ["300g Udang Besar", "4 siung Bawang Putih Cincang", "50g Mentega", "Air Perasan Lemon", "Pasta Linguine"], en: ["300g Large Shrimp", "4 Garlic cloves minced", "50g Butter", "Lemon Juice", "Linguine Pasta"] },
            instructions: { 
                id: [
                    "Rebus linguine hingga al dente, tiriskan dan sisihkan.",
                    "Panaskan mentega dan sedikit minyak zaitun. Masukkan bawang putih cincang dan tumis selama 1 menit (jangan sampai gosong).",
                    "Masukkan udang yang sudah dibersihkan. Masak hingga udang berubah warna menjadi merah muda (sekitar 2 menit tiap sisi).",
                    "Tuangkan air perasan lemon dan masukkan kembali pasta ke dalam wajan. Aduk rata agar pasta terlapisi saus mentega bawang.",
                    "Taburkan peterseli cincang halus dan sedikit parutan kulit lemon untuk aroma segar."
                ], 
                en: [
                    "Boil linguine until al dente, drain, and set aside.",
                    "Heat butter and a splash of olive oil. Add minced garlic and sauté for 1 minute (do not burn).",
                    "Add the cleaned shrimp. Cook until they turn pink (about 2 minutes per side).",
                    "Pour in the lemon juice and toss the pasta back into the pan. Mix well so the pasta is coated in the garlic butter sauce.",
                    "Garnish with finely chopped parsley and a bit of lemon zest for a fresh aroma."
                ] 
            }
        }
    },
    {
        id: "V3B8",
        name: { en: "Japanese Ramen", id: "Ramen Jepang" },
        description: { en: "Rich broth with noodles and soft-boiled egg.", id: "Kuah kaldu kental dengan mi dan telur." },
        price: 11.00, image: "/men.png", rarity: "RARE",
        recipe: {
            ingredients: { id: ["Mi Ramen Basah", "1L Kaldu Ayam/Sapi", "Telur Rendam (Ajitsuke Tamago)", "Irisan Daging (Chashu)", "Daun Bawang"], en: ["Fresh Ramen Noodles", "1L Chicken/Beef Stock", "Marinated Egg", "Sliced Meat (Chashu)", "Green Onions"] },
            instructions: { 
                id: [
                    "Didihkan kaldu. Jika ingin kuah kental, tambahkan sedikit pasta miso atau tare (bumbu dasar).",
                    "Rebus mi ramen basah dalam air terpisah selama 1-2 menit saja agar teksturnya kenyal.",
                    "Siapkan mangkuk, tuang bumbu tare, lalu masukkan kaldu panas. Aduk rata.",
                    "Masukkan mi ke dalam mangkuk kaldu, gunakan sumpit untuk merapikan lipatan mi.",
                    "Tata telur rebus setengah matang (belah dua), daging chashu, dan daun bawang di atasnya secara rapi."
                ], 
                en: [
                    "Bring the stock to a boil. For a richer flavor, add miso paste or tare (seasoning base).",
                    "Boil fresh ramen noodles in separate water for only 1-2 minutes to keep them chewy.",
                    "Prepare a bowl, pour in the tare, then add the hot stock. Stir well.",
                    "Place the noodles into the broth and use chopsticks to straighten the strands.",
                    "Top with a halved soft-boiled marinated egg, chashu slices, and green onions."
                ] 
            }
        }
    },
    {
        id: "C5N9",
        name: { en: "Lamb Chops", id: "Iga Domba" },
        description: { en: "Tender grilled lamb with rosemary.", id: "Iga domba panggang empuk dengan rosemary." },
        price: 18.00, image: "/meat.jpeg", rarity: "RARE",
        recipe: {
            ingredients: { id: ["4 potong Iga Domba", "Fresh Rosemary", "3 siung Bawang Putih Geprek", "Garam Kasar", "Mentega"], en: ["4 Lamb Chops", "Fresh Rosemary", "3 Garlic cloves crushed", "Sea Salt", "Butter"] },
            instructions: { 
                id: [
                    "Keluarkan iga domba dari kulkas 30 menit sebelum dimasak agar suhu ruang. Tepuk-tepuk hingga kering dengan tisu dapur.",
                    "Lumuri daging dengan garam kasar, lada hitam, dan daun rosemary cincang.",
                    "Panaskan wajan besi (cast iron) hingga sangat panas. Panggang iga selama 3-4 menit di satu sisi hingga terbentuk kerak cokelat yang cantik.",
                    "Balik iga, masukkan mentega dan bawang putih geprek. Siramkan mentega cair ke atas daging secara terus-menerus selama 3 menit lagi.",
                    "Istirahatkan daging (resting) selama 5 menit sebelum disajikan agar sarinya meresap kembali."
                ], 
                en: [
                    "Take the lamb chops out of the fridge 30 minutes before cooking. Pat them completely dry with paper towels.",
                    "Season generously with sea salt, black pepper, and chopped rosemary.",
                    "Heat a cast iron skillet until smoking hot. Sear the chops for 3-4 minutes on one side until a deep brown crust forms.",
                    "Flip the chops, add butter and crushed garlic to the pan. Baste the meat with the melted butter continuously for another 3 minutes.",
                    "Let the meat rest for 5 minutes before serving to allow the juices to redistribute."
                ] 
            }
        }
    },
    {
        id: "O7L1",
        name: { en: "Dragon Roll Sushi", id: "Dragon Roll Sushi" },
        description: { en: "Exquisite eel and avocado sushi roll.", id: "Gulungan sushi belut dan alpukat istimewa." },
        price: 22.00, image: "/drag.png", rarity: "SUPER RARE",
        recipe: {
            ingredients: { id: ["Nasi Sushi Jepang", "Unagi (Belut Panggang)", "Alpukat Matang", "Nori", "Saus Unagi", "Tobiko (Telur Ikan)"], en: ["Sushi Rice", "Unagi (Grilled Eel)", "Ripe Avocado", "Nori", "Unagi Sauce", "Tobiko"] },
            instructions: { 
                id: [
                    "Letakkan lembar nori di atas tikar penggulung sushi (makisu). Sebarkan nasi sushi secara merata di atas nori.",
                    "Balik nori sehingga nasi menghadap bawah (ura-maki). Isi bagian tengah dengan potongan belut panggang (unagi) dan timun.",
                    "Gulung dengan rapat menggunakan tikar penggulung hingga berbentuk silinder.",
                    "Iris alpukat tipis-tipis menyerupai sisik naga. Letakkan irisan alpukat di atas gulungan sushi, lalu tekan perlahan dengan plastik wrap agar menempel.",
                    "Potong gulungan menjadi 8 bagian, hiasi dengan tobiko di atasnya, dan siram dengan saus unagi manis."
                ], 
                en: [
                    "Place a nori sheet on a bamboo rolling mat (makisu). Spread sushi rice evenly over the nori.",
                    "Flip the nori so the rice is facing down (ura-maki). Place grilled unagi and cucumber in the center.",
                    "Roll tightly using the bamboo mat into a cylinder shape.",
                    "Slice the avocado into very thin pieces resembling dragon scales. Place the slices over the sushi roll and press gently with plastic wrap to secure.",
                    "Cut into 8 pieces, garnish with tobiko, and drizzle with sweet unagi sauce."
                ] 
            }
        }
    }
];