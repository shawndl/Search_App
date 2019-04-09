<template>
  <div>
    <BaseHeader />
    <SearchForm />
    <v-card class="pa-5" color="#f9f9f9">
      <KintellCards v-if="results" :results="results" />
      <BasePaginator :pages="paginate.pages"
                     :current="paginate.current"
                     @previous="onPrevious"
                     @next="onNext" />
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
      onNext: 'search/onNext',
      onPrevious: 'search/onPrevious'
    })
  }
}
</script>

<style scoped>

</style>
