<template>
  <v-chart @zr:click="handleAddClick" :option="option" ref="chartInstance"> </v-chart>
</template>
<script setup lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { CustomChart } from "echarts/charts";
import VChart from "vue-echarts";
import { type ECBasicOption, ECElementEvent, ElementEvent, EChartsType } from "echarts/types/dist/shared";
import { ref, Ref, onMounted, nextTick, computed } from "vue";
import * as echarts from "echarts/index";
use([CanvasRenderer, CustomChart]);
const data: Ref<Array<Array<number>>> = ref(Array(
        [488.2358421078053, 459.70913833075736, 1],
        [770.3415644319939, 757.9672194986475, 1],
        [1180.0329284196291, 743.6141808346214, 1],
        [894.03790632245, 1188.1985153835008, 1],
        [1372.98925630313, 477.3839988649537, 1],
        [1378.62251255796, 935.6708486282843, 1],
));
const option: Ref<ECBasicOption|undefined> = ref()
const chartOption = computed(function(){
  return {
    tooltip: {},
    geo: {
      tooltip: {
        show: true
      },
      map: 'iceland_svg',
      roam: true
    },
    // animation: false,
    animationDurationUpdate: 0,
    series: {
      type: 'custom',
      coordinateSystem: 'geo',
      geoIndex: 0,
      zlevel: 1,
      data: data.value,
      renderItem(params: any, api: any) {
        const coord = api.coord([
          api.value(0, params.dataIndex),
          api.value(1, params.dataIndex)
        ]);
        if(api.value(2, params.dataIndex) < 1){
          return;
        }

        const circles = [];
        for (let i = 0; i < 5; i++) {
          circles.push({
            type: 'circle',
            shape: {
              cx: 0,
              cy: 0,
              r: 30
            },
            style: {
              stroke: 'red',
              fill: 'none',
              lineWidth: 2
            },
            // Ripple animation
            keyframeAnimation: {
              duration: 4000,
              loop: true,
              delay: (-i / 4) * 4000,
              keyframes: [
                {
                  percent: 0,
                  scaleX: 0,
                  scaleY: 0,
                  style: {
                    opacity: 1
                  }
                },
                {
                  percent: 1,
                  scaleX: 1,
                  scaleY: 0.4,
                  style: {
                    opacity: 0
                  }
                }
              ]
            }
          });
        }
        return {
          type: 'group',
          x: coord[0],
          y: coord[1],
          children: [
            ...circles,
            {
              type: 'path',
              shape: {
                d: 'M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z',
                x: -10,
                y: -35,
                width: 20,
                height: 40
              },
              style: {
                fill: 'red'
              },
              // Jump animation.
              keyframeAnimation: {
                duration: 1000,
                loop: true,
                delay: Math.random() * 1000,
                keyframes: [
                  {
                    y: -10,
                    percent: 0.5,
                    easing: 'cubicOut'
                  },
                  {
                    y: 0,
                    percent: 1,
                    easing: 'bounceOut'
                  }
                ]
              }
            }
          ]
        } as echarts.CustomSeriesRenderItemReturn;
      }
    }
  }
});
const chartInstance: Ref<EChartsType|undefined> = ref()
onMounted(function () {
  fetch("/Map_of_Iceland.svg").then((res) => res.text()).then(async (svg) => {
    echarts.registerMap("iceland_svg", { svg: svg });
    await nextTick();
    // echarts.
    option.value = chartOption.value;
  });
});

function handleClick(params: ECElementEvent){
    let point = params.data as number[];
    changeState(point);
}

function handleAddClick(params: ElementEvent){
    // if (params.target === undefined){
        const point = chartInstance.value?.convertFromPixel("geo",[params.offsetX, params.offsetY]);
        if(point && point[0] > 0 && point[1] > 0){
          const start = Date.now();
          changeState(point)
          console.log(Date.now() - start);
          
          // data.value.push(Array(point[0], point[1], 1));
          // chartInstance.value?.setOption(chartOption.value);
        } else{
          console.log(point);
        }
    // }
}

function changeState(point: number[]){
  console.log(point);
  let index = -1;
  for(let i = 0; i< data.value.length; i++){
    if(Math.abs(data.value[i][0] - point[0]) < 40 && Math.abs(data.value[i][1] - point[1]) < 40){
      index = i;
      break;
    }
  }
  console.log(index);
  if(index === -1){
    data.value.push([point[0], point[1], 1]);
  } else {
    // data.value[index][2] = 1 - data.value[index][2];
    data.value.splice(index, 1);
  }
  console.log(data.value);
  // chartInstance.value?.setOption(chartOption.value);
  option.value = chartOption.value;
}
</script>
