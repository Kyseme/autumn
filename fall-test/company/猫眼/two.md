<div>
<div></div>
<ul >
<li></li> -------> 1
<li></li>--------->2
.... ...
.... ...
</ul>
</div>

ulDOM.innerHTML
<ul>xxxxxxxx</ul>
ulDOM.HTML ????

$.html(dom)  利用innerHTML？ 
ulDom.innerHTML

function getHtml(dom){
var node = dom.nodeText;'ul'
var temp = dom.createElement("div");
temp.appendChild(dom);
return temp.innerHTML;
}




如何批量插入li到ul中

function insertNchildNodes(ele, parent,   N) {
var dom = doucmenet.doucmentFragement;
for(let i =0; i<N; i++){
var li = document.createElement('li');
li.innerHTML = 'li';
dom.append(li);
}
parent.append(dom);
}

function inserNchildNodes('li', parent, N) {
var str ="";
for(let i =0;i<N;i++){
str +=`<li></li>`
}
parent.innHTML = str;
}

ulDom = document.querySelector('ul');
ulDom.children;
ulDom.onclick = function(e){
var target = e.target;

var target = e.target || e.srcElement;


}
for(let  i =0;i<n;i++){
liDom.onclick = function(){
console.log(i);
}
}
ulDom.children;
children or childNodes
for(var i=0;i<n;i++){

(function(j){
liDom[j].onclick = function(){
console.log(j);
})(i)
}


var a = [1,3,3,4,5,6];
var b = [9,6,3,2,1];
N===1    -----> 9
N ===3  ------> 5
.... ...

O（2N）  O（N）（）

nlogn

O（N）

O（1）

function findNth(a, b, N) {
var b = b.reverse();
var temp = merge(a,b);
return temp[n];
}

T（Max(M, N)）
O  (N)

欧米茄
function findNth(a, b, N) {
var count = 0;
let j = 0;
let i = a.length -1;
let result;
while(count < n){
if(b[j]>a[i]){
++count;
++j;
result = b[j];
}else{
++count;
--i;
result = a[i];
}
}

}


function merge(a,b){
let i =0,j=0,t=0;
let result = [];
while(i<a.length && j<b.length){
if(a[i]<b[j] ){
result[t++] = a[i++];
}else{
result[t++] = b[j++];
}
}

while(i<a.length){
result[t++] = a[i++];
}
while(j<b.length){
result[t++] = b[j++];
}
return result;
}

搜索框

autocomplete

suggestion

 abcd
 a
a---->result:{}
      b---->result:{}

b

a:result
sucess:ture,
result: {
queryKey: 'a',
{dddd}

}
