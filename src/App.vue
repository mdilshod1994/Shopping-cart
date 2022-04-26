<template>
  <nav class="navbar" id="navbar">
    <div class="container">
      <div class="navbar-wrapper">
        <router-link to="/" class="navbar__link"> logo </router-link>
        <ul class="navbar__list">
          <li class="navbar__item">
            <img :src="iconPerson" class="navbar__icon" alt="" />
          </li>
          <li class="navbar__item">
            <img :src="iconFav" class="navbar__icon" alt="" />
          </li>
          <li
            @click="
              this.$store.state.showCartPreview =
                !this.$store.state.showCartPreview
            "
            class="navbar__item"
          >
            <img :src="iconCart" class="navbar__icon" alt="" />
            <span
              class="cart-qnty"
              v-if="this.$store.getters.QNTY_PRODUCTS_IN_CART > 0"
            >
              {{ this.$store.getters.QNTY_PRODUCTS_IN_CART }}
            </span>
            <div
              class="cart-items"
              :class="{ active: this.$store.state.showCartPreview }"
            >
              <div v-if="productsToView.length > 0">
                <div
                  class="cart-items-wrapper"
                  v-for="product in productsToView"
                  :key="product.id"
                >
                  <div class="cart-items-info">
                    <h1>{{ product.name }}</h1>
                    <p>Price: {{ product.price }}</p>
                    <p>Quantity: {{ product.quantity }}</p>
                    <h2>
                      Total:
                      {{ product.price * product.quantity }}
                    </h2>
                  </div>
                </div>
                <div class="cart-items__btns">
                  <button>view</button>
                  <button>chekcout</button>
                </div>
              </div>
              <div v-else>Your cart is empty</div>
            </div>
            <div
              class="notofication"
              :class="{
                active: this.$store.getters.NOTIFICATION_PRODUCT.qnty > 0,
              }"
              @click.stop=""
            >
              <div
                class="notofication-content"
                v-if="this.$store.getters.NOTIFICATION_PRODUCT.qnty > 0"
              >
                <h2>{{ notificationProduct.product.name }}</h2>
                <p>Quantity: {{ notificationProduct.qnty }}</p>
                <p>
                  Price:
                  {{
                    notificationProduct.qnty * notificationProduct.product.price
                  }}
                </p>
              </div>
            </div>
          </li>
          <li class="navbar__item burger-menu" @click="isBurger = !isBurger">
            <div class="burger-btn" :class="{ active: isBurger }">
              <span></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="mobile-navbar-wrap"
      @click="isBurger = false"
      :class="{ active: isBurger }"
    >
      <ul class="mobile-navbar" :class="{ active: isBurger }" @click.stop="">
        <li>
          <router-link to="">постельное белье</router-link>
        </li>
        <li>
          <router-link to="">одежда для дома</router-link>
        </li>
        <li>
          <router-link to="">одежда для улицы</router-link>
        </li>
        <li>выход</li>
      </ul>
    </div>
  </nav>

  <router-view />
</template>
<script>
export default {
  data() {
    return {
      isBurger: false,
      iconPerson: require("./assets/images/person.svg"),
      iconFav: require("./assets/images/favorite.svg"),
      iconCart: require("./assets/images/cart.svg"),
    };
  },
  computed: {
    productsToView() {
      return this.$store.getters.PRODUCTS_FROM_CART;
    },
    notificationProduct() {
      return this.$store.getters.NOTIFICATION_PRODUCT;
    },
  },
  mounted() {
    this.$store.commit("updateCartFromStorage");
    window.addEventListener("scroll", function () {
      let navbar = document.getElementById("navbar");
      navbar.classList.toggle("sticky", this.window.scrollY > 0);
      console.log(this.oldScroll > this.scrollY);
      if (this.oldScroll > this.scrollY) {
        navbar.classList.add("active");
      } else {
        navbar.classList.remove("active");
      }
      this.oldScroll = this.scrollY;
    });
  },
};
</script>

<style>
</style>
