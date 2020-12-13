<template>
  <div class="col-md-3 mt-3">
    <div class="card h-100 text-left">
      <img class="card-img-top w-100" :src="product.image" alt="" />
      <div class="card-body">
        <h4 class="card-title">
          <router-link :to="{ name: 'product', params: { id: product.id } }">{{
            product.name
          }}</router-link>
        </h4>
        <strong>${{ product.price }}</strong>
        <p class="card-text">
          {{ product.body }}
        </p>
      </div>
      <div class="px-4 pb-3 text-center">
        <button class="btn btn-secondary" @click="addToCard()">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    addToCard() {
      this.$store.dispatch("addProductToCard", {
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>

<style></style>
