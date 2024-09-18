import { defineFunction } from "@aws-amplify/backend";
    
export const firstFunction = defineFunction({
  name: "first-function",
  entry: "./handler.ts"
});