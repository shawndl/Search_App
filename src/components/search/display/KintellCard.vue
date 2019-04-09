<template>
  <v-card class="mt-5" height="380" style="position: relative">
    <div>
      <v-icon class="text-xs-left mt-4 ml-4 primary--text font-weight-light"
              style="float: left">
        favorite_border
      </v-icon>
      <v-avatar color="grey" size="100" style="margin-top: -25px; margin-left: -48px">
        <img :src="result.user.avatarUrl" alt="avatar">
      </v-avatar>
    </div>
    <v-card-title primary-title>
      <div class="justify-center">
        <p>{{ result.user.firstName + ' ' + result.user.lastName }}</p>
        <p class="primary--text headline">{{ result.title }}</p>
        <div>
          <v-btn small round dark v-for="skill of result.skills" :key="skill.id"
                 color="#bcf1ed"
                 class="success--text">
            {{ skill.name }}
          </v-btn>
        </div>
      </div>
    </v-card-title>
    <div class="footer neutral">
      <p class="text-xs-right alternative--text pr-3 pt-3 align-center wrap">
        ${{ rate }} {{ result.user.currency}} / min
      </p>
    </div>
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

<style scoped>
  .footer {
    color: #f9f9f9;
    height: 50px;
    width: 100%;
    bottom: 0;
    position: absolute;
  }
  .footer > p {
    margin: 0 0 0 15px
  }
</style>
