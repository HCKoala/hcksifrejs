<script>
var randomstring=function(length,length1)
{
		//harf listesi
 var klist="qwertyuoasdfghjklizxcvbnm";
	   //büyük harf listesi
 var klistb="QWERTYUOPASDFGHJKLIZXCVBNM"
 //özel karakter listesi
 var kalist="+*?!%&#";
 //sayi listesi
 var slist="0123456789";
 //şifreyi toplayacağımız değişken
 var textt= "";
 //kelime ekleme
 var sifresonhali="";
 for(var i=0;i<length;i++)
  {
  textt+=klist.charAt(Math.floor(Math.random()*klist.length));
  }
  //sayi ekleme
  for(var i=0;i<length;i++)
  {
  textt+=slist.charAt(Math.floor(Math.random()*slist.length));
  }
  //özel karakter ekleme
  for(var i=0;i<length1;i++)
  {
  textt+=kalist.charAt(Math.floor(Math.random()*kalist.length));
  }
  //büyük harf ekleme
  for(var i=0;i<length;i++)
  {
  textt+=klistb.charAt(Math.floor(Math.random()*klistb.length));
  }
  //oluşturulan şifreyi karıştırma
  for(var i=0;i<=25;i++)
  {
	  sifresonhali+=textt.charAt(Math.floor(Math.random()*klistb.length));
  }
 return sifresonhali;
}
var rs=randomstring(4,2);
//consola yazdırma
console.log("Sifre= "+rs);
var sifre=rs;
</script></p>
<h4 style="font-family: 'comic sans ms'; margin-left: 249px;">Şifrenize bir isim verin:</h4>
<p><input id="txt1" style="margin-left: 249px;" type="text" /></p>
<p><input id="btn1" onclick="txt2.value=txt1.value+' şifren: '+sifre" style="height: 50px; margin-left: 249px; width: 125px;" type="button" value="Üret" /></p>
<p><input id="txt2" style="font-family: 'comic sans ms'; height: 50px; margin-left: 249px; width: 325px;" type="text" value="" /></p>
