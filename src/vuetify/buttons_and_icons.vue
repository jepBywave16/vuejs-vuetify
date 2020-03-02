<template>
  <div>
        <h1>Homepage</h1>
    <v-btn class="pink white--text">Click Me</v-btn>
    <v-btn depressed color="pink">Click me again</v-btn>
    <v-btn flat color="pink">Click Flat</v-btn>

    <v-btn depressed class="pink white--text">
      <v-icon left>mail</v-icon>
      <span>Email me</span>
    </v-btn>

    <v-btn depressed small class="pink white--text">
      <v-icon left>mail</v-icon>
      <span>Email me</span>
    </v-btn>

    <v-btn depressed large class="pink white--text">
      <v-icon left>mail</v-icon>
      <span>Email me</span>
    </v-btn>

    <v-btn depressed small dark color='purple'>
      <v-icon left>mail</v-icon>
      <span>Email me</span>
    </v-btn>
  </div>
</template>