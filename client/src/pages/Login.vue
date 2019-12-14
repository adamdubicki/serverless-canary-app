<!-- src/components/Hello.vue -->
<template>
  <div>
    <h1>LOGIN</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator'
import gql from 'graphql-tag'
import axios from 'axios';

@Component
export default class Login extends Vue {
  mounted() {}
}
</script>

<style lang="scss">

</style>