<template>
  <div class="page-content">
    <div class="cell">
      <h1>欢迎登入云商柜台操作系统</h1>
      <img class="index-img" src="../../static/img/zhyimg/zhy-tooling.png">
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {};
    },
    components: {},
    methods: {},
    ready: function() {}
  };
</script>

<style lang="css">
  .page-content {
    width: 100%;
    height: 100%;
    position: absolute!important;
    left:0px;
    background: #11b69d;
    text-align: center;
    display: table;
  }

  .page-content h1 {
    text-shadow: -12px 12px 0px rgba(50, 50, 50, 0.37);
    font-size: 98px;
    color: #ccc;
    font-weight: 400;
  }

  .page-content img {
    margin-top: 150px;
  }

  .page-content .cell {
    display: table-cell;
    vertical-align: middle;
  }
  .content_box{
    height:100%;
    background: #FFFFFF;
    position: absolute;
    right: 0px;
    z-index: 1;
  }
  .content_box_sel{
    width:100%;
    height:70px;
  }
</style>
