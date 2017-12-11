
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-fetch'

let apolloClient = null
const isBrowser = typeof window !== 'undefined'

const create = (initialState) => {
    return new ApolloClient({
        connectToDevTools: isBrowser,
        ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
        link: createHttpLink({
            uri: 'http://localhost:3002/graphql',
            fetch
        }),
        cache: new InMemoryCache().restore(initialState || {}),
    })
}

const initApollo = (initialState?: {}) => {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (!isBrowser) {
        return create(initialState)
    }
    if (isBrowser) {
        window['__STATE__'] = []
    }

    // Reuse client on the client-side
    if (!apolloClient) {
        apolloClient = create(initialState)
    }
    console.log(apolloClient)

    return apolloClient
}
export default initApollo