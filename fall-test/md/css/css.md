### opacity:0,visibility:hidden,display:none的区别

- 是否占据空间
> display:none,不占据空间，不会渲染，会引起重布局
> visiblity：占据空间，引起重绘
> opacity:占据空间，引起重绘
- 子元素是否隐藏
> display:子类不会显示，设置子类可见也不显示
> visiblity:子类不显示，但是设置子类可见，子类显示
> opacity:子类不显示,设置子类为opacity:1,子类不显示
- 事件是否销毁
> display:绑定事件无作用
> visiblity:当不显示时，绑定的事件无作用,显示则绑定事件有作用
> opacity:无论显示与否，绑定的事件均有作用.

### margin折叠，如何防止margin折叠

首先需要了解一个概念,BFC(Block formatting contexts)

浮动元素和绝对定位元素，非块级盒子的块级容器（例如 inline-blocks, table-cells, 和 table-captions），以及overflow值不为“visiable”的块级盒子，都会为他们的内容创建新的BFC（块级格式上下文）,BFC中的元素的布局是不受外界的影响

折叠的结果：
- 两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值。
- 两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值。
- 两个外边距一正一负时，折叠结果是两者的相加的和。


产生折叠的必备条件：margin必须是邻接的

- 必须是处于常规文档流（非float和绝对定位）的块级盒子,并且处于同一个BFC当中。
- 没有线盒，没有空隙（clearance），没有padding和border将他们分隔开
- 都属于垂直方向上相邻的外边距，可以是下面任意一种情况
- 元素的margin-top与其第一个常规文档流的子元素的margin-top
- 元素的margin-bottom与其下一个常规文档流的兄弟元素的margin-top
- height为auto的元素的margin-bottom与其最后一个常规文档流的子元素的margin-bottom
- 高度为0并且最小高度也为0，不包含常规文档流的子元素，并且自身没有建立新的BFC的元素的margin-top和margin-bottom


消除margin重叠
- 创建了新的BFC的元素（例如浮动元素或者'overflow'值为'visible'以外的元素）与它的子元素的外边距不会折叠著作权归作者所有。
- 浮动元素不与任何元素的外边距产生折叠，float:left;float:right;float:top;float:bottom;
- 绝对定位，fixed和absolute 
- inline-block元素不与任何元素的外边距产生折叠
- overflow 值不为 visible 的块元素

### DOMContentLoaded和load的区别

DOMContentLoaded:当初始的HTML文档被完全加载和解析完成触发，无需等待样式表/图像和子框架的完成加载.
load:当一个资源及其依赖资源已完成加载时，将触发load事件

###  line-height有无单位的区别

有一些属性可以接收不带单位的数值（意思就是一个不带长度单位的数字），如line-height、z-index和font-weight（700等于bold，400等于normal，如此类推）。你也可以在需要长度单位的地方（如px、em、rem）使用一个不带单位的0，因为长度已经是0了，带不带单位也无所谓了 —— 0px 等于 0% 等于 0em。

不带单位的0只可以表示长度单位和百分比的值，譬如padding、border和width。而对于一些特殊的情况，如度数（degrees）或者像秒这样基于时间的值（time-based values），是不可以使用不带单位的0的。

line-height属性最特别的地方，在于同时支持带单位和不带单位的值。你应该保持使用不带单位的数值，因为这样就可以从父元素继承。我们在页面上写点文字，看看它是怎么表现的吧。把下面代码添加到你的样式表。

```html
<body>
  <p class="about-us">
    We have built partnerships with small farms around the world to
    hand-select beans at the peak of season. We then carefully roast in
    small batches to maximize their potential.  </p>
</body>
```
给body声明一个line-height，然后文档的其他元素会从这里继承。页面的展示符合预期，不管你对页面的其他元素的字号大小做了什么改变。

[不带单位的行高，会在每个后代元素下重新计算出实际值 ]


把代码片段的内容添加到你的样式表。段落（<p>）继承了1.2的行高。因为字号是32px（2em 16px，浏览器默认字号大小），所以本地的行高计算值是38.4px（32px 1.2）。这会给段落的行间距留下比较合适的空间。

[ 代码片段 2.21 对line-height使用不带单位的值 ]
```css
body {
  line-height: 1.2;               1
}
.about-us {
  font-size: 2em;
}
```
1 后代元素继承不带单位的值

如果你给行高设定了一个带单位的值，你可能会得到意想不到的结果，如图2.12那样，行间文字互相重叠了，代码片段2.22则是造成这个结果的CSS代码。

[ 图 2.12 继承行高造成的行间互叠 ]


[ 代码片段 2.22 带单位的行高值造成意外的结果 ]
```css
body {
  line-height: 1.2em;             1
}
.about-us {
  font-size: 2em;                 2
}
```
1 后代元素继承了计算值（19.2px）
2 等于32px

这样的结果源于一次奇怪的继承：当一个元素是用带单位的值声明的，那么它的后代元素会继承计算结果值。当行高属性是用类似em来声明时，它的值会先被计算，然后计算后的值会传到任何继承它的后代元素。对于line-height这个属性来说，如果子元素有跟父元素不一样字号大小的情况，就会导致意想不到的结果，譬如文字间的遮挡。

长度 —— CSS中用来描述距离测量的正式用语。它是一个带单位的数字，如5px。长度有两种类型：绝对的和相对的。百分比跟长度很类似，但严格来说，百分比不能叫长度。

当你（对某个属性）使用不带单位的数字，声明的值会被继承，也就是说这个值会在子元素中用来重新计算子元素域下的值，而这个通常是你想要的效果。使用不带单位的数字，可以让你在body上设定一个行高，然后什么都不用管，页面上其他元素会默认继承，除非在某个特定的地方你想要做一个额外的样式



