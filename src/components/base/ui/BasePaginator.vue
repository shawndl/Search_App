<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex sm5 offset-sm7>
        <span id="paginateInfo">Page {{ current }} of {{ pages }}</span>
        <v-btn @click="$emit('previous')"
               id="nextPaginate"
               :disabled="(current === 1)">
          PREV PAGE
        </v-btn>
        <v-btn @click="$emit('next')"
               id="prevPaginate"
               :disabled="(current === pages)">
          NEXT PAGE
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    pages: {
      type: Number,
      required: true
    },
    current: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
