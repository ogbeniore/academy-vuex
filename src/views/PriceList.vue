<template>
<div>
  <form @submit.prevent="submit">
    <input type="text" v-model="name">
    <input type="text" v-model="price">
    <button type="submit">Add</button>
  </form>
  <ul>
    <li v-for="item in getPriceList" :key="JSON.stringify(item)">
      {{item}}
    </li>
  </ul>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'priceList',
  data() {
    return {
      name: '',
      price: ''
    }
  },
  computed: {
    ...mapGetters([
      'getPriceList'
    ])
  },
  methods: {
    ...mapMutations([
      'addItem'
    ]),
    submit() {
      const data = {
        name: this.name,
        price: this.price,
      }
      this.addItem(data)
    }
  }
}
</script>