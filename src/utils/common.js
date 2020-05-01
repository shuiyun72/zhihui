
import Vue from 'vue';
/**
     * num  : 需要循环的次数
     * data : 循环的内容 type:Arrty
*/
Vue.prototype.DataFor = function (num, data) {
    let List = [];
    for (let i = 0; i < num; i++) {
        List.push(...data)
    }
    return List
}
Vue.prototype.W = function (num) {
    return `width:${num}px;height:${num}px;`;
}