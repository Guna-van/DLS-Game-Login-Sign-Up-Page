const toggleBtn = document.getElementById('dark-mode-toggle');
const langSelect = document.getElementById('language-select');
const form = document.getElementById('auth-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.getElementById('remember-me');
const toggleLink = document.getElementById('toggle-link');
const formTitle = document.getElementById('form-title');
const emailInput = document.getElementById('email');
const otpInput = document.getElementById('otp');
const submitBtn = document.getElementById('submit-btn');
const rememberLabel = document.querySelector('.remember');

// Language translations
const translations = {
  en: {
    loginTitle: "Login to Play",
    signupTitle: "Create an Account",
    username: "Username",
    password: "Password",
    email: "Email (for Sign Up)",
    otp: "Enter OTP",
    loginBtn: "Login",
    signupBtn: "Sign Up",
    remember: "Remember Me",
    toggleToSignup: "Don't have an account? Sign Up",
    toggleToLogin: "Already have an account? Login"
  },
  hi: {
    loginTitle: "खेलने के लिए लॉगिन करें",
    signupTitle: "खाता बनाएँ",
    username: "उपयोगकर्ता नाम",
    password: "पासवर्ड",
    email: "ईमेल (साइन अप के लिए)",
    otp: "OTP दर्ज करें",
    loginBtn: "लॉगिन",
    signupBtn: "साइन अप",
    remember: "मुझे याद रखें",
    toggleToSignup: "कोई खाता नहीं है? साइन अप करें",
    toggleToLogin: "पहले से खाता है? लॉगिन करें"
  },
  es: {
    loginTitle: "Iniciar sesión para jugar",
    signupTitle: "Crear una cuenta",
    username: "Nombre de usuario",
    password: "Contraseña",
    email: "Correo electrónico (para registrarse)",
    otp: "Introduce el OTP",
    loginBtn: "Iniciar sesión",
    signupBtn: "Registrarse",
    remember: "Recuérdame",
    toggleToSignup: "¿No tienes cuenta? Regístrate",
    toggleToLogin: "¿Ya tienes cuenta? Inicia sesión"
  },
  fr: {
    loginTitle: "Se connecter pour jouer",
    signupTitle: "Créer un compte",
    username: "Nom d'utilisateur",
    password: "Mot de passe",
    email: "E-mail (pour s'inscrire)",
    otp: "Entrez l'OTP",
    loginBtn: "Connexion",
    signupBtn: "S'inscrire",
    remember: "Souviens-toi de moi",
    toggleToSignup: "Pas de compte ? S'inscrire",
    toggleToLogin: "Vous avez déjà un compte ? Connexion"
  },
    te: {
    loginTitle: "ఆడేందుకు లాగిన్ అవ్వండి",
    signupTitle: "ఖాతాను సృష్టించండి",
    username: "వినియోగదారుని పేరు",
    password: "పాస్వర్డ్",
    email: "ఇమెయిల్ (చేరడానికి)",
    otp: "OTP ను నమోదు చేయండి",
    loginBtn: "లాగిన్",
    signupBtn: "చేరండి",
    remember: "నన్ను గుర్తుంచుకో",
    toggleToSignup: "ఖాతా లేదా? చేరండి",
    toggleToLogin: "ఖాతా ఉన్నదా? లాగిన్ అవ్వండి"
  }

  // Add more languages as needed
};

let isSignup = false;
let currentLang = 'en';

// Dark Mode Toggle
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark')
    ? '☀️ Light Mode'
    : '🌙 Dark Mode';
});

// Language Change
langSelect.addEventListener('change', () => {
  currentLang = langSelect.value;
  updateLanguage(currentLang);
});

// Load remembered username
window.addEventListener('DOMContentLoaded', () => {
  const rememberedUser = localStorage.getItem('rememberedUsername');
  if (rememberedUser) {
    usernameInput.value = rememberedUser;
    rememberCheckbox.checked = true;
  }
  updateLanguage(currentLang); // Initial language
});

// Form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const email = emailInput.value.trim();
  const otp = otpInput.value.trim();

  if (!username || !password) {
    return alert(currentLang === 'hi' ? 'कृपया उपयोगकर्ता नाम और पासवर्ड भरें।' : 'Please enter username and password.');
  }

  if (rememberCheckbox.checked) {
    localStorage.setItem('rememberedUsername', username);
  } else {
    localStorage.removeItem('rememberedUsername');
  }

  if (isSignup) {
    if (!email) return alert(getText('Please enter your email', 'hi', 'कृपया ईमेल दर्ज करें।'));
    const generatedOTP = '123456'; // Simulated OTP
    if (!otp) {
      alert(`OTP sent to ${email}!\nUse "123456" to simulate.`);
      otpInput.style.display = 'block';
      return;
    }
    if (otp !== generatedOTP) return alert(getText('Invalid OTP!', 'hi', 'अमान्य OTP!'));
    alert(getText('✅ Sign up successful!', 'hi', '✅ साइन अप सफल!'));
  } else {
    alert(getText('✅ Login successful!', 'hi', '✅ लॉगिन सफल!'));
  }

  form.reset();
  otpInput.style.display = 'none';
});

// Switch Login/Signup
toggleLink.addEventListener('click', (e) => {
  e.preventDefault();
  isSignup = !isSignup;
  updateLanguage(currentLang);
  form.reset();
  otpInput.style.display = 'none';
});

// Translate function
function updateLanguage(lang) {
  const t = translations[lang] || translations.en;

  formTitle.textContent = isSignup ? t.signupTitle : t.loginTitle;
  usernameInput.placeholder = t.username;
  passwordInput.placeholder = t.password;
  emailInput.placeholder = t.email;
  otpInput.placeholder = t.otp;
  rememberLabel.innerHTML = `<input type="checkbox" id="remember-me" ${rememberCheckbox.checked ? 'checked' : ''}/> ${t.remember}`;
  submitBtn.textContent = isSignup ? t.signupBtn : t.loginBtn;
  toggleLink.textContent = isSignup ? t.toggleToLogin : t.toggleToSignup;
}

// Helper for dynamic alert text
function getText(english, hindi, fallback) {
  if (currentLang === 'hi') return hindi;
  return english;
}
