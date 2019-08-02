import BaseService from './BaseService';

const HOME_BASE_URL = '/home';

export default class HomeService extends BaseService {

    static _instance = undefined;

    constructor() {
        super();
    }

    static getInstance() {
        if (!HomeService._instance) {
            HomeService._instance = new HomeService();
        }
        return HomeService._instance;
    }

    /**
     * Load Home data
     */
    load() {
        return this.http().get(HOME_BASE_URL)
            .then(response => response.data)
            .catch(error => this.handleHttpError('Erro ao carregar os dados de home', error));
    }

}