<template>
  <div class="from-todo">
    <a-form
      :model="formState"
      name="basic"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item :label="$t('todoName')" name="todo_name">
        <a-input v-model:value="formState.todo_name" />
      </a-form-item>

      <a-form-item :label="$t('note')" name="note">
        <a-input v-model:value="formState.note" />
      </a-form-item>

      <a-form-item >
        <a-button type="primary" html-type="submit">{{
          $t("submit")
        }}</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" src="./Create.ts"></script>

<style scoped>
.from-todo {
  padding: 40px !important;
}
</style>
