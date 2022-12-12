<?php
session_start(); ob_start();

header("Access-Control-Allow-Origin: *");

try{
	$VeritabaniBaglantisi	=	new PDO("mysql:host=localhost;dbname=booker;charset=UTF8", "root", "");
}catch(PDOException $Hata){
	echo "Bağlantı Hatası<br />" . $Hata->GetMessage();
	die();
}

function Filtre($Deger){
	$Bir	=	trim($Deger);
	$Iki	=	strip_tags($Bir);
	$Uc		=	htmlspecialchars($Iki, ENT_QUOTES);
	$Sonuc	=	$Uc;
	return $Sonuc;
}

$ZamanDamgasi	=	time();

if(isset($_SESSION["Kullanici"])){
	$UyelerSorgusu			=	$VeritabaniBaglantisi->prepare("SELECT * FROM uyeler WHERE emailadresi=?");
	$UyelerSorgusu->execute([$_SESSION["Kullanici"]]);
	$UyelerKayitSayisi		=	$UyelerSorgusu->rowCount();
	$UyelerKaydi			=	$UyelerSorgusu->fetch(PDO::FETCH_ASSOC);
	
	if($UyelerKayitSayisi>0){
		$UyeninAdi	=	$UyelerKaydi["adi"];
	}else{
		$UyeninAdi	=	"";
	}
}
?>