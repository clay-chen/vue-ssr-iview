<template>
    <div>
        <Affix :offset-top="10">
            <Button type="primary">Fix the position at the top of 100px at the top</Button>
        </Affix>
    </div>
</template>
<script>
  export default {
    methods: {
      change(status) {
        this.$Message.info(`Status: ${status}`);
      }
    }
  }
</script>

<style>
    #app {
        /*margin-top: 10px;*/
        height: 10000px;
    }
</style>
