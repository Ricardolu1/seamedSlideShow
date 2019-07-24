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

var allButtons = $("#buttons>button")
for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on("click", function(x) {
    var index = $(x.currentTarget).index()
    var p = -300 * index
    $("#images").css({
      transform: "translateX(" + p + "px)"
    })
    n = index //把n变成和我点击的button的索引一样，可以保证在我鼠标移出时，在接下来的自动轮播中（其实自动轮播也就是js在帮我点，本质也是点击），可以跳转到我点击的图片的下一张
    activeButton(allButtons.eq(n))
  })
}

function activeButton($button) {
  $button
    .addClass("red")
    .siblings(".red")
    .removeClass("red")
}
function setTimer() {
  return setInterval(() => {
    n += 1
    allButtons.eq(n%size).click()
  }, 1000)
}
    




var n = 0
var size = allButtons.length
// var serialNumber = n % size
allButtons.eq(n % size).click() //n%size的取值范围是0到size-1，刚好和数组的索引的一样。用trigger的话，后面就可以用参数
  

var timeId=setTimer()
$("#buttons").on("mouseleave", function() {
  timeId=setTimer()
})

$("#buttons").on("mouseenter", function() {
  window.clearInterval(timeId)
})

$(".window").on("mouseleave", function() {
  timeId=setTimer()
})

$(".window").on("mouseenter", function() {
  window.clearInterval(timeId)
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
