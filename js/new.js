$('.monitor .tabs').on('click', 'a', function(){
    // 点击a标签, 添加类名
    $(this).addClass('active').siblings('a').removeClass('active')
    // 让对应的content盒子 显示
    var index = $(this).index()

    // 注意这里的 siblings('.content') 要写上匹配的content类名
    $('.monitor .content').eq(index).show().siblings('.content').hide()
})
// 克隆 marquee 里所有的行 (row), 每一个都clone一份  
$(".marquee-view .marquee").each(function() {
    // console.log($(this));
    var rows = $(this).children().clone();
    $(this).append(rows);
  });
  
// ! 点位分布模块
;(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".pie"));
    // 2. 指定配置项和数据
    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
  
      series: [
        {
          name: "面积模式",
          type: "pie",
          radius: ['20%', '70%'],
          center: ["50%", "50%"],
          roseType: "radius",
            // 文本标签控制饼形图文字的相关样式， 注意它是一个对象
        label: {
            fontSize: 10
          },
        // 引导线
        labelLine:{
            // 连接扇形的线长
            length: 6,
            // 连接文字线长
            length2:8
        },
          data: [
            { value: 20, name: '云南' },
            { value: 26, name: '北京' },
            { value: 24, name: '山东' },
            { value: 25, name: '河北' },
            { value: 20, name: '江苏' },
            { value: 25, name: '浙江' },
            { value: 30, name: '四川' },
            { value: 42, name: '湖北' }
  
          ]
        }
      ]
    };
  
    // 3. 配置项和数据给我们的实例化对象
    myChart.setOption(option);

    // 4. 监听浏览器窗口缩放
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function() {
        myChart.resize();
    });

  })();

  //! 用户统计模块 
  ;(function () {
    // 1. 实例化对象
    var barChart = echarts.init(document.querySelector(".bar"));

    // 初始化barChart之后
    // 中间省略的数据  准备三项
    var item = {
        name:'',
        value: 1200,
        // 柱子颜色
        itemStyle: {
            color: '#254065'
        },
        // 鼠标经过柱子颜色
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
        // 单个柱子的提示框提示隐藏
        tooltip: {
            extraCssText: 'opacity:0'
        },
    }

    // 2. 指定配置和数据
    var option = {

        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0, 0, 0, 1,
            [
                 { offset: 0, color: '#00fffb' }, // 0 起始颜色
                 { offset: 1, color: '#0061ce' }  // 1 结束颜色
           ]
        ),
        // 工具提示
        tooltip: {
          // 触发类型  经过轴触发axis  经过轴触发item
          trigger: 'item',
          // axis 轴触发提示才有效
        //   axisPointer: {    
        //     // 默认为直线，可选为：'line' 线效果 | 'shadow' 阴影效果       
        //     type: 'shadow'        
        //   }
        },
        // 图表边界控制
        // 直角坐标系内绘图网格（区域）
        grid: {
            top: '3%',
            right: '3%',
            bottom: '3%',
            left: '0%',
            //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
            containLabel: true,
            // 是否显示直角坐标系网格
            show: true,
            //grid 四条边框的颜色
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
 
        // 控制x轴
        xAxis: [
            {
                // 使用类目，必须有data属性
                type: 'category',
                // 使用 data 中的数据设为刻度文字
                // xAxis
                data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],

                // 刻度设置
                axisTick: {
                    // true意思：图形和刻度居中中间
                    // false意思：图形在刻度之间
                    alignWithLabel: true,
                    // 不显示刻度
                    show: false
                },        
                // x坐标轴文字标签样式设置
                axisLabel: {
                    color: '#4c9bfd'
                },
                // x坐标轴颜色设置
                axisLine:{
                    lineStyle:{
                        color:'rgba(0, 240, 255, 0.3)',
                        // width:8,  x轴线的粗细
                        // opcity: 0,   如果不想显示x轴线 则改为 0
                    }
                }
            }
        ],
        
        // 控制y轴
        yAxis: {
            type: 'value',
            // 刻度设置
            axisTick: {
                // 不显示刻度
                show: false
            },        
            // y坐标轴文字标签样式设置
            axisLabel: {
                color: '#4c9bfd'
            },
            // y坐标轴颜色设置  axisLine
            axisLine:{
                lineStyle:{
                        color:'rgba(0, 240, 255, 0.3)',
                    // width:8,  x轴线的粗细
                    // opcity: 0,   如果不想显示x轴线 则改为 0
                    }
                },
            // y轴 分割线颜色  lineStyle
            splitLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            }  
          },
        
        // 控制x轴
        series: [
          {
            // 图表数据名称
            name: '用户统计',
            // 图表类型
            type: 'bar',
            // 柱子宽度
            barWidth: '60%',
            // 数据
            // series
            data: [2100,1900,1700,1560,1400,item,item,item,900,750,600,480,240],

          }
        ]
      };
        
      // 3. 把配置给实例对象
      barChart.setOption(option);
      // 4. echarts 图表跟随浏览器缩放
      window.addEventListener('resize', function(){
        barChart.resize()
      })
    })();
    
//! 销售统计模块
;(function() {
    var data = {
        year: [
          [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
          [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
          [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
          [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
          [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
          [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
          [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
          [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
      }
    
    // 1. 实例化对象
    const myChart = echarts.init(document.querySelector(".line"));
    // 2. 指定配置和数据
    const option = {
      tooltip: {
        trigger: "axis"
      },
      // 图例组件
      legend: {
          // 如果series系列里面 有设置name, 这里可以不写data
        // data: ["邮件营销", "联盟广告"],
        textStyle: {
            color: '#4c9bfd' // 图例文字颜色
          },
          right: '10%' // 距离右边10%
      },
    // 设置网格样式
    grid: { 
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        show: true,// 显示边框
        borderColor: '#012f4a',// 边框颜色
        containLabel: true // 包含刻度文字在内
      },
  
  
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisTick: {
           show: false // 去除刻度线
         },
         axisLabel: {
           color: '#4c9bfd' // 文本颜色
         },
         axisLine: {
           show: false // 去除轴线
         },
         boundaryGap: false  // 去除轴内间距
      },
  
      yAxis: {
        type: 'value',
        axisTick: {
          show: false  // 去除刻度
        },
        axisLabel: {
          color: '#4c9bfd' // 文字颜色
        },
        splitLine: {
          lineStyle: {
            color: '#012f4a' // 分割线颜色
          }
        }
      },
  
      color: ['#00f2f1', '#ed3f35'],
    // 图表数据
    series: [{
        name:'预期销售额',
        data: data.year[0],
        type: 'line',
        smooth: true
    },{
        name:'实际销售额',
        data: data.year[1],     
        type: 'line',
        smooth: true
        }]

  
    };
    // 3. 把配置和数据给实例对象
    myChart.setOption(option);

    // 4. 监听浏览器窗口缩放
    window.addEventListener('resize', function(){
        myChart.resize()
    })

  })();
//! 渠道分布模块 - 雷达图
// 销售渠道模块 雷达图
;(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".radar"));
    // 2.指定配置
    var option = {
      tooltip: {
        show: true,
        // 控制提示框组件的显示位置
        position: ["60%", "10%"]
      },
      radar: {
        indicator: [
          { name: "机场", max: 100 },
          { name: "商场", max: 100 },
          { name: "火车站", max: 100 },
          { name: "汽车站", max: 100 },
          { name: "地铁", max: 100 }
        ],
        // 修改雷达图的大小 圆环半径
        radius: "50%",
        shape: "circle",
        // 分割的圆圈个数
        splitNumber: 4,
        name: {
          // 修饰雷达图文字的颜色
          textStyle: {
            color: "#4c9bfd"
            // color:'orange'
          }
        },
        // 分割的圆圈线条的样式
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255, 0.5)"
            // color:"orange"
          }
        },
        // 是否显示分割区域(每一个环间的区域)
        splitArea: {
          show: false
        },
        // 轴线(半径线)修改为白色半透明, 
        axisLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.5)"
            // color:'pink'
          }
        }
      },
      series: [
        {
          name: "北京",
          type: "radar",
          // 填充区域的线条颜色
          lineStyle: {
            normal: {
              color: "#fff",
              width: 1,
              opacity: 0.5
            }
          },
          data: [[90, 19, 56, 11, 34]],
          // 设置图形标记 （拐点）
          symbol: "circle",
          // 这个是设置小圆点大小
          symbolSize: 5,
          // 设置小圆点颜色
          itemStyle: {
            color: "#fff"
          },
          // 让小圆点显示数据
          label: {
            show: true,
            fontSize: 10
          },
          // 修饰我们区域填充的背景颜色
          areaStyle: {
            color: "rgba(238, 197, 102, 0.6)"
          }
        }
      ]
    };
    // 3.把配置和数据给对象
    myChart.setOption(option);
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
      // 让我们的图表调用 resize这个方法
      myChart.resize();
    });
})();
  
//! 销售模块 - 饼图
// 半圆形 设置方式
;(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".gauge"));
    // 2. 指定数据和配置
    var option = {
        series: [
          {
            type: 'pie',
            // 放大图形
            radius: ['130%', '150%'],  
            // 移动下位置  套住50%文字
            center: ['48%', '80%'],   
            label: {
              normal: {
                show: false
              }
            },  
            // 起始角度，支持范围[0, 360]
            // startAngle: 180,
            // 鼠标经过不变大
            hoverOffset: 0,  
            data: [
                { value: 100,itemStyle: { color: '#12274d' }},
                { value: 200,itemStyle:{color:'transparent'}},
                { value: 100,
                  itemStyle: {
                  // 颜色渐变#00c9e0->#005fc1
                  color: new echarts.graphic.LinearGradient(
                    // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                    0,
                    0,
                    0,
                    1,
                    [
                      { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                      { offset: 1, color: "#005fc1" } // 1 结束颜色
                    ]
                  )
                }},
              ]
          }
        ]
      }
    
    // 3. 把数据和配置给实例对象
    myChart.setOption(option);
  })();
//! 全国热销模块
;(function(){
    var hotData = [
        {
            city: '北京',  // 城市
            sales: '25, 179',  // 销售额
            flag: true, //  上升还是下降
            brands: [   //  品牌种类数据
            { name: '可爱多', num: '9,086', flag: true },
            { name: '娃哈哈', num: '8,341', flag: true },
            { name: '喜之郎', num: '7,407', flag: false },
            { name: '八喜', num: '6,080', flag: false },
            { name: '小洋人', num: '6,724', flag: false },
            { name: '好多鱼', num: '2,170', flag: true },
            ]
        },
        {
            city: '河北',
            sales: '23,252',
            flag: false,
            brands: [
            { name: '可爱多', num: '3,457', flag: false },
            { name: '娃哈哈', num: '2,124', flag: true },
            { name: '喜之郎', num: '8,907', flag: false },
            { name: '八喜', num: '6,080', flag: true },
            { name: '小洋人', num: '1,724', flag: false },
            { name: '好多鱼', num: '1,170', flag: false },
            ]
        },
        {
            city: '上海',
            sales: '20,760',
            flag: true,
            brands: [
            { name: '可爱多', num: '2,345', flag: true },
            { name: '娃哈哈', num: '7,109', flag: true },
            { name: '喜之郎', num: '3,701', flag: false },
            { name: '八喜', num: '6,080', flag: false },
            { name: '小洋人', num: '2,724', flag: false },
            { name: '好多鱼', num: '2,998', flag: true },
            ]
        },
        {
            city: '江苏',
            sales: '23,252',
            flag: false,
            brands: [
            { name: '可爱多', num: '2,156', flag: false },
            { name: '娃哈哈', num: '2,456', flag: true },
            { name: '喜之郎', num: '9,737', flag: true },
            { name: '八喜', num: '2,080', flag: true },
            { name: '小洋人', num: '8,724', flag: true },
            { name: '好多鱼', num: '1,770', flag: false },
            ]
        },
            {
            city: '山东',
            sales: '20,760',
            flag: true,
            brands: [
            { name: '可爱多', num: '9,567', flag: true },
            { name: '娃哈哈', num: '2,345', flag: false },
            { name: '喜之郎', num: '9,037', flag: false },
            { name: '八喜', num: '1,080', flag: true },
            { name: '小洋人', num: '4,724', flag: false },
            { name: '好多鱼', num: '9,999', flag: true },
            ]
        }
        ]
    // 2. 遍历数据
    const arr = hotData.map(function(el,i){
      return `<li data-id=${i}>
              <span>${el.city}</span>
              <span>${el.sales}<s class=${el.flag ? 'icon-up' : 'icon-down'}></s></span>
          </li>`
    })
    const leftBox = document.querySelector('.sup')
    leftBox.innerHTML = arr.join('')

    // 封装一个渲染 函数  
    let index = 0
    const lis = document.querySelectorAll('.sup li')
    const rightBox = document.querySelector('.sub')
    leftBox.addEventListener('click', function(e){
       if (e.target.tagName === 'LI') {
          lis.forEach(function(el){
            el.classList.remove('active')
          })
          e.target.classList.add('active')
          // 渲染底部数据
          index = e.target.dataset.id 
          const brands = hotData[index].brands
          const contentArr = brands.map(function(item){
            return `<li><span>${item.name}</span><span>${item.num}<s class=${item.flag ? 'icon-up' : 'icon-down'}></s></span></li>`
          })
          rightBox.innerHTML = contentArr.join('')
       }
    })

    // 3. 鼠标经过小li 高亮显示
    // 4. 默认显示第一个 
    lis[0].click()
    // 5. 开启定时器

    let timer = setInterval(function(){
        index++
        if (index >=5) index = 0
        lis[index].click()
    }, 2000)

    leftBox.addEventListener('mouseover', function(){
      clearInterval(timer)
    })
    leftBox.addEventListener('mouseout', function(){
      timer = setInterval(function(){
        index++
        if (index >=5) index = 0
        lis[index].click()
       }, 2000)
    })

})()


  
  
 