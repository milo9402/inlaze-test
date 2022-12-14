import axios from "axios";

const BASE_URL = 'http://localhost:5000/';

export const socialWireApi = axios.create({
    baseURL: BASE_URL,
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Im1pbG8iLCJpYXQiOjE2NzA5NzMxODMsImV4cCI6MTY3MDk3Njc4M30.BfWeMy3Wlo4QGPFPbITzZ6ADjFuvieWSxBUDx15c0e0', 
      },
});
