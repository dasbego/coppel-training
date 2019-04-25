<template>
  <div>
    <form @submit.prevent="onSubmit" class="Form">
      <input
        type="text"
        placeholder="Nombre del producto"
        class="Form__Input"
        v-model="productName"
        v-validate="'required'"
        name="product-name"
      />
      <input
        type="number"
        placeholder="Precio del producto"
        class="Form__Input"
        v-model.number="productPrice"
      />
      <button
        type="submit"
        class="Form__Button"
      >
        Agregar nuevo producto
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProductForm',
  data() {
    return {
      productName: undefined,
      productPrice: 0,
    }
  },
  methods: {
    onSubmit () {
      this.$validator.validate().then(valid => {
        if (valid) {
          debugger;
          const newProduct = {
            name: this.productName,
            price: this.productPrice,
            quantity: 0,
          };
          this.$emit('add', newProduct);
          this.productName = '';
          this.productPrice = '';
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
@import "../stylesheet/colors.less";
@import "../stylesheet/mixins.less";
  .Form {
    background-color: @white;
    width: 300px;
    margin: auto;
    margin-top: 1rem;
    box-shadow: 5px 4px 4px 0px @shadow-gray;
    padding: 1rem 0;
    .roundBorder(5px);
  }
  .Form__Input {
    height: 15px;
    width: 80%;
    border: solid @light-gray;
    .roundBorder(3px);
    margin-bottom: 1rem;
    padding: 0.5rem;
  }
  .Form__Button {
    background-color: @green;
    color: @white;
    border: none;
    width: 100px;
    height: 40px;
    .roundBorder(2px);
  }
  .Form__Button:hover {
    background-color: @green-dark;
  }
</style>

