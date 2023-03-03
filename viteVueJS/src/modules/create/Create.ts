import { defineComponent, onMounted, reactive } from "vue";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useCounterStore } from "../../stores/todoPinia";
import { i18n } from "../../main";
import { useRouter } from "vue-router";

interface FormState {
  todo_name: string;
  note: string;
}
export default defineComponent({
  name: "create",
  setup(props, context) {
    const store = useCounterStore();
    const router = useRouter();
    const initialFormState = { todo_name: "", note: "" };
    const formState = reactive<FormState>(initialFormState);
    const onFinish = (values: any) => {
      const body = { ...values, id: uuidv4() };
      axios.post("http://localhost:3000/todos", body).then((data) => {
        context.emit("add-todo", body);
        store.addTodo(data);
        (formState.todo_name = ""), (formState.note = "");
      });
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };

    onMounted(() => {
      if (router.currentRoute.value.params.lang === "en") {
        i18n.global.locale = "en";
      } else if (router.currentRoute.value.params.lang === "vn") {
        i18n.global.locale = "vn";
      }
    });

    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },
});
