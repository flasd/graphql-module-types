/// <reference types="graphql" />

declare module "*.gql" {
  import { DocumentNode } from "graphql";
  const query: { readonly [key: string]: DocumentNode };
  export default query;
}

declare module "*.graphql" {
  import { DocumentNode } from "graphql";
  const query: { readonly [key: string]: DocumentNode };
  export default query;
}
