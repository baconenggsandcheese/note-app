import { table } from "./storage";

// Create the API
export const api = new sst.aws.ApiGatewayV2("Api", {
  transform: {
    route: {
      handler: {
        link: [table],
      },
      args: {
        auth: 
        { 
          iam: true 
        }
      },
    }
  }
});

api.route("POST /notes", "packages/functions/src/create.main");
api.route("GET /notes/{id}", "packages/functions/src/get.main"); //For fetching a note given it's ID
api.route("GET /notes", "packages/functions/src/list.main"); // For fetching all the nodes
api.route("PUT /notes/{id}", "packages/functions/src/update.main"); // For updating notes given it's ID
api.route("DELETE /notes/{id}", "packages/functions/src/delete.main"); 
