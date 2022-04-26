<template>
  <div class="home">
    <div class="container">
      <div class="home-wrapper">
        <h1>Детская одежда</h1>
        <div class="products">
          <ul class="product__list">
            <li
              class="product__item"
              v-for="product in PRODUCTS"
              :key="product.id"
            >
              <img :src="product.imgs[0].img" alt="" />
              <div class="product__info">
                <h3 class="product__name">
                  {{ product.name }}
                </h3>
                <p class="product__price">Price: {{ product.price }}</p>
                <button @click="toView(product)" class="product__btn">
                  View product
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HomeView",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    toView(product) {
      this.$router.push({
        path: `/view-product/${product.id}`,
      });
    },
  },
};
</script>
