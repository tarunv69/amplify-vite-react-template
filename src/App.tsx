import { useQuery, gql } from "@apollo/client"; // Import necessary hooks and gql
import { Authenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";


// Define GraphQL queries and mutations
const GET_POSTS = gql`
  query GetPosts {
    listPosts {
      id
      title
      content
      author
      createdAt
      imageUrl
    }
  }
`;



function App() {
  const { loading, error, data } = useQuery(GET_POSTS); // Use useQuery to fetch posts




  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Authenticator>
      {({ signOut }) => (
        <main>
          <h1>My Blog Posts</h1>

          <ul>
            Checking blogs
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
