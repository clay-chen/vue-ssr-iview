<template>
  <div>
    <div class="demo-avatar">
      <Avatar icon="ios-person" size="large"/>
      <Avatar icon="ios-person"/>
      <Avatar icon="ios-person" size="small"/>
    </div>
    <div class="demo-avatar">
      <Avatar shape="square" src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large"/>
      <Avatar shape="square" style="color: #f56a00;background-color: #fde3cf">U</Avatar>
      <Avatar shape="square" icon="ios-person" style="background-color: #87d068" size="small"/>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="stylus">
.ivu-avatar {
  margin: 10px 10px 0 0;
}
</style>
