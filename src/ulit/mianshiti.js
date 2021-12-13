const list = [
    {
        questTitle: '浏览器从输入URL到渲染完页面的整个过程',
        questAnswer: `<p class="h3">从输入URL到渲染出整个页面的过程包括三个部分：</p>
                      <p>1、DNS解析URL的过程</p>
                      <p>2、浏览器发送请求与服务器交互的过程</p>
                      <p>3、浏览器对接收到的html页面渲染的过程</p>
                      <p class="h3">一、DNS解析URL的过程</p>
                      <p>DNS解析的过程就是寻找哪个服务器上有请求的资源。因为ip地址不容易记忆，一般会使用URL域名（如www.baidu.com）作为网址。DNS解析就是将域名翻译成IP地址的过程。</p>
                      <p>具体过程：</p>
                      <p>1）浏览器缓存：浏览器会按照一定的频率 缓存DNS记录</p>
                      <p>2）操作系统缓存：如果浏览器缓存中找不到需要的DNS记录，就会取操作系统中找</p>
                      <p>3）路由缓存：路由器也有DNS缓存</p>
                      <p>4）ISP的DNS服务器：ISP有专门的DNS服务器应对DNS查询请求</p>
                      <p>5）根服务器：ISP的DNS服务器找不到之后，就要向根服务器发出请求，进行递归查询</p>
                      <p class="h3">二、浏览器与服务器交互过程</p>
                      <p>1）首先浏览器利用tcp协议通过三次握手与服务器建立连接</p>
                      <p>http请求包括header和body。header中包括请求的方式（get和post）、请求的协议 （http、https、ftp）、请求的地址ip、缓存cookie。body中有请求的内容。</p>
                      <p>2）浏览器根据解析到的IP地址和端口号发起http的get请求.</p>
                      <p>3）服务器接收到http请求之后，开始搜索html页面，并使用http返回响应报文</p>
                      <p>4）若状态码为200显示响应成功，浏览器接收到返回的html页面之后，开始进行页面的渲染</p>
                      <p class="h3">三、浏览器页面渲染过程</p>
                      <p>1）浏览器根据深度遍历的方式把html节点遍历成dom 树</p>
                      <p>2）将css解析成CSS DOM树</p>
                      <p>3）将dom树和CSS DOM树构造成render树</p>
                      <p>4）JS根据得到的render树 计算所有节点在屏幕中的位置，进行布局（回流）</p>
                      <p>5）遍历render树并调用硬件API绘制所有节点（重绘）</p>`
    },
    {
        questTitle: '渐进增强和优雅降级',
        questAnswer: `<p><strong>渐进增强：</strong>针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。</p>
                      <p><strong>优雅降级：</strong>一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。</p>`
    },
    {
        questTitle: '浏览器本地存',
        questAnswer: `<p><strong>Cookie：</strong>cookie 数据存放在客户的浏览器上，cookie 不是很安全，别人可以分析存放在本地的 COOKIE 并进行 COOKIE 欺骗，单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。</p>
                      <p><strong>session：</strong>session 会在一定时间内保存在服务器上。当访问增多，会比较占用服务器的性能，session比cookie比较安全</p>
                      <p><strong>localStorage：</strong>localStorage 用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。5M</p>
                      <p><strong>sessionStorage：</strong>sessionStorage 用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此 sessionStorage 不是一种持久化的本地存储，仅仅是会话级别的存储。</p>
                      <p class="h3">cookie  和 session  的区别 </p>
                      <p>cookie 数据存放在客户的浏览器上，session 数据放在服务器上<p>`
    },
    {
        questTitle: 'vue的生命周期',
        questAnswer: `<p><strong>beforeCreate：</strong>（创建前） 比佛亏等</p>
                      <p><strong>created：</strong>（创建后） 亏等</p>
                      <p><strong>beforeMount(载入前)  比佛茫疼</p>
                      <p><strong>mounted：</strong>（载入后）  茫疼的</p>
                      <p><strong>beforeUpdate：</strong>（更新前）比佛阿卜得特</p>
                      <p><strong>updated：</strong>（更新后） 阿卜得特</p>
                      <p><strong>beforeDestroy：</strong>（销毁前）比佛弟死特瑞</p>
                      <p><strong>destroyed：</strong>（销毁后） 弟死特瑞</p>`
    },
    {
        questTitle: 'vue的双向绑定原理',
        questAnswer: `<p>vue.js 则是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()(po luo pi ti)来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调</p>`
    },
    {
        questTitle: 'nextTick 的原理和用途',
        questAnswer: `<p class="h3">作用：</p>
                      <p>在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。</p>`
    },
    {
        questTitle: 'webpack',
        questAnswer: `<p class="h3">webpack是什么？</p>
                      <p>webpack是一个前端模块化方案，更侧重模块打包，我们可以把开发中的所有资源（图片、js文件、css文件等）都看成模块，通过loader（加载器）和plugins（插件）对资源进行处理，打包成符合生产环境部署的前端资源。</p>
                      <p class="h3">基本功能</p>
                      <p>代码转换、文件优化、代码分割、模块合并、自动刷新、代码校验、自动发布</p>
                      <p class="h3">loder 和 plugin的区别</p>
                      <p>loder是使webpack拥有加载和解析非js文件的能力</p>
                      <p>plugin可以拓展webpack的功能，使得webpack更加灵活。可以在构建的过程中通过webpack的api改变输出的结果</p>
                      `
    },
    {
        questTitle: 'ES6的新特性',
        questAnswer: `<p>let 和 const</p>
                      <p>模板字符串</p>
                      <p>箭头函数</p>
                      <p>对象和数组解构</p>
                      <p>点语法扩展运算符</p>
                     `
    },
    {
        questTitle: 'js数据类型有哪些？',
        questAnswer: `<p>null</p>
                      <p>undefined</p>
                      <p>number</p>
                      <p>string</p>
                      <p>symbol(塞某)</p>
                      <p>booler</p>
                      <p>，objeck</p>
                     `
    },
    {
        questTitle: 'objeck对象类型',
        questAnswer: `<p>JS 存在的一个悠久 Bug</p>
                      <p>在js最初版本的时候，000开头表示为对象，然而null 表示为全零， 所以将它错误的判断为 objeck</p>
                     `
    },
    {
        questTitle: 'typeof 与 instanceof',
        questAnswer: `<p class="h3">instanceof（in shen si of）</p>
                      <p>typeof  对于原始数据类型来说，除了null 都可以正常检测类型</p>
                      <p>typeof 对于对象来说，都会检测为 objeck 类型，所以说不能顺利的检测到底是什么类型</p>
                      <p>instanceof 判断一个正确的对象类型 返回 true 或 false</p>
                     `
    },
    {
        questTitle: '四则运算符',
        questAnswer: `<p>加法运算符不同于其他几个运算符，它有以下几个特点：</p>
                      <p>运算中其中一方为字符串，那么就会把另一方也转换为字符串</p>
                      <p>箭头函数</p>
                      <p>对象和数组解构</p>
                      <p>点语法扩展运算符</p>
                     `
    },
    {
        questTitle: 'vue的双向绑定原理',
        questAnswer: `<p>let 和 const</p>
                      <p>模板字符串</p>
                      <p>箭头函数</p>
                      <p>对象和数组解构</p>
                      <p>点语法扩展运算符</p>
                     `
    },
    {
        questTitle: 'vue的双向绑定原理',
        questAnswer: `<p>let 和 const</p>
                      <p>模板字符串</p>
                      <p>箭头函数</p>
                      <p>对象和数组解构</p>
                      <p>点语法扩展运算符</p>
                     `
    },
    {
        questTitle: 'vue的双向绑定原理',
        questAnswer: `<p>let 和 const</p>
                      <p>模板字符串</p>
                      <p>箭头函数</p>
                      <p>对象和数组解构</p>
                      <p>点语法扩展运算符</p>
                     `
    },
    {
        questTitle: 'vue的双向绑定原理',
        questAnswer: `<p>let 和 const</p>
                      <p>模板字符串</p>
                      <p>箭头函数</p>
                      <p>对象和数组解构</p>
                      <p>点语法扩展运算符</p>
                     `
    },
    {
        questTitle: 'vue的双向绑定原理',
        questAnswer: `<p>let 和 const</p>
                      <p>模板字符串</p>
                      <p>箭头函数</p>
                      <p>对象和数组解构</p>
                      <p>点语法扩展运算符</p>
                     `
    },
    {
        questTitle: 'vue的双向绑定原理',
        questAnswer: `<p>let 和 const</p>
                      <p>模板字符串</p>
                      <p>箭头函数</p>
                      <p>对象和数组解构</p>
                      <p>点语法扩展运算符</p>
                     `
    },
    {
        questTitle: 'vue的双向绑定原理',
        questAnswer: `<p>let 和 const</p>
                      <p>模板字符串</p>
                      <p>箭头函数</p>
                      <p>对象和数组解构</p>
                      <p>点语法扩展运算符</p>
                     `
    },
    {
        questTitle: 'vue的双向绑定原理',
        questAnswer: `<p>let 和 const</p>
                      <p>模板字符串</p>
                      <p>箭头函数</p>
                      <p>对象和数组解构</p>
                      <p>点语法扩展运算符</p>
                     `
    },
    {
        questTitle: 'vue的双向绑定原理',
        questAnswer: `<p>let 和 const</p>
                      <p>模板字符串</p>
                      <p>箭头函数</p>
                      <p>对象和数组解构</p>
                      <p>点语法扩展运算符</p>
                     `
    },
    {
        questTitle: 'vue的双向绑定原理',
        questAnswer: `<p>let 和 const</p>
                      <p>模板字符串</p>
                      <p>箭头函数</p>
                      <p>对象和数组解构</p>
                      <p>点语法扩展运算符</p>
                     `
    }
]

export default list