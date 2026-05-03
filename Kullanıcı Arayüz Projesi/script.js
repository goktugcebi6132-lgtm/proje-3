// Sayfa açılır açılmaz geçmiş tarihleri seçmeyi engeller
document.getElementById("tarih").min = new Date().toISOString().split("T")[0];

// Butona basıldığında çalışacak fonksiyon
function rezervasyonYap(event) {
    // 1. Sayfanın yenilenmesini ve başka sayfaya atmasını kesinlikle durdurur
    event.preventDefault(); 
    
    // 2. Müşterinin formda girdiği ismi alır
    let isim = document.getElementById("isim").value;
    
    // 3. Gizli mesaj kutusundaki boş yere bu ismi yazar
    document.getElementById("mesajIsim").innerText = isim;
    
    // 4. Gizli olan yeşil başarı mesajını ekranda görünür yapar
    document.getElementById("basariMesaji").style.display = "block";
    
    // 5. İşlem bittiği için formdaki yazıları silip tertemiz yapar
    document.getElementById("rezervasyonFormu").reset();

    // Ekstra Güzellik: Mesaj 4 saniye ekranda kalıp kendiliğinden yavaşça kaybolur
    setTimeout(function() {
        document.getElementById("basariMesaji").style.display = "none";
    }, 4000);
}