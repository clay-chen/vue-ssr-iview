<template>
  <div>
    <InputNumber :max="10" :min="1" v-model="value1"></InputNumber>
    <InputNumber
      :max="10000"
      v-model="value9"
      :formatter="value => `$ ${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')"
      :parser="value => value.replace(/$s?|(,*)/g, '')"
    ></InputNumber>
    <InputNumber
      :max="100"
      v-model="value10"
      :formatter="value => `${value}%`"
      :parser="value => value.replace('%', '')"
    ></InputNumber>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 1,
      value9: 1000,
      value10: 100
    };
  }
};
</script>
