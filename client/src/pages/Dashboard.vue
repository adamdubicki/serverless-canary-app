<!-- src/components/Hello.vue -->
<template>
  <div>
    <!-- Upper Navbar -->
    <v-app-bar app clipped-left color="yellow lighten-3" dense>
      <v-app-bar-nav-icon class="title black--text" @click.stop="drawerOpen = !drawerOpen" />
      <v-toolbar-title class="mr-5 align-center">
        <span class="title black--text">Canary16</span>
      </v-toolbar-title>
    </v-app-bar>

    <!-- Sidebar -->
    <v-navigation-drawer v-model="drawerOpen" app clipped>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-alarm-bell </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            Alarms
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-xml</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            Performance
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid>
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="10">
            <v-card>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator'
import gql from 'graphql-tag'
import axios from 'axios';

const applicationsQuery = gql`
  query {
    applications {
      applicationName
    }
  }
`;

@Component({
  apollo: {
    applications: {
      query: applicationsQuery
    }
  }
})
export default class Dashboard extends Vue {
  applications: [] = []
  drawerOpen: boolean = false;
  mounted() {}
}
</script>

<style lang="scss">

</style>