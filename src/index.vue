
<template>
  <div class="wrapper">
    <router-view
      :onload=onload
      :devicename=deviceName
    ></router-view>

  </div>
</template>
<script>
let self;
export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-right", // 默认动态路由变化为slide-right
      showInfo: false,
      ftDevice: {},
      mac: "",
      onload: false,
      deviceName: ""
    };
  },
  
 
};
</script>

<style scoped>

</style>



