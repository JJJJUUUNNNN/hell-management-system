<template>
  <div class="main">
    <div class="card">
      <n-form ref="formRef" :model="formData" label-placement="left">
        <n-flex>
          <n-form-item path="name" label="姓名">
            <n-input
              v-model:value="formData.name"
              @keydown.enter.prevent
              placeholder="请输入姓名"
            />
          </n-form-item>
          <n-form-item path="password" label="时间">
            <n-date-picker
              v-model:value="formData.time"
              type="datetimerange"
              clearable
              value-format="yyyy.MM.dd HH:mm:ss"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </n-form-item>
          <n-button
            :disabled="formData.name === null"
            round
            type="primary"
            @click="handleValidateButtonClick"
          >
            搜索
          </n-button>
        </n-flex>
      </n-form>
    </div>
    <div class="card">
      <n-data-table
        :columns="columns"
        :data="tableData"
        :pagination="pagination"
        :row-key="rowKey"
        @update:checked-row-keys="handleCheck"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { DataTableColumns, DataTableRowKey } from "naive-ui";
import { RowData } from "naive-ui/es/data-table/src/interface";

const formData = ref({
  name: "",
  time: null,
});

const formRef = ref();
const message = useMessage();
const columns = computed(() => createColumns());

const tableData = ref([
  {
    id: 1,
    name: "张三",
    age: 32,
    time: "20240102",
  },
  {
    id: 2,
    name: "李四",
    age: 32,
    time: "20240102",
  },
]);
const pagination = ref({
  pageSize: 5,
});

function handleValidateButtonClick(e: MouseEvent) {
  e.preventDefault();
}

function createColumns(): DataTableColumns<RowData> {
  return [
    {
      type: "selection",
      disabled: (row: RowData) => row.name == "66",
    },
    {
      title: "姓名",
      key: "name",
    },
    {
      title: "时间",
      key: "time",
    },
  ];
}

function rowKey(row: RowData) {
  return row.id;
}
function handleCheck(rowKeys: DataTableRowKey[]) {
  console.log("handleCheck", rowKeys);
}
</script>

<style lang="scss" scoped>
.main {
  margin: 30px;

  .card {
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 4px 10px 0px #e7eaf0;
    border-radius: 6px 6px 6px 6px;
    padding: 20px;
    margin: 10px 0;
  }
}
</style>
