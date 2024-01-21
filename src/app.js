document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Robusta Brazil", img: "1.jpg.jpg", price: 30000 },
      { id: 2, name: "Arabica Blend", img: "2.jpg.jpg", price: 40000 },
      { id: 3, name: "Gayo Aceh", img: "3.jpg.jpg", price: 25000 },
      { id: 4, name: "Coffee Dampit", img: "4.jpg.jpg", price: 40000 },
      { id: 5, name: "Robusta Kintamani", img: "5.jpg.jpg", price: 35000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      this.item.push(newItem);
      this.quantity++;
      this.total += newItem.price;
      console.Log(this.Items);
    },
  });
});

// konversi ke Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: "0",
  }).format(number);
};
