
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SPECIAL = "!@#$%^&*()-=_+[]{}|;:,.<>?/";

const $PASS_LENGTH_INPUT = document.getElementById("passLength");
const $LOWERCASE_CHECKBOX = document.getElementById("lowercase");
const $UPPERCASE_CHECKBOX = document.getElementById("uppercase");
const $NUMBERS_CHECKBOX = document.getElementById("number");
const $SPECIAL_CHECKBOX = document.getElementById("special");

function generate() {
  if (!window.crypto || !window.crypto.getRandomValues) {
    alert("Needed functionality is not present in your web browser");
    return;
  }
  let password = "";
  let chars = "";

  const passLen = parseInt($PASS_LENGTH_INPUT.value);
  if ($UPPERCASE_CHECKBOX.checked) chars += UPPERCASE;
  if ($LOWERCASE_CHECKBOX.checked) chars += LOWERCASE;
  if ($NUMBERS_CHECKBOX.checked) chars += NUMBERS;
  if ($SPECIAL_CHECKBOX.checked) chars += SPECIAL;

  if (!chars || chars.length === 0) {
    alert("You need to choose at least one way to get a password");
    return;
  }

  const charLength = chars.length;

  for (let i = 0; i < passLen; i++) {
    const ran = Math.floor(
      (window.crypto.getRandomValues(new Uint32Array(1))[0] /
        (0xffffffff + 1)) *
        charLength
    );
    password += chars[ran];
  }

  document.getElementById("generatedPass").innerText = password;

  const entropy = (passLen * Math.log2(charLength)).toFixed(1);
  document.getElementById("entropy").innerText = entropy;

  const { crack_times_display, score } = zxcvbn(password);

  document.getElementById("crackTime").innerText =
    crack_times_display.offline_fast_hashing_1e10_per_second;

  document.getElementById("passwordScore").innerText = score;
}

function sliderChange(e) {
  document.getElementById("cantChars").innerText = e.target.value;
  changePreferences();
}

function copyToClipboard() {
  const pass = document.getElementById("generatedPass").innerText;
  navigator.clipboard.writeText(pass);
  alert("Password copied to clipboard!");
}

function changePreferences() {
  const upp = $UPPERCASE_CHECKBOX.checked;
  const low = $LOWERCASE_CHECKBOX.checked;
  const num = $NUMBERS_CHECKBOX.checked;
  const special = $SPECIAL_CHECKBOX.checked;
  const len = parseInt($PASS_LENGTH_INPUT.value);

  localStorage.setItem(
    "preferences",
    JSON.stringify({ upp, low, num, special, len })
  );

  // generate();
}

function loadPreferences() {
  const preferences = localStorage.getItem("preferences");
  if (preferences === null) return;
  const prefs = JSON.parse(preferences);

  $UPPERCASE_CHECKBOX.checked = prefs.upp;
  $LOWERCASE_CHECKBOX.checked = prefs.low;
  $NUMBERS_CHECKBOX.checked = prefs.num;
  $SPECIAL_CHECKBOX.checked = prefs.special;
  $PASS_LENGTH_INPUT.value = prefs.len;
  document.getElementById("cantChars").innerText = prefs.len;
}

document.addEventListener("DOMContentLoaded", () => {
  loadPreferences();
  generate();
});

document.addEventListener("keypress", (e) => {
  if (e.code === "KeyR") generate();
});