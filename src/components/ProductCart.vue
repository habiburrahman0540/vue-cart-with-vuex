<template>
         <div class="col-md-4 mt-3">
             <div class="card h-100 text-left">
               <img class="card-img-top w-100" src="https://via.placeholder.com/150x100" alt="">
                  <div class="card-body">
                    <h4 class="card-title">
                        <router-link :to="{name:'product',params:{id:23}}">Product Title</router-link>
                        </h4>
                    <strong>$120</strong>
                    <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatum accusamus enim consequatur. Culpa ut itaque, aperiam, nemo est consequuntur, eaque amet vero esse tempore nulla. Facilis veritatis cumque numquam.</p>
                  </div>
                  <div class="px-4 pb-3 text-center">
                  <button class="btn btn-secondary">Add to Cart</button>

                  </div>
             </div>
           </div>
</template>

<script>
export default {

}
</script>

<style>

</style>