<template>
  <div>
    <Row>
      <Col span="12">col-12</Col>
      <Col span="12">col-12</Col>
    </Row>
    <br>
    <Row>
      <Col span="8">col-8</Col>
      <Col span="8">col-8</Col>
      <Col span="8">col-8</Col>
    </Row>
    <br>
    <Row>
      <Col span="6">col-6</Col>
      <Col span="6">col-6</Col>
      <Col span="6">col-6</Col>
      <Col span="6">col-6</Col>
    </Row>
  </div>
</template>

<style lang="stylus">
.ivu-col:nth-child(even) {
  background-color: indianred;
}

.ivu-col:nth-child(odd) {
  background-color: lightblue;
}
</style>