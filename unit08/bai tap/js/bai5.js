var n = prompt("Nhập N:");
var tong;
tong = Number();
for (var i = 1; i <= n; i++){
	tong += 1/i;
}
document.write("Tổng từ 1/1 đến 1/"+n+" = "+tong+"");