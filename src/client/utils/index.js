import Vue from "vue";
import axios from "axios";

export const setHttpHeaders=(header,value)=>{
    axios.defaults.headers.common[header]=value;
};

// localstorage 支持简单json对象存储
export const LS={
    setItem(key,value){
        if(typeof value=='object') value=JSON.stringify(value);
        localStorage.setItem(key,value);
    },
    getItem(key){
        let temp=localStorage.getItem(key);
        let res=null;
        try {
            if (res = JSON.parse(temp)) return res;
        }
        catch(e){
            return temp;
        }
    },
    removeItem(key){
        localStorage.removeItem(key);
    },
    clear(){
        setHttpHeaders("access-token","");
        localStorage.clear();
    }
};

// 将英文类型转为中文名
export const cateToName=(category)=>{
    switch(category){
        case 'finance':category='财经';break;
        case 'tech':category='科技';break;
        case 'sports':category='体育';break;
        case 'entertainment':category='娱乐';break;
        case 'game':category='游戏';break;
        case 'phone':category='手机';break;
        case 'army':category='军事';break;
        default:category='头条';
    }
    return category;
};

export function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}