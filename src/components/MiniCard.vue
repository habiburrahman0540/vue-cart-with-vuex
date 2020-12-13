<template>
  <div
    class="dropdown-menu p-2"
    style="min-width: 320px; right: 0; left: auto"
    aria-labelledby="navbarDropdown"
  >
    <div class="" v-for="item in cart" :key="item.product.id">
      <div class="px-2 d-flex justify-content-between">
        <div class="">
          <strong>{{ item.product.name.substring(0, 12) }}</strong>
          <br />
          {{ item.quantity }} x ${{ item.product.price }}
        </div>

        <div class=" ">
          <a href="" class="badge badge-primary">remove</a>
        </div>
      </div>
      <hr />
    </div>

    <div class="d-flex justify-content-between">
      <span style="font-weight: bold; font-size: 20px">
        Total Price : {{ CartTotalPrice }}</span
      >
      <a href="#"> Clear Cart</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    CartTotalPrice() {
      return this.$store.getters.CartTotalPrice;
    },
  },
};
</script>

<style></style>
