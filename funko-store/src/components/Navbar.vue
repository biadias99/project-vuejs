<template>
   <v-toolbar color="#e84393" dark flat>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>
        Funko Store
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>
          Login/Cadastro
      </v-btn>
      <v-btn flat>
          Carrinho(0)
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
