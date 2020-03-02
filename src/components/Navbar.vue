<template>
  <v-card>
    <nav >
      <v-app-bar app flat>
        <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">Todo</span>
          <span>Jepm16</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              color="grey"
              dark
              text
              v-on=" on "
            >
            MENU
            </v-btn>
          </template>
            <v-list>
              <v-list-item
                v-for="link in links"
                :key="link.title"
                router
                :to="link.route"
              >

                <v-list-item-title>{{ link.label }}</v-list-item-title>

              </v-list-item>
            </v-list>
          
        </v-menu>
        <v-btn text color='grey'>
          <span>Logout</span>
          <v-icon right>mdi-exit-to-app</v-icon>
        </v-btn>
      </v-app-bar>
    </nav>

    <v-navigation-drawer v-model="drawer" app class="indigo">
      <v-row class=" ">
        <v-col cols="12" class="mt-5 text-center">
          <v-avatar size="100">
            <img src="/avatar1.png">
          </v-avatar>
          <p class="white--text subheading mt-1">
            Jepm16
          </p>
          
        </v-col>
        <v-col cols="12" class="d-flex justify-center mb-3">
          <Popup />
        </v-col>
      </v-row>

      <v-divider class="white"></v-divider>
      
      <v-list :rounded='rounded'>
        <v-list-item
          v-for="link in links"
          :key='link.text'
          router
          :to='link.route'
          link

          >
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">{{ link.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
  </v-card>

</template>

<script>

  import Popup from './Popup'

  export default {
    name: "Navbar",
    components: {
      Popup,
    },
    data() {
      return {
        drawer: false,
        miniVariant: false,
        rounded: true,
        links: [
          {icon: "mdi-view-dashboard", label: "Dashboard", route: "/"},
          {icon: "mdi-folder", label: "My Project", route: "/project"},
          {icon: "mdi-account", label: "Team", route: "/team"},
        ],
        navLinks: [
          {title: 'Click me'},
          {title: 'Click me2'},
          {title: 'Click me3'},
          {title: 'Click me4'},
          
        ]
      }
    }
  }
</script>
