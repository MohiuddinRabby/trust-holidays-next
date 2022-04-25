const packageList = [
  {
    id: 1,
    name: "Singapore",
    coverageArea: "Singapore",
    duration: "4",
    person: "1",
    price: 50000,
    image: "https://i.ibb.co/1RYFTKd/package-1.jpg",
    overview:
      "Singapore is the largest port in Southeast Asia and one of the busiest in the world. It owes its growth and prosperity to its focal position at the southern extremity of the Malay Peninsula, where it dominates the Strait of Malacca, which connects the Indian Ocean to the South China Sea.",
    included: [
      "3 night’s twin share accommodation in Singapore at 3 star hotel or similar",
      "Daily breakfast",
      "Half Day City Tour in Singapore",
      "All taxes & service charge",
      "Airport – hotel – airport transfers",
    ],
    dayActivity: [
      {
        id: 1,
        title: "Arrival at Singapore Airport",
        activity:
          "Arrival at Singapore Changi airport then Pick up by our tour representative and transfer to hotel. Check in hotel. Overnight at hotel.",
      },
      {
        id: 2,
        title: "Singapore City Tour",
        activity:
          "Breakfast at Hotel. Then Start Half Day Singapore City Tour. (Merlion, Chinatown, Gemstone Factory and end at Mustafa Centre. Then Transfer at hotel. Overnight at hotel.",
      },
      {
        id: 3,
        title: "Singapore",
        activity:
          "Breakfast at Hotel. Then full day free for own activities. Overnight at hotel.",
      },
      {
        id: 4,
        title: "Arrival at Dhaka Airport",
        activity:
          "After breakfast Free & Easy for shopping. Check-out at hotel and transfer to airport for Dhaka.",
      },
    ],
    excluded: ["Lunch & Dinner", "Others Personal cost"],
  },
  {
    id: 2,
    name: "Dubai",
    coverageArea: "Dubai City",
    duration: "5",
    person: "1",
    price: 59900,
    image: "https://i.ibb.co/Jm3qxGP/package-2.jpg",
    overview:
      "Glittering like a jewel of the desert, the glamorous city of Dubai is a land of dreams. Ultramodern skyscrapers rising against an azure sky forms the gleaming skyline of this cosmopolitan city. As night cloaks Dubai, the city comes alive with twinkling lights adorning these tall superstructures. A drive along Downtown Dubai at night leaves you mesmerized by a fantasy land of lights and colours that surrounds you. Burj Khalifa, the tallest building in the world, will leave you open-mouthed in wonder. A curious blend of traditions and modernization can be seen in every corner of Dubai. A perfect example of this is Al Fahidi Fort, the oldest building in Dubai which is surrounded by a fast-paced metropolis. The sprawling Miracle Garden and Dubai Creek Park is a testament to the determination of the people of Dubai, to beat the odds and grow vibrant blooms smack in the middle of the desert.",
    included: [
      "DAC- DXB-DAC air ticket by Air Arabia or Similar",
      "All Airport pick & drop by AC car(Depends on quantity of people)",
      "4 nights’ accommodation at Dubai at 3 star hotel or similar",
      "All Breakfast",
      "Desert Safari tour with BBQ Dinner",
      "Tour Guide",
      "All Applicable tax",
    ],
    dayActivity: [
      {
        id: 1,
        title: "Arrival at Dubai Airport",
        activity:
          "Arrival at Dubai Changi airport then Pick up by our tour representative and transfer to hotel. Check in hotel. Overnight at hotel.",
      },
      {
        id: 2,
        title: "Desert Safari tour with BBQ Dinner",
        activity:
          "After having breakfast wait at hotel lobby for our representative. Pick up fo half day Desert Safari tour with Desert Dune Bashing,Sunset Photograph Opportunity,Camel Riding,Henna Designing,Shisha / ‘Hubbly Bubbly’ Smoking Facility,Arabic Dress Photograph opportunity, Sand Boarding,Belly Dance Show / Tanura Show,BBQ Dinner withVeg & Non Veg dishes. Pick up time 3.30pm back to hotel 11.30-12.00pm. After tour return to hotel & Stay overnight at hotel.",
      },
      {
        id: 3,
        title: "Free day for guest",
        activity:
          "After breakfast full day free movement for guest. Stay overnights at hotel.",
      },
      {
        id: 4,
        title: "Free day for guest",
        activity:
          "After breakfast full day free movement for guest. Stay overnights at hotel.",
      },
      {
        id: 5,
        title: "Final day at Dubai",
        activity:
          "Wait at hotel lobby for our representative Pick up from hotel and transfer to Airport by PVT (Depends on quantity of people). Go back to Dhaka from Dubai.",
      },
    ],
    excluded: [
      "Visa fee",
      "Tourism TAX",
      "Lunch & Dinner",
      "Anything not mentioned in the inclusions",
      "Additional sightseeing or extra usage of vehicle, other than mentioned in the itinerary",
      "Personal expenses such as laundry, telephone calls, tips & gratuity, mineral water, soft & hard drinks, porterage",
    ],
  },
  {
    id: 3,
    name: "Indonesia",
    coverageArea: "Bali, Jakarta",
    duration: "5",
    person: "1",
    price: 65000,
    image: "https://i.ibb.co/sR9gqBD/package-3.jpg",
    overview:
      "There’s a reason the crowds come and it’s this: Bali pretty much offers anything a traveller might want. It’s beautiful, the culture is rich and fascinating, it’s cheap (or at least consistently excellent value for money), the geography is stunning, the shopping eclectic, cuisine wide-ranging and delicious, and the people friendly. In short, Bali is really what other destinations try to conjure themselves up to be when seeking to entice tourists.",
    included: [
      "Return Transfer (Airport – Hotel – Airport)",
      "Hotel Accommodation 04 night at Indonesia",
      "Hotel Accommodation 02 night at JAKARTA",
      "Meals as program (06 Breakfast, 04 x lunch , 04 x dinner)",
      "All sightseeing as per Itinerary",
      "All sightseeing as per Itinerary",
      "Entrance fees",
      "Performance ticket",
      "parking fees",
      "Mineral water on tour 01 bottle / pax / day 600ml in Bal",
      "Return Air Ticket with Economy Airlines & Economy Class",
    ],
    dayActivity: [
      {
        id: 1,
        title: "Pick up Airport & Half day tour (L / D):",
        activity:
          "Arrival Bali airport then transfer Hotel. After Lunch start sightseeing. Visit – Uluwatu temple, Kecak fire dance (Culture park). Dinner at Jimbaran seafood on the Beach.",
      },
      {
        id: 2,
        title: "Kintamani Volcano tour Pick up time : 08.30 am ( B / L / D )",
        activity:
          "Breakfast in Hotel. Meet our guide in Hotel Lobby then start full day sightseeing. We visit – Barong and kris dance, culture dance, Ubud art village Batik / silver factory, Tegenungan water fall, Goa Gajah temple ( Elephant cave, temple ), Kintamani volcano ( having lunch with buffet menu ), Coffee plantation ( luwak coffee ), Tegalalang rice terrace, Having dinner at local Restaurant, Back to hotel and Night stay at Hotel.",
      },
      {
        id: 3,
        title: "Bedugul Tanah lot tour",
        activity:
          "Breakfast in Hotel. Meet our guide in Hotel Lobby then start full day sightseeing -Taman ayun temple UNESCO heritage site, Bedugul – Ulundanu temple lake Beratan, Candi kuning fruit market, Pacung Rice terrace view and Having lunch, Alas Kedaton (Monkey temple), Tanah lot temple, Having dinner at local Restaurant, Back to hotel and Nightstay at Hotel.",
      },
      {
        id: 4,
        title: "Transfer Jakarta",
        activity:
          "Breakfast at hotel. Transfer to airport for Jakarta. Then check in hotel at Jakarta. Proceed for Visiting NATIONAL MONUMENT - The National Monument, or “ Monas “ as popularly called, is one of the monuments built during the Soekarno’s era (the first President) of fierce nationalism. The towering 137 meters monument is crowned by symbolic flame coated by 50 kg of pure gold symbolizing Indonesia’s National Independence The history of Indonesia and its struggle for independence is displayed historically in 48 dioramas down in the basement of the monument Onto BEAUTIFUL INDONESIA IN MINIATURE PARK - An extensive park to get a glimpse of the diversity of the Indonesia archipelago. It represents all the provinces of Indonesia’s and their outstanding characteristics, reflected most strikingly in the exact regional architecture of the provinces. Overnight at hotel.",
      },
      {
        id: 5,
        title: "Indonesia in Miniature Park & City Sightseeing (B)",
        activity:
          "After breakfast at hotel, depart to the Beautiful Indonesia in Miniature Park well known as Taman Mini Indonesia Indah, a 160-hectare recreation park, which is designed to give visitors a general overview of Indonesian culture and traditions. The all provinces of Indonesia are represented by models of their most representative architectural styles. Proceed with Jakarta city sightseeing by visiting National Museum (open daily except Monday) to see valuable collections of antiquities and ethnographic artifacts. Drive around the Medan Merdekjakarta tour from Dhaka Square to see the National Monument , the Land Mark of Jakarta , then passing the Istiqlal Mosque, the biggest mosque in Southeast Asia and President Palace. Continue the drive thru China Town to Old Batavia City.",
      },
      {
        id: 6,
        title: "Full day Safari Park Tour",
        activity:
          "After breakfast at hotel, visit the 140-acre Safari park and see exotic Indonesia and other imported animals from your card. Adjacent to the park is recreational grounds with a swimming pool, an artificial lake, waterfall and children playground.",
      },
      {
        id: 7,
        title: "Departure Puncak – Airport Jakarta",
        activity:
          "Breakfast at hotel and free program until time transfer to the airport for departure flight.",
      },
    ],
    excluded: ["Tipping", "Optional activity"],
  },
  {
    id: 4,
    name: "Egypt",
    coverageArea: "Kairo",
    duration: "5",
    person: "1",
    price: 89000,
    image: "https://i.ibb.co/fN0RVqC/package-8.jpg",
    overview:
      "There’s a reason the crowds come and it’s this: Bali pretty much offers anything a traveller might want. It’s beautiful, the culture is rich and fascinating, it’s cheap (or at least consistently excellent value for money), the geography is stunning, the shopping eclectic, cuisine wide-ranging and delicious, and the people friendly. In short, Bali is really what other destinations try to conjure themselves up to be when seeking to entice tourists.",
    included: [
      "Return Transfer (Airport – Hotel – Airport)",
      "Hotel Accommodation 04 night at Indonesia",
      "Hotel Accommodation 02 night at JAKARTA",
      "Meals as program (06 Breakfast, 04 x lunch , 04 x dinner)",
      "All sightseeing as per Itinerary",
      "All sightseeing as per Itinerary",
      "Entrance fees",
      "Performance ticket",
      "parking fees",
      "Mineral water on tour 01 bottle / pax / day 600ml in Bal",
      "Return Air Ticket with Economy Airlines & Economy Class",
    ],
    dayActivity: [
      {
        id: 1,
        title: "Pick up Airport & Half day tour (L / D):",
        activity:
          "Arrival Bali airport then transfer Hotel. After Lunch start sightseeing. Visit – Uluwatu temple, Kecak fire dance (Culture park). Dinner at Jimbaran seafood on the Beach.",
      },
      {
        id: 2,
        title: "Kintamani Volcano tour Pick up time : 08.30 am ( B / L / D )",
        activity:
          "Breakfast in Hotel. Meet our guide in Hotel Lobby then start full day sightseeing. We visit – Barong and kris dance, culture dance, Ubud art village Batik / silver factory, Tegenungan water fall, Goa Gajah temple ( Elephant cave, temple ), Kintamani volcano ( having lunch with buffet menu ), Coffee plantation ( luwak coffee ), Tegalalang rice terrace, Having dinner at local Restaurant, Back to hotel and Night stay at Hotel.",
      },
      {
        id: 3,
        title: "Bedugul Tanah lot tour",
        activity:
          "Breakfast in Hotel. Meet our guide in Hotel Lobby then start full day sightseeing -Taman ayun temple UNESCO heritage site, Bedugul – Ulundanu temple lake Beratan, Candi kuning fruit market, Pacung Rice terrace view and Having lunch, Alas Kedaton (Monkey temple), Tanah lot temple, Having dinner at local Restaurant, Back to hotel and Nightstay at Hotel.",
      },
      {
        id: 4,
        title: "Transfer Jakarta",
        activity:
          "Breakfast at hotel. Transfer to airport for Jakarta. Then check in hotel at Jakarta. Proceed for Visiting NATIONAL MONUMENT - The National Monument, or “ Monas “ as popularly called, is one of the monuments built during the Soekarno’s era (the first President) of fierce nationalism. The towering 137 meters monument is crowned by symbolic flame coated by 50 kg of pure gold symbolizing Indonesia’s National Independence The history of Indonesia and its struggle for independence is displayed historically in 48 dioramas down in the basement of the monument Onto BEAUTIFUL INDONESIA IN MINIATURE PARK - An extensive park to get a glimpse of the diversity of the Indonesia archipelago. It represents all the provinces of Indonesia’s and their outstanding characteristics, reflected most strikingly in the exact regional architecture of the provinces. Overnight at hotel.",
      },
      {
        id: 5,
        title: "Indonesia in Miniature Park & City Sightseeing (B)",
        activity:
          "After breakfast at hotel, depart to the Beautiful Indonesia in Miniature Park well known as Taman Mini Indonesia Indah, a 160-hectare recreation park, which is designed to give visitors a general overview of Indonesian culture and traditions. The all provinces of Indonesia are represented by models of their most representative architectural styles. Proceed with Jakarta city sightseeing by visiting National Museum (open daily except Monday) to see valuable collections of antiquities and ethnographic artifacts. Drive around the Medan Merdekjakarta tour from Dhaka Square to see the National Monument , the Land Mark of Jakarta , then passing the Istiqlal Mosque, the biggest mosque in Southeast Asia and President Palace. Continue the drive thru China Town to Old Batavia City.",
      },
      {
        id: 6,
        title: "Full day Safari Park Tour",
        activity:
          "After breakfast at hotel, visit the 140-acre Safari park and see exotic Indonesia and other imported animals from your card. Adjacent to the park is recreational grounds with a swimming pool, an artificial lake, waterfall and children playground.",
      },
      {
        id: 7,
        title: "Departure Puncak – Airport Jakarta",
        activity:
          "Breakfast at hotel and free program until time transfer to the airport for departure flight.",
      },
    ],
    excluded: ["Tipping", "Optional activity"],
  },
  {
    id: 70,
    name: "Nepal",
    coverageArea: "Kathmandu, Pokhara",
    duration: "5",
    person: "1",
    price: 48000,
    image: "https://i.ibb.co/zbRpryw/package-6.jpg",
    overview:
      "There’s a reason the crowds come and it’s this: Bali pretty much offers anything a traveller might want. It’s beautiful, the culture is rich and fascinating, it’s cheap (or at least consistently excellent value for money), the geography is stunning, the shopping eclectic, cuisine wide-ranging and delicious, and the people friendly. In short, Bali is really what other destinations try to conjure themselves up to be when seeking to entice tourists.",
    included: [
      "Return Transfer (Airport – Hotel – Airport)",
      "Hotel Accommodation 04 night at Indonesia",
      "Hotel Accommodation 02 night at JAKARTA",
      "Meals as program (06 Breakfast, 04 x lunch , 04 x dinner)",
      "All sightseeing as per Itinerary",
      "All sightseeing as per Itinerary",
      "Entrance fees",
      "Performance ticket",
      "parking fees",
      "Mineral water on tour 01 bottle / pax / day 600ml in Bal",
      "Return Air Ticket with Economy Airlines & Economy Class",
    ],
    dayActivity: [
      {
        id: 1,
        title: "Pick up Airport & Half day tour (L / D):",
        activity:
          "Arrival Bali airport then transfer Hotel. After Lunch start sightseeing. Visit – Uluwatu temple, Kecak fire dance (Culture park). Dinner at Jimbaran seafood on the Beach.",
      },
      {
        id: 2,
        title: "Kintamani Volcano tour Pick up time : 08.30 am ( B / L / D )",
        activity:
          "Breakfast in Hotel. Meet our guide in Hotel Lobby then start full day sightseeing. We visit – Barong and kris dance, culture dance, Ubud art village Batik / silver factory, Tegenungan water fall, Goa Gajah temple ( Elephant cave, temple ), Kintamani volcano ( having lunch with buffet menu ), Coffee plantation ( luwak coffee ), Tegalalang rice terrace, Having dinner at local Restaurant, Back to hotel and Night stay at Hotel.",
      },
      {
        id: 3,
        title: "Bedugul Tanah lot tour",
        activity:
          "Breakfast in Hotel. Meet our guide in Hotel Lobby then start full day sightseeing -Taman ayun temple UNESCO heritage site, Bedugul – Ulundanu temple lake Beratan, Candi kuning fruit market, Pacung Rice terrace view and Having lunch, Alas Kedaton (Monkey temple), Tanah lot temple, Having dinner at local Restaurant, Back to hotel and Nightstay at Hotel.",
      },
      {
        id: 4,
        title: "Transfer Jakarta",
        activity:
          "Breakfast at hotel. Transfer to airport for Jakarta. Then check in hotel at Jakarta. Proceed for Visiting NATIONAL MONUMENT - The National Monument, or “ Monas “ as popularly called, is one of the monuments built during the Soekarno’s era (the first President) of fierce nationalism. The towering 137 meters monument is crowned by symbolic flame coated by 50 kg of pure gold symbolizing Indonesia’s National Independence The history of Indonesia and its struggle for independence is displayed historically in 48 dioramas down in the basement of the monument Onto BEAUTIFUL INDONESIA IN MINIATURE PARK - An extensive park to get a glimpse of the diversity of the Indonesia archipelago. It represents all the provinces of Indonesia’s and their outstanding characteristics, reflected most strikingly in the exact regional architecture of the provinces. Overnight at hotel.",
      },
      {
        id: 5,
        title: "Indonesia in Miniature Park & City Sightseeing (B)",
        activity:
          "After breakfast at hotel, depart to the Beautiful Indonesia in Miniature Park well known as Taman Mini Indonesia Indah, a 160-hectare recreation park, which is designed to give visitors a general overview of Indonesian culture and traditions. The all provinces of Indonesia are represented by models of their most representative architectural styles. Proceed with Jakarta city sightseeing by visiting National Museum (open daily except Monday) to see valuable collections of antiquities and ethnographic artifacts. Drive around the Medan Merdekjakarta tour from Dhaka Square to see the National Monument , the Land Mark of Jakarta , then passing the Istiqlal Mosque, the biggest mosque in Southeast Asia and President Palace. Continue the drive thru China Town to Old Batavia City.",
      },
      {
        id: 6,
        title: "Full day Safari Park Tour",
        activity:
          "After breakfast at hotel, visit the 140-acre Safari park and see exotic Indonesia and other imported animals from your card. Adjacent to the park is recreational grounds with a swimming pool, an artificial lake, waterfall and children playground.",
      },
      {
        id: 7,
        title: "Departure Puncak – Airport Jakarta",
        activity:
          "Breakfast at hotel and free program until time transfer to the airport for departure flight.",
      },
    ],
    excluded: ["Tipping", "Optional activity"],
  },
  {
    id: 5,
    name: "India",
    coverageArea: "Mumbai, Delhi",
    duration: "5",
    person: "1",
    price: 24000,
    image: "https://i.ibb.co/9yd2WPB/package-5.jpg",
    overview:
      "There’s a reason the crowds come and it’s this: Bali pretty much offers anything a traveller might want. It’s beautiful, the culture is rich and fascinating, it’s cheap (or at least consistently excellent value for money), the geography is stunning, the shopping eclectic, cuisine wide-ranging and delicious, and the people friendly. In short, Bali is really what other destinations try to conjure themselves up to be when seeking to entice tourists.",
    included: [
      "Return Transfer (Airport – Hotel – Airport)",
      "Hotel Accommodation 04 night at Indonesia",
      "Hotel Accommodation 02 night at JAKARTA",
      "Meals as program (06 Breakfast, 04 x lunch , 04 x dinner)",
      "All sightseeing as per Itinerary",
      "All sightseeing as per Itinerary",
      "Entrance fees",
      "Performance ticket",
      "parking fees",
      "Mineral water on tour 01 bottle / pax / day 600ml in Bal",
      "Return Air Ticket with Economy Airlines & Economy Class",
    ],
    dayActivity: [
      {
        id: 1,
        title: "Pick up Airport & Half day tour (L / D):",
        activity:
          "Arrival Bali airport then transfer Hotel. After Lunch start sightseeing. Visit – Uluwatu temple, Kecak fire dance (Culture park). Dinner at Jimbaran seafood on the Beach.",
      },
      {
        id: 2,
        title: "Kintamani Volcano tour Pick up time : 08.30 am ( B / L / D )",
        activity:
          "Breakfast in Hotel. Meet our guide in Hotel Lobby then start full day sightseeing. We visit – Barong and kris dance, culture dance, Ubud art village Batik / silver factory, Tegenungan water fall, Goa Gajah temple ( Elephant cave, temple ), Kintamani volcano ( having lunch with buffet menu ), Coffee plantation ( luwak coffee ), Tegalalang rice terrace, Having dinner at local Restaurant, Back to hotel and Night stay at Hotel.",
      },
      {
        id: 3,
        title: "Bedugul Tanah lot tour",
        activity:
          "Breakfast in Hotel. Meet our guide in Hotel Lobby then start full day sightseeing -Taman ayun temple UNESCO heritage site, Bedugul – Ulundanu temple lake Beratan, Candi kuning fruit market, Pacung Rice terrace view and Having lunch, Alas Kedaton (Monkey temple), Tanah lot temple, Having dinner at local Restaurant, Back to hotel and Nightstay at Hotel.",
      },
      {
        id: 4,
        title: "Transfer Jakarta",
        activity:
          "Breakfast at hotel. Transfer to airport for Jakarta. Then check in hotel at Jakarta. Proceed for Visiting NATIONAL MONUMENT - The National Monument, or “ Monas “ as popularly called, is one of the monuments built during the Soekarno’s era (the first President) of fierce nationalism. The towering 137 meters monument is crowned by symbolic flame coated by 50 kg of pure gold symbolizing Indonesia’s National Independence The history of Indonesia and its struggle for independence is displayed historically in 48 dioramas down in the basement of the monument Onto BEAUTIFUL INDONESIA IN MINIATURE PARK - An extensive park to get a glimpse of the diversity of the Indonesia archipelago. It represents all the provinces of Indonesia’s and their outstanding characteristics, reflected most strikingly in the exact regional architecture of the provinces. Overnight at hotel.",
      },
      {
        id: 5,
        title: "Indonesia in Miniature Park & City Sightseeing (B)",
        activity:
          "After breakfast at hotel, depart to the Beautiful Indonesia in Miniature Park well known as Taman Mini Indonesia Indah, a 160-hectare recreation park, which is designed to give visitors a general overview of Indonesian culture and traditions. The all provinces of Indonesia are represented by models of their most representative architectural styles. Proceed with Jakarta city sightseeing by visiting National Museum (open daily except Monday) to see valuable collections of antiquities and ethnographic artifacts. Drive around the Medan Merdekjakarta tour from Dhaka Square to see the National Monument , the Land Mark of Jakarta , then passing the Istiqlal Mosque, the biggest mosque in Southeast Asia and President Palace. Continue the drive thru China Town to Old Batavia City.",
      },
      {
        id: 6,
        title: "Full day Safari Park Tour",
        activity:
          "After breakfast at hotel, visit the 140-acre Safari park and see exotic Indonesia and other imported animals from your card. Adjacent to the park is recreational grounds with a swimming pool, an artificial lake, waterfall and children playground.",
      },
      {
        id: 7,
        title: "Departure Puncak – Airport Jakarta",
        activity:
          "Breakfast at hotel and free program until time transfer to the airport for departure flight.",
      },
    ],
    excluded: ["Tipping", "Optional activity"],
  },
  {
    id: 6,
    name: "Bhutan",
    coverageArea: "Bhutan, Thimpo, Paro",
    duration: "5",
    person: "1",
    price: 45000,
    image: "https://i.ibb.co/cX46qm0/package-7.jpg",
    overview:
      "There’s a reason the crowds come and it’s this: Bali pretty much offers anything a traveller might want. It’s beautiful, the culture is rich and fascinating, it’s cheap (or at least consistently excellent value for money), the geography is stunning, the shopping eclectic, cuisine wide-ranging and delicious, and the people friendly. In short, Bali is really what other destinations try to conjure themselves up to be when seeking to entice tourists.",
    included: [
      "Return Transfer (Airport – Hotel – Airport)",
      "Hotel Accommodation 04 night at Indonesia",
      "Hotel Accommodation 02 night at JAKARTA",
      "Meals as program (06 Breakfast, 04 x lunch , 04 x dinner)",
      "All sightseeing as per Itinerary",
      "All sightseeing as per Itinerary",
      "Entrance fees",
      "Performance ticket",
      "parking fees",
      "Mineral water on tour 01 bottle / pax / day 600ml in Bal",
      "Return Air Ticket with Economy Airlines & Economy Class",
    ],
    dayActivity: [
      {
        id: 1,
        title: "Pick up Airport & Half day tour (L / D):",
        activity:
          "Arrival Bali airport then transfer Hotel. After Lunch start sightseeing. Visit – Uluwatu temple, Kecak fire dance (Culture park). Dinner at Jimbaran seafood on the Beach.",
      },
      {
        id: 2,
        title: "Kintamani Volcano tour Pick up time : 08.30 am ( B / L / D )",
        activity:
          "Breakfast in Hotel. Meet our guide in Hotel Lobby then start full day sightseeing. We visit – Barong and kris dance, culture dance, Ubud art village Batik / silver factory, Tegenungan water fall, Goa Gajah temple ( Elephant cave, temple ), Kintamani volcano ( having lunch with buffet menu ), Coffee plantation ( luwak coffee ), Tegalalang rice terrace, Having dinner at local Restaurant, Back to hotel and Night stay at Hotel.",
      },
      {
        id: 3,
        title: "Bedugul Tanah lot tour",
        activity:
          "Breakfast in Hotel. Meet our guide in Hotel Lobby then start full day sightseeing -Taman ayun temple UNESCO heritage site, Bedugul – Ulundanu temple lake Beratan, Candi kuning fruit market, Pacung Rice terrace view and Having lunch, Alas Kedaton (Monkey temple), Tanah lot temple, Having dinner at local Restaurant, Back to hotel and Nightstay at Hotel.",
      },
      {
        id: 4,
        title: "Transfer Jakarta",
        activity:
          "Breakfast at hotel. Transfer to airport for Jakarta. Then check in hotel at Jakarta. Proceed for Visiting NATIONAL MONUMENT - The National Monument, or “ Monas “ as popularly called, is one of the monuments built during the Soekarno’s era (the first President) of fierce nationalism. The towering 137 meters monument is crowned by symbolic flame coated by 50 kg of pure gold symbolizing Indonesia’s National Independence The history of Indonesia and its struggle for independence is displayed historically in 48 dioramas down in the basement of the monument Onto BEAUTIFUL INDONESIA IN MINIATURE PARK - An extensive park to get a glimpse of the diversity of the Indonesia archipelago. It represents all the provinces of Indonesia’s and their outstanding characteristics, reflected most strikingly in the exact regional architecture of the provinces. Overnight at hotel.",
      },
      {
        id: 5,
        title: "Indonesia in Miniature Park & City Sightseeing (B)",
        activity:
          "After breakfast at hotel, depart to the Beautiful Indonesia in Miniature Park well known as Taman Mini Indonesia Indah, a 160-hectare recreation park, which is designed to give visitors a general overview of Indonesian culture and traditions. The all provinces of Indonesia are represented by models of their most representative architectural styles. Proceed with Jakarta city sightseeing by visiting National Museum (open daily except Monday) to see valuable collections of antiquities and ethnographic artifacts. Drive around the Medan Merdekjakarta tour from Dhaka Square to see the National Monument , the Land Mark of Jakarta , then passing the Istiqlal Mosque, the biggest mosque in Southeast Asia and President Palace. Continue the drive thru China Town to Old Batavia City.",
      },
      {
        id: 6,
        title: "Full day Safari Park Tour",
        activity:
          "After breakfast at hotel, visit the 140-acre Safari park and see exotic Indonesia and other imported animals from your card. Adjacent to the park is recreational grounds with a swimming pool, an artificial lake, waterfall and children playground.",
      },
      {
        id: 7,
        title: "Departure Puncak – Airport Jakarta",
        activity:
          "Breakfast at hotel and free program until time transfer to the airport for departure flight.",
      },
    ],
    excluded: ["Tipping", "Optional activity"],
  },
  {
    id: 8,
    name: "Thailand",
    coverageArea: "Thaniland",
    duration: "5",
    person: "1",
    price: 36000,
    image: "https://i.ibb.co/rbFkrvK/package-4.jpg",
    overview:
      "There’s a reason the crowds come and it’s this: Bali pretty much offers anything a traveller might want. It’s beautiful, the culture is rich and fascinating, it’s cheap (or at least consistently excellent value for money), the geography is stunning, the shopping eclectic, cuisine wide-ranging and delicious, and the people friendly. In short, Bali is really what other destinations try to conjure themselves up to be when seeking to entice tourists.",
    included: [
      "Return Transfer (Airport – Hotel – Airport)",
      "Hotel Accommodation 04 night at Indonesia",
      "Hotel Accommodation 02 night at JAKARTA",
      "Meals as program (06 Breakfast, 04 x lunch , 04 x dinner)",
      "All sightseeing as per Itinerary",
      "All sightseeing as per Itinerary",
      "Entrance fees",
      "Performance ticket",
      "parking fees",
      "Mineral water on tour 01 bottle / pax / day 600ml in Bal",
      "Return Air Ticket with Economy Airlines & Economy Class",
    ],
    dayActivity: [
      {
        id: 1,
        title: "Pick up Airport & Half day tour (L / D):",
        activity:
          "Arrival Bali airport then transfer Hotel. After Lunch start sightseeing. Visit – Uluwatu temple, Kecak fire dance (Culture park). Dinner at Jimbaran seafood on the Beach.",
      },
      {
        id: 2,
        title: "Kintamani Volcano tour Pick up time : 08.30 am ( B / L / D )",
        activity:
          "Breakfast in Hotel. Meet our guide in Hotel Lobby then start full day sightseeing. We visit – Barong and kris dance, culture dance, Ubud art village Batik / silver factory, Tegenungan water fall, Goa Gajah temple ( Elephant cave, temple ), Kintamani volcano ( having lunch with buffet menu ), Coffee plantation ( luwak coffee ), Tegalalang rice terrace, Having dinner at local Restaurant, Back to hotel and Night stay at Hotel.",
      },
      {
        id: 3,
        title: "Bedugul Tanah lot tour",
        activity:
          "Breakfast in Hotel. Meet our guide in Hotel Lobby then start full day sightseeing -Taman ayun temple UNESCO heritage site, Bedugul – Ulundanu temple lake Beratan, Candi kuning fruit market, Pacung Rice terrace view and Having lunch, Alas Kedaton (Monkey temple), Tanah lot temple, Having dinner at local Restaurant, Back to hotel and Nightstay at Hotel.",
      },
      {
        id: 4,
        title: "Transfer Jakarta",
        activity:
          "Breakfast at hotel. Transfer to airport for Jakarta. Then check in hotel at Jakarta. Proceed for Visiting NATIONAL MONUMENT - The National Monument, or “ Monas “ as popularly called, is one of the monuments built during the Soekarno’s era (the first President) of fierce nationalism. The towering 137 meters monument is crowned by symbolic flame coated by 50 kg of pure gold symbolizing Indonesia’s National Independence The history of Indonesia and its struggle for independence is displayed historically in 48 dioramas down in the basement of the monument Onto BEAUTIFUL INDONESIA IN MINIATURE PARK - An extensive park to get a glimpse of the diversity of the Indonesia archipelago. It represents all the provinces of Indonesia’s and their outstanding characteristics, reflected most strikingly in the exact regional architecture of the provinces. Overnight at hotel.",
      },
      {
        id: 5,
        title: "Indonesia in Miniature Park & City Sightseeing (B)",
        activity:
          "After breakfast at hotel, depart to the Beautiful Indonesia in Miniature Park well known as Taman Mini Indonesia Indah, a 160-hectare recreation park, which is designed to give visitors a general overview of Indonesian culture and traditions. The all provinces of Indonesia are represented by models of their most representative architectural styles. Proceed with Jakarta city sightseeing by visiting National Museum (open daily except Monday) to see valuable collections of antiquities and ethnographic artifacts. Drive around the Medan Merdekjakarta tour from Dhaka Square to see the National Monument , the Land Mark of Jakarta , then passing the Istiqlal Mosque, the biggest mosque in Southeast Asia and President Palace. Continue the drive thru China Town to Old Batavia City.",
      },
      {
        id: 6,
        title: "Full day Safari Park Tour",
        activity:
          "After breakfast at hotel, visit the 140-acre Safari park and see exotic Indonesia and other imported animals from your card. Adjacent to the park is recreational grounds with a swimming pool, an artificial lake, waterfall and children playground.",
      },
      {
        id: 7,
        title: "Departure Puncak – Airport Jakarta",
        activity:
          "Breakfast at hotel and free program until time transfer to the airport for departure flight.",
      },
    ],
    excluded: ["Tipping", "Optional activity"],
  },
];
export default packageList;
/**
  <img src="https://i.ibb.co/fN0RVqC/package-8.jpg" alt="package-8" border="0">
  <img src="https://i.ibb.co/1RYFTKd/package-1.jpg" alt="package-1" border="0">
  <img src="https://i.ibb.co/Jm3qxGP/package-2.jpg" alt="package-2" border="0">
  <img src="https://i.ibb.co/sR9gqBD/package-3.jpg" alt="package-3" border="0">
  <img src="https://i.ibb.co/rbFkrvK/package-4.jpg" alt="package-4" border="0">
  <img src="https://i.ibb.co/9yd2WPB/package-5.jpg" alt="package-5" border="0">
  <img src="https://i.ibb.co/zbRpryw/package-6.jpg" alt="package-6" border="0">
  <img src="https://i.ibb.co/cX46qm0/package-7.jpg" alt="package-7" border="0">
   */
