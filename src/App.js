import React from 'react';
import ApolloClient from 'apollo-boost';

export default function App() {
    const client = new ApolloClient({
        uri: 'https://graphql-pokemon.now.sh'
    });

    return (
        <p>I am a Pokemon</p>
    )
}
