### dom 的操作，常用的有哪些，如何创建、添加、移除、移动、复制、查找节点？
原生js: 
创建 var h1 = document.createElement("<h1></h1>")
添加 document.appendchild(h1)(头部添加) document.insertBefore(h1)
移除 document.removechild(h1)(删除子元素) h1.remove()(删除自身)
复制 var h = h1.cloneNode()
查找 childNodes元素节点和文本节点 children元素节点(兼容性问题) 
        firstChild获取第一个节点（文本节点也算）firstElementChild获取第一个节点（文本节点不算）
        lastChild获取最后一个节点（文本节点也算）lastElementChild获取最后一个节点（文本节点不算）
        previousSibling获取上一个节点（文本节点也算）previousElementChild获取上一个节点（文本节点不算）
        nextSibling获取下一个节点（文本节点也算）nextElementSibling获取下一个节点（文本节点不算）
jQuery:
创建 var li = $("<li></li>")
添加 
    内部添加 append()插入尾  appendTo()插入到尾 prepend()插入头 prependTo()插入到头
    外部添加 after() insertAfter() before() insertBefore()
移除 remove() html() empty()
复制 clone()
查找 find()查找子级 children()查找子级们
        siblings()查找同级 contents()查找文本节点 
        prev()查找上一级节点 prevAll()查找上一级节点们
        next()查找下一级节点 nextAll()查找下一级节点们
        $('.xxx') 类选择器查找     $('#xxx')id选择器查找     $('.xxx xxx')后代选择器查找
        $('.xxx~xxx')层级选择器查找1     $('.xxx+xxx')层级选择器查找2
伪类查找    $('xxx'):first 查找第一个节点  $('xxx'):last 查找最后一个节点
                  $('xxx'):eq(‘下标’)查找指定节点
                  $('xxx'):not('.xxx')查找不含有同级节点    $('xxx'):has('.xxx')查找含有该节点的元素
                  $('xxx'):gt('下标')查找大于指定下标节点    $('xxx'):lt(‘下标’)查找小于指定下标节点
                  $('xxx'):odd查找奇数倍节点       $('xxx'):even 查找偶数倍节点   
jq方法查找    $('xxx').first() 查找第一个节点   $('xxx').last() 查找第一个节点