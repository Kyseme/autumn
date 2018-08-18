/**
 * 私有范围内定义所有函数和变量，并返回一个匿名函数，它拥有指向私有函数的指针
 */

 var myRevealingModule =(function(){
     var privateVar = 'Sunine';
     var publicVar = 'sun';

     function privateFunction(){
         console.log(`private${privateVar}`);
     }
     function publicSetName(name){
        privateVar = name;
     }
     function publicGetName(){
        privateFunction();
     }

     return {
         setName:publicSetName,
         getName:publicGetName,
         public:publicVar,
     }

 })();

 myRevealingModule.setName('kyseme');
 myRevealingModule.getName();