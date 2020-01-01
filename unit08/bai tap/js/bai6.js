var n;
var tong;
tong = Number();
for (var i = 0; i <= 20; i++) {
	if (i%2==0) {
		document.write(i);
		document.write("<br>");
		tong += i;
	}
}
document.write("Tổng 10 số chẵn đầu tiên là: "+tong);