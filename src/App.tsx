import NewTodo from "./components/NewTodo";
import ToDos from "./components/Todos";
import TodosContextProvider from "./store/todos-contex";
function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <ToDos />
    </TodosContextProvider>
  );
}

export default App;
