// Geçmiş tarihleri engeller
document.getElementById("tarih").min = new Date().toISOString().split("T")[0];

function rezervasyonYap(event) {
    // Başka sayfaya atmasını engeller
    event.preventDefault(); 
    
    // Formda girilen ismi alır
    let isim = document.getElementById("isim").value;
    
    // Gizli mesaj kutusundaki boş yere bu ismi yazar
    document.getElementById("mesajIsim").innerText = isim;
    
    // Gizli olan yeşil başarı mesajını ekrana yazar
    document.getElementById("basariMesaji").style.display = "block";
    
    // Sayfayı resetler
    document.getElementById("rezervasyonFormu").reset();
}
