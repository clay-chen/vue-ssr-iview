<style>
#app {
  height: 10000px;
  background-color: navajowhite;
}

.top {
  padding: 10px;
  background: rgba(0, 153, 229, 0.7);
  color: #fff;
  text-align: center;
  border-radius: 2px;
}
</style>
<template>
  <BackTop :height="10" :bottom="20">
    <div class="top">返回顶端</div>
  </BackTop>
</template>
<script>
export default {};
</script>
