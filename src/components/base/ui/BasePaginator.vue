<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex sm5 offset-sm7>
        Pages {{ current }} of {{ pages }}
        <v-btn @click="$emit('previous')"
               :disabled="(current === 1)">
          Previous
        </v-btn>
        <v-btn @click="$emit('next')"
               :disabled="(current === pages)">
          Next
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
