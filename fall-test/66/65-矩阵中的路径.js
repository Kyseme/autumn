/**矩阵中的路径
 * 
 * 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
 * 路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。
 * 如果一条路径经过了矩阵中的某一个格子，则之后不能再次进入这个格子。 
 * 例如 a b c e s f c s a d e e 
 * 这样的3 X 4 矩阵中包含一条字符串"bcced"的路径，但是矩阵中不包含"abcb"路径，
 * 因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。
 */

var str = "ABCESFCSADEE",rows = 3,cols = 4,path = "ABCCED";
console.log(hasPath(str,rows,cols,path));
function hasPath(matrix, rows, cols, path)
{
    if(matrix==null || matrix.length==0 || path==null || path.length==0 || rows<=0 || cols<=0 || rows*cols < path.length) {
        return false ;
    }
    var flags = [];
    flags.length = rows*cols;
    flags.fill(false);
    var pathLength = 0;
    for(let i = 0;i<rows;i++){
        for(let j = 0;j<cols;j++){
            if(hasPathCore(matrix,rows,cols,path,i,j,flags,pathLength)){
                return true;
            }
        }
    }
    return false;
}

function hasPathCore(matrix, rows, cols, path, i, j, flags, pathLength) {
    let flag = false;
    if (pathLength == path.length) return true;
    if (i >= 0 && i < rows && j >= 0 && j < cols && !flags[i * cols + j] && matrix[i * cols + j] == path[pathLength]) {
        pathLength++;
        flags[i * cols + j] = true;
        flag = hasPathCore(matrix, rows, cols, path, i, j + 1, flags, pathLength) || hasPathCore(matrix, rows, cols, path, i + 1, j, flags, pathLength) || hasPathCore(matrix, rows, cols, path, i - 1, j, flags, pathLength) || hasPathCore(matrix, rows, cols, path, i, j - 1, flags, pathLength);

        if (!flag) {
            pathLength--;
            flags[i * rows + j] = false;
        }
    }
    return flag;
}