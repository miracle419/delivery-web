// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const isOpen = menu.style.display === "flex";
  menu.style.display = isOpen ? "none" : "flex";
}

// Close menu on outside click
document.addEventListener("click", function (e) {
  const menu = document.getElementById("mobileMenu");
  const hamburger = document.getElementById("hamburger");
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.style.display = "none";
  }
});

// Track package
function trackPackage() {
  const val = document.getElementById("trackingInput").value.trim();
  if (!val) {
    document.getElementById("trackingInput").focus();
    document.getElementById("trackingInput").style.borderColor = "var(--red)";
    setTimeout(
      () => (document.getElementById("trackingInput").style.borderColor = ""),
      1500,
    );
    return;
  }
  window.location.href = "tracking.html?number=" + encodeURIComponent(val);
}

// Allow Enter key to trigger tracking
document
  .getElementById("trackingInput")
  .addEventListener("keydown", function (e) {
    if (e.key === "Enter") trackPackage();
  });

function trackPackage() {
  const input = document.getElementById("trackingInput");

  const code = input.value.trim();

  // create result box automatically if it doesn't exist yet
  let result = document.getElementById("trackingResult");

  if (!result) {
    result = document.createElement("div");

    result.id = "trackingResult";

    result.style.marginTop = "18px";

    result.style.padding = "18px";

    result.style.borderRadius = "8px";

    result.style.background = "rgba(255,204,0,.06)";

    result.style.border = "1px solid rgba(255,204,0,.3)";

    result.style.lineHeight = "1.7";

    document.querySelector(".track-box").appendChild(result);
  }

  // empty input protection
  if (!code) {
    input.style.borderColor = "red";

    setTimeout(() => {
      input.style.borderColor = "";
    }, 1500);

    return;
  }

  // ONLY WORKING TRACKING NUMBER
  if (code === "DHL507PANAMA001") {
    result.innerHTML = `

<div style="
font-weight:700;
font-size:18px;
color:#ffcc00;
margin-bottom:12px;
">
Shipment Details
</div>

<img
src="img/IMG-20260329-WA0049.jpg"
alt="Ready"
style="
width:100%;
max-width:320px;
border-radius:6px;
margin-bottom:15px;
border:1px solid rgba(255,204,0,.3);
"
/>
<br>
<b>Tracking Number:</b> DHL507PANAMA001<br>

<b>Courier:</b> DHL Express<br>

<b>Receiver:</b> Ariel David Gómez Martínez<br>

<b>Phone:</b> +507-6092-0804<br>

<b>Email:</b> ar3887arielgomez@gmail.com<br>

<b>Passport:</b> 8-781-1487<br>

<b>Pickup Address:</b><br>
DHL Express Punto de Venta (Costa del Este)<br>
Panama City, Panama<br>

<b>Nearest Airport:</b> Tocumen Airport<br><br>

<span style="
color:#00cc88;
font-weight:600;
">
📦 Status: Package available for pickup at local DHL service point
</span>

`;
  }
}

// ENTER KEY SUPPORT
document
  .getElementById("trackingInput")
  .addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      trackPackage();
    }
  });
