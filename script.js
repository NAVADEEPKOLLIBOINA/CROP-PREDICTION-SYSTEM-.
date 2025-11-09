const translations = {
  en: {
    pageTitle: "🌱 Smart Crop & Fertilizer Predictor",
    langLabel: "Select Language:",
    nLabel: "Nitrogen (N) Ratio",
    pLabel: "Phosphorus (P) Ratio",
    kLabel: "Potassium (K) Ratio",
    tempLabel: "Temperature (°C)",
    humLabel: "Humidity (%)",
    phLabel: "pH Value",
    rainLabel: "Rainfall (mm/month)",
    predictBtn: "Predict Crop & Fertilizer",
    resultHeading: "Prediction Results",
    cropCardTitle: "🌾 Predicted Crop:",
    fertilizerCardTitle: "🧪 Fertilizer Recommendation:",
    reasonCardTitle: "💡 Reason for Prediction:",
    otherCropsCardTitle: "📊 Other Suitable Crops:"
  },
  te: {
    pageTitle: "🌱 స్మార్ట్ పంట & ఎరువు అంచనా వ్యవస్థ",
    langLabel: "భాషను ఎంచుకోండి:",
    nLabel: "నైట్రోజన్ (N) నిష్పత్తి",
    pLabel: "ఫాస్పరస్ (P) నిష్పత్తి",
    kLabel: "పొటాషియం (K) నిష్పత్తి",
    tempLabel: "ఉష్ణోగ్రత (°C)",
    humLabel: "ఆర్ద్రత (%)",
    phLabel: "pH విలువ",
    rainLabel: "వర్షపాతం (mm/నెల)",
    predictBtn: "పంట & ఎరువు అంచనా వేయండి",
    resultHeading: "ఫలితాలు",
    cropCardTitle: "🌾 అంచనా పంట:",
    fertilizerCardTitle: "🧪 ఎరువు సిఫార్సు:",
    reasonCardTitle: "💡 అంచనా కారణం:",
    otherCropsCardTitle: "📊 ఇతర అనుకూలమైన పంటలు:"
  },
  hi: {
    pageTitle: "🌱 स्मार्ट फसल और उर्वरक भविष्यवाणी प्रणाली",
    langLabel: "भाषा चुनें:",
    nLabel: "नाइट्रोजन (N) अनुपात",
    pLabel: "फॉस्फोरस (P) अनुपात",
    kLabel: "पोटेशियम (K) अनुपात",
    tempLabel: "तापमान (°C)",
    humLabel: "नमी (%)",
    phLabel: "pH मान",
    rainLabel: "वर्षा (mm/महीना)",
    predictBtn: "फसल और उर्वरक की भविष्यवाणी करें",
    resultHeading: "पूर्वानुमान परिणाम",
    cropCardTitle: "🌾 अनुमानित फसल:",
    fertilizerCardTitle: "🧪 उर्वरक सिफारिश:",
    reasonCardTitle: "💡 पूर्वानुमान का कारण:",
    otherCropsCardTitle: "📊 अन्य उपयुक्त फसलें:"
  },
  ta: {
    pageTitle: "🌱 ஸ்மார்ட் பயிர் மற்றும் உர கணிப்பு அமைப்பு",
    langLabel: "மொழியைத் தேர்ந்தெடுக்கவும்:",
    nLabel: "நைட்ரஜன் (N) விகிதம்",
    pLabel: "பாஸ்பரஸ் (P) விகிதம்",
    kLabel: "பொட்டாசியம் (K) விகிதம்",
    tempLabel: "வெப்பநிலை (°C)",
    humLabel: "ஈரப்பதம் (%)",
    phLabel: "pH மதிப்பு",
    rainLabel: "மழை (mm/மாதம்)",
    predictBtn: "பயிர் மற்றும் உர கணிக்கவும்",
    resultHeading: "முன்னறிவிப்பு முடிவுகள்",
    cropCardTitle: "🌾 கணிக்கப்பட்ட பயிர்:",
    fertilizerCardTitle: "🧪 உர பரிந்துரை:",
    reasonCardTitle: "💡 முன்னறிவிப்பு காரணம்:",
    otherCropsCardTitle: "📊 பிற பொருத்தமான பயிர்கள்:"
  }
};

function changeLanguage() {
  const lang = document.getElementById("language").value;
  const t = translations[lang];
  for (const key in t) {
    const el = document.getElementById(key);
    if (el) el.textContent = t[key];
  }
}

function predictCrop() {
  const N = parseFloat(document.getElementById("n").value);
  const P = parseFloat(document.getElementById("p").value);
  const K = parseFloat(document.getElementById("k").value);
  const temp = parseFloat(document.getElementById("temp").value);
  const hum = parseFloat(document.getElementById("hum").value);
  const ph = parseFloat(document.getElementById("ph").value);
  const rain = parseFloat(document.getElementById("rain").value);

  let crop = "Rice";
  let fertilizer = "";
  let reason = "";
  let others = "";

  if (rain > 200 && hum > 70 && N > 80) {
    crop = "Rice";
    fertilizer = "Use urea-based fertilizer for higher nitrogen content.";
    reason = "High humidity and rainfall favor rice growth.";
    others = "Sugarcane, Jute";
  } else if (N < 60 && P > 40 && rain < 100) {
    crop = "Groundnut";
    fertilizer = "Use potassium-rich fertilizer (MOP).";
    reason = "Low nitrogen and dry climate support groundnut.";
    others = "Millet, Cotton";
  } else if (N > 70 && K > 40 && temp > 25) {
    crop = "Maize";
    fertilizer = "Balanced NPK (20:20:20) for maize yield.";
    reason = "Warm temperature and high N favor maize.";
    others = "Sorghum, Bajra";
  } else if (ph > 7.5 && rain < 150) {
    crop = "Cotton";
    fertilizer = "Add ammonium sulfate to balance soil alkalinity.";
    reason = "Cotton grows best in moderate rainfall and alkaline soil.";
    others = "Soybean, Maize";
  } else {
    crop = "Wheat";
    fertilizer = "Use DAP or urea-based fertilizers.";
    reason = "Moderate rainfall and temperature favor wheat.";
    others = "Barley, Mustard";
  }

  document.getElementById("predictedCrop").textContent = crop;
  document.getElementById("fertilizerRec").textContent = fertilizer;
  document.getElementById("predictionReason").textContent = reason;
  document.getElementById("otherCrops").textContent = others;

  document.getElementById("result-container").style.display = "block";
}
