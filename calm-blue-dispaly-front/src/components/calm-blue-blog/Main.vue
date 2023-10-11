<template>
 <el-main>
          <el-scrollbar height="620px">
            <el-table :data="tableData">
              <el-table-column prop="date" label="Date" width="140" />
              <el-table-column prop="name" label="Name" width="120" />
              <el-table-column prop="address" label="Address" />
            </el-table>
          </el-scrollbar>
        </el-main>

</template>
<script setup lang="ts">
import { ref } from 'vue'  //将数据传入ref(数据)返回对象{value:数据}
const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 100 }).fill(item))
</script>
<style scoped>
.layout-container-demo .el-main {
  margin-left: 30px;
  padding: 0px;
}
</style>