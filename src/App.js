import "./styles.css";
import { useQuery } from "@tanstack/react-query";

export default function App() {
  const { data, isError, isLoading, isFetching, isSuccess } = useQuery(
    "todo",
    getTodos
  );
  return (
    <div className="App">
      <h1>Hello CoddsdeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
