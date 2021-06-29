window.onload = function(){

  var page = document.getElementById('page');
  var last_pane = page.getElementsByClassName('pane');
  last_pane = last_pane[last_pane.length - 1];
  var dummy_x = null;

  window.onscroll = function () {
    // 垂直轉水平
    var y = document.body.getBoundingClientRect().top;
    page.scrollLeft = -y;
    
    // 循環滾動
    var diff = window.scrollY - dummy_x;
    if (diff > 0) {
      window.scrollTo(0, diff);
    }
    else if (window.scrollY == 0) {
      window.scrollTo(0, dummy_x);
    }

    
    // 淡入文字
    var oHide = document.getElementsByClassName('hideme');
    if(window.scrollY/innerWidth > 0.55 && window.scrollY/innerWidth < 1.55){
      startMove(oHide[0], {
        opacity: 100
      }, 20);
    } else if(window.scrollY/innerWidth > 1.55 && window.scrollY/innerWidth < 2.55){
      startMove(oHide[1], {
        opacity: 100
      }, 20);
    } else if(window.scrollY/innerWidth > 2.55 && window.scrollY/innerWidth < 3.55){
      startMove(oHide[2], {
        opacity: 100
      }, 20);
    } else if(window.scrollY/innerWidth > 3.55 && window.scrollY/innerWidth < 4.55){
      startMove(oHide[3], {
        opacity: 100
      }, 20);
    } else if(window.scrollY/innerWidth > 4.55 && window.scrollY/innerWidth < 5.55){
      startMove(oHide[4], {
        opacity: 100
      }, 20);
    }
    // console.log(dummy_x)
    console.log(last_pane.getBoundingClientRect().left)
    console.log(window.scrollY)
    
  }

  // 當視窗大小改變時調整body大小
  window.onresize = resize;
  // 初始調整大小
  resize();

  // 視窗預設值
  function resize() {
    var w = page.scrollWidth - window.innerWidth + window.innerHeight;
    document.body.style.height = w + 'px';
    
    dummy_x = last_pane.getBoundingClientRect().left + window.scrollY;
  }

}