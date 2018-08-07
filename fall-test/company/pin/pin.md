```html
<div class="parent">
  <div class="left"></div>
   <div class="right"></div>
<div>

<style>
 /*第一种浮动**/
.parent{
    height:400px;
    width:800px;
    border:1px solid red;
    position:relative;
}
.left{
    float:left;
    width:200px;
    background:yellow;
    height:100%;
}
.right{
    background:blue;
    height:100%;
    margin:auto;
    margin-left:200px;
}
</style>

<style>
 /*第二种inline-block布局**/
.parent{
    height:400px;
    width:800px;
    border:1px solid red;
    font-size:0;
}
.left{
  display:inline-block;
  width:200px;
  background:yellow;
  height:100%;
}
.right{
  display:inline-block;
  background:blue;
  height:100%;
  width:calc(100% - 200px);
}
</style>
<style>
 /*第三种flex布局**/
.parent{
    height:400px;
    width:800px;
    border:1px solid red;
    display:flex;
}
.left{
    width:200px;
    background:yellow;
    height:100%;
}
.right{
    flex:1;
    background:blue;
    height:100%;
}
</style>

<style>
 /*第四种绝对定位**/
.parent{
    height:400px;
    width:800px;
    border:1px solid red;
    positon:relative;
}
.left{
    width:200px;
    background:yellow;
    height:100%;
}
.right{
    position: absolute;
    background: blue;
    left:200px;
    top:0;
    right:0;
    bottom:0;
    margin:auto;
}
</style>




```