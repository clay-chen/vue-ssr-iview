<template>
    <div>
        <Button type="primary" v-for="(route, index) in routes" @click="handleClick(route)" :key="index">
            {{getString(route)}}
        </Button>
    </div>
</template>

<script>
  export default {
    data() {
      return {routes: []}
    },
    methods: {
      getString(route) {
        return route.path.substring(1)
      },
      handleClick(route) {
        this.$router.push(route.path)
      }
    },
    mounted() {
      this.routes = this.$router.options.routes.filter(v => v.path !== '/');
    }
  }
</script>

<style>
    Button {
        margin: 10px;
    }
</style>
