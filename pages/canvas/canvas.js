// pages/canvas/canvas.js
import WxCanvas from 'wechatcanvas';
// 文檔詳情 https://www.npmjs.com/package/wechatcanvas
Page({

    /**
     * 页面的初始数据
     */
    data: {
        width: 0,
        height: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        const textLineInfo = new WxCanvas({}).getLineHeight("演示局部的文字样式并且是个多行文字or abcdefg，一行显示几个字节得自己实际衡量并且传入参数，一个英文一个字节，一个中文两个字节", 42, 26, 20);


        const width = new WxCanvas({ design: 750 }).size(680); //可以使用size方法提前换算设计稿尺寸
        const height = new WxCanvas({ design: 750 }).size(1000); //这里高写死1000并没有利用上面求得数值来计算

        // 设置画布宽高
        this.setData({ width, height });

        // 得到的wcvs实例 非promise的支持链式调佣
        let wcvs = new WxCanvas({
            el: "#myCanvas",
            design: 750,//设计稿尺寸
            width: 680,//设计稿中画布宽
            height: 1000,//设计稿中画布高
            useDpr: false //是否计算dpr wx.getSystemInfoSync().pixelRatio，调试时可以关，正式时置为true
        });

        await wcvs.init();// 画布初始化，此时有ctx，尝试log一下wcvs可以看到更多的内容

        // 计算字体大小，设计稿为28的字体换算后可直接用于字体大小设置
        const fontSize_28 = wcvs.size(28);
        const fontSize_26 = wcvs.size(26);
        wcvs.setOptions({
                font: `bold ${fontSize_28}px serif`,
                fillStyle: '#d2665f'
            }).fillRect(0, 0, 680, 1000, {
                fillStyle: '#e2e2e2'
            });

        await wcvs.drawImage("http://media.tcogid.top/canvas_test.jpg", 0, 0, 680, 370);

        wcvs.fillText("演示默认文字样式", 20, 450);

        // text 字符串，x,y :左上角坐标，rs 两行文字之间的间隔 ,options
        wcvs.fillLineText(textLineInfo, 20, 550, {
            font: `bold ${fontSize_26}px serif`,
            fillStyle: '#000'
        });

        // 底部矩形框
        wcvs.fillRect(0, 860, 680, 140, {
            fillStyle: 'rgb(0,44,62)'
        });


        // 圆形白底框,默认使用fill填充，如果只需要一个圆圈，自行修改代码，可用作放小程序码
        wcvs.fillArc(600, 930, 60, 0, 2 * Math.PI, {
            fillStyle: '#fff',
            strokeStyle: '#fff',
        });

        //   圆心x,y，半径r，图片地址
        await wcvs.fillArcImage(80, 930, 50, "https://thirdwx.qlogo.cn/mmopen/vi_32/Q3auHgzwzM6j6yx3D156xibNHM6DuHicMicf1J9jLwaLHgL91sdEjVzmxHKpIMuBrJUnncSHzo2rv1fZM0ahqJf9w/132");

        await wcvs.fillArcImage(600, 930, 50, "https://res.wx.qq.com/wxdoc/dist/assets/img/WXACode.fa3d686a.png");

        // 最后加一个微信昵称
        wcvs.fillText("微信昵称", 160, 935, { fillStyle: '#fff' });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: async function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})