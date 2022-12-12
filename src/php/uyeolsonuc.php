<?php
require_once("baglan.php");

if(isset($_POST["adi"])){
	$GelenKullaniciAdi		=	Filtre($_POST["adi"]);
}else{
	$GelenKullaniciAdi		=	"";
}

if(isset($_POST["soyadi"])){
	$GelenSoyisim		=	Filtre($_POST["soyadi"]);
}else{
	$GelenSoyisim		=	"";
}

if(isset($_POST["sifre"])){
	$GelenSifre				=	Filtre($_POST["sifre"]);
}else{
	$GelenSifre				=	"";
}

if(isset($_POST["emailadresi"])){
	$GelenEmailAdresi		=	Filtre($_POST["emailadresi"]);
}else{
	$GelenEmailAdresi		=	"";
}

$KontrolSorgusu			=	$VeritabaniBaglantisi->prepare("SELECT * FROM uyeler WHERE adi=? OR emailadresi=?");
$KontrolSorgusu->execute([$GelenKullaniciAdi, $GelenEmailAdresi]);
$KontrolSayisi			=	$KontrolSorgusu->rowCount();

if($KontrolSayisi>0){
	echo "HATA<br />";
	echo "Kullanıcı Adı veya E-Mail Adresi Başka Bir Üye Tarafından Kullanılmaktadır.<br />";
	echo "Ana Sayafaya Dönmek İçin Lütfen Buraya <a href='index.php'>Tıklayınız</a>.";
}else{
	$KayitEkle			=	$VeritabaniBaglantisi->prepare("INSERT INTO uyeler (adi, soyadi, emailadresi, sifre, kayittarihi) values (?, ?, ?, ?, ?)");
	$KayitEkle->execute([$GelenKullaniciAdi, $GelenSoyisim, $GelenEmailAdresi, $GelenSifre, $ZamanDamgasi]);
	$KayitKontrol		=	$KayitEkle->rowCount();
	
	if($KayitKontrol>0){
		echo "TEBRİKLER<br />";
		echo "Kullanıcı Kaydı Başarıyla Tamamlandı.<br />";
		echo "Ana Sayafaya Dönmek İçin Lütfen Buraya <a href='index.php'>Tıklayınız</a>.";
	}else{
		echo "HATA<br />";
		echo "Kullanıcı Kaydı İşlemi Sırasında Beklenmeyen Bir Hata Oluştu.<br />";
		echo "Lütfen Daha Sonra Tekrar Deneyiniz.<br />";
		echo "Ana Sayafaya Dönmek İçin Lütfen Buraya <a href='index.php'>Tıklayınız</a>.";
	}
}
?>