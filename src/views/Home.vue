<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>{{ hello }}</h1>
    <h1>{{ `total is ${totalPrice}` }}</h1>
    <div>
      <p>Number is {{ myNumber }}</p>
      <button @click="multiplyNumber">multipy</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapMutations } from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters([
      'hello',
      'getPriceList',
      'myNumber'
    ]),
    totalPrice() {
      let total = 0
      this.getPriceList.map(item => total = total + item.price)
      return total;
    }
  },
  methods: {
    ...mapMutations([
      'multiplyNumber'
    ])
  }
}
</script>
