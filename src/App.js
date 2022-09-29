import "./styles.css";
import { useQuery } from "@tanstack/react-query";

export default function App() {
  const getTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await res.json();

    return data;
  };
  const { data, isError, isLoading, isFetching, isSuccess } = useQuery(
    "todo",
    getTodos
  );

  return <div className="App">{JSON.stringify(data)}</div>;
}
