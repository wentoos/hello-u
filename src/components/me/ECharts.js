import React, { Component } from 'react'
import echarts from 'echarts'

class EChart extends Component {
    componentDidMount(){
        let myChart = echarts.init(document.getElementById('echart_main'));
        myChart.setOption({
            title:{
        show:true,
        text:'个人技能展示',
        left:'center',
        textStyle:{
          color:'#2196F3'
        }
      },
      color: ['#FF0033'],
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Vue', 'git'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis : [
        {
          type : 'value',
          name:'百分数(%)',
          nameTextStyle:{
            color:'#2196F3',
            fontSize:'16'
          }
        }
      ],
      series : [
            {
              name:'技能熟练度',
              type:'bar',
              barWidth: '60%',
              data:[80, 81, 78, 70, 70, 50, 45]
            }
          ]
        })
    }
  render() {
    return (
        <div className='echart_warp'>
            <div id="echart_main" style={{width: 650, height:450}}></div>
        </div>
    )
 }
}

export default EChart
