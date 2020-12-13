<template>
  <div class="container">
    <div class="row mt-3" v-if="product">
      <div class="col-md-4">
        <img class="card-img-top w-100" :src="product.image" alt="" />
      </div>
      <div class="col-md-8">
        <h1>{{ product.name }}</h1>
        <h3>${{ product.price }}</h3>
        <input type="text" class="text-center col-1 mr-2 p-1" />
        <button class="btn btn-primary" @click="addToCart()">Add to card</button>
        <p class="mt-4">
          {{ product.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCard", {
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>

<style></style>
