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

document.getElementById('submitjs').addEventListener("click", function () {
    // Form doğrulama işlemi
    if (
        // Adı Soyadı alanı boş ise
        document.getElementById('name').value === '' ||
        // Adı Soyadı alanı boş ise
        document.getElementById('number').value === '' ||
        // E-posta Adresi alanı boş ise
        document.getElementById('email').value === '' ||
        // Ülke seçimi yapılmamış ise
        document.getElementById('country').value === 'nothing' ||
        // Cinsiyet seçimi yapılmamış ise
        !(document.getElementById('Erkek').checked || document.getElementById('Kadin').checked) ||
        // Geri bildirim seçeneği seçilmemiş ise
        !(document.getElementById('röportaj').checked || document.getElementById('tavsiye').checked || document.getElementById('chşikayet').checked || document.getElementById('sadece').checked) ||
        // Mesaj alanı boş ise
        document.getElementById('message').value === ''
    ) {
        // Gerekli alanların doldurulması konusunda uyarı mesajı göster
        window.alert("Lütfen tüm gerekli alanları doldurun.");
    } else if (!document.getElementById('email').value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        // E-posta adresi geçerli bir formatta değilse uyarı mesajı göster
        window.alert("Lütfen geçerli bir e-posta adresi girin.");
    } else if (isNaN(document.getElementById('number').value)) {
        window.alert("Lütfen telefon numarası alanına sadece rakam girin.");
    } else {
        // Her şey uygun görünüyorsa onay mesajı göster        
        window.alert("Her şey uygun görünüyor."); // Call the function to submit the form
        // Formu göndermek için fonksiyonu çağır
    }
});

// function submitForm() {
//     var nameValue = document.getElementById("name").value;
//     var emailValue = document.getElementById("email").value;
//     var messageValue = document.getElementById("message").value;
//     var countryValue = document.getElementById("country").value;
//     var passwordValue = document.getElementById("password").value;
//     var numberdValue = document.getElementById("number").value;
//     var ErkekValue = document.getElementById("Erkek").value;
//     var KadinValue = document.getElementById("Kadin").value;
//     var röportajValue = document.getElementById("röportaj").value;
//     var tavsiyeValue = document.getElementById("tavsiye").value;
//     var chşikayetValue = document.getElementById("chşikayet").value;
//     var sadeceValue = document.getElementById("sadece").value;
//     // Store form data in local storage
//     localStorage.setItem("name", nameValue);
//     localStorage.setItem("password", passwordValue);
//     localStorage.setItem("number", numberdValue);
//     localStorage.setItem("email", emailValue);
//     localStorage.setItem("message", messageValue);
//     localStorage.setItem("country", countryValue);
//     localStorage.setItem("Erkek", ErkekValue);
//     localStorage.setItem("Kadin", KadinValue);
//     localStorage.setItem("röportaj", röportajValue);
//     localStorage.setItem("tavsiye", tavsiyeValue);
//     localStorage.setItem("chşikayet", chşikayetValue);
//     localStorage.setItem("sadece", sadeceValue);


//     // Redirect to the display page
//     window.location.href = "/bilgiler.html";
// }

// function submitForm() {
//     // Get values from form elements
//     var formData = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value,
//         country: document.getElementById("country").value,
//         password: document.getElementById("password").value,
//         number: document.getElementById("number").value,
//         gender: document.querySelector('input[name="gender"]:checked').value,
//         feedbackType: document.querySelector('input[name="feedback"]:checked').value
//     };

//     // Store form data in local storage
//     for (var key in formData) {
//         localStorage.setItem(key, formData[key]);
//     }

//     // Redirect to the display page
//     window.location.href = "/bilgiler.html";
// }

document.getElementById('Vue.jssubmit').addEventListener("click", function () {
    // Form doğrulama işlemi
    if (
        // Adı Soyadı alanı boş ise
        document.getElementById('name').value === '' ||
        // Adı Soyadı alanı boş ise
        document.getElementById('number').value === '' ||
        // E-posta Adresi alanı boş ise
        document.getElementById('email').value === '' ||
        // Ülke seçimi yapılmamış ise
        document.getElementById('country').value === 'nothing' ||
        // Cinsiyet seçimi yapılmamış ise
        !(document.getElementById('Erkek').checked || document.getElementById('Kadin').checked) ||
        // Geri bildirim seçeneği seçilmemiş ise
        !(document.getElementById('röportaj').checked || document.getElementById('tavsiye').checked || document.getElementById('chşikayet').checked || document.getElementById('sadece').checked) ||
        // Mesaj alanı boş ise
        document.getElementById('message').value === ''
    ) {
        // Gerekli alanların doldurulması konusunda uyarı mesajı göster
        window.alert("Lütfen tüm gerekli alanları doldurun.");
    } else if (!document.getElementById('email').value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        // E-posta adresi geçerli bir formatta değilse uyarı mesajı göster
        window.alert("Lütfen geçerli bir e-posta adresi girin.");
    } else if (isNaN(document.getElementById('number').value)) {
        window.alert("Lütfen telefon numarası alanına sadece rakam girin.");
    } else {
        // Her şey uygun görünüyorsa onay mesajı göster        
        window.alert("Her şey uygun görünüyor."); // Call the function to submit the form
        // Formu göndermek için fonksiyonu çağır
    }
});



