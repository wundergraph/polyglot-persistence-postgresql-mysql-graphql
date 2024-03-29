import {
    authProviders,
    configureWunderGraphApplication,
    cors,
    introspect,
    templates
} from "@wundergraph/sdk";
import hooks from "./wundergraph.hooks";
import operations from "./wundergraph.operations";

const db = introspect.postgresql({
    databaseURL: "postgresql://admin:admin@localhost:54322/example?schema=public",
});

/*const db = introspect.mysql({
    databaseURL: "mysql://admin:admin@localhost:54333/example",
});*/

// configureWunderGraph emits the configuration
configureWunderGraphApplication({
    apis: [db],
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
