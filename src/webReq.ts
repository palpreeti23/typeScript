import axios from "axios";
import type { AxiosResponse } from "axios";

axios.get("https://example.com/data").then((response) => {
  console.log(response.data);
});

interface Todo {
  userID: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    console.log("data", response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log("error", error.message);
    }
  }
};
