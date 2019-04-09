<template>
  <v-card>
    <v-avatar color="grey lighten-4" size="100" style="margin-top: -25px">
      <img :src="result.user.avatarUrl" alt="avatar">
    </v-avatar>

    <v-card-title primary-title>
      <div>
        <p>{{ result.user.firstName + ' ' + result.user.lastName }}</p>
        <h3>{{ result.title }}</h3>
        <div>
          <v-btn small round dark v-for="skill of result.skills" :key="skill.id">
            {{ skill.name }}
          </v-btn>
        </div>
      </div>
      <div class="mb-1">
        <p class="text-xs-right mr-3">
          ${{ rate }} {{ result.user.currency}} / min
        </p>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    result: {
      required: true,
      type: Object
    }
  },
  computed: {
    rate () {
      return this.result.rate.toFixed(2)
    }
  }
}
</script>
