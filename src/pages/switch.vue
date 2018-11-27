<template>
  <div>
    <iSwitch>
      <span slot="open">开</span>
      <span slot="close">关</span>
    </iSwitch>
    <iSwitch>
      <Icon type="md-checkmark" slot="open"></Icon>
      <Icon type="md-close" slot="close"></Icon>
    </iSwitch>
    <br>
    <br>
    <iSwitch size="large">
      <span slot="open">开启</span>
      <span slot="close">关闭</span>
    </iSwitch>
    <iSwitch size="large">
      <span slot="open">ON</span>
      <span slot="close">OFF</span>
    </iSwitch>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus">
.ivu-switch {
  margin-left: 5px;
}
</style>
