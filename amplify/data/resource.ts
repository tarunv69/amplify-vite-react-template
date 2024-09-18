import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  // Post model
  Post: a
    .model({
      title: a.string(),
      content: a.string(),
      author: a.string(),
      likes: a.integer(),
      createdAt: a.string(), // or a.date() if you prefer
      imageUrl: a.string(), // New imageUrl field
    })
    .authorization((allow) => [allow.publicApiKey()]),

  // DatabaseSchema model
  DatabaseSchema: a
    .model({
      databaseSchemaId: a.id().required(),
      key: a.string().required(),
      description: a.string(),
      schema: a.json().required(),
      timeFilterField: a.string(),
      config: a.json(),
      workspaceId: a.id().required(),
      userId: a.id().required(), // This should match the field in User model
      user: a.belongsTo("User", ["userId"]),
      databaseValues: a.hasMany("DatabaseValues", ["databaseSchemaId"]),
    })
    .identifier(["databaseSchemaId"])
    .authorization((allow) => [allow.publicApiKey(), allow.custom()]),

  // DatabaseValues model
  DatabaseValues: a
    .model({
      databaseSchemaId: a.id().required(),
      databaseValuesId: a.id().required(),
      value: a.json().required(),
      database: a.belongsTo("DatabaseSchema", ["databaseSchemaId"]),
    })
    .identifier(["databaseSchemaId", "databaseValuesId"]) // Updated identifier
    .authorization((allow) => [allow.publicApiKey(), allow.custom()]),

  // User model
  User: a
    .model({
      userId: a.id().required(), // Add userId field to match the reference in DatabaseSchema
      username: a.string(),
      email: a.string(),
      isActive: a.boolean(),
      databaseSchema: a.hasOne("DatabaseSchema", ["userId"]), // Corrected relationship
    })
    .identifier(["userId"]) // Make sure to set the identifier
    .authorization((allow) => [allow.publicApiKey()]),

  // Todo model remains unchanged
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

    firstFunction: a
    .query()
    .arguments({
      name: a.string(),
    })
    .returns(a.string())

});



export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
