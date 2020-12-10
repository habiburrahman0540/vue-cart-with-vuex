<template>
  <div class="container">
      <div class="row">
        <div class="d-flex align-items-stretch flex-wrap">
              <ProductCart/>
         <ProductCart/>
         <ProductCart/>
         <ProductCart/>
         <ProductCart/>
        </div>
         
      </div>
     
  </div>
</template>

<script>
import ProductCart from './ProductCart'
export default {
  components:{ProductCart}
}
</script>

<style>

</style>