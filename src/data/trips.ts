export interface Trip {
  id: string;
  destination: string;
  summary: string;
  date: string;
  duration: string;
  highlights: string[];
  detailedView?: string;
}

export const trips: Trip[] = [
  {
    id: "southeast-asia-2024",
    destination: "Southeast Asia",
    summary: "Three months of solo travel through Thailand, Vietnam, and Cambodia, discovering ancient temples, vibrant markets, and unexpected connections with fellow travelers.",
    date: "January - March 2024",
    duration: "3 months",
    highlights: [
      "Sunrise at Angkor Wat in Cambodia",
      "Cooking classes in Vietnam with local families",
      "Island hopping in southern Thailand",
      "Motorcycle adventures through mountain villages",
      "Night markets and street food discoveries"
    ],
    detailedView: "An transformative solo journey that taught me about independence, cultural immersion, and the kindness of strangers. From the bustling streets of Bangkok to the serene temples of Siem Reap, each destination offered its own lessons and memories that continue to influence how I see the world."
  },
  {
    id: "iceland-northern-lights",
    destination: "Iceland",
    summary: "A winter adventure chasing the Northern Lights, exploring ice caves, and soaking in geothermal hot springs under the midnight sky.",
    date: "November 2023",
    duration: "10 days",
    highlights: [
      "Northern Lights dancing over the countryside",
      "Blue Ice Cave exploration in Vatnajökull glacier",
      "Relaxing in the Blue Lagoon's milky blue waters",
      "Golden Circle road trip with dramatic waterfalls",
      "Traditional Icelandic cuisine and cozy cafés"
    ],
    detailedView: "Iceland in winter is otherworldly. The landscape feels like another planet, with its dramatic black sand beaches, towering waterfalls frozen in time, and the magical aurora borealis painting the sky in greens and purples. Every day brought new natural wonders that reminded me of Earth&apos;s incredible beauty."
  },
  {
    id: "portugal-coastal-towns",
    destination: "Portugal",
    summary: "Wandering through charming coastal towns, discovering hidden beaches, and falling in love with Portuguese culture, food, and fado music.",
    date: "September 2023",
    duration: "2 weeks",
    highlights: [
      "Colorful houses of Porto's Ribeira district",
      "Surfing lessons on the Atlantic coast",
      "Fado performances in intimate Lisbon venues",
      "Exploring medieval castles and cobblestone streets",
      "Pastéis de nata tasting tours"
    ],
    detailedView: "Portugal captured my heart with its perfect blend of old-world charm and modern vitality. From the azulejo tiles decorating building facades to the melancholic beauty of fado music echoing through narrow streets, every moment felt like discovering a well-kept secret."
  },
  {
    id: "scottish-highlands",
    destination: "Scottish Highlands",
    summary: "Hiking through misty mountains, staying in cozy castles, and experiencing the raw beauty of Scotland's rugged landscape.",
    date: "June 2023",
    duration: "1 week",
    highlights: [
      "Multi-day hike through the West Highland Way",
      "Whisky tasting in traditional distilleries",
      "Staying overnight in a converted castle",
      "Loch Ness boat tour and monster hunting",
      "Traditional ceilidh dancing in local pubs"
    ],
    detailedView: "The Scottish Highlands offered a perfect escape into nature's drama. Misty mornings, challenging hikes, and the warmth of Highland hospitality created an adventure that was both physically demanding and spiritually refreshing. The landscape tells stories of ancient clans and timeless traditions."
  },
  {
    id: "japan-cherry-blossom",
    destination: "Japan",
    summary: "Timing the perfect cherry blossom season while exploring the contrast between ultra-modern Tokyo and traditional Kyoto temples.",
    date: "April 2022",
    duration: "2 weeks",
    highlights: [
      "Hanami picnics under full-bloom sakura trees",
      "Traditional tea ceremony in Kyoto",
      "Sushi breakfast at Tsukiji Fish Market",
      "Peaceful meditation sessions in zen gardens",
      "Bullet train adventures across the country"
    ],
    detailedView: "Japan during cherry blossom season is pure magic. The delicate pink petals create a dreamlike atmosphere, while the country's incredible attention to detail and respect for tradition provided countless moments of wonder. From bustling Tokyo streets to serene temple gardens, Japan offered the perfect balance of energy and tranquility."
  },
  {
    id: "morocco-desert-adventure",
    destination: "Morocco",
    summary: "Camel trekking in the Sahara Desert, getting lost in Marrakech's souks, and experiencing the incredible hospitality of Berber culture.",
    date: "February 2022",
    duration: "10 days",
    highlights: [
      "Sleeping under the stars in the Sahara Desert",
      "Navigating the maze-like souks of Marrakech",
      "Traditional tagine cooking classes",
      "Camel caravan journeys at sunset",
      "Atlas Mountains hiking and Berber village visits"
    ],
    detailedView: "Morocco assaulted the senses in the most wonderful way. The vibrant colors of spices in the markets, the call to prayer echoing across ancient cities, the silence of the desert under infinite stars - every moment was intensely memorable. The warmth and generosity of the Moroccan people made every interaction feel like a gift."
  }
];