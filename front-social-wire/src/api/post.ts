import { socialWireApi } from 'api';

const endpoint: string = 'api/post/';

export const postEndpoint = { 
    getAll: function() {
        return socialWireApi.get(endpoint)
    },
    getBy: function() {
        return socialWireApi.get(endpoint)
    }
}
