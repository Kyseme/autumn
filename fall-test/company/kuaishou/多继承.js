//继承minxin
//Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组
//该方法不会获取到原型链上的属性：
const mixinProps = (target, source) => {
    Object.getOwnPropertyNames(source).forEach(prop => {
        if (/^(?:constructor|isInstanceOf)$/.test(prop)) { return; }
        Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
    })
};

const mroMerge = (list) => {
    if (!list || !list.length) {
        return [];
    }
    for (let items of list) {
        let item = items[0];
        let valid = true;
        for (let items2 of list) {
            if (items2.indexOf(item) > 0) {
                valid = false;
                break;
            }
        }

        if (valid) {
            let nextList = [];
            for (let items3 of list) {
                let _index = items3.indexOf(item);
                if (_index > -1) {
                    items3.splice(_index, 1);
                }
                items3.length && nextList.push(items3);
            }
            return [item, ...mroMerge(nextList)];
        }
    }
    throw new Error('Unable to merge MRO');
};

const c3mro = (ctor, bases) => {
    if (!bases || !bases.length) {
        return [ctor];
    }
    let list = bases.map(b => b._meta.bases.slice());
    list = list.concat([bases]);
    let res = mroMerge(list);
    return [ctor, ...res];
};

const createClass = (parents, props) => {
    const isMulti = parents && Array.isArray(parents);
    const superCls = isMulti ? parents[0] : parents;
    const mixins = isMulti ? parents.slice(1) : [];

    const Ctor = function (...args) {
        // TODO: call each parent's constructor
        if (props.constructor) {
            props.constructor.apply(this, args);
        }
    };

    // save c3mro into _meta
    let bases = [superCls, ...mixins].filter(item => !!item);
    Ctor._meta = { bases: c3mro(Ctor, bases) };

    // inherit first parent through proto chain
    if (superCls && typeof superCls === 'function') {
        Ctor.prototype = Object.create(superCls.prototype);
        Ctor.prototype.constructor = Ctor;
    }

    // mix other parents into prototype according to [Method Resolution Order]
    // NOTE: Ctor._meta.bases[0] always stands for the Ctor itself
    if (Ctor._meta.bases.length > 1) {
        let providers = Ctor._meta.bases.slice(1).reverse();
        providers.forEach(provider => {
            // TODO: prototype of superCls is already inherited by __proto__ chain
            (provider !== superCls) && mixinProps(Ctor.prototype, provider.prototype);
        });
    }
    mixinProps(Ctor.prototype, props);

    Ctor.prototype.isInstanceOf = function (cls) {
        let bases = this.constructor._meta.bases;
        return bases.some(item => item === cls) || (this instanceof cls);
    }
    return Ctor;
};

function childOne(){
    this.name = "childOne";
    this.age = 12;
}
childOne.prototype.sayName = function(){
    console.log('childOne');
}
function ChildTwo(){
    this.color = 'red';
    this.height = 160;
}
ChildTwo.prototype.print = function(){
    console.log('red');
}
var Parent = createClass([childOne,ChildTwo]);
var parent = new Parent();
parent.sayName();