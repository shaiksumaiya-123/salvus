// SALVUS Website JavaScript - Government of Northeast India Tourism Department

// Application Data
const appData = {
  "states": [
    {
      "name": "Assam",
      "capital": "Dispur",
      "highlights": ["Kaziranga National Park", "Majuli Island", "Kamakhya Temple", "Tea Gardens"],
      "description": "Known for its tea gardens, one-horned rhinoceros, and rich Assamese culture.",
      "safety_score": 4.5,
      "best_time": "October to April",
      "languages": ["Assamese", "Bengali", "Hindi", "English"]
    },
    {
      "name": "Meghalaya", 
      "capital": "Shillong",
      "highlights": ["Living Root Bridges", "Cherrapunji", "Mawsmai Cave", "Elephant Falls"],
      "description": "The abode of clouds, famous for living root bridges and heaviest rainfall.",
      "safety_score": 4.7,
      "best_time": "October to June", 
      "languages": ["Khasi", "Garo", "English", "Hindi"]
    },
    {
      "name": "Arunachal Pradesh",
      "capital": "Itanagar", 
      "highlights": ["Tawang Monastery", "Bomdila", "Ziro Valley", "Namdapha National Park"],
      "description": "Land of rising sun with pristine mountains and Buddhist monasteries.",
      "safety_score": 4.2,
      "best_time": "March to October",
      "languages": ["Hindi", "English", "Local tribal languages"]
    },
    {
      "name": "Manipur",
      "capital": "Imphal",
      "highlights": ["Loktak Lake", "Kangla Fort", "Keibul Lamjao National Park", "INA Memorial"],
      "description": "Jewel of India with floating islands and rich martial arts culture.",
      "safety_score": 3.8,
      "best_time": "October to March",
      "languages": ["Meitei", "English", "Hindi"]
    },
    {
      "name": "Mizoram",
      "capital": "Aizawl", 
      "highlights": ["Reiek Tourist Resort", "Champhai", "Blue Mountain", "Phawngpui Peak"],
      "description": "Land of blue mountains and hospitable Mizo people.",
      "safety_score": 4.3,
      "best_time": "November to March",
      "languages": ["Mizo", "English", "Hindi"]
    },
    {
      "name": "Nagaland",
      "capital": "Kohima",
      "highlights": ["Hornbill Festival", "Dzukou Valley", "Kohima War Cemetery", "Kisama Village"],
      "description": "Land of festivals with rich Naga tribal heritage and warrior culture.",
      "safety_score": 4.0,
      "best_time": "October to May", 
      "languages": ["English", "Hindi", "Naga languages"]
    },
    {
      "name": "Tripura",
      "capital": "Agartala",
      "highlights": ["Ujjayanta Palace", "Neermahal", "Sepahijala Wildlife Sanctuary", "Unakoti"],
      "description": "Land of temples with royal heritage and archaeological wonders.",
      "safety_score": 4.1,
      "best_time": "September to March",
      "languages": ["Bengali", "Tripuri", "Hindi", "English"]
    },
    {
      "name": "Sikkim", 
      "capital": "Gangtok",
      "highlights": ["Tsomgo Lake", "Nathula Pass", "Yumthang Valley", "Pelling"],
      "description": "Himalayan paradise with Buddhist culture and mountain adventures.",
      "safety_score": 4.8,
      "best_time": "March to June, September to December",
      "languages": ["Nepali", "Lepcha", "Bhutia", "Hindi", "English"]
    }
  ],
  "hotels": [
    {
      "name": "Taj Tashi, Gangtok",
      "state": "Sikkim", 
      "category": "luxury",
      "description": "Premium hotel with mountain views and traditional Sikkimese hospitality",
      "amenities": ["Spa", "Mountain View", "Traditional Cuisine", "Conference Facilities"],
      "verified": true
    },
    {
      "name": "Kaziranga Golf Resort", 
      "state": "Assam",
      "category": "eco-resort",
      "description": "Eco-friendly resort near Kaziranga National Park with wildlife experiences",
      "amenities": ["Wildlife Safari", "Golf Course", "Organic Food", "Nature Walks"],
      "verified": true
    },
    {
      "name": "Heritage Homestay Shillong",
      "state": "Meghalaya",
      "category": "heritage", 
      "description": "Traditional Khasi heritage homestay with authentic cultural experiences",
      "amenities": ["Cultural Programs", "Local Cuisine", "Traditional Architecture", "Guided Tours"],
      "verified": true
    },
    {
      "name": "Government Guest House Itanagar",
      "state": "Arunachal Pradesh",
      "category": "budget",
      "description": "Affordable government accommodation with basic amenities and security",
      "amenities": ["24/7 Security", "Clean Rooms", "Government Approved", "Tour Assistance"],
      "verified": true
    }
  ],
  "languages": [
    {"code": "en", "name": "English", "greeting": "Welcome to Northeast India"},
    {"code": "hi", "name": "हिन्दी", "greeting": "पूर्वोत्तर भारत में आपका स्वागत है"},
    {"code": "as", "name": "অসমীয়া", "greeting": "উত্তৰ-পূব ভাৰতলৈ আপোনাক স্বাগতম"},
    {"code": "bn", "name": "বাংলা", "greeting": "উত্তর-পূর্ব ভারতে আপনাদের স্বাগতম"},
    {"code": "de", "name": "Deutsch", "greeting": "Willkommen in Nordostindien"},
    {"code": "fr", "name": "Français", "greeting": "Bienvenue dans le nord-est de l'Inde"},
    {"code": "es", "name": "Español", "greeting": "Bienvenido al noreste de India"},
    {"code": "zh", "name": "中文", "greeting": "欢迎来到东北印度"},
    {"code": "ja", "name": "日本語", "greeting": "東北インドへようこそ"},
    {"code": "ru", "name": "Русский", "greeting": "Добро пожаловать в Северо-Восточную Индию"},
    {"code": "ko", "name": "한국어", "greeting": "동북인도에 오신 것을 환영합니다"},
    {"code": "pt", "name": "Português", "greeting": "Bem-vindos ao Nordeste da Índia"}
  ],
  "heatmap_data": [
    {"city": "Shillong", "lat": 25.5788, "lng": 91.8933, "density": "high", "visitors": 95000},
    {"city": "Gangtok", "lat": 27.3389, "lng": 88.6065, "density": "high", "visitors": 87000},
    {"city": "Guwahati", "lat": 26.1445, "lng": 91.7362, "density": "high", "visitors": 120000},
    {"city": "Itanagar", "lat": 27.0844, "lng": 93.6053, "density": "medium", "visitors": 45000},
    {"city": "Imphal", "lat": 24.8170, "lng": 93.9368, "density": "medium", "visitors": 38000},
    {"city": "Aizawl", "lat": 23.7367, "lng": 92.7173, "density": "medium", "visitors": 42000},
    {"city": "Kohima", "lat": 25.6751, "lng": 94.1086, "density": "medium", "visitors": 35000},
    {"city": "Agartala", "lat": 23.8315, "lng": 91.2868, "density": "low", "visitors": 28000}
  ],
  "iot_devices": [
    {
      "name": "SALVUS Safety Band",
      "type": "Wearable", 
      "features": ["GPS Tracking", "SOS Button", "Health Monitoring", "Geofencing Alerts"],
      "battery": "7 days",
      "price": "₹2,999"
    },
    {
      "name": "Tourist Safety Tag",
      "type": "Portable",
      "features": ["Location Beacon", "Panic Button", "Emergency Contacts", "Weather Alerts"], 
      "battery": "30 days",
      "price": "₹899"
    },
    {
      "name": "Family Safety Kit",
      "type": "Group Package",
      "features": ["Multiple Devices", "Family Tracking", "Group Emergency", "Shared Alerts"],
      "battery": "Mixed",
      "price": "₹8,999"
    }
  ]
};

// Global application state
let currentPage = 'welcome';
let selectedLanguage = 'en';
let touristIdGenerated = false;
let heatmapInstance = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing SALVUS application...');
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupLanguageSelection();
    setupRegistrationForm();
    populateStatesData();
    populateHotelsData();
    populateIoTDevicesData();
    populateSafetyScores();
    setupChatbot();
    setupSOSButton();
    setupMobileNavigation();
    
    // Show welcome page by default
    showPage('welcome');
    console.log('SALVUS application initialized successfully');
}

// Navigation System
function setupNavigation() {
    console.log('Setting up navigation...');
    
    // Handle nav link clicks
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Nav link clicked:', this.getAttribute('data-page'));
            const page = this.getAttribute('data-page');
            showPage(page);
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu if open
            const navMenu = document.getElementById('navMenu');
            if (navMenu) navMenu.classList.remove('active');
        });
    });
    
    // Handle button clicks with data-page attribute (for hero buttons and other page navigation)
    document.addEventListener('click', function(e) {
        if (e.target.hasAttribute('data-page') && !e.target.classList.contains('nav-link')) {
            e.preventDefault();
            console.log('Page navigation button clicked:', e.target.getAttribute('data-page'));
            const page = e.target.getAttribute('data-page');
            showPage(page);
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            const navLink = document.querySelector(`.nav-link[data-page="${page}"]`);
            if (navLink) navLink.classList.add('active');
            
            // Close mobile menu if open
            const navMenu = document.getElementById('navMenu');
            if (navMenu) navMenu.classList.remove('active');
        }
    });
    
    console.log('Navigation setup complete');
}

function showPage(pageId) {
    console.log('Showing page:', pageId);
    
    // Hide all pages
    const pageContents = document.querySelectorAll('.page-content');
    pageContents.forEach(page => {
        page.classList.add('hidden');
    });
    
    // Show target page
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
        targetPage.classList.remove('hidden');
        currentPage = pageId;
        
        // Initialize page-specific functionality
        if (pageId === 'heatmaps') {
            setTimeout(initializeHeatmap, 200);
        }
        
        console.log('Page shown successfully:', pageId);
    } else {
        console.error('Target page not found:', pageId + '-page');
    }
}

function setupMobileNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

// Language Selection System
function setupLanguageSelection() {
    console.log('Setting up language selection...');
    const languageGrid = document.getElementById('languageGrid');
    
    if (!languageGrid) return;
    
    appData.languages.forEach(lang => {
        const langOption = document.createElement('div');
        langOption.className = 'language-option';
        langOption.setAttribute('data-lang', lang.code);
        langOption.innerHTML = `
            <strong>${lang.name}</strong>
            <div style="font-size: 12px; margin-top: 4px;">${lang.greeting}</div>
        `;
        
        langOption.addEventListener('click', function() {
            console.log('Language selected:', lang.code);
            
            // Remove previous selection
            document.querySelectorAll('.language-option').forEach(opt => 
                opt.classList.remove('selected'));
            
            // Add selection to clicked option
            this.classList.add('selected');
            selectedLanguage = lang.code;
            
            // Update page content based on language
            updateLanguageContent(lang);
        });
        
        languageGrid.appendChild(langOption);
    });
    
    // Setup chatbot language options
    setupChatLanguages();
    console.log('Language selection setup complete');
}

function updateLanguageContent(lang) {
    // Update greeting text
    const namasteText = document.querySelector('.namaste-text');
    if (namasteText) {
        namasteText.textContent = `🙏 ${lang.greeting} 🙏`;
    }
    
    // Show success message
    showNotification(`Language updated to ${lang.name}`, 'success');
}

function setupChatLanguages() {
    const chatLanguages = document.getElementById('chatLanguages');
    if (!chatLanguages) return;
    
    appData.languages.forEach(lang => {
        const langBtn = document.createElement('button');
        langBtn.className = 'language-option-small';
        langBtn.setAttribute('data-lang', lang.code);
        langBtn.textContent = lang.name;
        
        if (lang.code === selectedLanguage) {
            langBtn.classList.add('active');
        }
        
        langBtn.addEventListener('click', function() {
            document.querySelectorAll('.language-option-small').forEach(btn => 
                btn.classList.remove('active'));
            this.classList.add('active');
            selectedLanguage = lang.code;
            
            addChatMessage('bot', `Language switched to ${lang.name}. How can I help you?`);
        });
        
        chatLanguages.appendChild(langBtn);
    });
}

// Registration Form System
function setupRegistrationForm() {
    const registrationForm = document.getElementById('registrationForm');
    if (!registrationForm) return;
    
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Registration form submitted');
        
        if (validateRegistrationForm()) {
            generateTouristId();
        }
    });
    
    console.log('Registration form setup complete');
}

function validateRegistrationForm() {
    const requiredFields = [
        'fullName', 'email', 'phone', 'idType', 'idNumber', 
        'startDate', 'endDate', 'emergencyName', 'emergencyPhone'
    ];
    
    let isValid = true;
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field || !field.value.trim()) {
            if (field) field.style.borderColor = '#FF4444';
            isValid = false;
        } else {
            field.style.borderColor = '';
        }
    });
    
    // Validate date range
    const startDateField = document.getElementById('startDate');
    const endDateField = document.getElementById('endDate');
    
    if (startDateField && endDateField) {
        const startDate = new Date(startDateField.value);
        const endDate = new Date(endDateField.value);
        
        if (startDate >= endDate) {
            showNotification('End date must be after start date', 'error');
            return false;
        }
    }
    
    if (!isValid) {
        showNotification('Please fill in all required fields', 'error');
    }
    
    return isValid;
}

function generateTouristId() {
    const fullName = document.getElementById('fullName').value;
    const idNumber = document.getElementById('idNumber').value;
    const endDate = document.getElementById('endDate').value;
    
    // Generate unique tourist ID
    const touristId = 'SALVUS-' + Date.now().toString().slice(-6) + '-' + 
                     Math.random().toString(36).substr(2, 4).toUpperCase();
    
    // Update preview
    const previewName = document.getElementById('previewName');
    const previewId = document.getElementById('previewId');
    const previewValidity = document.getElementById('previewValidity');
    
    if (previewName) previewName.textContent = fullName;
    if (previewId) previewId.textContent = touristId;
    if (previewValidity) previewValidity.textContent = new Date(endDate).toLocaleDateString();
    
    // Generate QR Code
    const qrCodeElement = document.getElementById('qrcode');
    if (qrCodeElement && typeof QRious !== 'undefined') {
        const qrData = JSON.stringify({
            id: touristId,
            name: fullName,
            validity: endDate,
            emergency: document.getElementById('emergencyPhone').value,
            issued: new Date().toISOString()
        });
        
        // Clear previous QR code
        qrCodeElement.innerHTML = '';
        
        // Create canvas for QR code
        const canvas = document.createElement('canvas');
        qrCodeElement.appendChild(canvas);
        
        const qrcode = new QRious({
            element: canvas,
            size: 150,
            value: qrData
        });
        
        touristIdGenerated = true;
        showNotification('Digital Tourist ID generated successfully!', 'success');
        console.log('Tourist ID generated:', touristId);
    } else {
        console.error('QR code library not available or element not found');
        showNotification('QR code generation failed - library not loaded', 'error');
    }
}

// States Data Population
function populateStatesData() {
    const statesGrid = document.getElementById('statesGrid');
    if (!statesGrid) return;
    
    appData.states.forEach(state => {
        const stateCard = createStateCard(state);
        statesGrid.appendChild(stateCard);
    });
    
    console.log('States data populated');
}

function createStateCard(state) {
    const card = document.createElement('div');
    card.className = 'state-card';
    
    const stars = generateStars(state.safety_score);
    const highlights = state.highlights.map(h => 
        `<span class="highlight-tag">${h}</span>`).join('');
    
    card.innerHTML = `
        <div class="state-header">
            <h2>${state.name}</h2>
            <p class="state-capital">Capital: ${state.capital}</p>
        </div>
        <div class="state-body">
            <p class="state-description">${state.description}</p>
            
            <div class="state-highlights">
                <h4>🎯 Key Attractions</h4>
                <div class="highlights-list">
                    ${highlights}
                </div>
            </div>
            
            <div class="state-info">
                <div class="state-info-item">
                    <span class="state-info-label">Best Time to Visit</span>
                    <span class="state-info-value">${state.best_time}</span>
                </div>
                <div class="state-info-item">
                    <span class="state-info-label">Safety Score</span>
                    <div class="safety-score">
                        <span class="safety-stars">${stars}</span>
                        <span>${state.safety_score}/5</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

function generateStars(score) {
    const fullStars = Math.floor(score);
    const hasHalfStar = score % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '⭐';
    }
    if (hasHalfStar) {
        stars += '⭐';
    }
    
    return stars;
}

// Heatmap Implementation
function initializeHeatmap() {
    console.log('Initializing heatmap...');
    
    const mapElement = document.getElementById('heatmap');
    if (!mapElement) {
        console.error('Heatmap element not found');
        return;
    }
    
    // Remove existing map instance
    if (heatmapInstance) {
        heatmapInstance.remove();
        heatmapInstance = null;
    }
    
    try {
        // Initialize map centered on Northeast India
        heatmapInstance = L.map('heatmap').setView([25.5788, 91.8933], 7);
        
        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(heatmapInstance);
        
        // Add markers for each city
        appData.heatmap_data.forEach(location => {
            const color = getMarkerColor(location.density);
            const popupContent = `
                <div style="text-align: center;">
                    <h3>${location.city}</h3>
                    <p><strong>Visitors:</strong> ${location.visitors.toLocaleString()}</p>
                    <p><strong>Density:</strong> ${location.density.toUpperCase()}</p>
                </div>
            `;
            
            const marker = L.circleMarker([location.lat, location.lng], {
                radius: getMarkerSize(location.visitors),
                fillColor: color,
                color: '#fff',
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8
            }).addTo(heatmapInstance);
            
            marker.bindPopup(popupContent);
        });
        
        console.log('Heatmap initialized successfully');
    } catch (error) {
        console.error('Error initializing heatmap:', error);
        showNotification('Failed to load interactive map', 'error');
    }
}

function getMarkerColor(density) {
    switch (density) {
        case 'high': return '#FF4444';
        case 'medium': return '#FFA500';
        case 'low': return '#32CD32';
        default: return '#999';
    }
}

function getMarkerSize(visitors) {
    if (visitors > 80000) return 20;
    if (visitors > 30000) return 15;
    return 10;
}

// Hotels Data Population
function populateHotelsData() {
    const hotelsGrid = document.getElementById('hotelsGrid');
    const categoryFilters = document.querySelectorAll('.category-filter');
    
    if (!hotelsGrid) return;
    
    // Setup category filters
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            categoryFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            filterHotels(category);
        });
    });
    
    // Initial render
    renderHotels(appData.hotels);
    console.log('Hotels data populated');
}

function renderHotels(hotels) {
    const hotelsGrid = document.getElementById('hotelsGrid');
    if (!hotelsGrid) return;
    
    hotelsGrid.innerHTML = '';
    
    hotels.forEach(hotel => {
        const hotelCard = createHotelCard(hotel);
        hotelsGrid.appendChild(hotelCard);
    });
}

function createHotelCard(hotel) {
    const card = document.createElement('div');
    card.className = 'hotel-card';
    card.setAttribute('data-category', hotel.category);
    
    const amenities = hotel.amenities.map(amenity => 
        `<span class="amenity-tag">${amenity}</span>`).join('');
    
    card.innerHTML = `
        <div class="hotel-header">
            <div class="hotel-category-badge ${hotel.category}">${hotel.category.replace('-', ' ').toUpperCase()}</div>
            <h3 class="hotel-name">${hotel.name}</h3>
            <p class="hotel-location">📍 ${hotel.state}</p>
            <p class="hotel-description">${hotel.description}</p>
            
            <div class="hotel-amenities">
                ${amenities}
            </div>
            
            ${hotel.verified ? '<div class="verified-badge">✅ Government Verified</div>' : ''}
        </div>
    `;
    
    return card;
}

function filterHotels(category) {
    if (category === 'all') {
        renderHotels(appData.hotels);
    } else {
        const filtered = appData.hotels.filter(hotel => hotel.category === category);
        renderHotels(filtered);
    }
}

// Safety Scores Population
function populateSafetyScores() {
    const safetyScores = document.getElementById('safetyScores');
    if (!safetyScores) return;
    
    appData.states.forEach(state => {
        const scoreCard = document.createElement('div');
        scoreCard.className = 'safety-score-card';
        
        const stars = generateStars(state.safety_score);
        const scoreColor = getSafetyScoreColor(state.safety_score);
        
        scoreCard.innerHTML = `
            <h3>${state.name}</h3>
            <div class="score-display">
                <div class="score-number" style="color: ${scoreColor};">
                    ${state.safety_score}/5.0
                </div>
                <div class="score-stars">${stars}</div>
            </div>
            <div class="score-details">
                <p style="font-size: 12px; color: var(--color-text-secondary);">
                    Based on crime rates, emergency response, and tourist feedback
                </p>
            </div>
        `;
        
        safetyScores.appendChild(scoreCard);
    });
    
    console.log('Safety scores populated');
}

function getSafetyScoreColor(score) {
    if (score >= 4.5) return '#32CD32';
    if (score >= 4.0) return '#FFA500';
    if (score >= 3.5) return '#FF8C00';
    return '#FF4444';
}

// IoT Devices Population
function populateIoTDevicesData() {
    const devicesGrid = document.getElementById('iotDevicesGrid');
    if (!devicesGrid) return;
    
    appData.iot_devices.forEach(device => {
        const deviceCard = createDeviceCard(device);
        devicesGrid.appendChild(deviceCard);
    });
    
    console.log('IoT devices data populated');
}

function createDeviceCard(device) {
    const card = document.createElement('div');
    card.className = 'device-card';
    
    const features = device.features.map(feature => 
        `<div class="feature-item">${feature}</div>`).join('');
    
    card.innerHTML = `
        <div class="device-header">
            <h3>${device.name}</h3>
            <p class="device-type">${device.type}</p>
        </div>
        <div class="device-body">
            <div class="device-features">
                <h4>Key Features</h4>
                <div class="feature-list">
                    ${features}
                </div>
            </div>
            
            <div class="device-specs">
                <div class="device-spec">
                    <div class="spec-label">Battery Life</div>
                    <div class="spec-value">${device.battery}</div>
                </div>
                <div class="device-spec">
                    <div class="spec-label">Device Type</div>
                    <div class="spec-value">${device.type}</div>
                </div>
            </div>
            
            <div class="device-price">${device.price}</div>
        </div>
    `;
    
    return card;
}

// Chatbot System
function setupChatbot() {
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendButton');
    const quickButtons = document.querySelectorAll('.quick-btn');
    
    if (!chatInput || !sendButton) return;
    
    // Handle send button
    sendButton.addEventListener('click', sendChatMessage);
    
    // Handle enter key
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });
    
    // Handle quick action buttons
    quickButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const query = this.getAttribute('data-query');
            addChatMessage('user', query);
            setTimeout(() => {
                handleChatQuery(query);
            }, 500);
        });
    });
    
    console.log('Chatbot setup complete');
}

function sendChatMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (!message) return;
    
    addChatMessage('user', message);
    chatInput.value = '';
    
    // Simulate response delay
    setTimeout(() => {
        handleChatQuery(message);
    }, 1000);
}

function addChatMessage(sender, message) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const avatar = sender === 'bot' ? '🤖' : '👤';
    const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    messageDiv.innerHTML = `
        <div class="message-avatar">${avatar}</div>
        <div class="message-content">
            <p>${message}</p>
            <span class="message-time">${time}</span>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleChatQuery(query) {
    let response = '';
    const lowerQuery = query.toLowerCase();
    
    // Simple query matching
    if (lowerQuery.includes('kaziranga')) {
        response = 'Kaziranga National Park in Assam is famous for the one-horned rhinoceros. Best time to visit is October to April. The park offers elephant and jeep safaris, and you can stay at nearby eco-resorts.';
    } else if (lowerQuery.includes('shillong') && lowerQuery.includes('hotel')) {
        response = 'In Shillong, I recommend the Heritage Homestay Shillong for an authentic Khasi cultural experience. It offers traditional architecture, local cuisine, and cultural programs.';
    } else if (lowerQuery.includes('safety') || lowerQuery.includes('arunachal')) {
        response = 'For Arunachal Pradesh safety: Always carry valid permits, inform authorities about your travel plans, travel in groups during treks, and keep emergency contacts handy. The tourist police helpline is 1363.';
    } else if (lowerQuery.includes('gangtok')) {
        response = 'To reach Gangtok: Nearest airport is Bagdogra (124km). You can take a taxi or shared cab from Siliguri. Train connections available via New Jalpaiguri station. Road journey offers beautiful mountain views.';
    } else if (lowerQuery.includes('states') || lowerQuery.includes('northeast')) {
        response = 'Northeast India has 8 beautiful states: Assam, Meghalaya, Arunachal Pradesh, Manipur, Mizoram, Nagaland, Tripura, and Sikkim. Each offers unique culture, cuisine, and landscapes.';
    } else if (lowerQuery.includes('emergency') || lowerQuery.includes('sos')) {
        response = 'Emergency contacts: Police (100), Medical (108), Fire (101), Tourist Police (1363), Tourism Helpline (1800-11-1363). Use the red SOS button for immediate emergency assistance.';
    } else if (lowerQuery.includes('weather') || lowerQuery.includes('time')) {
        response = 'Best time to visit Northeast India is October to March for most states. Avoid monsoons (June-September) due to heavy rainfall. Pack warm clothes for hill stations and high altitudes.';
    } else {
        response = `Thank you for your question about "${query}". I can help you with information about destinations, hotels, safety tips, weather, and travel planning in Northeast India. Try asking about specific states, attractions, or services!`;
    }
    
    addChatMessage('bot', response);
}

// SOS Button System
function setupSOSButton() {
    console.log('Setting up SOS button...');
    
    const sosButton = document.getElementById('sosButton');
    const sosModal = document.getElementById('sosModal');
    const cancelSOS = document.getElementById('cancelSOS');
    const callEmergency = document.getElementById('callEmergency');
    
    if (!sosButton || !sosModal) {
        console.error('SOS elements not found');
        return;
    }
    
    // SOS button click handler
    sosButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('SOS button clicked');
        activateSOS();
    });
    
    // Setup modal handlers
    if (cancelSOS) {
        cancelSOS.addEventListener('click', function() {
            closeSOS();
        });
    }
    
    if (callEmergency) {
        callEmergency.addEventListener('click', function() {
            callEmergencyServices();
        });
    }
    
    // Close modal when clicking overlay
    sosModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeSOS();
        }
    });
    
    console.log('SOS button setup complete');
}

function activateSOS() {
    console.log('Activating SOS...');
    
    const sosModal = document.getElementById('sosModal');
    if (!sosModal) return;
    
    // Show SOS modal
    sosModal.classList.remove('hidden');
    
    // Update emergency time
    const emergencyTime = document.getElementById('emergencyTime');
    if (emergencyTime) {
        emergencyTime.textContent = new Date().toLocaleString();
    }
    
    // Simulate location detection
    const emergencyLocation = document.getElementById('emergencyLocation');
    if (emergencyLocation) {
        emergencyLocation.textContent = 'Detecting location...';
        
        setTimeout(() => {
            emergencyLocation.textContent = 'Shillong, Meghalaya (25.5788°N, 91.8933°E)';
        }, 2000);
    }
    
    // Show notification
    showNotification('🚨 Emergency SOS Activated! Authorities have been notified.', 'error');
}

function closeSOS() {
    console.log('Closing SOS modal');
    const sosModal = document.getElementById('sosModal');
    if (sosModal) {
        sosModal.classList.add('hidden');
    }
    showNotification('Emergency alert cancelled', 'info');
}

function callEmergencyServices() {
    console.log('Calling emergency services');
    // Simulate emergency call
    showNotification('📞 Connecting to emergency services...', 'warning');
    setTimeout(() => {
        showNotification('Connected to Tourist Police (1363)', 'success');
    }, 2000);
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-base);
        box-shadow: var(--shadow-lg);
        padding: 16px 20px;
        z-index: 1500;
        max-width: 400px;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Color based on type
    if (type === 'success') {
        notification.style.borderLeftColor = '#32CD32';
        notification.style.borderLeftWidth = '4px';
    } else if (type === 'error') {
        notification.style.borderLeftColor = '#FF4444';
        notification.style.borderLeftWidth = '4px';
    } else if (type === 'warning') {
        notification.style.borderLeftColor = '#FFA500';
        notification.style.borderLeftWidth = '4px';
    }
    
    document.body.appendChild(notification);
    
    // Handle close button
    const closeBtn = notification.querySelector('.notification-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => notification.remove());
    }
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Add animation styles
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
    }
    
    .notification-close {
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: var(--color-text-secondary);
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .notification-close:hover {
        color: var(--color-text);
    }
`;
document.head.appendChild(notificationStyles);