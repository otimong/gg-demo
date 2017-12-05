import * as React from 'react'
import PropTypes from 'prop-types'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import Head from 'next/head'
import initApollo from './initApollo'

const isBrowser = typeof window !== 'undefined'

// Gets the display name of a JSX component for dev tools
const getComponentDisplayName = (Component) => {
    return Component.displayName || Component.name || 'Unknown'
}

interface Props {
    serverState: {
        apollo: {
            data: {}
        }
    }
}

export default ComposedComponent => {
    return class WithData extends React.Component<Props, {}> {
        static displayName = `WithData(${getComponentDisplayName(ComposedComponent)})`

        static async getInitialProps(ctx) {
            let serverState = {}

            // Evaluate the composed component's getInitialProps()
            let composedInitialProps = {}
            if (ComposedComponent.getInitialProps) {
                composedInitialProps = await ComposedComponent.getInitialProps(ctx)
            }

            // Run all GraphQL queries in the component tree
            // and extract the resulting data
            if (!isBrowser) {
                const apollo = initApollo()
                // Provide the `url` prop data in case a GraphQL query uses it
                const url = { query: ctx.query, pathname: ctx.pathname }
                try {
                    // Run all GraphQL queries
                    await getDataFromTree(
                        <ApolloProvider client={apollo}>
                            <ComposedComponent url={url} {...composedInitialProps} />
                        </ApolloProvider>
                    )
                } catch (error) {
                    // Prevent Apollo Client GraphQL errors from crashing SSR.
                    // Handle them in components via the data.error prop:
                    // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
                }
                // getDataFromTree does not call componentWillUnmount
                // head side effect therefore need to be cleared manually
                Head.rewind()

                // Extract query data from the Apollo store
                serverState = {
                    apollo: {
                        data: apollo.cache.extract()
                    }
                }
            }

            return {
                serverState,
                ...composedInitialProps
            }
        }

        apollo: any

        constructor(props) {
            super(props)
            const pp = this.props.serverState.apollo ? this.props.serverState.apollo.data : ""
            this.apollo = initApollo(pp)
        }

        componentDidCatch(error) {
            console.log(error)

        }

        render() {
            console.log(this.props)
            return (
                <ApolloProvider client={this.apollo}>
                    <ComposedComponent {...this.props} />
                </ApolloProvider>
            )
        }
    }
}