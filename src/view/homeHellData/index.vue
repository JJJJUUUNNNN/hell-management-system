<template>
  <div class="contanier">
    <n-flex class="header">
      <n-card title="卡片1" hoverable> 卡片内容1 </n-card>
      <n-card title="卡片2" hoverable> 卡片内容2 </n-card>
      <n-card title="卡片3" hoverable> 卡片内容3 </n-card>
    </n-flex>
    <div class="main">
      <div class="card">
        <div class="chart" id="chart"></div>
      </div>
      <div class="card">
        <div class="chart" id="chart2"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";

onMounted(() => {
  var myChart = echarts.init(document.getElementById("chart"));
  console.log("chart", myChart);
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
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  });
  var myChart2 = echarts.init(document.getElementById("chart2"));
  console.log("chart2", myChart);
  myChart2.setOption({
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  });
});
</script>

<style lang="scss" scoped>
.contanier {
  margin-bottom: 80px;

  .header {
    .n-card {
      max-width: 300px;
    }
  }

  .main {
    margin: 20px 0;

    .card {
      width: 100%;
      background-color: #fff;
      box-shadow: 0px 4px 10px 0px #e7eaf0;
      border-radius: 6px 6px 6px 6px;
      margin: 10px 0;
    }

    .chart {
      width: 100%;
      height: 400px;
    }
  }
}
</style>
