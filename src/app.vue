<template>
  <div>
      {{title}}
      <p>
          {{time|dateTimeFormat}}
       </p>
       <span v-btnPer="false">
           看不见我
       </span>
       <span v-btnPer="true">
           看不见我
       </span>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
        title:"hello world",
        time:Date.now()
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='less'>
body{
    position: relative;
    height: 100%;
    background: #f4f4f4;
}
div{
    background: #f4f4f4;
}
</style>