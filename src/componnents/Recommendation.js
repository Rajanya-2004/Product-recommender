import products from "../products";

export default function getRecommendations(query) {
  const text = query.toLowerCase();
  let filtered = [];
  let message = "";

  // 🔍 Extract numeric price limit from query (e.g. "under 500", "below 300", "less than 800")
  const priceMatch = text.match(/under\s*(\d+)|below\s*(\d+)|less than\s*(\d+)/);
  const priceLimit = priceMatch ? parseInt(priceMatch[1] || priceMatch[2] || priceMatch[3]) : null;

  // 🧠 Helper for filtering & sorting
  const filterAndSort = (category, customFilter = () => true) => {
    let results = products.filter(p => p.category === category && customFilter(p));
    if (priceLimit) results = results.filter(p => p.price <= priceLimit);
    results.sort((a, b) => a.price - b.price);
    return results;
  };

  // 🧩 Phones
  if (text.includes("phone") || text.includes("smartphone")) {
    filtered = filterAndSort("phone");
    message = priceLimit
      ? `Smartphones under $${priceLimit}:`
      : "Latest smartphones you might like:";
  }

  // 💻 Laptops
  else if (text.includes("laptop")) {
    if (text.includes("gaming")) {
      filtered = filterAndSort("laptop", p => p.name.toLowerCase().includes("gaming"));
      message = "Recommended gaming laptops:";
    } else {
      filtered = filterAndSort("laptop");
      message = priceLimit
        ? `Laptops under $${priceLimit}:`
        : "Top-rated laptops for every need:";
    }
  }

  // 🎧 Headphones / Earbuds
  else if (text.includes("headphone") ||  text.includes("headphones") || text.includes("earbuds")|| text.includes("earbud")) 
    {
  filtered = products.filter(
    p => p.category === "headphones" || p.category === "earbuds"
  );
  if (priceLimit) {
    filtered = filtered.filter(p => p.price <= priceLimit);
  }
  filtered.sort((a, b) => a.price - b.price);
  message = priceLimit
    ? `Headphones & Earbuds under $${priceLimit}:`
    : "Great picks for music lovers:";
}

  // ⌚ Smartwatches
  else if (text.includes("watch") || text.includes("smartwatch")) {
    filtered = filterAndSort("smartwatch");
    message = priceLimit
      ? `Smartwatches under $${priceLimit}:`
      : "Stylish smartwatches that blend tech and design:";
  }

  // 🖥️ Monitors
  else if (text.includes("monitor") || text.includes("display")) {
    filtered = filterAndSort("monitor");
    message = priceLimit
      ? `Monitors under $${priceLimit}:`
      : "High-quality monitors for work and gaming:";
  }

  // 🔊 Speakers
  else if (text.includes("speaker") || text.includes("soundbar")) {
    filtered = filterAndSort("speaker");
    message = priceLimit
      ? `Speakers under $${priceLimit}:`
      : "Top-rated speakers for crystal-clear sound:";
  }

  // 🏠 Home Appliances
  else if (text.includes("appliance") || text.includes("home")) {
    filtered = filterAndSort("home-appliance");
    message = priceLimit
      ? `Home appliances under $${priceLimit}:`
      : "Smart home appliances to simplify your life:";
  }

  // 🎮 Gaming Consoles
  else if (text.includes("gaming") || text.includes("console")) {
    filtered = filterAndSort("gaming");
    message = priceLimit
      ? `Gaming consoles under $${priceLimit}:`
      : "Popular gaming consoles this season:";
  }

  // 💡 Default Fallback
  else {
    filtered = priceLimit
      ? products.filter(p => p.price <= priceLimit)
      : products;
    filtered.sort((a, b) => a.price - b.price);
    message = priceLimit
      ? `Here are all products under $${priceLimit}:`
      : "Sorry, I couldn’t understand your query. Try asking for phones, laptops, or speakers.";
  }

  return { message, data: filtered };
}
