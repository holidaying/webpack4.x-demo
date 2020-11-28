<template>
  <div>
    {{title}}
    <button @click="changeI18">国际化</button>
    <p style="color:red">国际化测试{{$t('message.greeting')}}</p>
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
    <button @click="goComponets('top')">点击我去top</button>
    
    <button @click="goComponets('bottom')">点击我去bottom</button>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      title: "hello world",
      lang:'zh',
      time: Date.now()
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
      console.log($version);
    $("div").css("margin-top", "30px");
  },

  methods: {
      goComponets(type){
          this.$router.push(type);
      },
      changeI18(){
        this.lang = this.$i18n.locale === 'zh' ? 'en' : 'zh'
        this.$i18n.locale = this.lang
      }
  },

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