<template>
  <div>
    <Badge :count="5" type="primary">
      <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge :count="5" type="success">
      <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge :count="5" type="normal">
      <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge :count="5" type="info">
      <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge :count="5" type="error">
      <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge :count="5" type="warning">
      <a href="#" class="demo-badge"></a>
    </Badge>
  </div>
</template>
<script>
export default {};
</script>

<style>
.demo-badge {
  width: 50px;
  height: 50px;
  display: block;
  background-color: aquamarine;
  margin-left: 20px;
}
</style>
