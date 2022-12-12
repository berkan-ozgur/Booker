<?php
require_once("baglan.php");

if(isset($_POST["emailadresi"])){
	$GelenEmailAdresi		=	Filtre($_POST["emailadresi"]);
}else{
	$GelenEmailAdresi		=	"";
}

if(isset($_POST["sifre"])){
	$GelenSifre				=	Filtre($_POST["sifre"]);
}else{
	$GelenSifre				=	"";
}

$KontrolSorgusu			=	$VeritabaniBaglantisi->prepare("SELECT * FROM uyeler WHERE emailadresi=? AND sifre=?");
$KontrolSorgusu->execute([$GelenEmailAdresi, $GelenSifre]);
$KontrolSayisi			=	$KontrolSorgusu->rowCount();

if($KontrolSayisi>0){
	$_SESSION["Kullanici"]	=	$GelenEmailAdresi;
	header("Location:index.php");
	exit();
}else{
	echo "HATA<br />";
	echo "Girilen Bilgiler İle Eşleşen Kullanıcı Kaydı Bulunmamaktadır.<br />";
	echo "Ana Sayafaya Dönmek İçin Lütfen Buraya <a href='index.php'>Tıklayınız</a>.";
}
?>