import { InMemoryCache } from '@apollo/client';
import { auth } from './reactivities/authVariables';

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        auth: {
          read() {
            return auth();
          },
        },
      },
    },
  },
});
