<template>
  <a-button type="primary" @click="showModal">Open Modal</a-button>
  <a-modal v-model:visible="visible" :footer="null">
    <create @add-todo="addTodo" />
  </a-modal>
  <div class="table">
    <a-table :columns="columnTodo" :data-source="dataTodo">
      <template #bodyCell="{ column, text, record }">
        <div
          v-if="column.dataIndex === 'todo_name'"
          @click="() => hanleTodoName(column, record)"
        >
          <span v-if="!idEdit">{{ text }}</span>
          <input v-if="record.id === idEdit" :value="text" />
          <span v-else>{{ text }}</span>
        </div>
        <div v-if="column.dataIndex === 'note'">
          <span v-if="!idEdit">{{ text }}</span>
          <input v-if="record.id === idEdit" :value="text" />
          <span v-else>{{ text }}</span>
        </div>
        <div v-if="column.dataIndex === 'create_date'">
          <span>{{ text }}</span>
          <button v-if="record.id === idEdit">Save</button>
        </div>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>

<style scoped>
.table {
  /* margin: 40px !important; */
  border: 1px solid #f0f0f0;
}
</style>
