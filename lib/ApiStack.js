import * as sst from "@serverless-stack/resources";

export default class ApiStack extends sst.Stack {
  // Public reference to the API
  api;

  constructor(scope, id, props) {
    super(scope, id, props);

    const { table } = props;

    // Create the API
    this.api = new sst.Api(this, "Api", {
      defaultAuthorizationType: "AWS_IAM",
      // customDomain: scope.stage === "prod" ? "api.my-serverless-app.com" : undefined, // if domain(Route 53) added
      defaultFunctionProps: {
        environment: {
          TABLE_NAME: table.tableName,
          STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
        },
      },
      // Enabled by default
      cors: true,
      routes: {
        "POST   /books": "src/create.main",
        "GET    /books/{id}": "src/get.main",
        "GET    /books": "src/list.main",
        "PUT    /books/{id}": "src/update.main",
        "DELETE /books/{id}": "src/delete.main",
        "POST   /billing": "src/billing.main",
      },
    });

    // Allow the API to access the table
    this.api.attachPermissions([table]);

    // Show the API endpoint in the output
    this.addOutputs({
      ApiEndpoint: this.api.url, // this.api.customDomainUrl || this.api.url,
    });
  }
}