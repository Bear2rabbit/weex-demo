<template>
  <scroller>
   <div class="navigatorBox">
          <div style='width:250px;alignItems:center;textAlign:center;'><text class="navigatorTitle">测试demo</text></div>
        </div>
        <div class="navbox">
        <!-- 背景图 -->
          <image class="bgimg" src="/src/assets/6steambg.png"></image>
          <div class="btnBox center">
            <div class="btnImage3" @click="jump">
              <image class="btnImage1" src="/src/assets/6RoundedRectangle@2x.png"></image>
              <text class='btntext'>开始</text>
            </div>
          </div>
        </div>
  </scroller>
</template>
<script>

export default {
  name: "steam",
  data() {
    return {};
  },

  mounted() {},
  methods: {
    jump: function() {
      this.$router.push("/traditionalCooking");
    }
  }
};
</script>
<style scoped>
.navigatorBox {
  width: 750px;
  height: 95px;
  background-color: #000;
  flex-direction: row;
  flex-wrap: nowrap;
  position: fixed;
  top: 0px;
  overflow: hidden;
}
.gobackStyle {
  margin-left: 34px;
  margin-top: 35px;
  color: rgba(255, 255, 255, 1);
}
.navigatorTitle {
  font-size: 36px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 36px;
  margin-top: 35px;
}
.ellStyle {
  position: fixed;
  left: 670px;
  top: 30px;
  color: #fff;
}

.btnImage1 {
  width: 160px;
  height: 64px;
  position: absolute;
  left: 0;
  top: 0;
}
.btnImage3 {
  width: 160px;
  height: 64px;
  position: absolute;
  left: 113px;
  top: 0;
}
.btnBox {
  position: absolute;
  width: 386px;
  height: 64px;
  left: 183px;
  top: 514px;
  flex-direction: row;
  justify-content: space-between;
}
.btntext {
  font-size: 31px;
  color: #fff;
  position: absolute;
  left: 49px;
  top: 14px;
}


.navbox {
  width: 750px;
  height: 942px;
  background: cover;
  border-bottom-color: rgba(244, 244, 244, 1);
  border-bottom-style: solid;
  border-bottom-width: 20px;
  position: relative;
  margin-top: 95px;
}
.bgimg {
  width: 750px;
  height: 922px;
  position: absolute;
  top: 0px;
  left: 0px;
}
</style>