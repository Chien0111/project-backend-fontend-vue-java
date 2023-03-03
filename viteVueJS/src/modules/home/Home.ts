import axios from "axios";
import { useCounterStore } from "../../stores/todoPinia";
import { defineComponent, onMounted, reactive, ref } from "vue";
import create from "../create/Create.vue";

const columnTodoData = [
  {
    title: "Todo Name",
    dataIndex: "todo_name",
    width: "20%",
  },
  {
    title: "Note",
    dataIndex: "note",
    width: "20%",
  },
  {
    title: "Create Date",
    dataIndex: "create_date",
  },
];

export default {
  setup() {
    const dataStore = <any>useCounterStore().todoList;
    const dataTodo = ref<any>([]);
    const columnTodo = columnTodoData;
    const todoName = ref<string>("");
    const note = ref<string>("");
    const idEdit = ref<string>("");

    onMounted(() => {
      axios.get("http://localhost:3000/todos").then((res: any) => {
        dataTodo.value = res.data;
      });
    });

    const visible = ref<boolean>(false);

    const showModal = () => {
      visible.value = true;
    };

    const addTodo = (body: any) => {
      dataTodo.value.push(body);
      visible.value = false;
    };

    const hanleTodoName = (column: any, record: any) => {
      console.log("value", column, record?.id);
      idEdit.value = record?.id;
    };

    return {
      addTodo,
      dataTodo,
      columnTodo,
      dataStore,
      visible,
      showModal,
      todoName,
      note,
      hanleTodoName,
      idEdit,
    };
  },
  components: {
    create,
  },
};
