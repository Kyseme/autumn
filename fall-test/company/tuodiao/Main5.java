package com.company.头条;

import java.util.*;

public class Main5 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int n,m;
        while(sc.hasNext()){
            List<PlayInfo> list = new ArrayList<>();
            n = sc.nextInt();
            m = sc.nextInt();
            for(int i=0;i<n;i++){
                int s = sc.nextInt();
                int t = sc.nextInt();
                list.add(new PlayInfo(s,t));
            }
            System.out.println(getMaxHost(n,m,list));
        }
    }
    public static int getMaxHost(int n,int m,List<PlayInfo> list){
        Collections.sort(list,new Comparator<PlayInfo>(){   //对每个主播 按结束时间t排序 由小到大
            public int compare(PlayInfo a,PlayInfo b){
                return a.t-b.t;
            }
        });
        int times = 0;
        int lastTime = 0;
        for(int i=0;i<list.size();i++){
            if(i==0) {
                lastTime = list.get(i).t;
                //////新加
                if(list.get(i).t-list.get(i).s>0){
                    m = m-(list.get(i).t-list.get(i).s);
                    if(m<0){
                        break;
                    }
                }
                //////////
                times++;
            }else{
                if(lastTime<=list.get(i).s){
                    //////新加
                    if(list.get(i).t-list.get(i).s>0){
                        m = m-(list.get(i).t-list.get(i).s);
                        if(m<0){
                            break;
                        }
                    }
                    ///////////////////
                    times++;
                    lastTime = list.get(i).t;
                }
            }
        }
        return times;
    }
}
class PlayInfo{
    public int s;  //si开始时间
    public int t;  //ti结束时间
    PlayInfo(int s,int t){
        this.s = s;
        this.t = t;
    }
}
/*
3 10
0 3 3 7 7 0
3 10
0 5 2 7 6 9
 */