/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Post = {
  __typename: "Post",
  author?: string | null,
  content?: string | null,
  createdAt?: string | null,
  id: string,
  imageUrl?: string | null,
  title?: string | null,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  createdAt: string,
  email?: string | null,
  id: string,
  isActive?: boolean | null,
  updatedAt: string,
  username?: string | null,
};

export type ModelPostFilterInput = {
  and?: Array< ModelPostFilterInput | null > | null,
  author?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  imageUrl?: ModelStringInput | null,
  not?: ModelPostFilterInput | null,
  or?: Array< ModelPostFilterInput | null > | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  and?: Array< ModelUserFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  isActive?: ModelBooleanInput | null,
  not?: ModelUserFilterInput | null,
  or?: Array< ModelUserFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelPostConditionInput = {
  and?: Array< ModelPostConditionInput | null > | null,
  author?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  not?: ModelPostConditionInput | null,
  or?: Array< ModelPostConditionInput | null > | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreatePostInput = {
  author?: string | null,
  content?: string | null,
  createdAt?: string | null,
  id?: string | null,
  imageUrl?: string | null,
  title?: string | null,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  not?: ModelUserConditionInput | null,
  or?: Array< ModelUserConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
};

export type CreateUserInput = {
  email?: string | null,
  id?: string | null,
  isActive?: boolean | null,
  username?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type UpdatePostInput = {
  author?: string | null,
  content?: string | null,
  createdAt?: string | null,
  id: string,
  imageUrl?: string | null,
  title?: string | null,
};

export type UpdateUserInput = {
  email?: string | null,
  id: string,
  isActive?: boolean | null,
  username?: string | null,
};

export type ModelSubscriptionPostFilterInput = {
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  author?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  imageUrl?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
  title?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  isActive?: ModelSubscriptionBooleanInput | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    author?: string | null,
    content?: string | null,
    createdAt?: string | null,
    id: string,
    imageUrl?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    createdAt: string,
    email?: string | null,
    id: string,
    isActive?: boolean | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      author?: string | null,
      content?: string | null,
      createdAt?: string | null,
      id: string,
      imageUrl?: string | null,
      title?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      createdAt: string,
      email?: string | null,
      id: string,
      isActive?: boolean | null,
      updatedAt: string,
      username?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreatePostMutationVariables = {
  condition?: ModelPostConditionInput | null,
  input: CreatePostInput,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    author?: string | null,
    content?: string | null,
    createdAt?: string | null,
    id: string,
    imageUrl?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    createdAt: string,
    email?: string | null,
    id: string,
    isActive?: boolean | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  condition?: ModelPostConditionInput | null,
  input: DeletePostInput,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    author?: string | null,
    content?: string | null,
    createdAt?: string | null,
    id: string,
    imageUrl?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    createdAt: string,
    email?: string | null,
    id: string,
    isActive?: boolean | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  condition?: ModelPostConditionInput | null,
  input: UpdatePostInput,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    author?: string | null,
    content?: string | null,
    createdAt?: string | null,
    id: string,
    imageUrl?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    createdAt: string,
    email?: string | null,
    id: string,
    isActive?: boolean | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    author?: string | null,
    content?: string | null,
    createdAt?: string | null,
    id: string,
    imageUrl?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    createdAt: string,
    email?: string | null,
    id: string,
    isActive?: boolean | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    author?: string | null,
    content?: string | null,
    createdAt?: string | null,
    id: string,
    imageUrl?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    createdAt: string,
    email?: string | null,
    id: string,
    isActive?: boolean | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    author?: string | null,
    content?: string | null,
    createdAt?: string | null,
    id: string,
    imageUrl?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    createdAt: string,
    email?: string | null,
    id: string,
    isActive?: boolean | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};
