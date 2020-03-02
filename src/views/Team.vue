<template>
  <div class="team">
    <h1 class="title grey--text">Team</h1>
    <v-container class="my-6">
      <v-row>
        <v-col 
          cols="12"
          xs='12'
          sm='6'
          lg="3"
          v-for="person in team"
          :key="person.name"
        >
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="120" class="grey lighten-2">
                 <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left> mdi-message </v-icon>
                <span>MESSAGE</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        
      </v-row>
      
    </v-container>
  </div>

</template>

<script>
  export default {
   name: 'Team',
   data() {
     return {
       team: [
         { name: 'Jepm16', role: 'Web Developer', avatar: '/avatar1.png' },
         { name: 'Jap', role: 'Front End Developer', avatar: '/avatar2.png'},
         { name: 'Ajie', role: 'Mobile Developer', avatar: '/avatar3.png'},
         { name: 'Nora', role: 'Project Manager', avatar: '/avatar4.png'},
         { name: 'Me', role: 'Full Stack Developer', avatar: '/avatar5.png'},
       ]
     }
   }
  }
</script>
