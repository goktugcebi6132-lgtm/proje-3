// geçmiş tarihleri seçmeyi engeller
document.getElementById("tarih").min = new Date().toISOString().split("T")[0];

function rezervasyonYap(event) {
    // başka sayfaya atmasını engeller
    event.preventDefault(); 
    
    // gormda girilen ismi alır
    let isim = document.getElementById("isim").value;
    
    // gizli mesaj kutusuna girilen ismi yazar
    document.getElementById("mesajIsim").innerText = isim;
    
    // gizli olan mesajı ekrana çıkarır
    document.getElementById("basariMesaji").style.display = "block";
    
    // resetler
    document.getElementById("rezervasyonFormu").reset();
}
