var radar_light = echarts.init(document.getElementById('radar_light'));
        radar_light.setOption({ 
            tooltip: { 
                trigger: 'item',
                padding: [12,16],
                backgroundColor: 'rgba(27,40,49,0.85)',
                textStyle: {
                    color: '#ffffff',
                },
                extraCssText: 'box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);',
            },
            radar: {
                indicator: [
                    {text: 'BMI',max: 100}, 
                    {text: '血脂',max: 100},
                    {text: '血压',max: 100},
                    {text: '血糖',max: 100},
                    {text: '肾功能',max: 100},
                    {text: '肝功能',max: 100}
                ],
                center: ['50%', '50%'],
                radius: '100',
                startAngle: 90,
                splitNumber: 4,
                name: {
                    textStyle: {
                        color:'#555555'
                    }
                },
                splitArea: {
                    show: false 
                },
                axisTick: {
                    show: false 
                },
                axisLine: {
                    lineStyle: {
                        color: '#eeeeee'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#eeeeee'
                    }
                }
            },
            series: [{ 
                name: 'Matt',
                type: 'radar',
                itemStyle: {
                    normal: {
                        opacity: 0
                    }
                },
                lineStyle: {
                    normal: {
                        opacity: 0
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0, color: '#ff4c81' 
                        }, {
                          offset: 1, color: '#ff4d80'
                        }], false),
                        opacity: 0.9,
                        shadowColor: '#ff4d80',
                        shadowBlur: 20,
                        shadowOffsetX: 0,
                        shadowOffsetY: 3,
                    }
                },
                data: [{
                    value: [46,32,34,53,65,87],     
                    name: ''       
                }]
            }]
        });


        var radar_darkstyle = echarts.init(document.getElementById('radar_darkstyle'));
        radar_darkstyle.setOption({ 
            tooltip: { 
                show:true,
                trigger: 'item',
                padding: [12,16],
                backgroundColor: 'rgba(256,256,256,0.85)',
                textStyle: {
                    color: '#1b2831',
                },
                extraCssText: 'box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);',
            },
            color: ['#ff4d80','#a7ffeb'],
            legend: {
                x: 'right',
                data: ['Matt','Bruce'],
                textStyle:{
                    color: '#7196b0'
                }
            },
            radar: {
                indicator: [
                    {text: 'BMI',max: 100}, 
                    {text: '血脂',max: 100},
                    {text: '血压',max: 100},
                    {text: '血糖',max: 100},
                    {text: '肾功能',max: 100},
                    {text: '肝功能',max: 100}
                ],
                center: ['50%', '50%'],
                radius: '100',
                startAngle: 90,
                splitNumber: 4,
                shape: 'circle',
                name: {
                    textStyle: {
                        color:'#7196b0'
                    }
                },
                splitArea: {
                    show: false 
                },
                axisTick: {
                    show: false 
                },
                axisLine: {
                    lineStyle: {
                        color: '#293b47'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#293b47'
                    }
                }
            },
            series: [
                { 
                    type: 'radar',
                    itemStyle: {
                        normal: {
                            opacity: 0
                        }
                    },
                    lineStyle: {
                        normal: {
                            opacity: 0
                        }
                    },
                    areaStyle: {
                        normal:{
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                              offset: 0, color: '#ffb595'
                            }, {
                              offset: 1, color: '#ff4d80'
                            }], false),
                            opacity: 1,
                            shadowColor: '#0f191f',
                            shadowOffsetX: 0,
                            shadowOffsetY: 6,
                            shadowBlur: 30,
                        }
                    },
                    data: [{
                        value: [46,32,34,53,65,87],
                        name: 'Bruce'
                    }]
                },
                { 
                    type: 'radar',
                    itemStyle: {
                        normal: {
                            opacity: 0
                        }
                    },
                    lineStyle: {
                        normal: {
                            opacity: 0
                        }
                    },
                    areaStyle: {
                        normal:{
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                              offset: 0, color: '#a7ffeb'
                            }, {
                              offset: 1, color: '#80c5f1'
                            }], false),
                            opacity: 1,
                            shadowColor: '#0f191f',
                            shadowOffsetX: 0,
                            shadowOffsetY: 6,
                            shadowBlur: 30,
                        }
                    },
                    data: [{
                        value: [91,76,53,42,46,56],
                        name: 'Matt'
                    }]
                },
            ]
        });


        var radar_simple = echarts.init(document.getElementById('radar_simple'));
        radar_simple.setOption({ 
            tooltip: { 
                show:true,
                padding: [12,16],
                backgroundColor: 'rgba(27,40,49,0.85)',
                textStyle: {
                    color: '#ffffff',
                },
                extraCssText: 'box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);',
            },
            radar: {
                indicator: [
                    {text: 'BMI',max: 100}, 
                    {text: '血脂',max: 100},
                    {text: '血压',max: 100},
                    {text: '血糖',max: 100},
                    {text: '肾功能',max: 100},
                    {text: '肝功能',max: 100}
                ],
                center: ['50%', '50%'],
                radius: '100',
                startAngle: 90,
                splitNumber: 4,
                name: {
                    textStyle: {
                        color:'#555555'
                    }
                },
                splitArea: {
                    show: false 
                },
                axisTick: {
                    show: false 
                },
                axisLine: {
                    lineStyle: {
                        color: '#eeeeee'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#eeeeee'
                    }
                }
            },
            series: [{ 
                name: 'Matt',
                type: 'radar',
                itemStyle: {
                    normal: {
                        opacity: 0
                    }
                },
                lineStyle: {
                    normal: {
                        opacity: 0
                    }
                },
                areaStyle: {
                    normal: {
                        color: '#10a0f7',
                        opacity: 0.75,
                    }
                },
                data: [{
                    value: [46,32,34,53,65,87],     
                    name: ''       
                }]
            }]
        });


        var radar_flat = echarts.init(document.getElementById('radar_flat'));
        radar_flat.setOption({ 
            tooltip: { 
                show:true,
                trigger: 'item',
                padding: [12,16],
                backgroundColor: 'rgba(256,256,256,1)',
                textStyle: {
                    color: '#1b2831',
                },
                extraCssText: 'box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);',
            },
            color: ['#ff7769','#a7ffeb'],
            legend: {
                x: 'right',
                data: ['Matt','Bruce'],
                textStyle:{
                    color: '#7196b0'
                }
            },
            radar: {
                indicator: [
                    {text: 'BMI',max: 100}, 
                    {text: '血脂',max: 100},
                    {text: '血压',max: 100},
                    {text: '血糖',max: 100},
                    {text: '肾功能',max: 100},
                    {text: '肝功能',max: 100}
                ],
                center: ['50%', '50%'],
                radius: '100',
                startAngle: 90,
                splitNumber: 4,
                shape: 'circle',
                name: {
                    textStyle: {
                        color:'#7196b0'
                    }
                },
                splitArea: {
                    areaStyle: {
                        color:['#384a56','#30414c','#283843','#22313b'],
                    }
                },
                axisTick: {
                    show: false 
                },
                axisLine: {
                    show: false 
                },
                splitLine: {
                    show: false 
                }
            },
            series: [
                { 
                    type: 'radar',
                    itemStyle: {
                        normal: {
                            opacity: 0
                        }
                    },
                    lineStyle: {
                        normal: {
                            opacity: 0
                        }
                    },
                    areaStyle: {
                        normal:{
                            color: '#ff7769',
                            opacity: 1,
                            shadowColor: '#e55749',
                            shadowOffsetX: 0,
                            shadowOffsetY: 6,
                        }
                    },
                    data: [{
                        value: [46,32,24,53,65,87],
                        name: 'Bruce'
                    }]
                },
                { 
                    type: 'radar',
                    itemStyle: {
                        normal: {
                            opacity: 0
                        }
                    },
                    lineStyle: {
                        normal: {
                            opacity: 0
                        }
                    },
                    areaStyle: {
                        normal:{
                            color: '#a7ffeb',
                            opacity: 1,
                            shadowColor: '#83e8d1',
                            shadowOffsetX: 0,
                            shadowOffsetY: 6,
                        }
                    },
                    data: [{
                        value: [76,92,53,32,46,56],
                        name: 'Matt'
                    }]
                },
            ]
        });




        var SeasonData = [
            [22,21,24,16,22,22,20,19,21,22,21,20],
            [23,22,23,24,20,22,21,16,20,21,23,22],
            [23,23,23,18,15,21,22,20,18,15,23,22],
            [22,20,24,26,24,23,24,24,23,24,9,23],
            [23,24,25,25,23,24,25,24,21,24,24,24],
            [20,25,26,23,25,26,27,24,24,25,24,25],
            [18,25,26,27,25,26,27,25,23,26,27,26],
            [24,17,18,20,25,26,28,29,25,28,27,27],
            [26,17,20,19,26,27,26,28,25,28,28,27],
            [27,26,28,28,23,29,28,30,29,29,28,28],
            [28,27,29,29,25,27,29,31,26,28,29,28],
            [29,28,27,28,29,28,29,32,28,30,29,30],
            [29,27,19,29,28,26,30,31,29,31,30,31],
            [31,29,35,20,31,30,31,32,30,29,31,29],
            [29,27,29,19,28,26,30,31,28,31,30,30],
            [30,31,34,33,32,34,31,32,31,32,31,32],
            [30,31,32,32,32,31,30,32,29,30,31,31],
            [30,31,32,31,30,32,32,38,31,31,32,32],
            [32,33,31,32,34,33,33,40,30,32,31,33],
            [31,34,38,35,32,35,34,37,34,34,32,35],
            [34,35,34,33,34,34,36,32,33,35,33,34],
            [33,36,47,34,33,36,35,30,35,36,34,35],
            [34,37,36,35,34,38,35,37,38,36,34,36],
            [35,38,37,36,35,37,37,38,37,38,36,37],
            [37,38,38,38,37,38,38,39,39,37,37,39],
            [39,37,34,40,39,36,40,41,43,39,39,40],
            [39,38,37,40,39,39,40,40,41,37,38,40],
            [41,39,48,41,29,41,39,42,41,39,39,41],
            [41,40,43,42,41,39,41,43,42,42,39,43],
            [43,45,48,44,51,45,42,44,46,45,42,44],
            [45,47,47,45,38,46,42,44,45,45,44,44],
            [40,44,45,36,49,37,40,43,41,32,43,45],
            [44,47,49,48,46,43,44,50,47,47,44,46],
            [45,47,49,48,46,45,46,50,47,48,45,46],
            [46,48,45,44,45,46,46,47,46,47,44,46],
            [47,49,47,50,47,46,47,51,48,48,46,47],
            [49,50,45,46,47,42,48,42,48,49,47,48],
            [39,51,39,44,51,59,52,48,53,46,43,49],
            [51,53,45,40,52,49,48,51,52,50,49,50],
            [51,53,39,48,51,59,50,51,50,51,48,54],
            [52,56,49,53,50,47,51,54,55,52,53,52],
            [52,54,48,51,40,54,52,53,50,53,51,50],
            [48,44,50,52,49,55,53,49,40,50,50,53],
            [53,55,55,53,53,55,56,55,44,54,53,54],
            [56,56,58,52,56,56,52,51,58,52,50,53],
            [58,58,56,55,58,54,57,54,56,53,54,55],
            [56,56,57,55,54,52,58,57,56,55,57,56],
            [57,59,58,58,57,56,63,59,58,57,56,57],
            [59,58,56,61,53,57,61,59,57,59,60,58],
            [61,64,69,60,59,61,63,61,59,61,46,60],
            [63,65,63,63,64,63,66,62,63,63,59,61],
            [63,65,62,62,60,60,68,64,61,56,62,62],
            [65,61,61,69,62,74,65,67,66,68,64,65],
            [64,62,60,65,63,64,67,65,64,66,63,61],
            [67,64,65,67,68,68,64,69,65,70,69,66],
            [68,67,69,68,77,65,69,70,67,74,64,67],
            [68,69,68,65,62,67,69,68,69,66,67,68],
            [69,70,70,69,65,72,65,62,71,68,72,69],
            [70,73,71,70,67,71,62,66,73,69,71,71],
            [68,71,72,70,71,69,62,66,74,69,71,70],
            [71,72,74,75,75,77,73,74,75,72,74,72],
            [73,70,71,73,72,79,72,73,74,70,71,74],
            [75,74,76,77,74,73,70,79,78,75,74,76],
            [80,79,75,78,80,81,74,77,74,80,79,78],
            [81,77,79,73,78,86,75,78,77,74,85,86],
            [89,82,71,91,80,84,78,79,81,79,88,80],
            [83,89,81,88,82,83,88,86,84,85,84,84],
            [92,87,80,81,82,85,83,74,86,83,88,89],
            [87,91,87,96,90,94,88,82,93,72,89,98],
            [97,91,97,86,70,84,98,92,93,92,79,97],
        ];
        var radar_controllView = echarts.init(document.getElementById('radar_controllView'));
        radar_controllView.setOption({ 
            tooltip: { 
                show:false,
            },
            visualMap: {
                color: ['#f640ab', '#2ecbff'],
                min: 0,
                max: 100,
                itemWidth: 4,
                itemHeight: 320,
                bottom: 100,
                right: 20,
            },
            radar: {
                indicator: [
                    {text: 'Dec',max: 100}, 
                    {text: 'Nov',max: 100},
                    {text: 'Oct',max: 100},
                    {text: 'Sep',max: 100},
                    {text: 'Aug',max: 100},
                    {text: 'Jul',max: 100},
                    {text: 'Jun',max: 100},
                    {text: 'May',max: 100},
                    {text: 'Apr',max: 100},
                    {text: 'Mar',max: 100},
                    {text: 'Feb',max: 100},
                    {text: 'Jan',max: 100}
                ],
                center: ['50%', '50%'],
                radius: '60%',
                shape: 'circle',
                startAngle: 90,
                splitNumber: 4,
                name: {
                    textStyle: {
                        color:'#555555'
                    }
                },
                splitArea: {
                    show: false 
                },
                axisTick: {
                    show: false 
                },
                axisLine: {
                    lineStyle: {
                        color: '#cccccc',
                        type: 'dotted',
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#cccccc',
                        type: 'dotted',
                    }
                }
            },
            series: { 
                name: 'Matt',
                type: 'radar',
                symbol: 'none',
                itemStyle: {
                    normal: {
                        lineStyle: {
                          width:1
                        }
                    },
                    emphasis : {
                        areaStyle: {color:'rgba(0,0,0,0.9)'}
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1,
                    }
                },
                areaStyle: {
                    emphasis : {
                        opacity:'0.4'
                    }
                },
                data:SeasonData
            }
        });