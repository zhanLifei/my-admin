var Mock = require('mockjs')
var Random = Mock.Random
var login = Mock.mock('http://api.com/login',{
  "success" : "登入成功"
});

var dataList = Mock.mock('http://api.com/dataList',{
  "data|100": [{
    'buildingName|1': ['1号线一期','2号线一期','3号线一期','4号线一期','5号线一期','6号线一期','7号线一期','8号线一期','9号线一期','10号线一期'],
    'id':'@id',
    'lineLength|99-1000':100,
    'avgDistance|99-1000':100,
    'total|99-1000':100,
    'lineIndex|99-1000':100,
    'preparationScope|1': ['1号线一期','2号线一期','3号线一期','4号线一期','5号线一期','6号线一期','7号线一期','8号线一期','9号线一期','10号线一期'],
    'renderPhase|1': ['左炮台站~海上田园东','岗厦北站~沙田站','大运站~田心站','福田口岸站-新南站','岗厦北站~沙田站','大运站~田心站','福田口岸站-新南站'],
    'area|1': ['估算','概算','投标','合同'],
    'versionName|1': ['批复版'],
    'preparationTime|1': ['2015-09', '2015-10', '2015-11', '2015-12', '2015-13', ],
  }],
});
 
var screenList = Mock.mock('http://api.com/screenList',{
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

var treeData = Mock.mock('http://api.com/treeData',{
  "treeData|10":[],
})
 
export {login,dataList,screenList,treeData}
