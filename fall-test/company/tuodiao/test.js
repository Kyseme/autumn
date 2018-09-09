
// var lines = readline().split(',');
// var m = parseInt(lines[0])
// var n = parseInt(lines[1]);
// var temp ;
// var ans = [];
// for(var i = 0;i < m; i++){
//     temp = readline().split(",")
//     for(var j = 0;j < n; j++){
//         ans += parseInt(temp[j]);
//     }
// }
// print(ans);

function getGroup(m,n,arr){
    if(arr==null||arr.length<=0){
        return '0,0';
    }
    let maxPeople = 0;
    let groupCount = 0;
    let peopleCount = 0;

    let i =0;
    let j = 0;

    for(;i<m;i++){
        for(;j<n;j++){
            if(arr[i][j]==1){
                groupCount++;
                peopleCount++;
                if(j<n-1&&arr[i][j+1]==1){
                    
                }
                if(i<n-1 && arr[i+1][j]==1){
                    
                }
               if(j<n-1 && i<m-1 && arr[i+1][j+1]==1){
                    
                }
            }
        }
    }
}

function findConnet(i,j,arr,m,n){
    if((j<n-1&&arr[i][j+1]==0) || j==n-1 ||(i<n-1 && arr[i+1][j]==1)||i==n-1||(j<n-1 && i<m-1 && arr[i+1][j+1]==1)){
        return; 
    }
    if(i<n-1 && arr[i+1][j]==1){
        
    }
   if(j<n-1 && i<m-1 && arr[i+1][j+1]==1){
        
    }
}