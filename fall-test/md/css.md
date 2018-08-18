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