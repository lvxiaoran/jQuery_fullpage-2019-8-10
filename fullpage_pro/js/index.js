$(document).ready(function () {
    $(function () {

        // 第一页刚开始实现一次动画
        $('.section1 .one .lpage1Right .logo img').delay(500).fadeIn(1000, () => {
            $('.section1 .one .lpage1Right .lpage1text1 h2').delay(500).fadeIn(300, () => {
                $('.section1 .one .lpage1Right .lpage1text2 p').delay(500).fadeIn(300,
                    () => {
                        $('.section1 .one .lpage1Right .lpage1login').delay(500).fadeIn(
                            300);
                    });
            });
        })

        // 第二页刚开始实现一次动画
        // $('.section2 .two .lpage2bg .lpage2text2').css('left',-180)



        $('#ddd').fullpage({
            navigation: true,
            verticalCentered: false,
            // //滚动某一屏幕之后的回调函数
            // 第一页start
            afterLoad: function (anchorLink, index) {
                // console.log();
                if (index == 1) {
                    $('.section1 .one .lpage1Right .logo img').delay(500).fadeIn(1000, () => {
                        $('.section1 .one .lpage1Right .lpage1text1 h2').delay(500)
                            .fadeIn(300, () => {
                                $('.section1 .one .lpage1Right .lpage1text2 p')
                                    .delay(500).fadeIn(300,
                                        () => {
                                            $('.section1 .one .lpage1Right .lpage1login')
                                                .delay(500).fadeIn(
                                                    300);
                                        });
                            });
                    })
                }
                // .........................................................................................................................................
                if (index == 2) {
                    //文字
                    $('.section2 .two .lpage2bg .adjustAutoText').css({
                        'left': '-180px',
                        'display': 'block'
                    }).animate({
                        'left': '80px'
                    }, 1000);

                    // 图片
                    $('.section2 .two .lpage2bg .lpage2img1').delay(500).fadeIn(1000)
                    $('.section2 .two .lpage2bg .lpage2img2').css({
                        'transform-origin': 'bottom right',
                        'transform': 'rotate(-0deg)',
                        'transition': 'all 1.5s ease',
                    })
                }
                // ................................................................................................................................................
                if (index == 3) {
                    //文字
                    $('.lpage3bg .adjustAutoText').css({
                        'right': '-180px',
                        'display': 'block'
                    }).animate({
                        'right': '180px'
                    }, 1000);

                    // 图片
                    $('.lpage3bg .pageImg').css({
                        'margin-top': '250px',
                        'display': 'block'
                    }).animate({
                        'margin-top': '0px'
                    }, 1000).fadeIn(3000);

                    $('.lpage3bg .lpage3img4').css({
                        'transform': 'rotateX(0deg)',
                        'transition': 'all 1.5s ease'
                    })
                }
                // ....................................................................................................................................................               
                if (index == 4) {
                    //文字
                    $('.lpage4bg .adjustAutoText').delay(100).fadeIn(800)

                    // 零碎图片
                    $('.lpage4bg .pageImg').css({
                        'margin-top': '250px',
                        'display': 'block'
                    }).animate({
                        'margin-top': '0px'
                    }, 1000);
                    // 电脑
                    $('.lpage4bg .lpage4img5').delay(100).fadeIn(600)
                    // 屏幕
                    $('.lpage4bg .lpage4img6').css({
                        'transform': 'rotateX(0deg)',
                        'transition': 'all 1.5s ease'
                    })
                    // 圆图
                    $('.lpage4bg .lpage4img7').css({
                        'transform': 'rotateX(0deg)',
                        'transition': 'all 1.5s ease'
                    })
                }
                // ....................................................................................................................................................               
                if (index == 5) {
                    //文字
                    $('.section5 .five .adjustAutoText').delay(100).fadeIn(800)

                    // 手机、打印机
                    $('.section5 .five .lpage5img3').fadeIn(300).css('z-index',2).animate({
                        'top':'308px'
                    },1000)
                    $('.section5 .five .lpage5img4').fadeIn(300).css('z-index',1).animate({
                        'top':'140px'
                    },1000)
                    
                    //电脑和电脑壁纸
                    $('.section5 .five .lpage5img1').fadeIn(300,()=>{
                        $('.section5 .five .lpage5img2').fadeIn(500).animate({
                            'top':'200px',
                            'left':'845px'
                        },800)
                    })
                    //箭头
                    $('.section5 .five .lpage5img5').fadeIn(800).css({
                        'transform-origin': 'bottom left',
                        'transform': 'rotate(0deg)',
                        'transition': 'all 2s ease',
                    })
                }
                // ....................................................................................................................................................               
                if (index == 6) {
                    //左上箭头
                    $('.section6 .six .lpage6img1').fadeIn(800).css({
                        'transform-origin': 'bottom left',
                        'transform': 'rotate(0deg)',
                        'transition': 'all 2s ease',
                    })
                    //左下箭头
                    $('.section6 .six .lpage6img2').fadeIn(800).css({
                        'transform-origin': 'bottom right',
                        'transform': 'rotate(0deg)',
                        'transition': 'all 2s ease',
                    })
                    // 右上箭头
                    $('.section6 .six .lpage6img3').fadeIn(800).css({
                        'transform-origin': 'bottom right',
                        'transform': 'rotate(0deg)',
                        'transition': 'all 2s ease',
                    })
                    // 右下箭头
                    $('.section6 .six .lpage6img4').fadeIn(800).css({
                        'transform-origin': 'bottom left',
                        'transform': 'rotate(0deg)',
                        'transition': 'all 2s ease',
                    })

                    //qita
                    $('.section6 .six .lpage6img5').fadeIn(800,()=>{
                        $('.section6 .six .lpage6img6').fadeIn(800,()=>{
                            $('.section6 .six .lpage6img7').fadeIn(800)
                        })
                    })
                }
            },

            // 离开当前页
            onLeave: function (index, nextIndex) {
                if (index == 1) {
                    $('.section1 .one .lpage1Right .logo img').fadeOut(0);
                    $('.section1 .one .lpage1Right .lpage1text1 h2').fadeOut(0);
                    $('.section1 .one .lpage1Right .lpage1text2 p').fadeOut(0);
                    $('.section1 .one .lpage1Right .lpage1login').fadeOut(0);
                }
                // ....................................................................................................................................................
                if (index == 2) {
                    // 文字
                    $('.section2 .two .lpage2bg .adjustAutoText').css({
                        'left': '80px',
                        'display': 'none'
                    }).animate({
                        'left': '-180px'
                    }, 1000);

                    // 图片
                    $('.section2 .two .lpage2bg .lpage2img1').fadeOut()
                    $('.section2 .two .lpage2bg .lpage2img2').css({
                        'transform-origin': 'bottom right',
                        'transform': 'rotate(90deg)',
                        'transition': 'all 1.5s ease',
                    })
                }
                // ....................................................................................................................................................
                if (index == 3) {
                    //文字
                    $('.lpage3bg .adjustAutoText').css({
                        'right': '180px',
                        'display': 'none'
                    }).animate({
                        'right': '-180px'
                    }, 1000);

                    // 图片
                    $('.lpage3bg .pageImg').css({
                        'margin-top': '0px',
                        'display': 'none'
                    }).animate({
                        'margin-top': '-250px'
                    }, 1000).fadeOut()


                    $('.lpage3bg .lpage3img4').css({
                        'transform': 'rotateX(90deg)',
                        'transition': 'all 1.5s ease',
                    })
                }
                // ..............................................................................................................................................................
                if (index == 4) {
                    //文字
                    $('.lpage4bg .adjustAutoText').fadeOut()

                    // 零碎图片
                    $('.lpage4bg .pageImg').css({
                        'margin-top': '0px',
                        'display': 'none'
                    }).animate({
                        'margin-top': '-250px'
                    }, 1000).fadeOut();
                    // 电脑
                    $('.lpage4bg .lpage4img5').fadeOut()

                    // 屏幕
                    $('.lpage4bg .lpage4img6').css({
                        'transform': 'rotateX(90deg)',
                        'transition': 'all 1.5s ease',
                    })
                    // 圆图
                    $('.lpage4bg .lpage4img7').css({
                        'transform': 'rotateX(90deg)',
                        'transition': 'all 1.5s ease',
                    })
                }
                // ..............................................................................................................................................................
                if (index == 5) {
                    //文字
                    $('.section5 .five .adjustAutoText').fadeOut()

                    // 手机、打印机
                    $('.section5 .five .lpage5img3').css('z-index',2).animate({
                        'top':'224px'
                    },1000).fadeOut()
                    $('.section5 .five .lpage5img4').css('z-index',1).animate({
                        'top':'224px'
                    },1000).fadeOut()

                   //电脑和电脑壁纸
                    $('.section5 .five .lpage5img2').animate({
                        'top':'280px',
                        'left':'895px'
                    },500,()=>{
                        $('.section5 .five .lpage5img1').fadeOut()
                    }).fadeOut(500)
                
                    //箭头
                    $('.section5 .five .lpage5img5').css({
                        'transform-origin': 'bottom left',
                        'transform': 'rotate(-90deg)',
                        'transition': 'all 1s ease'
                    }).fadeOut(1000)
                }
                // ....................................................................................................................................................               
                if (index == 6) {
                    //左上箭头
                    $('.section6 .six .lpage6img1').css({
                        'transform-origin': 'bottom left',
                        'transform': 'rotate(-90deg)',
                        'transition': 'all 1s ease'
                    }).fadeOut(1000)
                    //左下箭头
                    $('.section6 .six .lpage6img2').css({
                        'transform-origin': 'bottom right',
                        'transform': 'rotate(-90deg)',
                        'transition': 'all 1s ease'
                    }).fadeOut(1000)
                     //右上箭头
                     $('.section6 .six .lpage6img3').css({
                        'transform-origin': 'bottom right',
                        'transform': 'rotate(90deg)',
                        'transition': 'all 1s ease'
                    }).fadeOut(1000)
                    //右下箭头
                    $('.section6 .six .lpage6img4').css({
                        'transform-origin': 'bottom left',
                        'transform': 'rotate(90deg)',
                        'transition': 'all 1s ease'
                    }).fadeOut(1000)
                    //qita
                    $('.section6 .six .lpage6img5').fadeOut()
                    $('.section6 .six .lpage6img6').fadeOut()
                    $('.section6 .six .lpage6img7').fadeOut()
                }
            },

        });
    })
});