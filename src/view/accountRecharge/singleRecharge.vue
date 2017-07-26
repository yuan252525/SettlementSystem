<!--单笔充值申请页面-->
<template>
  <div class="sel-box">
    <div class='sel-box-sel'>
      <div class="breadcrumb">
        <Breadcrumb class="col" separator=">">
          <Breadcrumb-item class="col">账号充值</Breadcrumb-item>
          <Breadcrumb-item class="col">绑定属性</Breadcrumb-item>
        </Breadcrumb>
      </div>
    </div>
    <!--主体-->
    <div class="jxdd_box">
      <Table border :columns="columns5" :data="data5"></Table>
    </div>
  </div>
</template>

<script>
    import api from 'api';
    import axios from 'common/httpUtils';
    import consts from 'common/consts';

    export default{
      data () {
        return {
          columns5: [
            {
              title: '日期',
              key: 'date',
              sortable: true
            },
            {
              title: '姓名',
              key: 'name'
            },
            {
              title: '年龄',
              key: 'age',
              sortable: true
            },
            {
              title: '地址',
              key: 'address'
            }
          ],
          data5: [
            {
              name: '王小明',
              age: 18,
              address: '北京市朝阳区芍药居',
              date: '2016-10-03'
            },
            {
              name: '张小刚',
              age: 25,
              address: '北京市海淀区西二旗',
              date: '2016-10-01'
            },
            {
              name: '李小红',
              age: 30,
              address: '上海市浦东新区世纪大道',
              date: '2016-10-02'
            },
            {
              name: '周小伟',
              age: 26,
              address: '深圳市南山区深南大道',
              date: '2016-10-04'
            },{
              name: '王小明',
              age: 18,
              address: '北京市朝阳区芍药居',
              date: '2016-10-03'
            },
            {
              name: '张小刚',
              age: 25,
              address: '北京市海淀区西二旗',
              date: '2016-10-01'
            },
            {
              name: '李小红',
              age: 30,
              address: '上海市浦东新区世纪大道',
              date: '2016-10-02'
            },
            {
              name: '周小伟',
              age: 26,
              address: '深圳市南山区深南大道',
              date: '2016-10-04'
            },{
              name: '李小红',
              age: 30,
              address: '上海市浦东新区世纪大道',
              date: '2016-10-02'
            },
            {
              name: '周小伟',
              age: 26,
              address: '深圳市南山区深南大道',
              date: '2016-10-04'
            },{
              name: '王小明',
              age: 18,
              address: '北京市朝阳区芍药居',
              date: '2016-10-03'
            },
            {
              name: '张小刚',
              age: 25,
              address: '北京市海淀区西二旗',
              date: '2016-10-01'
            },
            {
              name: '李小红',
              age: 30,
              address: '上海市浦东新区世纪大道',
              date: '2016-10-02'
            },
            {
              name: '周小伟',
              age: 26,
              address: '深圳市南山区深南大道',
              date: '2016-10-04'
            },{
              name: '李小红',
              age: 30,
              address: '上海市浦东新区世纪大道',
              date: '2016-10-02'
            },
            {
              name: '周小伟',
              age: 26,
              address: '深圳市南山区深南大道',
              date: '2016-10-04'
            },{
              name: '王小明',
              age: 18,
              address: '北京市朝阳区芍药居',
              date: '2016-10-03'
            },
            {
              name: '张小刚',
              age: 25,
              address: '北京市海淀区西二旗',
              date: '2016-10-01'
            },
            {
              name: '李小红',
              age: 30,
              address: '上海市浦东新区世纪大道',
              date: '2016-10-02'
            },
            {
              name: '周小伟',
              age: 26,
              address: '深圳市南山区深南大道',
              date: '2016-10-04'
            },{
              name: '李小红',
              age: 30,
              address: '上海市浦东新区世纪大道',
              date: '2016-10-02'
            },
            {
              name: '周小伟',
              age: 26,
              address: '深圳市南山区深南大道',
              date: '2016-10-04'
            },{
              name: '王小明',
              age: 18,
              address: '北京市朝阳区芍药居',
              date: '2016-10-03'
            },
            {
              name: '张小刚',
              age: 25,
              address: '北京市海淀区西二旗',
              date: '2016-10-01'
            },
            {
              name: '李小红',
              age: 30,
              address: '上海市浦东新区世纪大道',
              date: '2016-10-02'
            },
            {
              name: '周小伟',
              age: 26,
              address: '深圳市南山区深南大道',
              date: '2016-10-04'
            },{
              name: '李小红',
              age: 30,
              address: '上海市浦东新区世纪大道',
              date: '2016-10-02'
            },
            {
              name: '周小伟',
              age: 26,
              address: '深圳市南山区深南大道',
              date: '2016-10-04'
            },{
              name: '王小明',
              age: 18,
              address: '北京市朝阳区芍药居',
              date: '2016-10-03'
            },
            {
              name: '张小刚',
              age: 25,
              address: '北京市海淀区西二旗',
              date: '2016-10-01'
            },
            {
              name: '李小红',
              age: 30,
              address: '上海市浦东新区世纪大道',
              date: '2016-10-02'
            },
            {
              name: '周小伟',
              age: 26,
              address: '深圳市南山区深南大道',
              date: '2016-10-04'
            },{
              name: '李小红',
              age: 30,
              address: '上海市浦东新区世纪大道',
              date: '2016-10-02'
            },
            {
              name: '周小伟',
              age: 26,
              address: '深圳市南山区深南大道',
              date: '2016-10-04'
            },{
              name: '王小明',
              age: 18,
              address: '北京市朝阳区芍药居',
              date: '2016-10-03'
            },
            {
              name: '张小刚',
              age: 25,
              address: '北京市海淀区西二旗',
              date: '2016-10-01'
            },
            {
              name: '李小红',
              age: 30,
              address: '上海市浦东新区世纪大道',
              date: '2016-10-02'
            },
            {
              name: '周小伟',
              age: 26,
              address: '深圳市南山区深南大道',
              date: '2016-10-04'
            },{
              name: '李小红',
              age: 30,
              address: '上海市浦东新区世纪大道',
              date: '2016-10-02'
            },
            {
              name: '周小伟',
              age: 26,
              address: '深圳市南山区深南大道',
              date: '2016-10-04'
            },{
              name: '王小明',
              age: 18,
              address: '北京市朝阳区芍药居',
              date: '2016-10-03'
            },
            {
              name: '张小刚',
              age: 25,
              address: '北京市海淀区西二旗',
              date: '2016-10-01'
            },
            {
              name: '李小红',
              age: 30,
              address: '上海市浦东新区世纪大道',
              date: '2016-10-02'
            },
            {
              name: '周小伟',
              age: 26,
              address: '深圳市南山区深南大道',
              date: '2016-10-04'
            }
          ]
        }
      },
      methods:{
        requestLogisticsData () {
            console.log(111111111)
          let data = {
            row_count: 10,
            row_start_number:0
          }
          axios({
            method: 'POST',
            url: api.Api.getLogisticsData,
            data:data
          }).then(response => {
            if (response.error_code == consts.ERROR_CODE.SUCCESS) {
            } else {
              this.$Modal.error({
                title: "错误提示",
                content: response.error_code + ': ' + response.error_message
              });
            }
          }).catch(error => {
            console.log(error)
          });
        },
      },
      route: {
        data: function (transition) {
            this.requestLogisticsData();
        }
      },
      mounted:function(){
        this.requestLogisticsData();
      },
    };
</script>

<style>
  .sel-box-sel .ivu-breadcrumb-item-separator{
    color: #000000;
  }
</style>
