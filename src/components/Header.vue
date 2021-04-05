<template>
  <v-bottom-navigation
    class="indigo lighten-1 white--text mx-auto my-12"
    :value="value"
    color="white"
    horizontal
  >
    <v-btn>
      <img src="@/assets/costazul.png" width="170px" alt="Costaazul"/>
    </v-btn>
  
    <v-btn>
      <span>Clube Costazul</span>
    </v-btn>

    <v-btn>
      <span>Vantagens</span>
    </v-btn>

    <v-btn>
      <span>Cartão Costazul</span>
    </v-btn>
    <v-btn>
      <span>Encarte</span>
    </v-btn>
    <v-btn>
      <span>Receitas</span>
    </v-btn>
    <v-btn>
      <span>Dicas</span>
    </v-btn>
    <v-btn>
      <span>Zap Costazul</span>
    </v-btn>
    <v-btn>
      <span>Lojas</span>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  data: () => ({ value: 1 }),
};
</script>