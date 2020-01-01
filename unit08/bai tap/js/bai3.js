var n = prompt("Nhập N:");
var tong;
tong = Number();
function giaithua (n) {
	var x = 1;
	for (var i = 2; i <= n; i++) {
		x = x * i;
	}
	return x;
}
for (var i = 1; i <= n; i++) {
	tong = tong + i / giaithua(i);
}
document.writeln("Tổng từ 1/1! đến "+n+"/"+n+"! = "+tong+"");