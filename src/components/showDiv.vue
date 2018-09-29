<template>
  <div>
    <a href="javascript:;" @click="doclick">点击</a>
    <counter :word="show" :type="type" />
  </div>
</template>

<script>
import counter from './counter'
import {mapState} from 'vuex'
export default {
  name: 'show-div',
  props: ['type'],
  components: {
    counter
  },
  data () {
    return {
      comtent: '这里显示内容区域'
    }
  },
  methods: {
    doclick () {
      if (this.type === 'add') {
        this.$store.dispatch('add')
      } else {
        this.$store.dispatch('sub')
      }
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
