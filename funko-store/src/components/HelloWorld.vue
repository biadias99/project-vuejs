<template>
  <v-layout column align-start class="products">
    <v-flex ma-3>
      <h1> Nossos produtos</h1>
    </v-flex>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex 
          xs12  
          md6
          lg2
          v-for="product in products" 
          :key="product.id"
        >
          <v-card height="280px">
            <v-img
              :src="product.src"
              aspect-ratio="2.75"
              height="160px"
            ></v-img>
            <v-card-text primary-title>
              <span class="name text-xs-center">
                {{ product.name }}
              </span>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="#e84393">Comprar</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      products: [
        {
          id: 1,
          name: 'Funko Flash',
          src: require('../assets/1.png')
        },
        {
          id: 2,
          name: 'Funko Roadhog',
          src: require('../assets/2.png')
        },
        {
          id: 3,
          name: 'Funko Mulher Maravilha',
          src: require('../assets/3.png')
        },
        {
          id: 4,
          name: 'Funko Batman',
          src: require('../assets/4.png')
        },
        {
          id: 5,
          name: 'Funko Thanos',
          src: require('../assets/5.png')
        },
        {
          id: 6,
          name: 'Funko Florzinha',
          src: require('../assets/6.png')
        },
        {
          id: 7,
          name: 'Funko Moana',
          src: require('../assets/7.png')
        }
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.name:link {
  text-decoration: none;
  color: #343434;
}
.name:visited {
  text-decoration: none;
  color: #343434;
}
.name {
  font-weight: 600;
  font-size: 17px;
}
</style>
