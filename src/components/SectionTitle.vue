



<template>
  <div :class="classType[type]">{{title}}</div>
</template>
<script>
export default {
  props: {
    title: String,
    type: {
      default: "listTitle",
      type: String
    }
  },
  data() {
    return {
      classType: {
        listTitle: "section-title",
        detailTitle: "section-detail-title"
      }
    };
  }
};
</script>


<style scoped lang="scss" >
.section-title {
  border-bottom: 1px solid #e8e9e9;
  height: 50px;
  font-size: 16px;
  color: #666;
  line-height: 50px;
  padding-left: 25px;
  position: relative;
  &::before {
    height: 24px;
    border: 2px solid #499df1;
    position: absolute;
    width: 0;
    content: "";
    display: inline-block;
    top: 12px;
    left: 0;
  }
}
.section-detail-title {
  border-bottom: 1px solid #e8e9e9;
  height: 50px;
  font-size: 16px;
  color: #666;
  line-height: 50px;
  padding-left: 15px;
  position: relative;
}
</style>
