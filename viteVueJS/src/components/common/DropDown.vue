<template>
  <a-dropdown :trigger="['click']">
    <div class="ant-dropdown-link" @click.prevent>
      {{ t.language }}
      <DownOutlined />
    </div>
    <template #overlay>
      <a-menu>
        <a-menu-item key="0">
          <div @click="changeLanguageEn">{{ t.english }}</div>
        </a-menu-item>
        <a-menu-item key="1">
          <div @click="changeLanguageVn">{{ t.vietnamese }}</div>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script>
import { watch } from "vue";
import { useCounterStore } from "../../stores/todoPinia";
export default {
  name: "dropDown",
  setup() {
    const { t } = useCounterStore();
    const { changeLanguageEn } = useCounterStore();
    const { changeLanguageVn } = useCounterStore();

    return {
      changeLanguageEn,
      changeLanguageVn,
      t,
    };
  },
};
</script>

<style scope>
.ant-dropdown-link {
  float: right;
  width: 100px;
  border: 1px solid black;
  padding: 10px;
  text-align: center;
  border-radius: 8px;
  margin: 10px;
}
</style>
