let left=document.querySelector('.button-left')
let right=document.querySelector('.button-right')
let min=document.querySelectorAll('.min')
let images=document.querySelector('.images')
let button=document.querySelector('.button')

let index = 0;//索引
let time;//计时器
function position() {
    images.style.left = (index * -100) + "%"
}
function add() {
    if (index >= min.length -1) {
        index = 0
    } else {
        index++
    }
}
function desc() {
    if (index < 1) {
        index = min.length - 1
    } else {
        index--
    }
}
// 圆角透明度
function rounded(){
    for(let i=0;i<min.length;i++){
        min[i].style.opacity='0.5'
        min[i].style.border='1px solid #fff'
    }
    min[index].style.opacity='1'
    min[index].style.border='1px solid #000'
}
//定时器
function timer(){
    time = setInterval(() =>{
        index++
        desc()
        add()
        position()
        rounded()
    },1000)
}
// 左按钮
left.addEventListener('click',()=>{
    desc()
    position()
    rounded()
    clearInterval(time)
    timer()
})
// 右按钮
right.addEventListener('click',()=>{
    add()
    position()
    rounded()
    clearInterval(time)
    timer()
})
//圆角点击
for(let i=0;i<min.length;i++){
    min[i].addEventListener('click',()=>{
        index = i
        position()
        rounded()
        clearInterval(time)
        timer()
    })
}
//鼠标移上去暂停
button.onmouseover = function () {
    clearInterval(time)
}
//鼠标移出又开启定时器
button.onmouseleave = function () {
    clearInterval(time)
    timer()
}
timer()