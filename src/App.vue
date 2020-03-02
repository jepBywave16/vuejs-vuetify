<template>

  <v-app class="grey">
      <Navbar/>
        <v-content class="grey lighten-4">
          <div class="mx-4 mb-4">
            <router-view></router-view>
          </div>
        </v-content>
  </v-app>

</template>

<script>

import Navbar from './components/Navbar'

export default {
  name: 'App',

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
