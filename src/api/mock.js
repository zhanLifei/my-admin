var Mock = require('mockjs');
var Random = Mock.Random ;  //随机
// 登入
var login = Mock.mock('http://api.com/login',{
  "code": 200,
  "success" : "登入成功"
});
// 修改密码
var passwordEdit = Mock.mock('http://api.com/passwordEdit',{
  "code": 200,
  "success" : "修改密码成功"
});
// 建设成本管理表数据
var dataList = Mock.mock('http://api.com/dataList',{
  "code": 200,
  "data|100": [{
    'buildingName|1': ['1号线一期','2号线一期','3号线一期','4号线一期','5号线一期','6号线一期','7号线一期','8号线一期','9号线一期','10号线一期'],
    'id':'@id',
    'lineLength|99-1000':100,
    'avgDistance|99-1000':100,
    'total|99-1000':100,
    'lineIndex|99-1000':100,
    'preparationScope|1': ['左炮台站~海上田园东','岗厦北站~沙田站','大运站~田心站','福田口岸站-新南站','岗厦北站~沙田站','大运站~田心站','福田口岸站-新南站'],
    'area|1': ['南山区;宝安区','福田区,南山区,宝安区','罗湖区,龙岗区,龙华区,南山区','罗湖区','光明区','龙华区，宝安区，光明区','光明新区'],
    'renderPhase|1': ['估算','概算','投标','合同'],
    'versionName|1': ['批复版'],
    'preparationTime|1': ['2015-09', '2015-10', '2015-11', '2015-12', '2015-13', ],
  }],
});
// 建设成本管理筛选数据
var screenList = Mock.mock('http://api.com/screenList',{
    "code": 200,
    'data':[
        {   
            'id': 1,
            'type': 'radio',
            'title':'阶段',
            'children':[
              {'pid': 1, 'name': '估算'},
              {'pid': 1, 'name': '概算'},
              {'pid': 1, 'name': '招标'},
              {'pid': 1, 'name': '投标'},
              {'pid': 1, 'name': '合同'},
              {'pid': 1, 'name': '结算'}
            ]
        },
        {
          'id': 2,
          'type': 'radio',
          'title': '规划区',
          'children': [
            {'pid': 2, 'name': '一期'},
            {'pid': 2, 'name': '二期'},
            {'pid': 2, 'name': '三期'},
            {'pid': 2, 'name': '三期调整'},
            {'pid': 2, 'name': '四期'},
          ]
        },
        {
          'id': 3,
          'type': 'check',
          'title': '线路',
          'children': [
            {'pid': 3, 'name': '2号线三期'},
            {'pid': 3, 'name': '6号线二期'},
            {'pid': 3, 'name': '9号线二期'},
            {'pid': 3, 'name': '16号线一期'},
            {'pid': 3, 'name': '12号线一期'},
            {'pid': 3, 'name': '5号线一期'},
            {'pid': 3, 'name': '9号线一期'},
            {'pid': 3, 'name': '7号线一期'},
            {'pid': 3, 'name': '8号线一期'},
            {'pid': 3, 'name': '14号线一期'},
            {'pid': 3, 'name': '15号线一期'},
          ]
        },
        {
            'id': 4,
            'type': 'check',
            'title': '地区',
            'children': [
              {'pid': 4, 'name': '南山区'},
              {'pid': 4, 'name': '罗湖区'},
              {'pid': 4, 'name': '龙华区'},
              {'pid': 4, 'name': '宝安区'},
              {'pid': 4, 'name': '龙岗区'}, 
              {'pid': 4, 'name': '福田区'},
              {'pid': 4, 'name': '盐田区'},
              {'pid': 4, 'name': '光明区'},
            ]
        }
      ]
});

// app
// 轮播图
var banners = Mock.mock('http://api.com/banners',{
  "code": 200,
  "banners":[{"id":0,"photo":{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/data\/afficheimg\/20200227onkzcr.jpg","large":"http:\/\/atongweb.com\/data\/afficheimg\/20200227onkzcr.jpg"},"link":"details?id=84","title":"","sort":"0"},{"id":1,"photo":{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/data\/afficheimg\/20200312rzgsjz.jpg","large":"http:\/\/atongweb.com\/data\/afficheimg\/20200312rzgsjz.jpg"},"link":"details?id=85","title":"","sort":"1"},{"id":2,"photo":{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/data\/afficheimg\/20190722iamsyy.jpg","large":"http:\/\/atongweb.com\/data\/afficheimg\/20190722iamsyy.jpg"},"link":"details?id=81","title":"","sort":"2"},{"id":3,"photo":{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/data\/afficheimg\/20190722fgszmm.jpg","large":"http:\/\/atongweb.com\/data\/afficheimg\/20190722fgszmm.jpg"},"link":"details?id=80","title":"","sort":"3"},{"id":4,"photo":{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/data\/afficheimg\/20180612uydsfo.jpg","large":"http:\/\/atongweb.com\/data\/afficheimg\/20180612uydsfo.jpg"},"link":"details?id=74","title":"","sort":"4"}],"error_code":0
})

 
export {login,passwordEdit,dataList,screenList,banners}
