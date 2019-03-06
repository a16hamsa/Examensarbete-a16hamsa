var app = new Vue({
  el: "#app",
  data: {
    brand: 'Hampus™',
    header: 'Hello Vue.js!',
    product: 'Socks',
    image: './Assets/Socks-green.jpg',
    altText: 'a pair of socks',
    onSale: true,
    description: 'A pair of warm, fuzzy socks',
    inventory: 8,
    details: ["80% clout", "20% cotton", "Gender-neutral"],
    variants: [
      {
        variantId: 0001,
        variantColor: "green",
        variantImage: './Assets/Socks-green.jpg'
      },
      {
        variantId: 0002,
        variantColor: "blue",
        variantImage: './Assets/Socks-blue.jpg'
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function () {
      this.cart += 1
    },
    removeFromCart: function () {
      if (this.cart >= 1) {
        this.cart -= 1
      }
    },
    updateProduct: function (variantImage) {
      this.image = variantImage
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    }
  }
})
