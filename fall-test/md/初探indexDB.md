

参考连接：![indexDB](http://javascript.ruanyifeng.com/bom/indexeddb.html#toc24)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    
</body>
<script>
    var db;
    //打开数据库
    var request = window.indexedDB.open("sunine");

    //事件表示打开数据库失败
    request.onerror = function (event) {
        console.log('数据库打开报错');
    };
    //事件表示成功打开数据库
    request.onsuccess = function (event) {
        db = request.result;
        console.log('数据库打开成功');
        console.log('---');
        add();
        // getData(db,'person',1);
    };
    //如果指定的版本号，大于数据库的实际版本号，就会发生数据库升级事件
    request.onupgradeneeded = function (event) {
        db = event.target.result;
        var objectStore;
        if (!db.objectStoreNames.contains('person')) {
            objectStore = db.createObjectStore('person', { keyPath: 'id' });
        }
    }

    //增加数据
    function add(db, storename, data) {
        var request = db.transaction(storename, 'readwrite').objectStore(storename).add({ id: 4, name: '张三', age: 24, email: 'zhangsan@example.com' });
        request.onsuccess = function (data) {
            console.log(data);
            console.log('数据写入成功');
        };

        request.onerror = function (event) {
            console.log(event)
            console.log('数据写入失败');
        }
    }

    // 修改数据
    function putData(db,storename, data){
        const store = db.transaction(['person'], 'readwrite').objectStore(storename)
        for(let i = 0; i < data.length; i++) {
            const request = store.put(data[i])
            request.onerror = function() {
                console.error('修改数据失败')
            }
            request.onsuccess = function() {
                console.log('修改数据成功')
            }
        }
    }

    //获取数据 key索引
    function getData(db, storename, key){
        const store = db.transaction(storename, 'readwrite').objectStore(storename)
	    const request = store.get(key)
        request.onerror = function() {
            console.error('获取数据失败')
        }
        request.onsuccess = function(e) {
            const result = e.target.result;
            console.log(result)
        }
    }

    //删除数据
    function deleteDate(db, storename, key) {
        const store = db.transaction(storename, 'readwrite').objectStore(storename)
        store.delete(key)
        console.log('已删除存储空间' + storename + '中的' + key + '纪录')
    }
</script>
</html>
```