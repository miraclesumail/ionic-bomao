import * as $ from 'jquery';

class MoveShow {
  wrap: any;
  outSide: any;
  inner: any;
  heights: number;
  x: number;
  y: number;
  delayTime: number;
  options: { outSide: any, inner: any };
  startX: number;
  startY: number;
  moveX: number;
  moveY: number;
  endX: number;
  endY: number;
  arr: Array<any>;
  aTime: number;
  bTime: number;
  oldY: number;
  lastY: number;
  nowY: number;

  constructor(options) {
    this.wrap = options.wrap || $('#wrap');
    this.inner = options.inner || $('#inner-side');
    this.outSide = options.outSide || $('#out-side');
    this.delayTime = 150;
    this.endX = 0;
    this.endY = 0;
    this.oldY = 0;
    this.lastY = 0;
    this.nowY = 0;
    this.arr = [];
    this.bindEvent();
    this.scale();
  }

  scale() {
    let oTime = $('.times');
    oTime.on('touchstart', function () {
      $(this).addClass('scales');
    });
    oTime.on('touchend', function () {
      $(this).removeClass('scales');
    })
  }

  bindEvent() {
    let self = this;
    self.wrap.on('touchstart', () => {
      self.wrap = $('#wrap');
      self.inner = $('#inner-side');
      self.outSide = $('#out-side');
      this.heights = $('#inner-side').outerHeight();
      this.x = this.heights / 2;
      this.y = this.heights / 2;
    });

    self.wrap.on('touchstart', function (e) {
      //获取一个手指
      let touch = e.originalEvent.changedTouches[0];
      self.startX = touch.pageX;
      self.startY = touch.pageY;
      self.aTime = Date.now();
      //添加动画样式
      $(this).removeClass('backanimate');
      //self.oldY为0时让body显示
      if (self.oldY == 0) {
        self.outSide.css('overflow-y', 'scroll');
      }
    });
    self.wrap.on('touchmove', function (e) {
      //获取一个手指
      let touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
      self.moveX = touch.pageX - self.startX; //初始值
      self.moveY = touch.pageY - self.startY; //初始值

      //获取matrix(1, 0, 0, 1, 0, 0)最后一位，也就translateY轴的值
      self.arr = self.wrap.css('transform').split(',');
      self.lastY = parseInt(self.arr[5]);
      //只要下拉translateY就有值，就让body影藏
      if (self.moveY > 0 && self.lastY > 0) {
        self.outSide.css('overflow-y', 'hidden');
      }
      //设置translateY的值
      self.nowY = self.oldY + self.moveY;
      //只要有滚动条就让translateY的值为0,self.nowY < 0时，self.nowY = 0
      if (self.nowY < 0 || self.outSide.scrollTop() || !self.y) {
        self.nowY = 0;
      }
      $(this).css('transform', 'translate3d(0, ' + self.nowY + 'px, 0)');
    });
    self.wrap.on('touchend', function (e) {
      self.bTime = Date.now();
      let isMinTime = (self.bTime - self.aTime) <= self.delayTime;
      //添加动画
      $(this).addClass('backanimate');
      //self.endY 小于设定的高度弹回去,当手指左右移动时让out-side回到初始位置

      //self.endY 大于设定的高度则到最大高度
      if (self.nowY >= self.y) {
        $(this).css('transform', 'translate3d(0, ' + self.heights + 'px, 0)');
        self.oldY = self.heights;
      }
      //当时间小于0.2s并且self.moveY < -20时，弹回去
      if (isMinTime && self.moveY < -20) {
        $(this).css('transform', 'translate3d(0, 0, 0)');
        self.oldY = 0;
      }
      //self.endY 小于设定的高度弹回去,当手指左右移动时让out-side回到初始位置
      //self.endY 小于设定的高度弹回去,当手指左右移动时让out-side回到初始位置
      if (self.nowY < self.y || !self.y || Math.abs(self.moveX) > 3 * Math.abs(self.moveY)) {
        $(this).css('transform', 'translate3d(0, 0, 0)');
        self.oldY = 0;
      }

      //当时间小于0.2s并且self.moveY > 20时，到最大高度
      // if (isMinTime && self.moveY > 20) {
      //   $(this).css('transform', 'translate3d(0, ' + self.heights + 'px, 0)');
      //   self.oldY = self.heights;
      // }
    });
  }
}

export class Effect {
  constructor() {}

  initEffect(num?) {
    if(num){
      this.dropDown();
      this.rechargeTab();
      this.myModal();
      this.sideDrop();
      this.phoneClick('.j-btn','gray-on');
      this.phoneClick('.s-btn','orange-on');
      this.waterEffect('.bt');
      this.waterEffect('.black-bt');
    }else{
      this.moneyDrop();
      this.myTab();
      this.handler = this.debounce(function () {
        $('.side-right').each(function () {
          let oText = $(this).find('.side-black');
          oText.off('click').on('click', function () {
            oText.removeClass('side-green');
            $(this).addClass('side-green');
          });
        });
      }, 500, false);
      new MoveShow({wrap: $('#wrap'), outSide: $('#out-side'), inner: $('#inner-side')});
    }
  }

  phoneClick(obj,cla){
    $(document).on('touchstart',obj,function(){
      $(this).addClass(cla);
    });
    $(document).on('touchend',obj,function(){
      let This = $(this);
      setTimeout(function () {
        This.removeClass(cla);
      },150)
    });
  }
  //水波纹效果
  waterEffect(obj){
    $(document).on('touchstart', obj ,function (e) {
      let newRound = document.createElement('div'),x,y;
      newRound.className = 'circles';
      this.appendChild(newRound);
      x = e.pageX - $(this).offset().left;
      y = e.pageY - $(this).offset().top;
      newRound.style.left = x + "px";
      newRound.style.top = y + "px";
      newRound.className += " animations";
      setTimeout(function() {
        newRound.remove();
      }, 400);
    });
  }

  //左侧彩种下拉
  sideDrop() {
    $(document).on('touchstart', '.side-li', drop);
    function drop() {
      $(this).find('.side-drop').slideToggle(200);
      $(this).siblings().find('.side-drop').slideUp(200);
      return false;
    }
    $(document).on('touchstart',function () {
      $('.side-drop').slideUp(200);
    });
  }

  //首页彩种下拉
  dropDown() {
    $(document).on('touchstart', '.sort-li', drop);
    function drop() {
      let oSort = $('.sort-li');
      let len = oSort.length;
      function aaa() {
        for (var i = 0; i < len; i++) {
          if ($('.sort-list').find('.sort-drop').eq(i).css('display') == 'block') return true;
        }
        return false;
      }
      if (aaa()) {
        oSort.find('.sort-a').removeClass('sort-col');
        oSort.find('.definite-sort').removeClass('sort-col');
        oSort.find('.sort-drop').hide()
      } else {
        $(this).find('.sort-a').addClass('sort-col');
        $(this).find('.definite-sort').addClass('sort-col');
        $(this).find('.sort-drop').slideDown();
      }
      return false;
    }

    $(document).on('touchstart',function () {
      $('.sort-li').find('.sort-a').removeClass('sort-col');
      $('.sort-li').find('.definite-sort').removeClass('sort-col');
      $('.sort-drop').slideUp(0);
    });
  }

  //tab切换
  rechargeTab() {
    $(document).on('touchstart', '.recharge-tab li', recharge);
    function recharge() {
      let oDiv = $('.recharge');
      let i = $(this).index();
      $('.recharge-tab li').removeClass('active');
      $(this).addClass('active');
      oDiv.each(function () {
        $(this).find('.recharge-con').hide().eq(i).show();
      });
    }
  }

  //从下往上的弹出框
  myModal() {
    $(document).on('touchstart', '.open-modal', function () {
      $('.body-bg').fadeIn(300);
      $('.alert-con').addClass('alert-show');
    });
    $(document).on('touchstart', '.body-bg,.close-modal', function () {
      $('.body-bg').fadeOut(300);
      $('.alert-con').removeClass('alert-show');
    });
  }

  handler: any;
  //函数节流
  debounce(func, wait, immediate?) {
    let timeout, args, context, timestamp, result;
    let later = function () {
      let last = new Date().getTime() - timestamp;
      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };
    return function () {
      context = this;
      args = arguments;
      timestamp = new Date().getTime();
      let callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }
      return result;
    };
  }

  myTab() {
    $(document).on('touchstart', '.play-list .play-black', tab);
    function tab() {
      let oI = $('.play-list').find('.play-black');
      let oDiv = $('.after-select .after-con');
      let i = oI.index($(this));
      oI.removeClass('play-yellow');
      $(this).addClass('play-yellow');
      oDiv.eq(i).siblings().removeClass('active');
      oDiv.eq(i).addClass('active');
    }
    $(document).on('touchstart', '.play-opacity', select);
    function select() {
      $('.play-opacity').removeClass('play-yellow');
      $(this).addClass('play-yellow');
    }
  }

  moneyDrop() {
    $('.money-btn-1,.money-btn-2').each(function () {
      let This = $(this);
      let oLi = This.next('.money-menu').find('li');
      This.click(function () {
        $(this).next('.money-menu').slideDown(200);
        return false;
      });
      oLi.click(function () {
        oLi.removeClass('active');
        $(this).addClass('active');
      })
    });
    $(document).on('touchstart', function () {
      $('.money-menu').slideUp(200);
    });
  }

  writeInput=this.debounce((obj,e)=>this.changeInput(obj,e), 500);

  changeInput(obj,e){
    let num= +e.target.value;
    num=num<obj.min?obj.min:(num>obj.max?obj.max:num);
    e.target.value=num;
    obj.num=num;
  }

  numChange(obj,type){
    let num=obj.num;
    if(type=='+'){
      if(num<obj.max) num++;
    }else if(type=='-'){
      if(num>obj.min) num--;
    }
    obj.num=num;
  }
}


