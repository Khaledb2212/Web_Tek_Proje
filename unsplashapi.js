/****************************************************************************
**					SAKARYA ÜNİVERSİTESİ
**				BİLGİSAYAR VE BİLİŞİM BİLİMLERİ FAKÜLTESİ
**				    BİLGİSAYAR MÜHENDİSLİĞİ BÖLÜMÜ
**				         Web Teknoloji
**					2023-2024 BAHAR DÖNEMİ
**	
**				ÖĞRENCİ ADI:             Khaled Abdullatif
**				ÖĞRENCİ NUMARASI:         B221210573
**              DERSİN ALINDIĞI GRUP.:    1. Öğretim B
***************************************************************************/
// Sayfa yüklendiğinde çalışacak işlev
document.addEventListener('DOMContentLoaded', function () {
    // Yeni bir XMLHttpRequest nesnesi oluştur
    const xhr = new XMLHttpRequest();
    const url = 'https://api.unsplash.com/photos/random';
    const apiKey = 'Client-ID x8cG_s6rJ1M_neRDEg6ZvQjgIC-RG7LN2LdXZlW1u7Y';

    // İsteğin durumu değiştiğinde çalışacak işlev
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Sunucudan gelen veriyi işle
                const data = JSON.parse(xhr.responseText);
                console.log(data);
                document.getElementById('image').src = data.urls.regular;
                document.getElementById('description').textContent = data.alt_description;
            }
        }
    };

    // İsteği aç ve gönder
    xhr.open('GET', url);
    xhr.setRequestHeader('Authorization', apiKey);
    xhr.send();
});

// Yeni butonuna tıklanınca çalışacak işlev
Yeni.addEventListener('click', function () {
    // Yeni bir XMLHttpRequest nesnesi oluştur
    const xhr = new XMLHttpRequest();
    const url = 'https://api.unsplash.com/photos/random';
    const apiKey = 'Client-ID x8cG_s6rJ1M_neRDEg6ZvQjgIC-RG7LN2LdXZlW1u7Y';

    // İsteğin durumu değiştiğinde çalışacak işlev
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Sunucudan gelen veriyi işle
                const data = JSON.parse(xhr.responseText);
                console.log(data);
                document.getElementById('image').src = data.urls.regular;
                document.getElementById('description').textContent = data.alt_description;
            }
        }
    };

    // İsteği aç ve gönder
    xhr.open('GET', url);
    xhr.setRequestHeader('Authorization', apiKey);
    xhr.send();
});




