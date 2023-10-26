document.getElementById("hitungButton").addEventListener("click", function () {
    var hargaTiket = parseFloat(document.getElementById("hargaTiket").value);
    var jumlahTiket = parseInt(document.getElementById("jumlahTiket").value);
    var member = document.getElementById("member").checked;
    var diskon = parseFloat(document.getElementById("diskon").value) || 0;

    var totalBayar = hargaTiket * jumlahTiket;

    if (member) {
        totalBayar *= 0.9; // Diskon 10% for members
    }

    totalBayar -= (totalBayar * (diskon / 100));

    document.getElementById("totalBayar").value = totalBayar.toFixed(2);
});