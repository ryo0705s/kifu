<template>
  <v-app>
    <v-card>
      <v-app-bar color="primary"
        ><v-app-bar-title>kifu</v-app-bar-title>
        <ul>
          <li>home</li>
          <li>login</li>
          <li>kifu</li>
          <li>history</li>
          <li>contact</li>
        </ul></v-app-bar
      >
      <!-- <v-navigation-drawer>
        <v-list>
          <v-list-item title="Navigation drawer"></v-list-item>
        </v-list>
      </v-navigation-drawer> -->
      <v-main style="min-height: 100vh" w-100><slot /> </v-main
      ><v-footer color="primary">
        <v-row>
          <v-col>home</v-col>
          <v-col>login</v-col>
          <v-col>kifu</v-col>
          <v-col>history</v-col>
          <v-col>contact</v-col>
        </v-row></v-footer
      >
    </v-card>
  </v-app>
</template>
<style></style>
