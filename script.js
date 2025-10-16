// Quiz questions
const allQuestions = [
  {
    question: "What is the capital of Italy?",
    options: ["Rome", "Milan", "Florence", "Naples"],
    answer: "Rome"
  },
  {
    question: "Which Italian city is known for its canals?",
    options: ["Rome", "Venice", "Turin", "Palermo"],
    answer: "Venice"
  },
  {
    question: "Which Italian food is traditionally from Naples?",
    options: ["Pizza", "Lasagna", "Risotto", "Carbonara"],
    answer: "Pizza"
  },
  {
    question: "What is the name of the famous tower in Pisa?",
    options: ["Leaning Tower", "Clock Tower", "Tall Tower", "Pisa Monument"],
    answer: "Leaning Tower"
  },
  {
    question: "Who painted the Sistine Chapel ceiling?",
    options: ["Leonardo da Vinci", "Donatello", "Raphael", "Michelangelo"],
    answer: "Michelangelo"
  },
  {
    question: "Which Italian city hosted the 1960 Summer Olympics?",
    options: ["Milan", "Turin", "Rome", "Florence"],
    answer: "Rome"
  },
  {
    question: "What is Italy's national day called?",
    options: ["Republic Day", "Unity Day", "Freedom Day", "Independence Day"],
    answer: "Republic Day"
  },
  {
    question: "What color is traditional Italian gelato?",
    options: ["Bright Blue", "Neon Yellow", "Natural Colors", "All Black"],
    answer: "Natural Colors"
  },
  {
    question: "Where is the Colosseum located?",
    options: ["Florence", "Rome", "Milan", "Bologna"],
    answer: "Rome"
  },
  {
    question: "Which region is famous for making Parmigiano-Reggiano cheese?",
    options: ["Tuscany", "Emilia-Romagna", "Sicily", "Lombardy"],
    answer: "Emilia-Romagna"
  }
];

// Map data with detailed information
const mapData = {
  "Piedmont": {
    description: "Piedmont is a region in northwest Italy, bordering France and Switzerland.",
    cities: ["Turin", "Alessandria", "Asti"],
    specialties: ["White truffles", "Barolo wine", "Gianduiotto chocolate"],
    landmarks: ["Mole Antonelliana", "Royal Palace of Turin", "Sacra di San Michele"]
  },
  "Lombardy": {
    description: "Lombardy is a northern Italian region known for its financial capital Milan and beautiful lakes.",
    cities: ["Milan", "Bergamo", "Brescia"],
    specialties: ["Risotto alla Milanese", "Ossobuco", "Panettone"],
    landmarks: ["Milan Cathedral", "La Scala", "Lake Como"]
  },
  "Veneto": {
    description: "Veneto is a northeastern Italian region, home to the romantic city of Venice.",
    cities: ["Venice", "Verona", "Padua"],
    specialties: ["Tiramisu", "Prosecco", "Polenta"],
    landmarks: ["St. Mark's Basilica", "Rialto Bridge", "Arena di Verona"]
  },
  "Tuscany": {
    description: "Tuscany is known for its landscapes, history, and artistic legacy, with Florence as its capital.",
    cities: ["Florence", "Siena", "Pisa"],
    specialties: ["Chianti wine", "Fiorentina steak", "Ribollita soup"],
    landmarks: ["Florence Cathedral", "Leaning Tower of Pisa", "Uffizi Gallery"]
  },
  "Lazio": {
    description: "Lazio is the region that hosts Rome, Italy's capital, and the Vatican City.",
    cities: ["Rome", "Viterbo", "Latina"],
    specialties: ["Carbonara", "Amatriciana", "Artichokes Roman-style"],
    landmarks: ["Colosseum", "Vatican Museums", "Trevi Fountain"]
  },
  "Campania": {
    description: "Campania is a southern Italian region famous for Naples, the Amalfi Coast, and Pompeii.",
    cities: ["Naples", "Salerno", "Caserta"],
    specialties: ["Pizza Margherita", "Mozzarella di Bufala", "Sfogliatella"],
    landmarks: ["Pompeii", "Amalfi Coast", "Royal Palace of Caserta"]
  },
  "Sicily": {
    description: "Sicily is the largest Mediterranean island, known for its rich history and cuisine.",
    cities: ["Palermo", "Catania", "Syracuse"],
    specialties: ["Cannoli", "Arancini", "Cassata"],
    landmarks: ["Mount Etna", "Valley of the Temples", "Palermo Cathedral"]
  }
};

// Cultural information organized by category
const culturalInfo = {
  cuisine: [
    {
      title: "Pasta Varieties",
      content: "Italy boasts over 350 types of pasta, each with its own regional origin and traditional sauce pairing. From long strands like spaghetti to stuffed varieties like ravioli, pasta is a cornerstone of Italian cuisine."
    },
    {
      title: "Regional Specialties",
      content: "Each Italian region has its own culinary identity. Northern Italy is known for risotto and polenta, Central Italy for cured meats and pasta, and Southern Italy for pizza and seafood dishes."
    },
    {
      title: "Italian Coffee Culture",
      content: "Italians take their coffee seriously, with specific rules about when and how to drink different types. Espresso is the standard, consumed quickly while standing at a bar, and cappuccino is strictly a morning beverage."
    }
  ],
  art: [
    {
      title: "Renaissance Masterpieces",
      content: "The Italian Renaissance produced some of the world's most famous artworks, including Michelangelo's David, Leonardo's Mona Lisa, and Botticelli's Birth of Venus, primarily centered in Florence and Rome."
    },
    {
      title: "Architectural Marvels",
      content: "Italy's architecture spans millennia, from Roman aqueducts and amphitheaters to Byzantine basilicas, Gothic cathedrals, and Renaissance palazzos, each telling a story of Italy's rich history."
    },
    {
      title: "Modern Italian Design",
      content: "Italy continues to be a leader in design, with influential movements like Futurism in the early 20th century and contemporary design excellence in furniture, industrial design, and fashion."
    }
  ],
  festivals: [
    {
      title: "Venice Carnival",
      content: "The Carnival of Venice is famous for its elaborate masks and costumes. Dating back to the 12th century, this pre-Lent celebration features grand balls, parades, and public festivities throughout the city."
    },
    {
      title: "Siena's Palio",
      content: "The Palio di Siena is a historic horse race held twice yearly in Siena's main square. The competition between the city's contrades (districts) is intense and dates back to the Middle Ages."
    },
    {
      title: "Christmas Traditions",
      content: "Italian Christmas celebrations include the Feast of the Seven Fishes on Christmas Eve, nativity scenes (presepi), and the arrival of La Befana, a kindly witch who brings gifts on Epiphany Eve."
    }
  ],
  fashion: [
    {
      title: "Milan Fashion Week",
      content: "Milan is one of the 'Big Four' fashion capitals, hosting prestigious fashion weeks that showcase Italian luxury brands like Prada, Gucci, Versace, and Armani to a global audience."
    },
    {
      title: "Italian Textile Heritage",
      content: "Regions like Tuscany and Lombardy have centuries-old textile traditions, producing high-quality fabrics like silk from Como, wool from Biella, and leather from Florence's Santa Croce district."
    },
    {
      title: "Made in Italy",
      content: "The 'Made in Italy' label represents quality craftsmanship and design excellence across fashion, furniture, and automotive industries, contributing significantly to Italy's economy and cultural identity."
    }
  ],
  music: [
    {
      title: "Opera Origins",
      content: "Italy is the birthplace of opera, with composers like Verdi, Puccini, and Rossini creating timeless works. La Scala in Milan remains one of the world's most prestigious opera houses."
    },
    {
      title: "Traditional Folk Music",
      content: "Each Italian region has its own folk music traditions, from the tarantella of Southern Italy to the polyphonic singing of Sardinia, reflecting local history and customs."
    },
    {
      title: "Modern Italian Music",
      content: "Contemporary Italian music spans genres from pop and rock to hip-hop, with artists like Laura Pausini, Eros Ramazzotti, and J-Ax achieving international success while often singing in Italian."
    }
  ]
};

// ----- Utility Functions -----
function getRandomQuestions(num) {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

function saveBestScore(score) {
  const currentBest = localStorage.getItem('italyQuizBestScore') || 0;
  if (score > currentBest) {
    localStorage.setItem('italyQuizBestScore', score);
    return true;
  }
  return false;
}

function getBestScore() {
  return localStorage.getItem('italyQuizBestScore') || 0;
}

// ----- Quiz Functions -----
function loadQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";
  const selectedQuestions = getRandomQuestions(6);
  window.currentQuiz = selectedQuestions;

  selectedQuestions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.style.animationDelay = `${index * 0.1}s`;

    const questionText = document.createElement("p");
    questionText.textContent = `${index + 1}. ${q.question}`;
    questionDiv.appendChild(questionText);

    q.options.forEach(option => {
      const label = document.createElement("label");
      label.innerHTML = `
        <input type="radio" name="q${index}" value="${option}" />
        ${option}
      `;
      questionDiv.appendChild(label);
    });

    quizContainer.appendChild(questionDiv);
  });

  // Update score display
  updateScoreDisplay();
}

function checkAnswers() {
  const results = document.getElementById("quiz-results");
  let score = 0;
  let unanswered = 0;

  window.currentQuiz.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (!selected) {
      unanswered++;
      return;
    }
    if (selected.value === q.answer) {
      score++;
    }
  });

  if (unanswered > 0) {
    results.textContent = `Please answer all ${unanswered} remaining question(s) before submitting.`;
    results.className = "incorrect show";
    return;
  }

  // Save score and update display
  const isNewBest = saveBestScore(score);
  updateScoreDisplay();

  results.textContent = `You got ${score} out of 6 correct!`;
  results.className = score >= 4 ? "correct show" : "incorrect show";

  // Show victory animation if all answers are correct
  if (score === 6) {
    results.classList.add("win");
    results.textContent = "Congratulations! Perfect Score! You're an Italy expert!";
    
    // Add confetti effect for perfect score
    createConfetti();
  } else if (isNewBest) {
    results.textContent += " New best score!";
  }
}

function updateScoreDisplay() {
  document.getElementById("best-score").textContent = getBestScore();
  document.getElementById("current-score").textContent = "0"; // Reset current score
}

// ----- Map Functions -----
function initializeMap() {
  const regions = document.querySelectorAll('.region');
  
  regions.forEach(region => {
    region.addEventListener('click', function() {
      // Remove active class from all regions
      regions.forEach(r => r.classList.remove('active'));
      
      // Add active class to clicked region
      this.classList.add('active');
      
      // Display region information
      const regionName = this.getAttribute('data-region');
      displayRegionInfo(regionName);
    });
  });
}

// En tu script.js, actualiza la función initializeMap:

function initializeMap() {
  // Si usas object tag, necesitas esperar a que cargue
  const mapObject = document.getElementById('italy-map');
  
  if (mapObject.contentDocument) {
    setupMapInteractivity(mapObject.contentDocument);
  } else {
    mapObject.addEventListener('load', function() {
      setupMapInteractivity(this.contentDocument);
    });
  }
}

function setupMapInteractivity(svgDoc) {
  const regions = svgDoc.querySelectorAll('.region');
  
  regions.forEach(region => {
    region.addEventListener('click', function() {
      // Remove active class from all regions
      regions.forEach(r => r.classList.remove('active'));
      
      // Add active class to clicked region
      this.classList.add('active');
      
      // Display region information
      const regionName = this.getAttribute('data-region');
      displayRegionInfo(regionName);
    });
    
    // Añadir estilos hover
    region.addEventListener('mouseenter', function() {
      this.style.fill = '#ce2b37';
    });
    
    region.addEventListener('mouseleave', function() {
      if (!this.classList.contains('active')) {
        this.style.fill = '#009246';
      }
    });
  });
}

function displayRegionInfo(regionName) {
  const regionData = mapData[regionName];
  const regionNameElement = document.getElementById('region-name');
  const regionDescription = document.getElementById('region-description');
  const regionDetails = document.getElementById('region-details');
  
  if (!regionData) {
    regionNameElement.textContent = "Region Not Found";
    regionDescription.textContent = "Information for this region is not available.";
    regionDetails.innerHTML = "";
    return;
  }
  
  regionNameElement.textContent = regionName;
  regionDescription.textContent = regionData.description;
  
  let detailsHTML = `
    <div class="region-detail-item">
      <h4>Major Cities</h4>
      <p>${regionData.cities.join(', ')}</p>
    </div>
    <div class="region-detail-item">
      <h4>Culinary Specialties</h4>
      <p>${regionData.specialties.join(', ')}</p>
    </div>
    <div class="region-detail-item">
      <h4>Notable Landmarks</h4>
      <p>${regionData.landmarks.join(', ')}</p>
    </div>
  `;
  
  regionDetails.innerHTML = detailsHTML;
}

// ----- Cultural Info Functions -----
function loadInfoZone(category = 'cuisine') {
  const infoContainer = document.getElementById("info-container");
  const infoData = culturalInfo[category] || culturalInfo.cuisine;

  infoContainer.innerHTML = "";

  infoData.forEach((info, index) => {
    const article = document.createElement("article");
    article.style.animationDelay = `${index * 0.1}s`;
    article.innerHTML = `
      <h3>${info.title}</h3>
      <p>${info.content}</p>
    `;
    infoContainer.appendChild(article);
  });
}

function initializeCategoryButtons() {
  const categoryButtons = document.querySelectorAll('.category-btn');
  
  categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Load content for selected category
      const category = this.getAttribute('data-category');
      loadInfoZone(category);
    });
  });
}

// ----- Confetti Effect -----
function createConfetti() {
  const confettiCount = 150;
  const confettiContainer = document.createElement('div');
  confettiContainer.style.position = 'fixed';
  confettiContainer.style.top = '0';
  confettiContainer.style.left = '0';
  confettiContainer.style.width = '100%';
  confettiContainer.style.height = '100%';
  confettiContainer.style.pointerEvents = 'none';
  confettiContainer.style.zIndex = '9999';
  document.body.appendChild(confettiContainer);

  const colors = ['#009246', '#ffffff', '#ce2b37', '#d4af37'];
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = '50%';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
    
    confettiContainer.appendChild(confetti);
    
    // Remove confetti after animation
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
  
  // Remove container after animation
  setTimeout(() => {
    confettiContainer.remove();
  }, 5000);
}

// Add CSS for confetti animation
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
  @keyframes fall {
    0% {
      transform: translateY(-100px) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(confettiStyle);

// ----- Initialize on Page Load -----
window.addEventListener("DOMContentLoaded", () => {
  loadQuiz();
  initializeMap();
  loadInfoZone();
  initializeCategoryButtons();
  
  // Set up event listeners
  document.getElementById("submit-btn").addEventListener("click", checkAnswers);
  document.getElementById("retry-btn").addEventListener("click", loadQuiz);
  document.getElementById("explore-btn").addEventListener("click", () => {
    document.getElementById("quiz").scrollIntoView({ behavior: 'smooth' });
  });
  
  // Add smooth scrolling for navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });
});

// Datos de las ciudades/regiones
const cityData = {
  rome: {
    title: "Rome",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "The eternal city and capital of Italy, home to ancient ruins, Renaissance art, and the Vatican City.",
    region: "Lazio",
    population: "2.8 million",
    famous: "Colosseum, Vatican, Trevi Fountain, Roman Forum"
  },
  venice: {
    title: "Venice",
    image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "The floating city built on 118 small islands, connected by bridges and canals, famous for its romantic atmosphere.",
    region: "Veneto",
    population: "260,000",
    famous: "Canals, Gondolas, St. Mark's Square, Carnival"
  },
  florence: {
    title: "Florence",
    image: "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Birthplace of the Renaissance, filled with unparalleled art and architecture from masters like Michelangelo and Da Vinci.",
    region: "Tuscany",
    population: "380,000",
    famous: "Duomo, Uffizi Gallery, David statue, Ponte Vecchio"
  },
  milan: {
    title: "Milan",
    image: "milan.jpeg",
    description: "Italy's fashion and financial capital, known for its sophisticated style and stunning Gothic cathedral.",
    region: "Lombardy",
    population: "1.4 million",
    famous: "Duomo di Milano, Fashion Week, La Scala, The Last Supper"
  },
  naples: {
    title: "Naples",
    image: "napoles.jpeg",
    description: "Vibrant city in southern Italy, birthplace of pizza and gateway to Pompeii and the Amalfi Coast.",
    region: "Campania",
    population: "970,000",
    famous: "Pizza, Mount Vesuvius, Historic center, Bay of Naples"
  },
  sicily: {
    title: "Sicily",
    image: "sicilia.jpeg",
    description: "The largest Mediterranean island, with rich Greek history, active volcanoes, and unique cuisine.",
    region: "Sicily",
    population: "5 million",
    famous: "Mount Etna, Greek temples, Cannoli, Palermo"
  },
  sardinia: {
    title: "Sardinia",
    image: "sardinia.webp",
    description: "Beautiful island known for its stunning beaches, unique culture, and ancient Nuragic civilization.",
    region: "Sardinia",
    population: "1.6 million",
    famous: "Emerald Coast, Nuraghe, Crystal clear waters, Traditional festivals"
  },
  bologna: {
    title: "Bologna",
    image: "bolonia.jpeg",
    description: "The culinary capital of Italy, famous for its medieval architecture and the oldest university in the Western world.",
    region: "Emilia-Romagna",
    population: "390,000",
    famous: "Bolognese sauce, Medieval towers, University, Porticoes"
  },
  palermo: {
    title: "Palermo",
    image: "palermo.jpeg",
    description: "Capital of Sicily, a vibrant mix of Arab-Norman architecture, street markets, and Baroque churches.",
    region: "Sicily",
    population: "670,000",
    famous: "Arab-Norman architecture, Street food, Catacombs, Ballarò Market"
  }
};

// Inicializar el mapa
function initializeMap() {
  // Configurar áreas clickeables
  const areas = document.querySelectorAll('area.clickable-area');
  const points = document.querySelectorAll('.map-point');
  const popup = document.getElementById('map-popup');
  const closeBtn = document.querySelector('.close-btn');
  
  // Función para mostrar popup
  function showPopup(cityId) {
    const city = cityData[cityId];
    if (city) {
      document.getElementById('popup-title').textContent = city.title;
      document.getElementById('popup-image').src = city.image;
      document.getElementById('popup-image').alt = city.title;
      document.getElementById('popup-description').textContent = city.description;
      document.getElementById('popup-region').textContent = city.region;
      document.getElementById('popup-population').textContent = city.population;
      document.getElementById('popup-famous').textContent = city.famous;
      
      popup.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Prevenir scroll
    }
  }
  
  // Agregar event listeners a las áreas
  areas.forEach(area => {
    area.addEventListener('click', function(e) {
      e.preventDefault();
      const cityId = this.getAttribute('data-city');
      showPopup(cityId);
    });
  });
  
  // Agregar event listeners a los puntos visuales
  points.forEach(point => {
    point.addEventListener('click', function() {
      const cityId = this.getAttribute('data-city');
      showPopup(cityId);
    });
  });
  
  // Cerrar popup
  closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  
  // Cerrar al hacer click fuera del contenido
  popup.addEventListener('click', function(e) {
    if (e.target === popup) {
      popup.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
  
  // Cerrar con tecla ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      popup.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
}

// Inicializar cuando cargue la página
window.addEventListener('DOMContentLoaded', initializeMap);