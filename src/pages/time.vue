<template>
    <div>
        <Time :time="time2"/>
        <br>
        <Time :time="time2" type="date"/>
        <br>
        <Time :time="time2" type="datetime"/>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        time2: (new Date()).getTime() - 86400 * 3 * 1000
      }
    }
  }
</script>
