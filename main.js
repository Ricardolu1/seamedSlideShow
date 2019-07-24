// $(p1).on('click',function() {
//   $(images).css({
//     transform:'translateX(0)'
//   })
// })

// $(p2).on('click',function() {
//   $(images).css({
//     transform:'translateX(-300px)'//有点像给对象的属性赋值
//   })
// })

// $(p3).on('click',function() {
//   $(images).css({
//     transform:'translateX(-600px)'
//   })
// })

var allButtons=$('#buttons>button')
for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on('click',function(x) {
    var index = $(x.currentTarget).index()
    var p = (-300)*index
    $('#images').css({
      transform:'translateX(' + p + 'px)'
    })
    n = index//把n变成和我点击的button的索引一样，可以保证在我鼠标移出时，在接下来的自动轮播中（其实自动轮播也就是js在帮我点，本质也是点击），可以跳转到我点击的图片的下一张
    allButtons.eq(n).addClass('red')
    .siblings('.red').removeClass('red')
  });
}
 


var n=0
var size = allButtons.length
allButtons.eq(n%size).trigger('click')//n%size的取值范围是0到size-1，刚好和数组的索引的一样。用trigger的话，后面就可以用参数
  .addClass('red')
  .siblings('.red').removeClass('red')
var timeId=setInterval(() => {
  n+=1
  allButtons.eq(n%size).click()
    .addClass('red')
    .siblings('.red').removeClass('red')
}, 1000);

$('#buttons').on('mouseenter', function() {
  window.clearInterval(timeId)
})

$('#buttons').on('mouseleave', function() {
  timeId = setInterval(() => {
  n+=1
  allButtons.eq(n%size).click()
    .addClass('red')
    .siblings('.red').removeClass('red')
}, 1000);
})

$('.window').on('mouseenter', function() {
  window.clearInterval(timeId)
})
$('.window').on('mouseleave', function() {
    timeId = setInterval(() => {
    n+=1
    allButtons.eq(n%size).click()
      .addClass('red')
      .siblings('.red').removeClass('red')
  }, 1000);
})










// var allButtons=$('#buttons>button')
// for (let i = 0; i < allButtons.length; i++) {
//   $(allButtons[i]).on('click',function(x) {
//     let index = i
//     let n = (-300)*index
//     $('#images').css({
//       transform:'translateX(' + n + 'px)'
//     })
//   });
// }









