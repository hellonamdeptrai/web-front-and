var n = prompt("Nhập N: ");
var m = prompt("Nhập M: ");
var k = prompt("Nhập K: ");
document.write("Các số chia hết cho "+k+" từ "+n+" đến "+m+" là:");
document.write("<br>");
for (var i = n; i <= m; i++) {
	if (i%k==0) {
		document.write(i);
		document.write("<br>");
	}
}