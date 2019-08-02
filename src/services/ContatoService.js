import BaseService from './BaseService';

const CONTATO_BASE_URL = '/contato';

export default class ContatoService extends BaseService {

    static _instance = undefined;

    constructor() {
        super();
    }

    static getInstance() {
        if (!ContatoService._instance) {
            ContatoService._instance = new ContatoService();
        }
        return ContatoService._instance;
    }

    /**
     * Load contatos data
     */
    load() {
        return this.http().get(CONTATO_BASE_URL)
            .then(response => response.data)
            .catch(error => this.handleHttpError('Erro ao carregar os dados de contato', error));
    }

}