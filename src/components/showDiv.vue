<template>
  <div>
    <a href="javascript:;" @click="onshow">点击</a>
    <counter :word="show" />
  </div>
</template>

<script>
import counter from './counter'
import {mapState} from 'vuex'
export default {
  name: 'show-div',
  components: {
    counter
  },
  data () {
    return {
      comtent: '这里显示内容区域'
    }
  },
  methods: {
    onshow () {
      this.$store.dispatch('switch_show')
    }
  },
  computed: {
    ...mapState({
      show: state => state.showDiv.show
    })
  }
}
</script>

<style scoped>

</style>
