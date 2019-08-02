import axios from 'axios';

export default class BaseService {

    static _http = undefined;

    constructor() {
        if (!BaseService._http) {            
            this._createHttp();
            this._initializeHttpInterceptor();
        }
    }

    _createHttp() {
        BaseService._http = axios.create({
            baseURL: 'http://localhost:3000',
            timeout: 10000
        }); 
    }

    _initializeHttpInterceptor() {
        BaseService._http.interceptors.request.use(
            (config) => {
                console.log('Request Success');
                return config;
            }, 
            (error) => {
                console.log('Request Error');
                return Promise.reject(error);
            }
        );

        BaseService._http.interceptors.response.use(
            (response) => {
                console.log('Response Success');
                return response;
            }, 
            (error) => {
                console.log('Response Error');
                return Promise.reject(error);
            }
        );
    }

    http() {
        return BaseService._http;
    }

    handleHttpError(msg, error) {
        console.error(msg, error);
        throw error;
    }

}