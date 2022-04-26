<template>
  <div class="view-product">
    <div class="container">
      <div class="view-wrapper">
        <div class="view-photos">
          <img :src="exactProduc.imgs[startIndex].img" alt="" />
          <ul class="view-photos-miniature">
            <li
              v-for="(img, index) in exactProduc.imgs"
              :key="img.id"
              @click="startIndex = index"
              :class="{ active: index === startIndex }"
            >
              <img :src="img.img" alt="" />
            </li>
          </ul>
        </div>
        <div class="product-info">
          <h2 class="product-info__title">{{ exactProduc.name }}</h2>
          <p class="product-info__art">Арт. 02765/46</p>
          <p class="product-info-feedback">
            Отзывы <img :src="stars" alt="" /> 14 отзывов
            <svg
              width="10"
              height="15"
              viewBox="0 0 10 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L9 8L1 14.5" stroke="#333333" />
            </svg>
          </p>
          <div class="product-info-price">
            <div class="product-info-price__inner">
              <span class="product-info__price">
                {{ exactProduc.price }} ₽</span
              >
              <span class="product-info__last-price"
                >1 500 ₽
                <svg
                  width="10"
                  height="15"
                  viewBox="0 0 10 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L9 8L1 14.5" stroke="#333333" />
                </svg>
              </span>
            </div>
            <div class="product-info-price__btns">
              <button class="product-info-price__btn">скидка -36%</button>
              <button class="product-info-price__btn">акция -20%</button>
            </div>
          </div>
          <div class="product-info-size">
            <select>
              <option value="volvo">Выбрать размер</option>
              <option value="saab">X</option>
              <option value="opel">XS</option>
              <option value="audi">XL</option>
            </select>
            <p>Определить размер</p>
          </div>
          <div class="product-info-cart-btns-qnty">
            <div class="product-info-cart-btns-qnty-wrap">
              <div class="product-info-qnty">
                <!-- <span @click="addToCart(exactProduc)">+</span> -->
                <span @click="increase">+</span>
                <span>
                  {{ qntyCartProduct }}
                </span>
                <!-- <span @click="decrease(exactProduc)">-</span> -->
                <span @click="decrease">-</span>
              </div>
              <div class="product-info-cart-btns">
                <button @click="addToCart(exactProduc)">
                  Добавить в корзину
                </button>
                <button @click="addToFavorite(exactProduc)">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    :class="{ active: favoriteProduct }"
                  >
                    <path
                      d="M11.9 7.0948C10.6998 1.47892 1.40881 5.90389 5.76037 11.6018C10.1119 17.2996 12.4 19.4908 12.4 19.4908"
                      stroke="#ffff"
                    />
                    <path
                      d="M11.8941 7.0948C13.0944 1.47892 22.7304 5.90389 18.3789 11.6018C14.0273 17.2996 11.7 19.5 11.7 19.5"
                      stroke="#fff"
                    />
                    <path
                      d="M11.391 6.70752L12.4043 6.70757L12.3834 7.24079H11.391V6.70752Z"
                      fill="#fff"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <button class="buy-by-one-click">Купить в 1 клик</button>
          </div>
          <ul class="product-info-content">
            <li><img :src="clothes" alt="" /> <span>Описание товара</span></li>
            <li><img :src="time" alt="" /> <span>Доставка и возврат</span></li>
            <li><img :src="card" alt="" /> <span>Способы оплаты</span></li>
          </ul>
        </div>
      </div>
      <div class="all-style">
        <h1>Посмотреть все стили</h1>
        <div class="styles">
          <div
            class="styles-wrap"
            v-for="(product, index) in anotherStyles"
            :key="product.id"
            :class="{ largeone: index === 0 }"
          >
            <img :src="product.imgs[0].img" alt="" />
            <div class="styles-wrap-inner">
              <div class="icon-slide">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="2.5"
                    width="13"
                    height="13"
                    rx="1.5"
                    stroke="white"
                  />
                  <path
                    d="M2.33784 2.63126L2.33784 2.49958C2.33784 1.39501 3.23327 0.499584 4.33784 0.499585L13.5 0.49959C14.6045 0.49959 15.5 1.39502 15.5 2.49959L15.5 11.9382C15.5 12.9853 14.5159 13.7537 13.5 13.4997V13.4997"
                    stroke="white"
                  />
                </svg>
              </div>
              <div class="icon-cart">
                <svg
                  width="32"
                  height="35"
                  viewBox="0 0 32 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.752161 10.9953C0.638177 9.54198 1.78674 8.2998 3.24451 8.2998H28.7555C30.2133 8.2998 31.3618 9.54198 31.2478 10.9953L29.5851 32.1953C29.4831 33.4962 28.3976 34.4998 27.0927 34.4998H4.90725C3.60235 34.4998 2.51694 33.4962 2.41491 32.1953L0.752161 10.9953Z"
                    stroke="white"
                  />
                  <path
                    d="M7.004 18.4857C7.004 18.4857 6.54373 1 15.5 1C24.4563 1 23.996 18.4857 23.996 18.4857"
                    stroke="white"
                  />
                </svg>
                <p>Узнай, что на мне</p>
              </div>
              <div class="icon-likes">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.42873 3.25725L9.76116 1.03654L13.1965 1.46595L14.5 3.63849V6.32062L8.01449 14.1959L1.93878 6.2507L1.05633 4.04458L2.34555 1.89588L5.35443 0.606363L7.61587 3.32009L8.06654 3.86089L8.42873 3.25725Z"
                    fill="white"
                    stroke="white"
                  />
                  <path
                    d="M7.9 3.0948C6.6998 -2.52108 -2.59121 1.90389 1.76035 7.60175C6.11191 13.2996 8.40001 15.4908 8.40001 15.4908"
                    stroke="white"
                  />
                  <path
                    d="M7.89413 3.0948C9.09434 -2.52108 18.7304 1.90389 14.3788 7.60175C10.0273 13.2996 7.7 15.5 7.7 15.5"
                    stroke="white"
                  />
                  <path
                    d="M7.39098 2.70752L8.40429 2.70757L8.38335 3.24079H7.39098V2.70752Z"
                    fill="white"
                  />
                </svg>
                <span> 200 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      qntyCartProduct: 1,
      startIndex: 0,
      clothes: require("../assets/images/products/Group.svg"),
      time: require("../assets/images/products/time.svg"),
      card: require("../assets/images/products/card.svg"),
      stars: require("../assets/images/products/stars.svg"),
      isFavorite: false,
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
    exactProduc() {
      return this.PRODUCTS.find((el) => el.id == this.$route.params.id);
    },
    anotherStyles() {
      return this.$store.getters.ANOTHER_STYLE;
    },
    favoriteProduct() {
      const favProduct = this.$store.getters.FAVORITE_PRODUCTS;
      let item = favProduct.find((el) => el.id == this.$route.params.id);
      if (item === undefined) {
        return false;
      } else {
        return true;
      }
    },
    // qntyOfCurrProduct() {
    //   if (this.$store.getters.PRODUCTS_FROM_CART.length > 0) {
    //     let cart = this.$store.getters.PRODUCTS_FROM_CART;
    //     let result = cart.find(
    //       (product) => product.id == this.$route.params.id
    //     );
    //     if (result) {
    //       return result.quantity;
    //     } else {
    //       return this.qntyCartProduct;
    //     }
    //   } else {
    //     return this.qntyCartProduct;
    //   }
    // },
  },
  methods: {
    addToFavorite(product) {
      this.$store.dispatch("ADD_TO_FAVORITE", product);
    },
    increase() {
      if (this.qntyCartProduct > 0) {
        this.qntyCartProduct++;
      }
    },
    decrease() {
      if (this.qntyCartProduct > 1) {
        this.qntyCartProduct--;
      }
    },
    addToCart(product) {
      this.$store.dispatch("ADD_TO_CART", {
        product: product,
        qnty: this.qntyCartProduct,
      });
    },
    // decrease(product) {
    //   this.$store.dispatch("DECREASE_FROM_CART", product);
    // },
  },
  mounted() {},
};
</script>