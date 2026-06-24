// Hailee's Wishlist - Item Database & Dynamic Rendering

const WISHLIST_ITEMS = [
  {
    brand: "Vivienne Westwood",
    name: "Heart Lighter Silver",
    image: "images/vivienne_westwood_lighter.png",
    url: "https://www.viviennewestwood.com/women/accessories/other-accessories/heart-lighter-silver/8209000IU-C0068--SILVER.html",
    category: "accessories"
  },
  {
    brand: "Intimissimi",
    name: "Silk Slip with Lace Insert",
    image: "images/slip_dress.png",
    url: "https://www.intimissimi.com/us/product/silk_slip_with_lace_insert_detail-LC71S1+++1467S.html?_gl=1*19q5pl*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwxb7RBhA5EiwAQ-AAdAL6tjpOWBFzhotgcF8OgseD99-4jmJmX4nOK2Z0GGmgnlhncQyI6RoC_9wQAvD_BwE&gbraid=0AAAAADtlepP_2xZgO5j8-KLRTDhJFOKLU",
    category: "clothing"
  },
  {
    brand: "Chloé",
    name: "Paddington Shoulder Bag",
    image: "images/chloe_paddington_bag.png",
    url: "https://www.chloe.com/en-us/p/bags/shoulder-bag/CH25WS802P75001.html",
    category: "bags"
  },
  {
    brand: "Burberry",
    name: "Check Cashmere Scarf",
    image: "images/pink_burberry_scarf.png",
    url: "https://us.burberry.com/check-cashmere-scarf-p81139471?pla=true&utm_source=google_ads&utm_medium=CPC&utm_channel=psr&utm_campaignid=23921061302&utm_placementid=199781686680&gclsrc=aw.ds&gad_source=1&gad_campaignid=23921061302&gbraid=0AAAAADpt2lNTmIibgGUrpKxfz1dhbxfVJ&gclid=CjwKCAjwxb7RBhA5EiwAQ-AAdNWNhvxUSsMfvxK-DfET4oi5y0eL2Q2BWEWIAb7WDcb4JQlUDb5giRoCN1UQAvD_BwE&initials=HNY&threadColor=100004&threadSize=mngofs1900004&fontStyle=upperCase&color=$black$",
    category: "clothing"
  },
  {
    brand: "Mason Pearson",
    name: "Junior Bristle & Nylon Brush",
    image: "images/mason_pearson_hairbrush.png",
    url: "https://masonpearson.com/product/junior-bristle-nylon-hairbrush-bn2/",
    category: "beauty"
  },
  {
    brand: "Diptyque",
    name: "Roses Scented Candle",
    image: "images/diptyque_candle.png",
    url: "https://www.diptyqueparis.com/en_us/p/home-fragrances/scented-candles/colored-scented-candles/roses-candle-600g.html",
    category: "home"
  },
  {
    brand: "Slip",
    name: "White Queen Silk Pillowcase",
    image: "images/slip_pillowcase.png",
    url: "https://www.slip.com/collections/queen-pillowcases/products/pillowcase-white-queen-zippered",
    category: "beauty"
  },
  {
    brand: "Amazon",
    name: "Victorian Silver Cigarette Case",
    image: "images/cigarette_case.png",
    url: "https://www.amazon.com/Cigarette-Victorian-Holder-Regular-Silver/dp/B09N8TYP93?th=1",
    category: "accessories"
  },
  {
    brand: "Prada",
    name: "Chocolate Brushed Leather Loafers",
    image: "images/prada_loafers.png",
    url: "https://www.prada.com/us/en/p/chocolate-brushed-leather-loafers/1D246M_ULS_F0002_F_G050.html",
    category: "shoes"
  },
  {
    brand: "Sandro",
    name: "Oversized Leather Jacket",
    image: "images/sandro_leather_jacket.png",
    url: "https://us.sandro-paris.com/en/p/oversized-leather-jacket/3607172108335.html?gad_source=1&gad_campaignid=17452296430&gbraid=0AAAAADwBl7HWEv2Ep9t-1-nfqUl_3GY2U&gclid=EAIaIQobChMIw4qRpOTjkgMVg1hHAR2__C9JEAQYAiABEgIbJfD_BwE",
    category: "clothing"
  },
  {
    brand: "Diptyque",
    name: "Large Photophore Coast",
    image: "images/diptyque_candle_holder.png",
    url: "https://www.diptyqueparis.com/en_us/p/large-photophore-coast.html",
    category: "home"
  },
  {
    brand: "Tory Burch",
    name: "Romy Leather Tote",
    image: "images/tory_burch_romy_tote.png",
    url: "https://www.toryburch.com/en-us/handbags/tote-bags/romy-tote/163388.html?color=200",
    category: "bags"
  },
  {
    brand: "René Caovilla",
    name: "Juniper Silver Sandals",
    image: "images/rene_caovilla_silver_heels.png",
    url: "https://us.renecaovilla.com/us/en/shoes/sandals/juniper-silver-468051817358015.html?keeplocale=true&Country=US&pid=468051817358015&utm_source=google&utm_medium=cpc&utm_campaign=US_Pmax&utm_id=21345453014&loopcd=COp|c|x|21345453014|468051817358015&gad_source=1&gad_campaignid=21349408318&gbraid=0AAAAACJVh3OX_UgvrRfYTC5R2oCuYnPea&gclid=Cj0KCQiAqeDMBhDcARIsAJEbU9TmQ8B9CBASMpx7i7QxqxKNTKG07hApi6w_Gt6iyue8IfeZPITwBzsaAgxwEALw_wcB",
    category: "shoes"
  },
  {
    brand: "Isabel Marant",
    name: "Bekett Sneakers",
    image: "images/isabel_marant_sneakers.png",
    url: "https://us.isabelmarant.com/products/bk0010faa1e19s01bk-bekett-sneakers-black?variant=48045244154175",
    category: "shoes"
  },
  {
    brand: "Louis Vuitton",
    name: "Passport Cover",
    image: "images/louis_vuitton_passport_cover.png",
    url: "https://us.louisvuitton.com/eng-us/products/passport-cover-monogram-shadow-leather-nvprod5790139v/M13187",
    category: "accessories"
  },
  {
    brand: "Bulgari",
    name: "Serpenti Tubogas Watch",
    image: "images/bulgari_watch.png",
    url: "https://www.bulgari.com/en-us/SP35C6SDS-2T-WG.html?pid=101910",
    category: "accessories"
  },
  {
    brand: "Loewe",
    name: "Medium Featherlight Puzzle Bag",
    image: "images/loewe_puzzle_bag.png",
    url: "https://www.loewe.com/usa/en/women/bags/puzzle/medium-featherlight-puzzle-bag-in-nappa-lambskin/A510PLMX02-0018.html",
    category: "bags"
  },
  {
    brand: "Hermès",
    name: "Birkin 30",
    image: "images/black_birkin.png",
    url: "https://www.therealreal.com/products/women/handbags/handle-bags/hermes-epsom-leather-birkin-30-ult22?utm_source=googleperformancemax&utm_medium=paidshopping&utm_campaign=Google%5FShopping%5FDemand%5FNew%5FWomens%5FHandbags%5FHerm%C3%A8s&utm_adgroup=&utm_content=&gad_source=1&gad_campaignid=22491516156&gbraid=0AAAAADh84nNQqVUEZP7V8EtRn_wX1C6f7&gclid=CjwKCAjwuuPRBhAnEiwA2Ji8evXQSbYnC_CNm3wOC9U7nwy89fxUBi7xxzQqasIqozcv831EqHTdBxoCORcQAvD_BwE",
    category: "bags"
  },
  {
    brand: "Jellycat",
    name: "Amusables Clementine",
    image: "images/jellycat_clementine.png",
    url: "https://us.jellycat.com/amuseables-clementine/?_gl=1*aky461*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwuuPRBhAnEiwA2Ji8eukLERphrnNJy-HAbyJ1zNunKu8zLgH02dqZSkxduBXYzdzU4pnKlBoCmmwQAvD_BwE&gbraid=0AAAAADtxRQC-SGI9piKG5Tr1p9xjocMDy",
    category: "home"
  },
  {
    brand: "Jo Malone",
    name: "English Pear & Freesia Body & Hand Lotion",
    image: "images/jo_malone_lotion.png",
    url: "https://www.jomalone.com/product/25956/27928/bath-body/english-pear-freesia-body-hand-lotion?size=250ml",
    category: "beauty"
  },
  {
    brand: "Dior",
    name: "Dior Addict Lip Glow, Shade 077 Candy",
    image: "images/dior_lip_glow.png",
    url: "https://www.dior.com/en_us/beauty/products/dior-addict-lip-glow-Y0457000.html",
    category: "beauty"
  },
  {
    brand: "Rimowa",
    name: "Original Cabin",
    image: "images/rimowa_suitcase.png",
    url: "https://www.rimowa.com/us/en/luggage/colour/silver/cabin/92553004.html",
    category: "bags"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("wishlist-grid");
  const tabButtons = document.querySelectorAll(".tab-btn");

  // Function to render items
  function renderItems(filterCategory = "all") {
    // Clear container
    gridContainer.innerHTML = "";

    // Filter items
    const filteredItems = filterCategory === "all" 
      ? WISHLIST_ITEMS 
      : WISHLIST_ITEMS.filter(item => item.category === filterCategory);

    // Create and append card elements
    filteredItems.forEach((item, index) => {
      const card = document.createElement("a");
      card.href = item.url;
      card.target = "_blank";
      card.className = "wishlist-card";
      
      // Set inline animation delay for a staggered fade-in effect
      card.style.animationDelay = `${index * 0.05}s`;

      card.innerHTML = `
        <div class="card-image-wrapper">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="card-info">
          <span class="card-brand">${item.brand}</span>
          <h3 class="card-name">${item.name}</h3>
          <div class="card-action">
            <span>Shop Now</span>
            <span class="arrow">→</span>
          </div>
        </div>
      `;
      gridContainer.appendChild(card);
    });
  }

  // Handle tab click events
  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Don't do anything if clicked on already active tab
      if (button.classList.contains("active")) return;

      // Update active tab button styling
      document.querySelector(".tab-btn.active").classList.remove("active");
      button.classList.add("active");

      // Add temporary transition opacity class for smoother tab switching
      gridContainer.classList.add("filtering");

      setTimeout(() => {
        const category = button.getAttribute("data-category");
        renderItems(category);
        gridContainer.classList.remove("filtering");
      }, 250); // Matches opacity transition duration
    });
  });

  // Initial render
  renderItems("all");
});
