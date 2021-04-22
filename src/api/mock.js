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
var productDataList = Mock.mock('',{
  "code": 200,
  "hot_products":[{"goods_desc":"","is_shipping":0,"id":79,"category":37,"brand":16,"shop":1,"sku":"ECS000079","default_photo":{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201907\/goods_img\/79_G_1563805996948.jpg","large":"http:\/\/atongweb.com\/images\/201907\/goods_img\/79_G_1563805996948.jpg"},"photos":[{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201907\/thumb_img\/79_thumb_P_1563805996275.jpg","large":"http:\/\/atongweb.com\/images\/201907\/goods_img\/79_P_1563805996612.jpg"}],"name":"\u5c0f\u7c73cc9","price":"2158.79","current_price":1619.1,"discount":null,"sales_count":0,"score":1700,"good_stock":333,"comment_count":0,"is_liked":0,"review_rate":"0%","intro_url":null,"share_url":"http:\/\/atongweb.com\/h5\/?u=8#\/product\/?product=79","created_at":1563805996,"updated_at":1589530720,"properties":[]},{"goods_desc":"","is_shipping":0,"id":80,"category":36,"brand":17,"shop":1,"sku":"ECS000080","default_photo":{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201907\/goods_img\/80_G_1563807106951.jpg","large":"http:\/\/atongweb.com\/images\/201907\/goods_img\/80_G_1563807106951.jpg"},"photos":[{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201907\/thumb_img\/80_thumb_P_1563807106584.jpg","large":"http:\/\/atongweb.com\/images\/201907\/goods_img\/80_P_1563807106432.jpg"}],"name":"\u534e\u4e3ap30","price":"8145.59","current_price":6109.2,"discount":null,"sales_count":0,"score":6700,"good_stock":333,"comment_count":0,"is_liked":1,"review_rate":"0%","intro_url":null,"share_url":"http:\/\/atongweb.com\/h5\/?u=8#\/product\/?product=80","created_at":1563807106,"updated_at":1588074418,"properties":[{"id":185,"name":"\u989c\u8272","attrs":[{"attr_price":11,"id":259,"attr_name":"\u767d\u8272","is_multiselect":false},{"attr_price":22,"id":260,"attr_name":"\u84dd\u8272","is_multiselect":false},{"attr_price":33,"id":261,"attr_name":"\u9ed1\u8272","is_multiselect":false}],"is_multiselect":false},{"id":210,"name":"\u914d\u4ef6","attrs":[{"attr_price":212,"id":262,"attr_name":"\u7ebf\u63a7\u8033\u673a","is_multiselect":true},{"attr_price":333,"id":263,"attr_name":"\u84dd\u7259\u8033\u673a","is_multiselect":true}],"is_multiselect":true}]},{"goods_desc":"","is_shipping":0,"id":83,"category":39,"brand":20,"shop":1,"sku":"ECS000083","default_photo":{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201912\/goods_img\/83_G_1577176758834.jpg","large":"http:\/\/atongweb.com\/images\/201912\/goods_img\/83_G_1577176758834.jpg"},"photos":[{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201912\/thumb_img\/83_thumb_P_1577176758173.jpg","large":"http:\/\/atongweb.com\/images\/201912\/goods_img\/83_P_1577176758341.jpg"}],"name":"vivo X30 Pro 5G \u79d8\u94f6 8GB+128GB 60\u500d\u8d85\u7ea7\u53d8\u7126 6400\u4e07\u56db\u6444\u62cd\u7167\u624b\u673a \u667a\u6167\u65d7\u8230\u65b0\u54c1\u624b\u673a \u5168\u7f51\u901a5G\u624b\u673a X30 Pro","price":"4797.59","current_price":3598.2,"discount":null,"sales_count":0,"score":3900,"good_stock":1,"comment_count":0,"is_liked":1,"review_rate":"0%","intro_url":null,"share_url":"http:\/\/atongweb.com\/h5\/?u=8#\/product\/?product=83","created_at":1577176758,"updated_at":1577176917,"properties":[]},{"goods_desc":"","is_shipping":0,"id":81,"category":38,"brand":19,"shop":1,"sku":"ECS000081","default_photo":{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201907\/goods_img\/81_G_1563807621740.jpg","large":"http:\/\/atongweb.com\/images\/201907\/goods_img\/81_G_1563807621740.jpg"},"photos":[{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201907\/thumb_img\/81_thumb_P_1563807621217.jpg","large":"http:\/\/atongweb.com\/images\/201907\/goods_img\/81_P_1563807621835.jpg"}],"name":"oppok3","price":"2280.00","current_price":1710,"discount":null,"sales_count":0,"score":1900,"good_stock":333,"comment_count":0,"is_liked":1,"review_rate":"0%","intro_url":null,"share_url":"http:\/\/atongweb.com\/h5\/?u=8#\/product\/?product=81","created_at":1563807621,"updated_at":1564498294,"properties":[]}],"recently_products":[{"goods_desc":"","is_shipping":0,"id":80,"category":36,"brand":17,"shop":1,"sku":"ECS000080","default_photo":{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201907\/goods_img\/80_G_1563807106951.jpg","large":"http:\/\/atongweb.com\/images\/201907\/goods_img\/80_G_1563807106951.jpg"},"photos":[{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201907\/thumb_img\/80_thumb_P_1563807106584.jpg","large":"http:\/\/atongweb.com\/images\/201907\/goods_img\/80_P_1563807106432.jpg"}],"name":"\u534e\u4e3ap30","price":"8145.59","current_price":6109.2,"discount":null,"sales_count":0,"score":6700,"good_stock":333,"comment_count":0,"is_liked":1,"review_rate":"0%","intro_url":null,"share_url":"http:\/\/atongweb.com\/h5\/?u=8#\/product\/?product=80","created_at":1563807106,"updated_at":1588074418,"properties":[{"id":210,"name":"\u914d\u4ef6","attrs":[{"attr_price":212,"id":262,"attr_name":"\u7ebf\u63a7\u8033\u673a","is_multiselect":true},{"attr_price":333,"id":263,"attr_name":"\u84dd\u7259\u8033\u673a","is_multiselect":true}],"is_multiselect":true}]},{"goods_desc":"<p><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/h20-1.jpg\" width=\"990\" height=\"1098\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/h20-2.jpg\" width=\"990\" height=\"1221\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/h20-3.jpg\" width=\"990\" height=\"1292\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/h20-4.jpg\" width=\"990\" height=\"1168\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/h20-5.jpg\" width=\"990\" height=\"1142\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/h20-6.jpg\" width=\"990\" height=\"1107\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/h20-7.jpg\" width=\"990\" height=\"1542\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/h20-8.jpg\" width=\"990\" height=\"811\" alt=\"\" \/>&nbsp;<\/p>","is_shipping":0,"id":75,"category":36,"brand":17,"shop":1,"sku":"ECS000075","default_photo":{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201806\/goods_img\/75_G_1528801017710.jpg","large":"http:\/\/atongweb.com\/images\/201806\/goods_img\/75_G_1528801017710.jpg"},"photos":[{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201806\/thumb_img\/75_thumb_P_1528801017985.jpg","large":"http:\/\/atongweb.com\/images\/201806\/goods_img\/75_P_1528801017910.jpg"},{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201806\/thumb_img\/75_thumb_P_1528808700851.jpg","large":"http:\/\/atongweb.com\/images\/201806\/goods_img\/75_P_1528808700426.jpg"},{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201806\/thumb_img\/75_thumb_P_1528808700459.jpg","large":"http:\/\/atongweb.com\/images\/201806\/goods_img\/75_P_1528808700088.jpg"}],"name":"\u534e\u4e3ap20pro","price":"5985.59","current_price":"44.00","discount":{"price":"44.00","start_at":1530518400,"end_at":1656748800},"sales_count":"1","score":4900,"good_stock":200,"comment_count":1,"is_liked":1,"review_rate":"100%","intro_url":"http:\/\/api.atongweb.com\/v2\/product.intro.75","share_url":"http:\/\/atongweb.com\/h5\/?u=8#\/product\/?product=75","created_at":1528800886,"updated_at":1587828547,"properties":[{"id":185,"name":"\u989c\u8272","attrs":[{"attr_price":11,"id":240,"attr_name":"\u84dd\u8272","is_multiselect":false},{"attr_price":13,"id":241,"attr_name":"\u91d1\u8272","is_multiselect":false}],"is_multiselect":false}]},{"goods_desc":"","is_shipping":0,"id":84,"category":37,"brand":16,"shop":1,"sku":"ECS000084","default_photo":{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/202002\/goods_img\/84_G_1582205856966.jpg","large":"http:\/\/atongweb.com\/images\/202002\/goods_img\/84_G_1582205856966.jpg"},"photos":[{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/202002\/thumb_img\/84_thumb_P_1582205856953.jpg","large":"http:\/\/atongweb.com\/images\/202002\/goods_img\/84_P_1582205856003.jpg"}],"name":"\u5c0f\u7c7310","price":"5758.80","current_price":4319.1,"discount":null,"sales_count":0,"score":4700,"good_stock":100,"comment_count":0,"is_liked":0,"review_rate":"0%","intro_url":null,"share_url":"http:\/\/atongweb.com\/h5\/?u=8#\/product\/?product=84","created_at":1582205856,"updated_at":1583999826,"properties":[]},{"goods_desc":"","is_shipping":0,"id":81,"category":38,"brand":19,"shop":1,"sku":"ECS000081","default_photo":{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201907\/goods_img\/81_G_1563807621740.jpg","large":"http:\/\/atongweb.com\/images\/201907\/goods_img\/81_G_1563807621740.jpg"},"photos":[{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201907\/thumb_img\/81_thumb_P_1563807621217.jpg","large":"http:\/\/atongweb.com\/images\/201907\/goods_img\/81_P_1563807621835.jpg"}],"name":"oppok3","price":"2280.00","current_price":1710,"discount":null,"sales_count":0,"score":1900,"good_stock":333,"comment_count":0,"is_liked":1,"review_rate":"0%","intro_url":null,"share_url":"http:\/\/atongweb.com\/h5\/?u=8#\/product\/?product=81","created_at":1563807621,"updated_at":1564498294,"properties":[]}],"good_products":[{"goods_desc":"<p><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/1(2).jpg\" width=\"750\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/2.jpg\" width=\"1125\" height=\"658\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/3.jpg\" width=\"1125\" height=\"907\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/4.jpg\" width=\"750\" height=\"1194\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/5.jpg\" width=\"750\" height=\"1096\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/6.jpg\" width=\"750\" height=\"898\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/7.jpg\" width=\"750\" height=\"1909\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/8.jpg\" width=\"750\" height=\"1327\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/9.jpg\" width=\"750\" height=\"1182\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/10.jpg\" width=\"750\" height=\"1631\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/11(2).jpg\" width=\"750\" height=\"2405\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/12.jpg\" width=\"750\" height=\"2053\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/13.jpg\" width=\"750\" height=\"1764\" alt=\"\" \/><\/p>","is_shipping":0,"id":85,"category":38,"brand":0,"shop":1,"sku":"ECS000085","default_photo":{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/202003\/goods_img\/85_G_1583942027932.jpg","large":"http:\/\/atongweb.com\/images\/202003\/goods_img\/85_G_1583942027932.jpg"},"photos":[{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/202003\/thumb_img\/85_thumb_P_1583942027890.jpg","large":"http:\/\/atongweb.com\/images\/202003\/goods_img\/85_P_1583942027694.jpg"},{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/202003\/thumb_img\/85_thumb_P_1584002867271.jpg","large":"http:\/\/atongweb.com\/images\/202003\/goods_img\/85_P_1584002867452.jpg"},{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/202003\/thumb_img\/85_thumb_P_1584002867114.jpg","large":"http:\/\/atongweb.com\/images\/202003\/goods_img\/85_P_1584002867301.jpg"}],"name":"OPPO Find X2 \u8d85\u611f\u5b98\u65d7\u8230 3K\u5206\u8fa8\u7387 120Hz\u8d85\u611f\u5c4f \u591a\u7126\u6bb5\u5f71\u50cf\u7cfb\u7edf \u9a81\u9f99865 65w\u95ea\u5145 8GB+128GB\u78a7\u6ce2 \u53cc\u6a215G\u624b\u673a","price":"6598.80","current_price":4949.1,"discount":null,"sales_count":0,"score":5400,"good_stock":100,"comment_count":0,"is_liked":1,"review_rate":"0%","intro_url":"http:\/\/api.atongweb.com\/v2\/product.intro.85","share_url":"http:\/\/atongweb.com\/h5\/?u=8#\/product\/?product=85","created_at":1583942027,"updated_at":1614164610,"properties":[]},{"goods_desc":"","is_shipping":0,"id":79,"category":37,"brand":16,"shop":1,"sku":"ECS000079","default_photo":{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201907\/goods_img\/79_G_1563805996948.jpg","large":"http:\/\/atongweb.com\/images\/201907\/goods_img\/79_G_1563805996948.jpg"},"photos":[{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201907\/thumb_img\/79_thumb_P_1563805996275.jpg","large":"http:\/\/atongweb.com\/images\/201907\/goods_img\/79_P_1563805996612.jpg"}],"name":"\u5c0f\u7c73cc9","price":"2158.79","current_price":1619.1,"discount":null,"sales_count":0,"score":1700,"good_stock":333,"comment_count":0,"is_liked":0,"review_rate":"0%","intro_url":null,"share_url":"http:\/\/atongweb.com\/h5\/?u=8#\/product\/?product=79","created_at":1563805996,"updated_at":1589530720,"properties":[]},{"goods_desc":"","is_shipping":0,"id":80,"category":36,"brand":17,"shop":1,"sku":"ECS000080","default_photo":{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201907\/goods_img\/80_G_1563807106951.jpg","large":"http:\/\/atongweb.com\/images\/201907\/goods_img\/80_G_1563807106951.jpg"},"photos":[{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201907\/thumb_img\/80_thumb_P_1563807106584.jpg","large":"http:\/\/atongweb.com\/images\/201907\/goods_img\/80_P_1563807106432.jpg"}],"name":"\u534e\u4e3ap30","price":"8145.59","current_price":6109.2,"discount":null,"sales_count":0,"score":6700,"good_stock":333,"comment_count":0,"is_liked":1,"review_rate":"0%","intro_url":null,"share_url":"http:\/\/atongweb.com\/h5\/?u=8#\/product\/?product=80","created_at":1563807106,"updated_at":1588074418,"properties":[{"id":210,"name":"\u914d\u4ef6","attrs":[{"attr_price":212,"id":262,"attr_name":"\u7ebf\u63a7\u8033\u673a","is_multiselect":true},{"attr_price":333,"id":263,"attr_name":"\u84dd\u7259\u8033\u673a","is_multiselect":true}],"is_multiselect":true}]},{"goods_desc":"<p><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/h20-1.jpg\" width=\"990\" height=\"1098\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/h20-2.jpg\" width=\"990\" height=\"1221\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/h20-3.jpg\" width=\"990\" height=\"1292\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/h20-4.jpg\" width=\"990\" height=\"1168\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/h20-5.jpg\" width=\"990\" height=\"1142\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/h20-6.jpg\" width=\"990\" height=\"1107\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/h20-7.jpg\" width=\"990\" height=\"1542\" alt=\"\" \/><img src=\"http:\/\/atongweb.com\/images\/upload\/Image\/h20-8.jpg\" width=\"990\" height=\"811\" alt=\"\" \/>&nbsp;<\/p>","is_shipping":0,"id":75,"category":36,"brand":17,"shop":1,"sku":"ECS000075","default_photo":{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201806\/goods_img\/75_G_1528801017710.jpg","large":"http:\/\/atongweb.com\/images\/201806\/goods_img\/75_G_1528801017710.jpg"},"photos":[{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201806\/thumb_img\/75_thumb_P_1528801017985.jpg","large":"http:\/\/atongweb.com\/images\/201806\/goods_img\/75_P_1528801017910.jpg"},{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201806\/thumb_img\/75_thumb_P_1528808700851.jpg","large":"http:\/\/atongweb.com\/images\/201806\/goods_img\/75_P_1528808700426.jpg"},{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201806\/thumb_img\/75_thumb_P_1528808700459.jpg","large":"http:\/\/atongweb.com\/images\/201806\/goods_img\/75_P_1528808700088.jpg"}],"name":"\u534e\u4e3ap20pro","price":"5985.59","current_price":"44.00","discount":{"price":"44.00","start_at":1530518400,"end_at":1656748800},"sales_count":"1","score":4900,"good_stock":200,"comment_count":1,"is_liked":1,"review_rate":"100%","intro_url":"http:\/\/api.atongweb.com\/v2\/product.intro.75","share_url":"http:\/\/atongweb.com\/h5\/?u=8#\/product\/?product=75","created_at":1528800886,"updated_at":1587828547,"properties":[{"id":185,"name":"\u989c\u8272","attrs":[{"attr_price":11,"id":240,"attr_name":"\u84dd\u8272","is_multiselect":false},{"attr_price":13,"id":241,"attr_name":"\u91d1\u8272","is_multiselect":false}],"is_multiselect":false}]},{"goods_desc":"","is_shipping":0,"id":81,"category":38,"brand":19,"shop":1,"sku":"ECS000081","default_photo":{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201907\/goods_img\/81_G_1563807621740.jpg","large":"http:\/\/atongweb.com\/images\/201907\/goods_img\/81_G_1563807621740.jpg"},"photos":[{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201907\/thumb_img\/81_thumb_P_1563807621217.jpg","large":"http:\/\/atongweb.com\/images\/201907\/goods_img\/81_P_1563807621835.jpg"}],"name":"oppok3","price":"2280.00","current_price":1710,"discount":null,"sales_count":0,"score":1900,"good_stock":333,"comment_count":0,"is_liked":1,"review_rate":"0%","intro_url":null,"share_url":"http:\/\/atongweb.com\/h5\/?u=8#\/product\/?product=81","created_at":1563807621,"updated_at":1564498294,"properties":[]},{"goods_desc":"","is_shipping":0,"id":82,"category":37,"brand":16,"shop":1,"sku":"ECS000082","default_photo":{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201907\/goods_img\/82_G_1563879900285.jpg","large":"http:\/\/atongweb.com\/images\/201907\/goods_img\/82_G_1563879900285.jpg"},"photos":[{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201907\/thumb_img\/82_thumb_P_1563879900694.jpg","large":"http:\/\/atongweb.com\/images\/201907\/goods_img\/82_P_1563879900541.jpg"}],"name":"\u5c0f\u7c73mix3","price":"3066.00","current_price":2299.5,"discount":null,"sales_count":0,"score":2500,"good_stock":333,"comment_count":0,"is_liked":0,"review_rate":"0%","intro_url":null,"share_url":"http:\/\/atongweb.com\/h5\/?u=8#\/product\/?product=82","created_at":1563879900,"updated_at":1564498286,"properties":[]},{"goods_desc":"","is_shipping":0,"id":73,"category":27,"brand":16,"shop":1,"sku":"ECS000073","default_photo":{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201806\/goods_img\/73_G_1527944088868.jpg","large":"http:\/\/atongweb.com\/images\/201806\/goods_img\/73_G_1527944088868.jpg"},"photos":[{"width":null,"height":null,"thumb":"http:\/\/atongweb.com\/images\/201806\/thumb_img\/73_thumb_P_1527944088146.jpg","large":"http:\/\/atongweb.com\/images\/201806\/goods_img\/73_P_1527944088515.jpg"}],"name":"\u5c0f\u7c73\u7535\u89c6","price":"2748.00","current_price":2061,"discount":null,"sales_count":"1","score":2200,"good_stock":199,"comment_count":0,"is_liked":1,"review_rate":"0%","intro_url":null,"share_url":"http:\/\/atongweb.com\/h5\/?u=8#\/product\/?product=73","created_at":1527944088,"updated_at":1563683049,"properties":[]}],"error_code":0
})
 
export {login,passwordEdit,dataList,screenList,banners,productDataList}
