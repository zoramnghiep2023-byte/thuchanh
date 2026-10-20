function checkdiem(){
    let hk1 = parseFloat(document.getElementById("hk1").value);
    let hk2 = parseFloat(document.getElementById("hk2").value);

    if (isNaN(hk1) || isNaN(hk2)){
        alert("Vui long nhap so hop le!");
        return;
    }

    let diemtb = (hk1+hk2)/2;
    let xl ="";

    if (diemtb >=9){
        xl ="Xuat sac";
    }else if (diemtb >=8){
        xl = "Gioi";
    }else if (diemtb>=7){
        xl="Kha";
    }else{
        xl="yeu";
    }

    document.getElementById("diemtb").textContent = diemtb.toFixed(2);
    document.getElementById("xl").textContent = xl;
}