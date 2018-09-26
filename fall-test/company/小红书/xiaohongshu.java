package com.company;

import javax.swing.tree.TreeNode;
import java.util.*;

public class xiaohongshu {

    private static final int MAXN=1050;
    private static int a;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (sc.hasNext()){
            String[] s1 = sc.nextLine().split(" ");
            String[] s2 = sc.nextLine().split(" ");
            Node[] root = new Node[MAXN];
            boolean[] flag = new boolean[MAXN];
            for(int i=0;i<MAXN;i++){
                root[i] = new Node();
            }
            restoreTree(s1,s2,root,flag);
            a=0;
            yezijiedian(0,root);
            System.out.println();
            a=0;
            pro(0,root);
            System.out.println();
            a=0;
            post(0,root);
        }
    }
    public static void restoreTree(String[] s1,String[] s2,Node[] root,boolean[] flag){
        int index1=0;
        for(int i=0;index1<s1.length;){
            if(root[index1].v==-1){
                root[index1].v=Integer.parseInt(s1[i++]);
            }
            int c=0;
            while(root[index1].v!=Integer.parseInt(s2[c]))
                c++;
            flag[c]=false;
            if(c>0&&flag[c-1]!=true){
                root[index1].l=i;
                root[i].v=Integer.parseInt(s1[i++]);
                c=0;
                while(root[index1].v!=Integer.parseInt(s2[c]))
                    c++;
                flag[c]=true;
            }
            if(c<s1.length-1&&flag[c+1]!=true){
                root[index1].r=i;
                root[i].v=Integer.parseInt(s1[i++]);
                c=0;
                while(root[index1].v!=Integer.parseInt(s2[c]))
                    c++;
                flag[c]=true;
            }
            index1++;
        }
    }
    private static void post(int x,Node[] root){ //先序
        if(root[x].l!=-1){
            post(root[x].l,root);
        }
        if(root[x].r!=-1){
            post(root[x].r,root);
        }
        if(a==0){
            System.out.print(root[x].v);
            a=1;
        }else{
            System.out.print(" "+root[x].v);
        }
    }
    private static void pro(int x,Node[] root){  //后序
        if(a==0){
            System.out.print(root[x].v);
            a=1;
        }else{
            System.out.print(" "+root[x].v);
        }
        if(root[x].l!=-1){
            pro(root[x].l,root);
        }
        if(root[x].r!=-1){
            pro(root[x].r,root);
        }
    }
    private static void yezijiedian (int x,Node[] root){ //叶子结点遍历
        if(root[x].l==-1&&root[x].r==-1) {
            if (a == 0) {
                System.out.print(root[x].v);
                a = 1;
            } else {
                System.out.print(" " + root[x].v);
            }
        }
        if(root[x].l!=-1){
            yezijiedian(root[x].l,root);
        }
        if(root[x].r!=-1){
            yezijiedian(root[x].r,root);
        }
    }
}
class Node{
    public int v;
    public int r;
    public int l;
    public Node(){
        this.v = -1;
        this.r = -1;
        this.l = -1;
    }
}
/*
3 5 4 2 6 7 1
2 5 3 6 4 7 1
 */
