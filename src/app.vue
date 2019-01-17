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
    <router-view></router-view>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      title: "hello world",
      time: Date.now()
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    $("div").css("margin-top", "30px");
  },

  methods: {},

  watch: {}
};
</script>
<style lang='less'>
body {
  position: relative;
  height: 100%;
  background: #f4f4f4;
}
div {
  background: #f4f4f4;
}
</style>