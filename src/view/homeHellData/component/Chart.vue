<template>
  <div class="chart" :id="id"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";

const props = defineProps({
  options: {
    type: Object,
    default: () => {},
  },
  id: {
    type: String,
    default: "chart",
  },
});

onMounted(() => {
  var myChart = echarts.init(document.getElementById(props.id));
  myChart.setOption({
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: props.options.seriesData,
        type: props.options.type,
      },
    ],
  });
});
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 400px;
}
</style>
