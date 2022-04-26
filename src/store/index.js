import { createStore } from 'vuex'

function updateCartFromLocal(cart) {
  sessionStorage.setItem('cart', JSON.stringify(cart))
}


export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: "Пижама для девочек",
        price: "800",
        imgs: [
          {
            id: 1,
            img: require("../assets/images/products/1.png"),
          },
          {
            id: 2,
            img: require("../assets/images/products/3.png"),
          },
          {
            id: 3,
            img: require("../assets/images/products/6.png"),
          },
          {
            id: 4,
            img: require("../assets/images/products/4.png"),
          },
          {
            id: 5,
            img: require("../assets/images/products/7.png"),
          },
        ],
      },
      {
        id: 2,
        name: "Пижама для мальчиков",
        price: "1500",
        imgs: [
          {
            id: 1,
            img: require("../assets/images/products/2.png"),
          },
          {
            id: 2,
            img: require("../assets/images/products/1.png"),
          },
          {
            id: 3,
            img: require("../assets/images/products/3.png"),
          },
          {
            id: 4,
            img: require("../assets/images/products/4.png"),
          },
          {
            id: 5,
            img: require("../assets/images/products/5.png"),
          },
        ],
      },
      {
        id: 3,
        name: "Игружшки для девочек",
        price: "900",
        imgs: [
          {
            id: 1,
            img: require("../assets/images/products/3.png"),
          },
          {
            id: 2,
            img: require("../assets/images/products/1.png"),
          },
          {
            id: 3,
            img: require("../assets/images/products/2.png"),
          },
          {
            id: 4,
            img: require("../assets/images/products/4.png"),
          },
          {
            id: 5,
            img: require("../assets/images/products/5.png"),
          },
        ],
      },
      {
        id: 4,
        name: "Игружшки для мальчиков",
        price: "1000",
        imgs: [
          {
            id: 1,
            img: require("../assets/images/products/4.png"),
          },
          {
            id: 2,
            img: require("../assets/images/products/1.png"),
          },
          {
            id: 3,
            img: require("../assets/images/products/2.png"),
          },
          {
            id: 4,
            img: require("../assets/images/products/3.png"),
          },
          {
            id: 5,
            img: require("../assets/images/products/5.png"),
          },
        ],
      },
      {
        id: 5,
        name: "Детская пижама",
        price: "860",
        imgs: [
          {
            id: 1,
            img: require("../assets/images/products/5.png"),
          },
          {
            id: 2,
            img: require("../assets/images/products/1.png"),
          },
          {
            id: 3,
            img: require("../assets/images/products/2.png"),
          },
          {
            id: 4,
            img: require("../assets/images/products/3.png"),
          },
          {
            id: 5,
            img: require("../assets/images/products/4.png"),
          },
        ],
      },
    ],
    anotherProducts: [
      {
        id: 1,
        name: "Пижама для девочек",
        price: "800",
        imgs: [
          {
            id: 1,
            img: require("../assets/images/products/10.png"),
          },
          {
            id: 2,
            img: require("../assets/images/products/3.png"),
          },
          {
            id: 3,
            img: require("../assets/images/products/6.png"),
          },
          {
            id: 4,
            img: require("../assets/images/products/4.png"),
          },
          {
            id: 5,
            img: require("../assets/images/products/7.png"),
          },
        ],
      },
      {
        id: 2,
        name: "Пижама для мальчиков",
        price: "1500",
        imgs: [
          {
            id: 1,
            img: require("../assets/images/products/6.png"),
          },
          {
            id: 2,
            img: require("../assets/images/products/1.png"),
          },
          {
            id: 3,
            img: require("../assets/images/products/3.png"),
          },
          {
            id: 4,
            img: require("../assets/images/products/4.png"),
          },
          {
            id: 5,
            img: require("../assets/images/products/5.png"),
          },
        ],
      },
      {
        id: 3,
        name: "Игружшки для девочек",
        price: "900",
        imgs: [
          {
            id: 1,
            img: require("../assets/images/products/7.png"),
          },
          {
            id: 2,
            img: require("../assets/images/products/1.png"),
          },
          {
            id: 3,
            img: require("../assets/images/products/2.png"),
          },
          {
            id: 4,
            img: require("../assets/images/products/4.png"),
          },
          {
            id: 5,
            img: require("../assets/images/products/5.png"),
          },
        ],
      },
      {
        id: 4,
        name: "Игружшки для мальчиков",
        price: "1000",
        imgs: [
          {
            id: 1,
            img: require("../assets/images/products/8.png"),
          },
          {
            id: 2,
            img: require("../assets/images/products/1.png"),
          },
          {
            id: 3,
            img: require("../assets/images/products/2.png"),
          },
          {
            id: 4,
            img: require("../assets/images/products/3.png"),
          },
          {
            id: 5,
            img: require("../assets/images/products/5.png"),
          },
        ],
      },
      {
        id: 5,
        name: "Детская пижама",
        price: "860",
        imgs: [
          {
            id: 1,
            img: require("../assets/images/products/9.png"),
          },
          {
            id: 2,
            img: require("../assets/images/products/1.png"),
          },
          {
            id: 3,
            img: require("../assets/images/products/2.png"),
          },
          {
            id: 4,
            img: require("../assets/images/products/3.png"),
          },
          {
            id: 5,
            img: require("../assets/images/products/4.png"),
          },
        ],
      },
    ],
    cart: [],
    showCartPreview: false,
    notification: false,
    notificationProduct: [],
    favorites: []
  },
  getters: {
    ANOTHER_STYLE(state) {
      return state.anotherProducts
    },
    PRODUCTS(state) {
      return state.products
    },
    PRODUCTS_FROM_CART(state) {
      return state.cart
    },
    QNTY_PRODUCTS_IN_CART(state) {
      return state.cart.reduce((prevQnty, currQnty) => prevQnty + currQnty.quantity, 0)
    },
    NOTIFICATION_PRODUCT(state) {
      return state.notificationProduct
    },
    FAVORITE_PRODUCTS(state) {
      return state.favorites
    }
  },
  mutations: {
    PUSH_TO_FAVORITE(state, product) {
      let fav = state.favorites.find(el => el.id === product.id)
      if (fav) {
        state.favorites = state.favorites.filter(el => el.id !== fav.id)
        alert(`you're removed product ${fav.name} from favorite`)
      } else {
        state.favorites.push(product)
        alert(`you're added product ${product.name} to favorite`)
      }
    },
    ADDING_TO_CART(state, products) {
      let product = state.cart.find(el => el.id === products.product.id)
      if (product) {
        product.quantity = products.qnty
      } else {
        state.cart.push({ ...products.product, quantity: products.qnty })
      }
      state.notificationProduct = products

      setTimeout(() => {
        state.notificationProduct = []
      }, 3000)
      // let product = state.cart.find(el => el.id === products.id)
      // if (product) {
      //   product.quantity++
      // } else {
      //   state.cart.push({ ...products, quantity: 1 })
      // }
      // state.showCartPreview = true
      updateCartFromLocal(state.cart)
    },
    updateCartFromStorage(state) {
      let cartProducts = sessionStorage.getItem('cart')
      if (cartProducts) {
        state.cart = JSON.parse(cartProducts)
      }
    },
    // DECREASING_FROM_CART(state, product) {
    //   let item = state.cart.find(el => el.id === product.id)
    //   if (item) {
    //     if (item.quantity > 1) {
    //       item.quantity--
    //     } else {
    //       state.cart = state.cart.filter(el => el.id !== item.id)
    //     }
    //   }
    //   updateCartFromLocal(state.cart)
    // },
  },
  actions: {
    ADD_TO_FAVORITE(ctx, product) {
      ctx.commit("PUSH_TO_FAVORITE", product)
    },
    ADD_TO_CART(ctx, products) {
      ctx.commit('ADDING_TO_CART', products)
    },
    // DECREASE_FROM_CART(ctx, product) {
    //   ctx.commit('DECREASING_FROM_CART', product)
    // }
  },
})
