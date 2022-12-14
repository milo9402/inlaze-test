import { socialWireApi } from 'api';


const endpoint: string = 'api/user/';

export const usersEndpoint = { 
    getAll: function() {
        return socialWireApi.get(endpoint)
    }
}
