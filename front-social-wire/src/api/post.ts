import { socialWireApi } from 'api';

const endpoint: string = 'api/post/';

export const postEndpoint = { 
    getBy: function() {
        return socialWireApi.get(endpoint)
    },
    getAll: function() {
        return socialWireApi.get(endpoint)
    },
    createOne: function(data:any) {
        return socialWireApi.post(endpoint, data)
    },
    updateOne: function(data:any) {
        return socialWireApi.post(endpoint, data)
    },
}
