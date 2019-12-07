<template>
    <div class="hourly">
     <div class="group" id="myChart" >
 <div id="main" style="width: 200%;height: 16rem;"></div>
    </div>
    </div>
  
</template>
<script>
import echarts from 'echarts'
export default {
    props:{
hourlyData:Array
    },
  data () {
    return {
        	    charts: '',
			/*	opinion: ["1", "3", "3", "4", "5"],*/
				// opinionData: ["7", "7", "8", "8", "9"]
    }
  },
  computed:{
opinionData()
{
  let arr=[];
      
           this.hourlyData.forEach(value => {
               arr.push(value.tmp);
           });
    
    return arr;
},
timeData()
{
    let arr=[];
  
    let t=/\s.*/;

     this.hourlyData.forEach(value => {
          
      
        

          let time=t.exec(value.time)[0];
            // console.log(time);
         let obj={value:time,
                 textStyle: {
                  color: '#ffffff'
                    }};

        arr.push(obj);
           });
     
     return arr;
}
  },
  mounted () {
   
     
				this.drawLine('main');
		

  },
 methods: {
			drawLine(id) {
				this.charts = echarts.init(document.getElementById(id))
				this.charts.setOption({
                      color:['#ffffff'],
					tooltip: {
						trigger: 'axis'
					},
				  
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},

					toolbox: {
						feature: {
							saveAsImage: {}
						}
					},
					xAxis:[ {
                        color:['#ffffff'],
						type: 'category',
						boundaryGap: false,
                    data:this.timeData,
                    axisLine:{show:false},
                    axisTick:{show:false}
					
                    },
                    {
                         show:false,
                        offset:25,
                        color:['#ffffff'],
						type: 'category',
						boundaryGap: false,
                    data: [{ value:"良",
                      textStyle: {
                     color: '#ffffff',
                     padding:5,
                      border:1,
                     backgroundColor:'rgba(255,255,255,0.2)',
                      borderRadius:5
                    }
                    },{ value:"良",
                      textStyle: {
                  color: '#ffffff',
                     padding:5,
                     backgroundColor:'rgba(255,255,255,0.2)',
                     border:1,
                      borderRadius:5
                    }
                    },{ value:"良",
                      textStyle: {
                   color: '#ffffff',
                     padding:5,
                      border:1,
                     backgroundColor:'rgba(255,255,255,0.2)',
                      borderRadius:5
                    }
                    },{ value:"良",
                      textStyle: {
                  color: '#ffffff',
                     padding:5,
                      border:1,
                     backgroundColor:'rgba(255,255,255,0.2)',
                      borderRadius:5,
                    }
                    },{ value:"良",
                      textStyle: {
                  color: '#ffffff',
                     padding:5,
                      border:1,
                     backgroundColor:'rgba(255,255,255,0.2)',
                      borderRadius:5,
                    }
                    },
                    ],
                    axisLine:{show:false},
                    axisTick:{show:false}
					
                    },
                    ],
					yAxis: {
                        type: 'value',
                        //   scale:true, //纵坐标起始点根据最低值变化
                          show:false
					},

					series: [{
                
					 symbol: 'circle',
						type: 'line',
                        label:{
                            show:true,
                       formatter: '{c}°C',
                       color:'#ffffff'
                        },
                        symbolSize:8,
                        smooth:false, 
                        itemStyle:{
                        normal:{
                            lineStyle:{
                                 color:'#ffffff',
                                width:2,
                                type:'solid'  //'dotted'虚线 'solid'实线
                            },
                            color:'#31395d',
                            borderColor:'#f5f5f5',
                            
                        }
                    },
						data: this.opinionData
					}]
				})
			}
		},
}
</script>
<style scoped>
.hourly{
 margin-top: 0.5rem;
padding: 1rem 1rem; 
  
}
.group{color: #f5f5f5;
    background-color: rgba(255, 255, 255,0.2);
    border-radius:0.5rem; 
  overflow-x:auto;
}
</style>
