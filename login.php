<!--/****************************************************************************
**					SAKARYA ÜNİVERSİTESİ
**				BİLGİSAYAR VE BİLİŞİM BİLİMLERİ FAKÜLTESİ
**				    BİLGİSAYAR MÜHENDİSLİĞİ BÖLÜMÜ
**				         Web Teknoloji
**					2023-2024 BAHAR DÖNEMİ
**	
**				ÖĞRENCİ ADI:             Khaled Abdullatif
**				ÖĞRENCİ NUMARASI:         B221210573
**              DERSİN ALINDIĞI GRUP.:    1. Öğretim B
***************************************************************************-->
<?php
// POST metodu ile veri gönderildiğinde çalışacak kod bloğu
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formdan kullanıcı adı ve şifreyi alma
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Kullanıcı adı ve şifrenin önceden tanımlanmış değerlerle eşleşip eşleşmediğini kontrol etme
    $validUsername = "b221210573@sakarya.edu.tr";
    $validPassword = "b221210573";

    if ($username === $validUsername && $password === $validPassword) {
        // Giriş başarılı, hoş geldiniz sayfasına yönlendirme
        header("Location: wellcome.html");
        exit();
    } else {
        // Geçersiz kimlik bilgileri, hata mesajını gösterme sayfasına yönlendirme
        header("Location: wrongawnser.html");
        exit();
    }
}
?>