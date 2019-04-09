<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex sm4>
        <v-text-field v-model="search"
                      placeholder="Search..."
                      solo
                      append-icon="search">
        </v-text-field>
      </v-flex>
      <v-flex sm4>
        <v-select v-model="sortBy"
                  :items="sorts"
                  label="Sort By...">
        </v-select>
      </v-flex>
      <v-flex sm4>
        <v-checkbox v-model="sortAsc" label="ASC"></v-checkbox>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    search: {
      get () {
        return this.$store.state.search.filters.search
      },
      set (value) {
        this.$store.commit('search/SET_SEARCH', value)
      }
    },
    sortBy: {
      get () {
        return this.$store.state.search.sort.type
      },
      set (value) {
        this.$store.commit('search/SET_SORT_TYPE', value)
      }
    },
    sortAsc: {
      get () {
        return this.$store.state.search.sort.asc
      },
      set (value) {
        console.log(value)
        this.$store.commit('search/SET_SORT_ASC', value)
      }
    }
  },
  data () {
    return {
      sorts: ['none', 'title', 'rate']
    }
  }
}
</script>

<style scoped>

</style>
