//求1+2+..n
//求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）

//用递归函数
function Sum_Solution(n)
{
    var res = n;
    (n>0)&&(res += Sum_Solution(n-1));
    return res;
}
