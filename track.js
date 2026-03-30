function searchTracking() {
  // Get input and result container
  const trackingNumber = document.getElementById("trackInput").value.trim();
  const resultArea = document.getElementById("resultArea");

  // Check if the tracking number matches
  if (trackingNumber === "DHL507PANAMA001") {
    resultArea.innerHTML = `
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
  } else {
    resultArea.innerHTML = `
      <span style="color:red; font-weight:600;">
        ❌ Invalid tracking number. Please check and try again.
      </span>
    `;
  }
}
