<template>
  <div v-if="productDetail">
    <div>Detalle de producto {{productDetail.name}}</div>
    <div>Precio: {{productDetail.price}}</div>
    <div>Cantidad: {{productDetail.quantity}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'ProductDetail',
  computed: {
    productDetail () {
      const id = parseInt(this.$route.params.id, 10)
      return this.getProductById(id)
    },
    ...mapGetters(['getProductById'])
  }
}
</script>


