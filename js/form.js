

function vali() {

	var scheck =document.getElementById("sname");
	var echeck =document.getElementById("ename");
	var ccheck =document.getElementById("cname");

	if (scheck.value === "") {document.getElementById("salart").innerHTML="Don't leave it blank";scheck.focus();return false;}
	if (echeck.value === "") {document.getElementById("ealart").innerHTML="Must contain @";echeck.focus();return false;}
	if (ccheck.value === "") {document.getElementById("calart").innerHTML="Don't leave it blank";ccheck.focus();return false;}
}