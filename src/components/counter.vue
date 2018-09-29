<template>
  <div>
    {{type}}计数器 => {{word}}
  </div>
</template>

<script>
export default {
  name: 'counter',
  props: ['word', 'type']
}
</script>

<style>

</style>
