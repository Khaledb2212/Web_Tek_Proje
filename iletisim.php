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
<!-- <?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $password = $_POST["password"];
    $number = $_POST["number"];
    $email = $_POST["email"];
    $country = $_POST["country"];
    $cinsiyet = $_POST["Cinsiyet"];
    $sebeb = isset($_POST["sebeb"]) ? $_POST["sebeb"] : array();
    $message = $_POST["message"];

    echo "<h2>Submitted Form Data:</h2>";
    echo "<p>Name: $name</p>";
    echo "<p>Password: $password</p>";
    echo "<p>Number: $number</p>";
    echo "<p>Email: $email</p>";
    echo "<p>Country: $country</p>";
    echo "<p>Cinsiyet: $cinsiyet</p>";
    echo "<p>Sebeb:</p>";
    echo "<ul>";
    foreach ($sebeb as $item) {
        echo "<li>$item</li>";
    }
    echo "</ul>";
    echo "<p>Message: $message</p>";
} else {
    // Handle invalid requests
    echo "Invalid request!";
}
?> -->

<div class="form-data">
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $name = htmlspecialchars($_POST["name"]);
            $email = htmlspecialchars($_POST["email"]);
            $message = htmlspecialchars($_POST["message"]);
            $country = htmlspecialchars($_POST["country"]);
            $password = htmlspecialchars($_POST["password"]);
            $number = htmlspecialchars($_POST["number"]);
            $cinsiyet = htmlspecialchars($_POST["Cinsiyet"]);
            $sebeb = isset($_POST["sebeb"]) ? $_POST["sebeb"] : array();

            echo "<p><strong>Adı Soyadı:</strong> $name</p>";
            echo "<p><strong>Email:</strong> $email</p>";
            echo "<p><strong>Message:</strong> $message</p>";
            echo "<p><strong>Country:</strong> $country</p>";
            echo "<p><strong>Password:</strong> $password</p>";
            echo "<p><strong>Number:</strong> $number</p>";
            echo "<p><strong>Cinsiyet:</strong> $cinsiyet</p>";
            echo "<p><strong>Sebeb:</strong></p><ul>";
            foreach ($sebeb as $item) {
                echo "<li>$item</li>";
            }
            echo "</ul>";
        } else {
            echo "Invalid request!";
        }
        ?>
    </div>