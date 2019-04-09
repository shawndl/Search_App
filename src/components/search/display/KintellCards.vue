<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex sm4
              class="pt-5"
              v-for="result of results" :key="result.id">
        <KintellCard :result="result" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import KintellCard from './KintellCard'

export default {
  props: {
    results: {
      required: true,
      type: Array
    }
  },
  components: {
    KintellCard
  }
}
</script>

<style scoped>

</style>
