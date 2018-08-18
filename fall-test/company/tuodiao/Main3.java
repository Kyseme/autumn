package com.company.头条;

import java.util.Scanner;

public class Main3 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        while (sc.hasNext()){
            int n = sc.nextInt();
            int x[] = new int[n];
            int y[] = new int[n];
            for(int i=0;i<n;i++){
                x[i] = sc.nextInt();
                y[i] = sc.nextInt();
            }
            int[] maxGrade = new int[1];
            dfs(0,0,x,y,maxGrade,0,0);
            System.out.println(maxGrade[0]);
        }
    }
    public static void dfs(int a,int b,int[] x,int[] y,int[] maxGrade,int index,int curMax){
        if(index==x.length){
            if(a==b&&maxGrade[0]<curMax){
                maxGrade[0] = curMax;
            }
            return;
        }
        dfs(a+x[index],b,x,y,maxGrade,index+1,curMax+y[index]);    //a选第index张牌
        dfs(a,b+x[index],x,y,maxGrade,index+1,curMax+y[index]);    //b选第index张牌
        dfs(a,b,x,y,maxGrade,index+1,curMax);                                  //a和b都不选第index张牌
    }
}
/*
4
3 1
2 2
1 4
1 4
5
3 4
1 10
2 9
1 18
3 17
 */