<template>
  <v-dialog 
    max-width="600px"
    v-model="dialog"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        v-on=" on "
        class="success"
        text
      >
        Add New Project
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        Add a New Project
      </v-card-title>

      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          :lazy-validation="lazy"
        >

          <v-text-field
            v-model="title"
            :counter="50"
            :rules="titleRules"
            label="Name"
            prepend-icon="mdi-folder"
            required
          ></v-text-field>

          <v-textarea
            name="content"
            label="Content"
            v-model="content"
            prepend-icon="mdi-pencil"
            :rules="contentRules"
            required
          >
            
          </v-textarea>

          <v-row>
            <v-col
              cols="12"
              md="6"
              xs="12"
            >
              <v-menu>
                <template
                  v-slot:activator="{ on }"
                >
                  <v-text-field
                    :value="formattedDate"
                    label="Due Date"
                    prepend-icon="mdi-calendar"
                    v-on="on"
                    :rules="[v => !!v || 'Due date is required']"
                    required
                  >

                  </v-text-field>
                </template>
                <v-date-picker
                  v-model="dueDate"
                >

                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col 
              cols="12"
              md="6"
              xs="12"
            >
              <v-select
                v-model="priority"
                :items="items"
                :rules="[v => !!v || 'Priority is required']"
                label="Priority"
                required
              >

              </v-select>
            </v-col>
          </v-row>
         

        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="!valid" class="mx-0 mt-3" color="success" :loading="loading" text v-on:click="submit">
          Add Project
        </v-btn>
      </v-card-actions>

    </v-card>

    
  </v-dialog>
</template>

<script>

import moment from 'moment'
import db from '@/fb'

export default {
  name: 'Popup',
  data() {
    return {
      
      title: '',
      content: '',
      dueDate: null,
      priority: '',
      items: [
        'Urgent',
        'High',
        'Medium',
        'Low'
      ],
      titleRules: [
        v => !!v || 'Title is required',
        v => v.length <= 50 || 'Title must be less than 500 character'
      ],
      contentRules: [
        v => !!v || 'Content is required',
        v => !!v || 'Content must be less than 200 character'
      ],
      dialog: false,
      valid: true,
      lazy: false,
      loading: false
      
    }
  },
  computed: {
    formattedDate() {
      return this.dueDate ? moment(this.dueDate).format('MMM Do YYYY') : ''
    }
  },
  methods: {
    async submit() {
      if(this.$refs.form.validate()) {
        this.loading = true
        const newProject = {
          title: this.title,
          content: this.content,
          person: "Jepm16",
          dueDate: moment(this.dueDate).format('MMM Do YYYY'),
          priority: this.priority,
          status: 'ongoing'
        }
        db.collection('projects').add(newProject).then(() =>
          this.loading = false
        )
        
      }
    }
  }
}
</script>