import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { Authenticator } from "@aws-amplify/ui-react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_TODOS } from './graphql/queries'; 
import { CREATE_TODO } from './graphql/mutation'



function App() {
  const { data } = useQuery(GET_TODOS);
  const [createTodo] = useMutation(CREATE_TODO);

  useEffect(() => {
    if (data) {
      setTodos(data.listTodos.items); // Adjust based on your GraphQL response structure
    }
  }, [data]);

  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  const handleCreateTodo = async () => {
    const content = window.prompt("Todo content");
    if (content) {
      await createTodo({ variables: { input: { content } } });
    }
  };

  return (
    <Authenticator>
      {({ signOut }) => (
        <main>
          <h1>My todos</h1>
          <button onClick={handleCreateTodo}>+ new</button>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.content}</li>
            ))}
          </ul>
          <div>
            🥳 App successfully hosted. Try creating a new todo.
            <br />
            <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
              Review next step of this tutorial. Small change.
            </a>
          </div>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;