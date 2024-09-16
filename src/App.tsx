import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Authenticator } from "@aws-amplify/ui-react";


const client = generateClient<Schema>();

function App() {
  const [posts, setPosts] = useState<Array<Schema["Post"]["type"]>>([]);

  useEffect(() => {
    client.models.Post.observeQuery().subscribe({
      next: (data: { items: Schema["Post"]["type"][] }) => setPosts([...data.items]),
    });
  }, []);

  async function createPost() {
    const title = window.prompt("Post title");
    const content = window.prompt("Post content");
    const file = window.prompt("Upload an image URL or leave blank"); // {{ edit_3 }} Prompt for image URL


    if (file) {
      const response = await fetch(file);
      const blob = await response.blob();
      const fileName = `images/${Date.now()}_${file.split('/').pop()}`; // Generate a unique file name

      console.log(fileName);
      console.log(blob);
    }

    client.models.Post.create({ title, content, author: "Anonymous", createdAt: new Date().toISOString() });
  }

  return (
    <Authenticator>
      {({ signOut }) => (
        <main>
          <h1>My Blog Posts</h1>
          <button onClick={createPost}>+ new</button>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                {/* {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}  */}
              </li>
            ))}
          </ul>
          <div>
            🥳 App successfully hosted. Try creating a new post.
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
