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
    let index = $(x.currentTarget).index()
    let n = (-300)*index
    $('#images').css({
      transform:'translateX(' + n + 'px)'
    })
  });
}
 
var n=0
var size = allButtons.length
allButtons.eq(n%size).trigger('click')
  .addClass('red')//功能强大一点的trigger
  .siblings('.red').removeClass('red')
var timeId=setInterval(() => {
  n+=1
  allButtons.eq(n%size).click()
    .addClass('red')
    .siblings('.red').removeClass('red')
}, 1000);

$('.window').on('mouseenter', function() {
  window.clearInterval(timeId)
})
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









