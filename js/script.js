let harga = document.querySelector("#harga");
let namaBarang = document.querySelector("#nama-barang");
let qty = document.querySelector("#qty");
let btn = document.getElementsByTagName("button")[0];
// let pTotalHarga = document.querySelector(".total-harga");
let pTotalBayar = document.querySelector(".total-bayar");
let tableData = document.querySelector(".table-data");

let totalBayar = 0;
let nomor = 1;

function kosong() {
  namaBarang.value = "";
  harga.value = "";
  qty.value = "";
  namaBarang.focus();
}

kosong();

btn.addEventListener("click", function () {
  if (isNaN(Number(harga.value))) {
    harga.value = "";
    alert("input harga yang benar");
    harga.focus();
    return;
  }
  if (isNaN(Number(qty.value))) {
    qty.value = "";
    alert("input quantity yang benar");
    qty.focus();
    return;
  }

  let totalHarga = Number(harga.value) * Number(qty.value);

  totalBayar = totalBayar + totalHarga;

  //   pTotalHarga.textContent = totalHarga;
  pTotalBayar.textContent = "Rp. " + totalBayar.toLocaleString();

  let vHarga = Number(harga.value);
  let vQty = qty.value;

  tableData.innerHTML += `
    <tr>
        <td width="10">${nomor++}</td>
        <td>${namaBarang.value}</td>
        <td class="r-align">${vHarga.toLocaleString()}</td>
        <td class="r-align">${Number(qty.value).toLocaleString()}</td>
        <td class="r-align">${totalHarga.toLocaleString()}</td>
    </tr>
  `;
  kosong();
});
