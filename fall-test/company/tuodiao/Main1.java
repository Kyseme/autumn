package com.company.头条;

import java.util.Scanner;

public class Main1 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int n,m;
        while(sc.hasNext()){
            n = sc.nextInt();
            m = sc.nextInt();
            int a[][] = new int[m][n];
            for(int i=0;i<n;i++){
                for(int j=0;j<m;j++){
                    a[i][j] = sc.nextInt();
                }
            }
            int[] res = getMaxInfo(m,n,a);
            System.out.println(res[0]);
            System.out.println(res[1]);
        }
    }
    public static int[] getMaxInfo(int m,int n,int[][] a) {
        int[] res = new int[2];//res[0]代表群体个数 res[1]代表最大群体人数
        for (int i=0;i<m;i++){
            for (int j = 0; j < n; j++) {
                if(a[i][j]==1){
                    int[] curMax = new int[1];
                    clearOneToZero(m,n,a,res,i,j,curMax);
                    res[0]++;
                    res[1] = Math.max(curMax[0],res[1]);
                }
            }
        }
        return res;
    }
    public static void  clearOneToZero(int m,int n,int[][] a,int[] res,int i,int j,int[] curMax){
            a[i][j] = 0;
            curMax[0]++;
            //上下左右 左上斜对角  右上斜对角 左下斜对角 右下斜对角
            int[] dirx = {-1,1,0,0,-1,-1,1,1};
            int[] diry = {0,0,-1,1,-1,1,-1,1};
            for(int z=0;z<dirx.length;z++){
                int ti = i+dirx[z];
                int tj = j+diry[z];
                if(ti>=0&&ti<m&&tj>=0&&tj<n&&a[ti][tj]==1){
                    clearOneToZero(m,n,a,res,ti,tj,curMax);
                }
            }
    }
}
/*
10 10
0 0 0 0 0 0 0 0 0 0
0 0 0 1 1 0 1 0 0 0
0 1 0 0 0 0 0 1 0 1
1 0 0 0 0 0 0 0 1 1
0 0 0 1 1 1 0 0 0 1
0 0 0 0 0 0 1 0 1 1
0 1 1 0 0 0 0 0 0 0
0 0 0 1 0 1 0 0 0 0
0 0 1 0 0 1 0 0 0 0
0 1 0 0 0 0 0 0 0 0
 */
