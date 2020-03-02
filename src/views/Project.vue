<template>
  <div class="project">
    <h1 class="title grey--text">Project</h1>
    <v-container>
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.id">
          <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card flat>
              <v-card-text class="grey--text">
                <div class="font-weight-bold">{{ project.due }}</div>
                <div>{{ project.content}}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
  export default {
   name: 'Project',
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
     myProjects() {
       return this.projects.filter(project => project.person === 'Jepm16')
     }
   }
   
  }
</script>