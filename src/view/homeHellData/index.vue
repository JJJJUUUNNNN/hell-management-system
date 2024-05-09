<template>
  <div class="contanier">
    <n-flex class="header">
      <n-card title="地府人数" hoverable> 000000 </n-card>
      <n-card title="今日入境" hoverable> 000000 </n-card>
      <n-card title="今日出境" hoverable> 000000 </n-card>
      <n-card title="孤魂野鬼" hoverable> 000000 </n-card>
      <n-card title="管理人员" hoverable> 000000 </n-card>
      <n-card title="冥币资产" hoverable> 000000 </n-card>
    </n-flex>
    <div class="main">
      <div class="card">
        <Chart :options="lineOptions" id="chart" />
      </div>
      <div class="card">
        <Chart :options="barOptions" id="chart2" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Chart from "./component/Chart.vue";

const lineOptions = ref({
  type:'line',
  seriesData: [150, 230, 224, 218, 135, 147, 260]
});

const barOptions = ref({
  type: "bar",
  seriesData: [120, 200, 150, 80, 70, 110, 130],
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
  }
}
</style>
