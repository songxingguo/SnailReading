// pages/read-detail/read-detail.js
var listData = require("../../js/listData.js");
Page({
  data: {
    readDetail:{
        'id': 0,
        'tit': '京东签约美国磁飞机公司 想在地下用磁悬浮送快递',
        'intro': '6 月 13 日，澎湃新闻记者获悉，京东集团（Nasdaq：JD）与美国磁飞机技术公司（Magplane Technology, Inc. Nasdaq：MAGP）签订战略合作协议',
        'words': '6 月 13 日，澎湃新闻记者获悉，京东集团（Nasdaq：JD）与美国磁飞机技术公司（Magplane Technology, Inc. Nasdaq：MAGP）签订战略合作协议，将各自发挥场景、技术优势，在仓储和物流领域开拓磁悬浮和直驱磁动力技术，推动其在智慧物流层面的应用落地 ... 美国磁飞机技术公司是 20 世纪 90 年代中期一群发明了磁飞机基本概念的麻省理工学院的工程师成立的，诞生于美国新罕布什尔州，早期 30 位工程师和科学家来自美国军方的工程部门和一些领先的工程公司 ... 京东还将与美国磁飞机共同加快磁动力直线驱动技术项目人才的培养，共同探索合作模式、组织模式、推广模式等，开发新业务、拓展新市场，在物流行业的多种场景中进行应用。',
        'author': '月夜听雪',
        'aPhoto': '/images/img/photo1.jpg',
        'bigImg': '/images/img/pic1.jpg',
        'clickNum': 228,
        'great': 40,
        'isCollected': false,
        'isFollowed': false
      }
  },
  onLoad: function (options) {
    var index = options.index;
    this.setData({
      readDetail: listData[index],
      isCollected: listData[index].isCollected,
      isFollowed: listData[index].isFollowed
    })
  },
  like:function () {
    var isCollected = this.data.isCollected;
    this.setData({
      isCollected: !isCollected
    })
  },
  follow:function() {
    var isFollowed = this.data.isFollowed;
    this.setData({
      isFollowed: !isFollowed
    })
  }
})