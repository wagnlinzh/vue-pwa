# pwa-vue

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 关于主文档的离线

* 主文档离线,需要设置 ignoreUrlParametersMatching 将参数匹配
* 主文档离线之后的更新问题: 会有很长时间的延迟  ## 不会, 之所以会,是因为之前操作中把 service-worker 也缓存了导致的 ,service-worker 文件不应该缓存. 唯一版本更新的 凭证
* 确定下问题,是由于 github-page 导致的更新慢还是 主文档

## 关于 service worker 的更新

* Service Worker 作为离线缓存的核心，它的更新意味着 App 版本的更新。 它的更新是由浏览器触发、在独立进程中进行的
* 独立的更新进程。安装和更新进程都是独立的进程，渲染进程和当前的 Service Worker 会同时启动，安装和更新不影响用户使用当前 App，这里 Web App 比 Native 更加轻量
* 零客户端时更新。为了不打扰用户，只有在用户关闭了所有旧版页面之后（因为 Service Worker 是 shared worker）新的 Worker 才会被激活
* 更新过程（Soft Update）[https://w3c.github.io/ServiceWorker/#soft-update]由浏览器触发，只有逐字节比对不同时才会启动 更新算法（Update Algorithm)[https://w3c.github.io/ServiceWorker/#update-algorithm]
* Service Worker 的特殊之处除了由浏览器触发更新之外，还应用了特殊的缓存策略： 如果该文件已 24 小时没有更新，当 Update 触发时会强制更新。这意味着最坏情况下 Service Worker 会每天更新一次

## 关于 Soft Update & HTTP 缓存

* Service Worker 控制着整个 App 的离线缓存。 为了避免 Service Worker 缓存自己导致死锁无法升级，通常将 sw.js 本身的缓存直接交给 HTTP 服务器缓存。但 sw.js 并不是页面的脚本资源，它的更新由浏览器触发（多次 register() 同一个 Service Worker 不会触发更新)，并应用了特殊的缓存策略。
* Service Worker 的更新算法（这里是指 Soft Update）只在下列情况会被触发：
* 注册了一个新的 URL 不同的 Service Worker
* 功能事件被触发，比如 push, sync 等
* 页面导航，包括 fetch（此时请求为 non-subresource request，因此也会触发 Soft Update）
* 触发更新算法后，浏览器会检查并遵循 sw.js 的文件缓存设置，比如 max-age。
* 如果不设置 sw.js 的 HTTP 缓存，每次页面加载该文件都会被请求
* 如果设置了 10s 的缓存，则 10s 内浏览器不会再次访问服务器

到此为止这些行为都是标准的 HTTP 缓存。

## Service Woker

* Push
* Fetch
* Cache
* install
* activate
* fetch

## Notices & log

* service-worker.js 不要缓存,这是控制缓存和更新的唯一凭据,如果它也设置了缓存,则更新会很麻烦
* 再对 service-worker 的理解上,可以把这种缓存技术,视为对文件的读写操作,尤其是写操作的互斥关系,这样就比较好理解了
* 关于 queryparams , 只能通过对 queryparams 设置白名单的方法来匹配 url, 对于未设置的参数,无法 cache 到主文档
* 关于 测试环境,test 环境是非 https 的情况,所以我们需要用 Charles 将其转成 https 的然后测试
* 关于 是否可以会退到无 service-worker 的版本,手动删除 service-worker, 从源码和 build 中删除,发布后,对于线上,如果不去手动线上的 service worker 必须等 max-age 过期. 更细: 貌似 max-age 过期依然没有鸟用,因为依然能 catch 到
* rm service-worker, 看来不能通过删除 service-worker ,需要用 service-worker 的删除特性.尝试一下先
* Android 上的发送到桌面之后,无法更新 service worker,感觉是 Android 的问题
