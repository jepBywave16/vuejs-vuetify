<template>
  <div class="dashboard">
    <h1 class="title grey--text">Dashboard</h1>

    <v-container class="my-5">

      <v-row>
        <v-tooltip top>
          <template
            v-slot:activator='{ on }'
          >
            <v-btn 
              small 
              text 
              color='grey'
              v-on=" on " 
              v-on:click="sortBy('title')">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By Project Name</span>
            </v-btn>
            
          </template>
          <span>Sort by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template 
            v-slot:activator="{ on }"
          >
            <v-btn 
              small 
              text 
              color='grey' 
              v-on=" on "
              v-on:click="sortBy('person')"
            >
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By Person</span>
            </v-btn>
          </template>
          <span>Sort by Person</span>
        </v-tooltip>
        
      </v-row>

      <v-card flat v-for="project in projects" :key="project.id">
        <v-row :class="`pa-3 project ${project.status}`" no-gutters>
          <v-col 
            cols='12'
            xs='12'
            md="6"
          >
            <div class="caption grey--text">Project Name</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col 
            cols="12"
            xs='6'
            sm='4'
            md="2"
          >
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col 
            cols="12"
            xs='6'
            sm='4'
            md='2'
          >
            <div class="caption grey--text">Due By</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col 
            cols="12"
            xs='2'
            sm="4"
            md="2"
          >
            <div class="d-flex justify-end">
              <v-chip small :class="`${project.status} white--text`" >{{ project.status }}</v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>

  // import _ from 'lodash'
  export default {
  name: 'Dashboard',
  data() {
    return {
      projects: [
        { id: 1, title: 'Design a new website', person: 'Jepm16', due: '1st of march 2020', status: 'complete', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus exercitationem cumque culpa quibusdam tempore beatae rem deserunt aliquam accusamus sunt iure consequuntur magni incidunt ut, animi qui laboriosam aspernatur quidem!'},
        { id: 2, title: 'Code up the Homepage', person: 'Jap', due: '3rd of march 2020', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, explicabo commodi? Tempora esse mollitia iste omnis facere, libero ab hic nobis aliquam ad sunt, est quae perspiciatis voluptas aliquid. Rem?'},
        { id: 3, title: 'Design a video thump nail', person: 'Ajie', due: '4th of march 2020', status: 'ongoing', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, enim veniam officiis nemo dolore reprehenderit tenetur? Quae aspernatur adipisci, sapiente eum ipsam saepe vero, aliquam, cupiditate debitis reiciendis ad dicta.'},
        { id: 4, title: 'Create a community forum', person: 'Jepm16', due: 'end of march 2020', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, laudantium quas. Expedita totam officia, nulla qui soluta corrupti nemo nam natus atque perspiciatis incidunt pariatur libero explicabo mollitia suscipit eum.'},
        { id: 5, title: 'Create a community forum', person: 'Jepm16', due: 'end of march 2020', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, laudantium quas. Expedita totam officia, nulla qui soluta corrupti nemo nam natus atque perspiciatis incidunt pariatur libero explicabo mollitia suscipit eum.'},
        { id: 6, title: 'Create a community forum', person: 'Jepm16', due: 'end of march 2020', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, laudantium quas. Expedita totam officia, nulla qui soluta corrupti nemo nam natus atque perspiciatis incidunt pariatur libero explicabo mollitia suscipit eum.'},
        { id: 7, title: 'Create a community forum', person: 'Jepm16', due: 'end of march 2020', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, laudantium quas. Expedita totam officia, nulla qui soluta corrupti nemo nam natus atque perspiciatis incidunt pariatur libero explicabo mollitia suscipit eum.'},
      ],
    }
  },
  computed: {
  },
  methods: {
    sortBy(props){
      this.projects.sort((a, b) => a[props] < b[props] ? -1 : 2)
    }
  },
  created() {
  }
}
</script>

<style scoped>

  .project.complete {
    border-left: 4px solid #3cd1c2;
  }
  .project.ongoing {
    border-left: 4px solid orange;
  }
  .project.overdue {
    border-left: 4px solid tomato;
  }
  .v-chip.complete {
    background: #3cd1c2;
  }
  .v-chip.ongoing {
    background: #ffaa2c;
  }
  .v-chip.overdue {
    background: #f83e70;
  }

</style>
