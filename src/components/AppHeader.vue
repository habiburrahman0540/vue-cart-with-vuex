<template>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/" class="nav-link"
                >Home <span class="sr-only">(current)</span></router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Product</a>
            </li>
          </ul>
          <ul class="navbar-nav float-right">
            <li class="nav-item dropdown float-right">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                0 Card
              </a>
              <div @click="$event.stopPropagation()">
                <MiniCart />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import MiniCart from "./MiniCard";
export default {
  components: { MiniCart },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
