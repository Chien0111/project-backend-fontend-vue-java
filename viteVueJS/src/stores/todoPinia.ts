import { defineStore } from "pinia";
import { ref } from "vue";
import en from "../locales/en";
import vn from "../locales/vn";

export const useCounterStore = defineStore("counter", () => {
  const todoList = ref<any>([]);
  const t = ref<any>(en);

  function addTodo(todo: any) {
    todoList.value.push(todo);
  }

  function changeLanguageEn() {
    t.value = en;
  }
  function changeLanguageVn() {
    t.value = vn;
  }

  return { todoList, t, addTodo, changeLanguageEn, changeLanguageVn };
});
