import {configureWunderGraphOperations} from "./generated/wundergraph.operations.configuration";

const wundergraphOperations = configureWunderGraphOperations({
    defaultConfig: {
        authentication: {
            required: false
        }
    },
    queries: config => ({
        ...config,
        caching: {
            enable: false,
            staleWhileRevalidate: 60,
            maxAge: 60,
            public: true
        },
        liveQuery: {
            enable: true,
            pollingIntervalSeconds: 2,
        }
    }),
    mutations: config => ({
        ...config
    }),
    subscriptions: config => ({
        ...config,
    }),
    custom: {}
});

export default wundergraphOperations;