var images=document.querySelector('.images')
var img=document.querySelectorAll('.img')

var index=0;//索引
var time//计时器

// 改变宽度函数
function change() {
    for (let i = 0; i < img.length; i++) {
        img[i].style.width='10%'
    }
    img[index].style.width='60%'
}

//点击触发改变
for (let i = 0; i < img.length; i++) {
img[i].addEventListener('click',()=>{
        index=i;
        change()
    })
}
//定时轮播
function timer() {
    time = setInterval(()=>{
        if(index<4){
            index++
        }else{
            index=0
        }
        change()
    },1000)

}

//移上去暂停计时器
images.onmouseover = function(){
    clearInterval(time)
}
//移走继续
images.onmouseleave = function(){
    clearInterval(time)
    timer()
}
//启动
timer()