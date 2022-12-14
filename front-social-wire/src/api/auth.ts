import { socialWireApi } from 'api';


const endpoint: string = 'api/auth/';

export const authEndpoint = { 
    register: function(data: any) {
        return socialWireApi.post(`${endpoint}register`, data)
    },
    login: function(data: any) {
        return socialWireApi.post(`${endpoint}login`, data)
    }
}
