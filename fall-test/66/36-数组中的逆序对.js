/*数组中的逆序对
在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对
。输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。
 即输出P%1000000007

 输入描述:
题目保证输入的数组中没有的相同的数字

数据范围：
	对于%50的数据,size<=10^4

	对于%75的数据,size<=10^5

	对于%100的数据,size<=2*10^5

示例1
输入
1,2,3,4,5,6,7,0


输出
7
*/
var arr = [1,2,3,4,5,6,7,0];
// var arr = [364,637,341,406,747,995,234,971,571,219,993,407,416,366,315,301,601,650,418,355,460,505,360,965,516,648,727,667,465,849,455,181,486,149,588,233,144,174,557,67,746,550,474,162,268,142,463,221,882,576,604,739,288,569,256,936,275,401,497,82,935,983,583,523,697,478,147,795,380,973,958,115,773,870,259,655,446,863,735,784,3,671,433,630,425,930,64,266,235,187,284,665,874,80,45,848,38,811,267,575];
console.log(InversePairs(arr));
function InversePairs(data)
{
	if(data==null||data.length<=0){
		return 0;
	}
	var copy = data.slice(0);
	var count = inversePairsCore(data,copy,0,data.length-1);
	return count;
}
function inversePairsCore(data,copy,start,end){
	if(start==end){
		copy[start] = data[start];
		return 0;
	}
	let mid = Math.floor((end-start)/2);
	let left = inversePairsCore(data,copy,start,start+mid);
	let right = inversePairsCore(data,copy,start+mid+1,end);
	//i初始化为前半段最后一个数字的下标
	let i = start + mid;
	//j初始化为前半段最后一个数字的下标
	let j = end;
	let indexCopy = end;
	let count = 0;
	while(i>=start && j>=start+mid+1){
		if(data[i]>data[j]){
			copy[indexCopy--] = data[i--];
			count+=j-start-mid;
		}else{
			copy[indexCopy--] = data[i--];
		}
	}
	for(;i>=start;--i){
		copy[indexCopy--] = data[i];
	}
	for(;j>=start+mid+1;--j){
		copy[indexCopy--] = data[j];
	}
	return left+right+count;
}