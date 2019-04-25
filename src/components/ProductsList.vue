<template>
  <div>
    <div>{{ title }}</div>
    <ProductForm
      @add="addNewProduct"
    />
    <ul class="ProductsList">
      <div v-if="filteredProducts.length === 0">Cargando...</div>
      <li class="ProductsList__Item" v-for="product in filteredProducts" :key="product.id" >
        <ProductItem :product="product" :addToShopCart="agregarACarrito" /> 
      </li>
    </ul>
    <div>Total productos: {{ totalCantidad }}</div>
    <div>Total a pagar: {{ total | toLocalePrice | toPrice }}</div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
import ProductForm from './ProductForm.vue';
import * as Filters from '@/utils/filters';
import Axios from 'axios';

export default {
  name: 'ProductsList',
  data () {
    return {
      title: 'My products',
      products: [],
    }
  },
  created () {
    Axios.get('https://api.myjson.com/bins/hoto8')
    .then((response) => {
      this.products = response.data.products;
    })
    .catch((err) => {
      // El manejo del error
      console.log(err);
    });
  },
  computed: {
    filteredProducts (){
      return this.products
        .filter(product => (product.id >= 3))
        /**
         * .filter(function (product) {
         *  return product.id <= 3;
         * })
         */
    },
    totalCantidad () {
      return this.filteredProducts.reduce((total, product) => {
        return total + product.quantity;
      }, 0);
    },
    total () {
      return this.filteredProducts.reduce((total, product) => {
        return total + (product.price * product.quantity);
      }, 0);
    }
  },
  methods: {
    agregarACarrito (price, id) {
      this.products = this.products.map((product) => {
        if (product.id === id) {
          return {
            // Copia del contenido de producto
            ...product,
            quantity: product.quantity + 1,
          }
        }
        return product;
      });
    },
    addNewProduct (newProduct) {
      debugger;
      this.products.push({
        id: this.products.length + 1,
        ...newProduct,
      });
    }
  },
  filters: {
    toPrice: Filters.toPrice,
    toLocalePrice: Filters.toLocalePrice,
  },
  components: {
    ProductItem,
    ProductForm,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
.ProductsList {
  list-style-type: none;
  padding: 0;
}
.ProductsList__Item {
  border: 1px solid black;
  margin: 0 10px;
  padding: 16px;
}
</style>
