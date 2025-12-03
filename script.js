function tambahKeranjang(nama) {
    const list = document.getElementById("keranjang");
    const item = document.createElement("li");
    item.textContent = nama;
    list.appendChild(item);
}
