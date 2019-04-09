<template>
  <div>
    <BaseHeader />
    <SearchForm />
    <v-card class="pa-5" color="#f9f9f9">
      {{ results }}
      <KintellCards />
      <BasePaginator />
    </v-card>
  </div>
</template>

<script>
import SearchForm from '@/components/search/form/SearchForm'
import KintellCards from '@/components/search/display/KintellCards'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    SearchForm, KintellCards
  },
  computed: {
    ...mapGetters({
      paginate: 'search/paginate',
      results: 'search/results'
    })
  },
  created () {
    this.setResults()
  },
  methods: {
    ...mapActions({
      setResults: 'search/setResults',
      setPaginate: 'search/setPaginate'
    })
  },
}
</script>

<style scoped>

</style>
