const toggleLink = document.getElementById("toggle-link");
const formTitle = document.getElementById("form-title");
const submitBtn = document.getElementById("submit-btn");
const gmailInput = document.getElementById("gmail");
const confirmPasswordInput = document.getElementById("confirm-password");

let isLogin = true;

toggleLink.addEventListener("click", (e) => {
  e.preventDefault();
  isLogin = !isLogin;

  if (isLogin) {
    formTitle.textContent = "Login to Play";
    submitBtn.textContent = "Login";
    toggleLink.textContent = "Sign Up";
    gmailInput.style.display = "none";
    confirmPasswordInput.style.display = "none";
  } else {
    formTitle.textContent = "Create an Account";
    submitBtn.textContent = "Sign Up";
    toggleLink.textContent = "Login";
    gmailInput.style.display = "block";
    confirmPasswordInput.style.display = "block";
  }
});

// Dark mode toggle
const darkModeBtn = document.getElementById("dark-mode-toggle");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
// Language translations
const translations = {
  en: {
    loginTitle: "Login to Play",
    signUpTitle: "Create an Account",
    loginBtn: "Login",
    signUpBtn: "Sign Up",
    remember: "Remember Me",
    toggleTextLogin: "Don't have an account? ",
    toggleLinkLogin: "Sign Up",
    toggleTextSignup: "Already have an account? ",
    toggleLinkSignup: "Login",
    username: "Username",
    gmail: "Gmail",
    password: "Password",
    confirmPassword: "Confirm Password"
  },
  hi: {
    loginTitle: "खेलने के लिए लॉगिन करें",
    signUpTitle: "खाता बनाएँ",
    loginBtn: "लॉगिन",
    signUpBtn: "साइन अप",
    remember: "मुझे याद रखें",
    toggleTextLogin: "खाता नहीं है? ",
    toggleLinkLogin: "साइन अप करें",
    toggleTextSignup: "पहले से खाता है? ",
    toggleLinkSignup: "लॉगिन करें",
    username: "उपयोगकर्ता नाम",
    gmail: "जीमेल",
    password: "पासवर्ड",
    confirmPassword: "पासवर्ड की पुष्टि करें"
  },
  es: {
    loginTitle: "Inicia sesión para jugar",
    signUpTitle: "Crea una cuenta",
    loginBtn: "Iniciar sesión",
    signUpBtn: "Registrarse",
    remember: "Recuérdame",
    toggleTextLogin: "¿No tienes una cuenta? ",
    toggleLinkLogin: "Regístrate",
    toggleTextSignup: "¿Ya tienes una cuenta? ",
    toggleLinkSignup: "Iniciar sesión",
    username: "Nombre de usuario",
    gmail: "Correo electrónico",
    password: "Contraseña",
    confirmPassword: "Confirmar contraseña"
  },
  fr: {
    loginTitle: "Connexion pour jouer",
    signUpTitle: "Créer un compte",
    loginBtn: "Connexion",
    signUpBtn: "S'inscrire",
    remember: "Se souvenir de moi",
    toggleTextLogin: "Pas de compte ? ",
    toggleLinkLogin: "Inscrivez-vous",
    toggleTextSignup: "Vous avez déjà un compte ? ",
    toggleLinkSignup: "Connexion",
    username: "Nom d'utilisateur",
    gmail: "Email",
    password: "Mot de passe",
    confirmPassword: "Confirmer le mot de passe"
  },
  te: {
    loginTitle: "ఆడేందుకు లాగిన్ అవ్వండి",
    signUpTitle: "ఖాతా సృష్టించండి",
    loginBtn: "లాగిన్",
    signUpBtn: "సైన్ అప్",
    remember: "నన్ను గుర్తుంచుకో",
    toggleTextLogin: "ఖాతా లేనవారా? ",
    toggleLinkLogin: "సైన్ అప్ చేయండి",
    toggleTextSignup: "ఖాతా ఉన్నదా? ",
    toggleLinkSignup: "లాగిన్ చేయండి",
    username: "వినియోగదారు పేరు",
    gmail: "జిమెయిల్",
    password: "పాస్వర్డ్",
    confirmPassword: "పాస్వర్డ్ నిర్ధారించండి"
  }
};
const languageSelect = document.getElementById("language-select");
const toggleText = document.querySelector(".toggle-form");
const usernameInput = document.getElementById("username");
const gmailInputBox = document.getElementById("gmail");
const passwordInput = document.getElementById("password");
const rememberLabel = document.querySelector(".remember");

function updateLanguage(lang) {
  const t = translations[lang];

  // Update form titles and button
  formTitle.textContent = isLogin ? t.loginTitle : t.signUpTitle;
  submitBtn.textContent = isLogin ? t.loginBtn : t.signUpBtn;

  // Inputs
  usernameInput.placeholder = t.username;
  gmailInputBox.placeholder = t.gmail;
  passwordInput.placeholder = t.password;
  confirmPasswordInput.placeholder = t.confirmPassword;

  // Remember Me
  rememberLabel.childNodes[2].nodeValue = ` ${t.remember}`;

  // Toggle Link and Text
  toggleText.innerHTML = isLogin
    ? `${t.toggleTextLogin}<a href="#" id="toggle-link">${t.toggleLinkLogin}</a>`
    : `${t.toggleTextSignup}<a href="#" id="toggle-link">${t.toggleLinkSignup}</a>`;

  // Re-attach toggle link event listener
  document.getElementById("toggle-link").addEventListener("click", (e) => {
    e.preventDefault();
    isLogin = !isLogin;
    updateLanguage(languageSelect.value);
    gmailInputBox.style.display = isLogin ? "none" : "block";
    confirmPasswordInput.style.display = isLogin ? "none" : "block";
  });
}

// Listen to language change
languageSelect.addEventListener("change", () => {
  updateLanguage(languageSelect.value);
});

// Initialize default language
updateLanguage("en");
