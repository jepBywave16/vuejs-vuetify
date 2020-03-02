<template>
<v-container>
    <v-row justify="space-around">
      <v-col cols="12">
        <v-select
          v-model="color"
          :items="colors"
          label="Color"
        ></v-select>
      </v-col>

      <v-switch
        v-model="drawer"
        class="ma-2"
        label="v-model"
      ></v-switch>

      <v-switch
        v-model="miniVariant"
        class="ma-2"
        label="Mini variant"
      ></v-switch>

      <v-switch
        v-model="expandOnHover"
        class="ma-2"
        label="Expand on hover"
      ></v-switch>

      <v-switch
        v-model="background"
        class="ma-2"
        label="Background"
      ></v-switch>

      <v-switch
        v-model="right"
        class="ma-2"
        label="Right"
      ></v-switch>
    </v-row>
  <v-card class="overflow-hidden">
    <v-navigation-drawer 
    v-model='drawer'
    :expand-on-hover="expandOnHover"
    :mini-variant="miniVariant"
    :right="right"
    app
    
    >
    </v-navigation-drawer>
  </v-card>
</v-container>
</template>

<script>
  export default {
    name: "Drawer",
    data() {
      return {
        drawer: true,
        expandOnHover:false,
        miniVariant: false,
        right: false,
        background: false,
        items : [
          {title: 'Dashboard', icon: 'mdi-view-dashboard'},
          {title: 'Photos', icon: 'mdi-image'},
          {title: 'About', icon: 'mdi-help-box'},
        ]
      }
    }  
  }
</script>