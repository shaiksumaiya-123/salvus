// Global Variables
let currentScreen = 'loading';
let selectedLanguage = 'en';
let registeredUser = null;
let touristId = null;

// Language Translations
const translations = {
    en: {
        welcome: "Welcome to Northeast India",
        slogan: "Safe Journeys, Beautiful Memories"
    },
    hi: {
        welcome: "पूर्वोत्तर भारत में आपका स्वागत है",
        slogan: "सुरक्षित यात्रा, सुंदर यादें"
    },
    de: {
        welcome: "Willkommen in Nordost-Indien",
        slogan: "Sichere Reisen, Schöne Erinnerungen"
    }
    // Add more translations as needed
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    setDefaultDates();
});

function initializeApp() {
    // Show loading screen for 3 seconds
    setTimeout(() => {
        hideLoadingScreen();
        setTimeout(() => {
            showWelcomeScreen();
        }, 500);
    }, 3000);
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
    }
}

function showWelcomeScreen() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    if (welcomeScreen) {
        welcomeScreen.classList.add('active');
        currentScreen = 'welcome';
    }
}

function showLanguageSelection() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const languageScreen = document.getElementById('languageScreen');
    
    if (welcomeScreen) welcomeScreen.classList.remove('active');
    
    setTimeout(() => {
        if (languageScreen) {
            languageScreen.classList.add('active');
            currentScreen = 'language';
        }
    }, 300);
}

function selectLanguage(lang) {
    selectedLanguage = lang;
    
    // Remove previous selections
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selection to clicked option
    event.target.closest('.language-option').classList.add('selected');
    
    // Show continue button
    const continueBtn = document.getElementById('continueBtn');
    if (continueBtn) {
        continueBtn.style.display = 'inline-flex';
    }
    
    // Apply language translations
    applyLanguageTranslations(lang);
}

function applyLanguageTranslations(lang) {
    // Apply translations based on selected language
    if (translations[lang]) {
        // Update any translatable elements
        console.log(`Language set to: ${lang}`);
    }
}

function showRegistration() {
    const languageScreen = document.getElementById('languageScreen');
    const registrationScreen = document.getElementById('registrationScreen');
    
    if (languageScreen) languageScreen.classList.remove('active');
    
    setTimeout(() => {
        if (registrationScreen) {
            registrationScreen.classList.add('active');
            currentScreen = 'registration';
        }
    }, 300);
}

function setupEventListeners() {
    // Registration form submission
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleRegistration);
    }
    
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active state
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Navigate to page
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                window.location.href = href;
            }
        });
    });
    
    // Modal close handlers
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
        }
    });
}

function setDefaultDates() {
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    
    const travelStart = document.getElementById('travelStart');
    const travelEnd = document.getElementById('travelEnd');
    
    if (travelStart) {
        travelStart.value = today.toISOString().split('T')[0];
    }
    
    if (travelEnd) {
        travelEnd.value = nextWeek.toISOString().split('T')[0];
    }
}

function handleRegistration(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        fullName: document.getElementById('fullName')?.value,
        email: document.getElementById('email')?.value,
        phone: document.getElementById('phone')?.value,
        nationality: document.getElementById('nationality')?.value,
        docType: document.getElementById('docType')?.value,
        docNumber: document.getElementById('docNumber')?.value,
        travelStart: document.getElementById('travelStart')?.value,
        travelEnd: document.getElementById('travelEnd')?.value,
        emergencyContact: document.getElementById('emergencyContact')?.value,
        selectedStates: getSelectedStates()
    };
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone || !formData.nationality) {
        showAlert('⚠️ Please fill in all required fields', 'warning');
        return;
    }
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating Tourist ID...';
        submitBtn.disabled = true;
        
        // Simulate registration process
        setTimeout(() => {
            generateTouristID(formData);
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 3000);
    }
}

function getSelectedStates() {
    const checkboxes = document.querySelectorAll('.states-checkbox input[type="checkbox"]:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

function generateTouristID(userData) {
    // Generate unique tourist ID
    const timestamp = Date.now();
    const randomSuffix = Math.random().toString(36).substr(2, 6).toUpperCase();
    touristId = `SLVS-${timestamp.toString(36).toUpperCase()}-${randomSuffix}`;
    
    // Store user data
    registeredUser = {
        ...userData,
        touristId: touristId,
        registrationDate: new Date().toISOString(),
        selectedLanguage: selectedLanguage,
        qrCodeData: generateQRCodeData(userData, touristId)
    };
    
    // Generate QR Code
    generateQRCode();
    
    // Show success message
    showRegistrationSuccess();
    
    // Transition to main website after delay
    setTimeout(() => {
        showMainWebsite();
    }, 4000);
}

function generateQRCodeData(userData, touristId) {
    return {
        touristId: touristId,
        name: userData.fullName,
        nationality: userData.nationality,
        document: `${userData.docType}: ${userData.docNumber}`,
        travelPeriod: `${userData.travelStart} to ${userData.travelEnd}`,
        emergencyContact: userData.emergencyContact,
        registrationDate: new Date().toISOString(),
        blockchainHash: `0x${Math.random().toString(16).substr(2, 16)}`,
        verificationUrl: `https://salvus.gov.in/verify/${touristId}`
    };
}

function generateQRCode() {
    if (registeredUser && typeof QRCode !== 'undefined') {
        const qrContainer = document.createElement('div');
        qrContainer.style.position = 'fixed';
        qrContainer.style.top = '50%';
        qrContainer.style.left = '50%';
        qrContainer.style.transform = 'translate(-50%, -50%)';
        qrContainer.style.background = 'white';
        qrContainer.style.padding = '2rem';
        qrContainer.style.borderRadius = '15px';
        qrContainer.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)';
        qrContainer.style.zIndex = '10001';
        qrContainer.style.textAlign = 'center';
        qrContainer.style.display = 'none';
        qrContainer.id = 'qrModal';
        
        qrContainer.innerHTML = `
            <h3 style="margin-bottom: 1rem; color: #1a237e;">Your Digital Tourist ID</h3>
            <div id="qrcode" style="margin: 1rem 0;"></div>
            <p style="color: #666; margin: 1rem 0;"><strong>Tourist ID:</strong> ${touristId}</p>
            <p style="color: #666; font-size: 0.9rem;">Save this QR code for quick verification</p>
        `;
        
        document.body.appendChild(qrContainer);
        
        // Generate QR code
        new QRCode(document.getElementById('qrcode'), {
            text: JSON.stringify(registeredUser.qrCodeData),
            width: 200,
            height: 200,
            colorDark: "#1a237e",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.M
        });
    }
}

function showRegistrationSuccess() {
    showAlert(`
        🎉 Registration Successful!<br><br>
        <strong>Tourist ID:</strong> ${touristId}<br>
        <strong>Blockchain Hash:</strong> ${registeredUser.qrCodeData.blockchainHash}<br><br>
        ✅ Digital identity secured on blockchain<br>
        ✅ QR code generated for verification<br>
        ✅ Emergency contacts notified<br>
        ✅ All travel permissions processed<br><br>
        <strong>Welcome to Northeast India! 🏔️</strong>
    `, 'success');
    
    // Show QR code modal
    setTimeout(() => {
        const qrModal = document.getElementById('qrModal');
        if (qrModal) {
            qrModal.style.display = 'block';
            
            // Auto-hide after 3 seconds
            setTimeout(() => {
                qrModal.style.display = 'none';
            }, 3000);
        }
    }, 2000);
}

function showMainWebsite() {
    // Hide registration screen
    const registrationScreen = document.getElementById('registrationScreen');
    if (registrationScreen) {
        registrationScreen.classList.remove('active');
    }
    
    // Show main website
    setTimeout(() => {
        const mainWebsite = document.getElementById('mainWebsite');
        if (mainWebsite) {
            mainWebsite.style.display = 'block';
            currentScreen = 'main';
            
            // Update user info in header
            updateUserInterface();
            
            // Initialize any page-specific functionality
            initializeMainWebsite();
        }
    }, 500);
}

function updateUserInterface() {
    if (registeredUser) {
        const userBadge = document.getElementById('userBadge');
        if (userBadge) {
            userBadge.innerHTML = `
                <i class="fas fa-user-circle"></i>
                <span>Welcome, ${registeredUser.fullName.split(' ')[0]}</span>
            `;
        }
        
        // Update any other user-specific elements
        console.log('User interface updated for:', registeredUser.fullName);
    }
}

function initializeMainWebsite() {
    // Initialize any page-specific functionality
    initializeCounters();
    
    // Start real-time updates
    setInterval(updateDashboardMetrics, 30000);
}

function initializeCounters() {
    // Animate counter numbers
    const counters = document.querySelectorAll('.metric');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        if (target) {
            animateCounter(counter, 0, target, 2000);
        }
    });
}

function animateCounter(element, start, end, duration) {
    const increment = (end - start) / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        
        // Format the number appropriately
        if (element.textContent.includes('%')) {
            element.textContent = Math.round(current) + '%';
        } else {
            element.textContent = Math.round(current).toLocaleString();
        }
    }, 16);
}

function updateDashboardMetrics() {
    // Simulate real-time updates to dashboard metrics
    const metrics = document.querySelectorAll('.metric');
    metrics.forEach(metric => {
        if (metric.textContent.includes('%')) {
            // Safety scores can fluctuate slightly
            const current = parseInt(metric.textContent);
            const change = Math.floor((Math.random() - 0.5) * 4);
            const newValue = Math.max(85, Math.min(99, current + change));
            metric.textContent = newValue + '%';
        } else if (!isNaN(parseInt(metric.textContent.replace(/,/g, '')))) {
            // Tourist numbers can change
            const current = parseInt(metric.textContent.replace(/,/g, ''));
            const change = Math.floor((Math.random() - 0.5) * 100);
            const newValue = Math.max(0, current + change);
            metric.textContent = newValue.toLocaleString();
        }
    });
}

// SOS Functionality
function activateSOS() {
    const modal = document.getElementById('sosModal');
    if (modal) {
        modal.classList.add('active');
        
        // Simulate emergency dispatch
        setTimeout(() => {
            console.log('Emergency services have been notified');
            
            // Update modal content to show dispatch confirmation
            updateSOSModal();
        }, 2000);
    } else {
        // Fallback if modal doesn't exist
        showAlert(`
            🆘 <strong>EMERGENCY SOS ACTIVATED</strong><br><br>
            📍 Your location has been shared<br>
            🚔 Police have been dispatched<br>
            🏥 Medical services alerted<br>
            📞 Emergency contacts notified<br><br>
            <strong>Estimated response time: 8-12 minutes</strong><br>
            Stay calm and remain in your current location.
        `, 'emergency');
    }
}

function updateSOSModal() {
    // Add dispatch confirmation to the modal
    const modalBody = document.querySelector('#sosModal .modal-body');
    if (modalBody) {
        const confirmationDiv = document.createElement('div');
        confirmationDiv.className = 'dispatch-confirmation';
        confirmationDiv.innerHTML = `
            <div style="background: #e8f5e8; padding: 1rem; border-radius: 10px; margin: 1rem 0; text-align: center;">
                <strong style="color: #4CAF50;">✅ DISPATCH CONFIRMED</strong><br>
                <span style="color: #2e7d32;">Emergency response team en route</span>
            </div>
        `;
        modalBody.appendChild(confirmationDiv);
    }
}

function closeSOS() {
    const modal = document.getElementById('sosModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Utility Functions
function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.style.position = 'fixed';
    alertDiv.style.top = '20px';
    alertDiv.style.right = '20px';
    alertDiv.style.maxWidth = '400px';
    alertDiv.style.zIndex = '10002';
    alertDiv.style.padding = '1rem 1.5rem';
    alertDiv.style.borderRadius = '10px';
    alertDiv.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
    alertDiv.style.backdropFilter = 'blur(10px)';
    
    // Set colors based on type
    switch (type) {
        case 'success':
            alertDiv.style.background = 'rgba(76, 175, 80, 0.9)';
            alertDiv.style.color = 'white';
            break;
        case 'warning':
            alertDiv.style.background = 'rgba(255, 152, 0, 0.9)';
            alertDiv.style.color = 'white';
            break;
        case 'emergency':
            alertDiv.style.background = 'rgba(255, 23, 68, 0.9)';
            alertDiv.style.color = 'white';
            break;
        default:
            alertDiv.style.background = 'rgba(33, 150, 243, 0.9)';
            alertDiv.style.color = 'white';
    }
    
    alertDiv.innerHTML = message;
    document.body.appendChild(alertDiv);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
    
    // Add click to close
    alertDiv.addEventListener('click', () => {
        alertDiv.remove();
    });
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^\+?[\d\s-()]{10,}$/;
    return re.test(phone);
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeApp,
        selectLanguage,
        showRegistration,
        handleRegistration,
        activateSOS,
        closeSOS
    };
}

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Page is hidden, pause animations
        console.log('Page hidden - pausing animations');
    } else {
        // Page is visible, resume animations
        console.log('Page visible - resuming animations');
        if (currentScreen === 'main') {
            updateDashboardMetrics();
        }
    }
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', function() {
    // Adjust layouts for mobile/desktop
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
        // Mobile-specific adjustments
        document.body.classList.add('mobile-view');
    } else {
        // Desktop-specific adjustments
        document.body.classList.remove('mobile-view');
    }
});

// Initialize resize handler
window.addEventListener('load', function() {
    window.dispatchEvent(new Event('resize'));
});
