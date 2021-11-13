import {
    Application,
    authProviders,
    configureWunderGraphApplication,
    cors,
    introspect,
    templates
} from "@wundergraph/sdk";
import hooks from "./wundergraph.hooks";
import operations from "./wundergraph.operations";

const db = introspect.postgresql({
    database_querystring: "postgresql://admin:admin@localhost:54322/example?schema=public",
});

/*const db = introspect.mysql({
    database_querystring: "mysql://admin:admin@localhost:54333/example",
});*/

const myApplication = new Application({
    name: "app",
    apis: [
        db,
    ],
})


// configureWunderGraph emits the configuration
configureWunderGraphApplication({
    application: myApplication,
    codeGenerators: [
        {
            templates: [
                // use all the typescript react templates to generate a client
                templates.typescript.operations,
                templates.typescript.linkBuilder,
                ...templates.typescript.react
            ],
        },
    ],
    cors: {
        ...cors.allowAll,
        allowedOrigins: process.env.NODE_ENV === "production" ?
            [
                "http://localhost:3000"
            ] :
            [
                "http://localhost:3000",
            ]
    },
    authentication: {
        cookieBased: {
            providers: [
                authProviders.demo(),
            ],
            authorizedRedirectUris: [
                "http://localhost:3000"
            ]
        }
    },
    operations: operations,
    hooks: hooks.config,
});
