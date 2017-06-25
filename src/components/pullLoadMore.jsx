'use strict';
var React = require('react');
var IScroll = require('iscroll/build/iscroll-probe.js');


var MyScroll = null;
// 记录是否要加载更多
var isLoadMore = true;

module.exports = React.createClass({
  componentWillMount: function () {
    if (!this.props.config || !this.props.config.loadMore || !this.props.config.data) {
      console.warn('PageView缺少必要的参数config,loadMore,data');
    }
  },
  componentDidMount: function () {

    var _that = this;
    // 自定义id，防止重复
    var elemt = document.getElementById(this.props.config.id || 'wrapper');
    var more = document.getElementById((this.props.config.id || 'wrapper') + '_more');

    MyScroll = new IScroll(elemt, {
      probeType: 2,
      scrollbars: true, //是否显示默认滚动条
      fadeScrollbars: true, // 是否渐隐滚动条，关掉可以加速
      preventDefault: true, //是否屏蔽默认事件。
      momentum: true, //是否开启动量动画，关闭可以提升效率。
      // keyBindings: true, //绑定按键事件。
      shrinkScrollbars: true,
      click: true,
    });


    MyScroll.on('scroll', function () {
      var yMove = (-this.y - (-this.maxScrollY)); //y轴偏移量
      var maxMove = 70;
      // 已经全部加载
      if (_that.props.config.isNoMore) return;
      if (!isLoadMore) {
        if (yMove > 0 && yMove < maxMove) {
          more.innerHTML = '';
          more.style.display = 'block';
        } else if (yMove >= maxMove) { //松开立即加载
          more.innerHTML = '<div class="tip-load-more"><i></i>松开立即加载</div>';
          more.style.display = 'block';
          isLoadMore = true;
        } else {
          more.style.display = 'none';
        }
      } else {
        if (yMove < maxMove / 2) {
          more.style.display = 'block';
        }
      }
    });

    MyScroll.on('scrollEnd', function () {
      // 是否加载更多
      if (isLoadMore && !_that.props.config.isNoMore) {

        more.innerHTML = '';
        more.style.display = 'none';

        if (_that.props.config && _that.props.config.loadMore) {
          _that.props.config.loadMore();
        }

      }

    });

    // 阻止默认touchmove事件
    elemt.addEventListener('touchmove', function (e) {
      e.preventDefault();
    }, false);

  },
  // 监听dom更新
  componentDidUpdate: function () {
    // 刷新myScroll，重新计算高度
    setTimeout(function () {
      MyScroll.refresh();
    }, 100);

    // 重置是否加载更多
    isLoadMore = false;

  },
  componentWillUnmount: function () {
    // 移除componnet后销毁MyScroll
    MyScroll.destroy();
  },

  render: function () {

    return (
      <div style={{'position': 'relative', 'height': '100%', 'width': '100%', 'overflow': 'hidden'}}>
        <div id={this.props.config.id || 'wrapper'}
             style={{'position': 'absolute', 'top': '0', 'bottom': '0rem', 'left': '0', 'right': '0'}}>
          <ul className={this.props.cls}>
            {this.props.config.data}
            <div id={(this.props.config.id || 'wrapper') + '_more'}
                 style={{'textAlign': 'center', 'padding': '3px 0px', 'display': 'none'}}></div>
            {
              this.props.config.data && (Array.isArray(this.props.config.data) ? (this.props.config.data.length > 0) : true) && this.props.config.isNoMore ? (
                <div className="tip-load-more">已经全部加载</div>) : ''
            }
          </ul>
        </div>
      </div>
    )
  }
});