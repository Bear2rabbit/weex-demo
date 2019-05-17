<template>
  <div>
    <div class="navigatorBox" @click='toBack'>
     
      <text class="navigatorTitle" >details</text>
    </div>
    <div class="navBox" >
      <image
        src="/src/assets/6steambg.png"
        class="bgimg"
      ></image>
    </div>
    <div class="timePickBox">
      <div class="startBtn">
        <text class="startCook">dddddddddd</text>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  name: "traditionalCooking",
  data() {
    return {
    };
  },
 
  methods: {

    toBack: function() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.navigatorBox {
  width: 750px;
  height: 95px;
  background-color: #fff;
  flex-direction: row;
  flex-wrap: nowrap;
}
.gobackStyle {
  margin-left: 34px;
  margin-top: 35px;
  color: #000;
}
.navigatorTitle {
  font-size: 36px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: #000;
  line-height: 36px;
  margin-top: 35px;
  margin-left: 214px;
}

.navBox {
  width: 750px;
  height: 420px;
  /* position: relative; */
  /* margin-top: 95px; */
}
.bgimg {
  width: 750px;
  height: 420px;
  /* position: absolute;
  top: 0px;
  left: 0px; */
}


.startBtn {
  width: 670px;
  height: 96px;
  margin-top: 20px;
  background-color: rgba(31, 31, 31, 1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  margin-left: 41px;
}
.startCook {
  font-size: 36px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(200, 175, 112, 1);
  line-height: 36px;
  margin-left: 265px;
  margin-top: 31px;
  margin-bottom: 20px;
}
</style>