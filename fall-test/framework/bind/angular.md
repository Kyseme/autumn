Angular数据双向绑定

http://blog.51cto.com/zhoulujun/2105289

脏检查机制

单向绑定(ng-bid) 双向绑定(ng-model)

ng-bind:页面没有加载完毕{{val}}会直接显示到页面,等数据渲染完成曾，才显示数据内容
ng-model:双向绑定，一般用在表单元素中

双向数据绑定原理
    每次绑定一个元素到view上，AngularJS就会向$watch队列中插入一条$watch，用来检测监视的model是否有变化.
```javascript
    $scope.$watch('val',function(newVal,oldVal){

    })
```

每个监视函数在每次$digest过程被调用，因此需要注意观察器的数量以及每个监视函数或者监视表达式的性能

$digest循环是什么时候开始执行
当浏览器接收到可以被angular context处理的事件时，$digest循环就会触发，遍历所有的$watch.

AngularJS并不直接调用$digest(),而是调用$scope.$apply(),后者会调用$rootScope.$digest().因此，一轮$digest循环在$rootScope开始,随后会访问到所有的children scope中的wathchers

通常写代码时我们无需主动调用$apply或$digest因为angular在外部对我们的回调函数做了包装
```javascript
    dom.addEventListener('click',function($scope){
        $scope.$apply(()=>code());
    })
```

脏检查如何触发

脏检查是digest执行的，UI变更的时候会触发脏检查，另一个常见脏检查的函数是apply.
- dom事件，如用户输入文本，点击按钮等
- XHQ响应时间
- 浏览器Location变更时间，即url中hash部分变更
- 手动调用$apply或$digest
