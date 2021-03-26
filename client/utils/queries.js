import gql from 'graphql-tag';

export const GET_ME = gql`
query getMe($username: String) {
    thoughts(username: $username) {
        _id
        thoughtText
        createdAt
        username
        reactionCount
        reactions {
            _id
            createdAt
            username
            reactionBody
        }
    }
}
`;
