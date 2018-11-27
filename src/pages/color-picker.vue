<template>
  <Row>
    <Col span="12">
      <ColorPicker v-model="color4" recommend></ColorPicker>
    </Col>
    <Col span="12">
      <ColorPicker v-model="color5" :colors="colors"/>
    </Col>
  </Row>
</template>
<script>
export default {
  data() {
    return {
      color4: "#19be6b",
      color5: "#19be6b",
      colors: ["#311B92", "#512DA8", "#673AB7", "#9575CD", "#D1C4E9"]
    };
  }
};
</script>
