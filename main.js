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











