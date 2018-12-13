<template>
  <div class="op-home-content">
    <!-- top -->
   <div class="home-top">
     <div class="date"></div>
     <div class="slogan"></div>
   </div>
   <!-- center -->
   <div class="home-center"></div>
   <!-- bottom -->
   <div class="home-bottom"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    GLOBALSIDESWITCH("false");
  },
}
</script>

<style lang="scss" scoped>
.op-home-content{
  background-color: #F9F9FC;
  padding: 0 20px;
  
  .home-top{
    height: 90px;
    margin-bottom:20px; 
    background: #F9F9FC;
    // background: 
    position: relative;
    .date{
      height: 100%;
      width: 250px;
      background: #fff;

    }
    .slogan{
      height: 100%;
      position: absolute;
      left:270px ;
      right: 0px;
      top: 0;
      bottom: 0;
      background: #fff;
    }

  }
  .home-center{
    height: 335px;
    margin-bottom:20px; 
    position: relative;
  }
  .home-bottom{
    position: relative;
    padding: 25px 100px 20px;
  }
}
</style>
