<template>
  <div class="products">
  {{ id }}
  {{ name }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    id: Number,
    name: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
