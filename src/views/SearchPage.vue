<template>
  <div>
    <BaseHeader />
    <SearchForm />
    <KintellCards />
    <BasePaginator />
  </div>
</template>

<script>
import SearchForm from '@/components/search/form/SearchForm'
import KintellCards from '@/components/search/display/KintellCards'

export default {
  components: {
    SearchForm, KintellCards
  }
}
</script>

<style scoped>

</style>
