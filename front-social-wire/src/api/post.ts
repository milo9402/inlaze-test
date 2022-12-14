import { socialWireApi } from 'api';

const endpoint: string = 'api/post/';


export const postEndpoint =  {
    
    getBy: function(currentToken:string) {
        let config = {
            headers: {
              'Authorization': `Bearer ${currentToken}`,
            }
        }
        return socialWireApi.get(endpoint, config)
    },
    getAll: function(currentToken:string) {
        let config = {
            headers: {
              'Authorization': `Bearer ${currentToken}`,
            }
        }
        return socialWireApi.get(endpoint, config)
    },
    createOne: function(data:any, currentToken:string) {
        let config = {
            headers: {
              'Authorization': `Bearer ${currentToken}`,
            }
        }
        return socialWireApi.post(endpoint, data, config)
    },
    updateOne: function(data:any) {
        return socialWireApi.post(endpoint, data)
    },
}
