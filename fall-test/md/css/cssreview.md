### background-size属性吗，具体是干嘛的呢
设置背景图片大小。图片可以保有其原有的尺寸，或者拉伸到新的尺寸，或者在保持其原有比例的同时缩放到元素的可用空间的尺寸

默认属性为 background-size: auto auto
```css
/* 关键字 */
background-size: cover
background-size: contain

/* 一个值: 这个值指定图片的宽度，图片的高度隐式的为auto */
background-size: 50%
background-size: 3em
background-size: 12px
background-size: auto

/* 两个值 */
/* 第一个值指定图片的宽度，第二个值指定图片的高度 */
background-size: 50% auto
background-size: 3em 25%
background-size: auto 6px
background-size: auto auto

/* 逗号分隔的多个值：设置多重背景 */
background-size: auto, auto     /* 不同于background-size: auto auto */
background-size: 50%, 25%, 25%
background-size: 6px, auto, contain
```

background属性是一个简写属性，可以在一次声明中定义一个或多个属性：background-clip、background-color、background-image、background-origin、background-position、background-repeat、background-size，和 background-attachment。

-  background-attachment :scroll | fixed | local
决定背景是在视口中固定的还是随包含它的区块滚动的
- background-clip :  border-box | padding-box | content-box
设置元素的背景（背景图片或颜色）是否延伸到边框下面。
- background-color 
置元素的背景色, 属性的值为颜色值或关键字"transparent"二者选其一.
- background-image
为一个元素设置一个或者多个背景图像.
- background-origin： border-box | padding-box | content-box
指定背景图片background-image 属性的原点位置的背景相对区域
**当使用 background-attachment 为fixed时，该属性将被忽略不起作用**
- background-position
默认值：0% 0%
background-position：top | bottom | left | right | center
background-position: 25% 75% | 0 0 | 10ch 8em
background-position: 0 0, center
background-position: bottom 10px right 20px;
background-position: right 3em bottom 10px;
background-position: bottom 10px right;
background-position: top right 10px;
[mdn介绍](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position)
20.让你用CSS实现一个类似于Word文档的布局，你怎么做？还有其他方法吗
- background-repeat: repeat | repeat-x | repeat-y | space | round | no-repeat
性定义背景图像的重复方式
/* 双值语法: 水平horizontal | 垂直vertical */
background-repeat: repeat space;
background-repeat: repeat repeat;

21.CSS实现一个旋转的动画如何实现，animation和transition有什么区别
2D rotate() `transform: rotate(30deg);`
3D转换 rotateX() rotateY() `transform: rotateY(130deg);`

transition关注的是CSS property的变化，property值和时间的关系是一个三次贝塞尔曲线。不管是动态设置的还是非动态设置的过渡效果，只要过渡效果指定的属性值发生了变化就会触发过渡效果，只有开始和结束两个帧。

animation作用于元素本身而不是样式属性，可以使用关键帧的概念，应该说可以实现更自由的动画效果。如果是非动态设置的，那么页面加载完后就会触发动画效果；如果是动态设置的，那么设置完后（假设没有设置 delay）就会触发动画效果。可以定义多个关键帧。
[transition和animation的区别](https://blog.csdn.net/u013243347/article/details/79943045)

22.听说过逐帧动画吗，如果让你实现，你会如何实现

23.前端如何实现直播的功能你了解吗，让你设计弹幕效果如何实现

26.inline-block知道吗，应用场景都有哪些呢

27.如何实现图片的懒加载呢，如何才能监听到图片进入屏幕，利用了哪些属性