window.onload = function () {
    typeWriter("DATABASE IS NOT BLACK BOX", "text-container", 200);
    typeWriter("Mütəxəssislər", "section-title", 550);
    typeWriter("Tərəfdaşlar", "section-title2", 750);
    typeWriter("Kitablar", "section-title3", 850);
  };
  function sendMessage() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
  
    if (name && message) {
      const whatsappMessage = `Salam mən ${name}\nMesaj: ${message}`;
  
      const whatsappLink = `https://wa.me/+994559409565?text=${encodeURIComponent(whatsappMessage)}`;
  
      window.open(whatsappLink, "_blank");
    } else {
      alert("Zəhmət olmasa ad, soyad və mesaj daxil edin.");
    }
  }
  
  function sendWhatsAppMessage(message) {
    var phoneNumber = "+994559409565";
    var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url, '_blank');
  }
  
  