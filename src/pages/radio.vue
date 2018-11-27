<template>
  <div>
    <RadioGroup v-model="phone">
      <Radio label="apple">
        <Icon type="logo-apple"></Icon>
        <span>Apple</span>
      </Radio>
      <Radio label="android">
        <Icon type="logo-android"></Icon>
        <span>Android</span>
      </Radio>
      <Radio label="windows">
        <Icon type="logo-windows"></Icon>
        <span>Windows</span>
      </Radio>
    </RadioGroup>
    <br>
    <br>
    <RadioGroup v-model="animal">
      <Radio label="金斑蝶"></Radio>
      <Radio label="爪哇犀牛"></Radio>
      <Radio label="印度黑羚"></Radio>
    </RadioGroup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phone: "apple",
      animal: "爪哇犀牛"
    };
  }
};
</script>
