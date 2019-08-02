import BaseService from './BaseService';

const CURSOS_BASE_URL = '/cursos';
const CURSO_BASE_URL = '/curso';
const AULA_BASE_URL = '/aula';

export default class CursoService extends BaseService {

    static _instance = undefined;

    constructor() {
        super();
    }

    static getInstance() {
        if (!CursoService._instance) {
            CursoService._instance = new CursoService();
        }
        return CursoService._instance;
    }

    /**
     * Load cursos data
     */
    load() {
        return this.http().get(CURSOS_BASE_URL)
            .then(response => response.data)
            .catch(error => this.handleHttpError('Erro ao carregar os dados de cursos', error));
    }

    /**
     * Load a specific curso
     */
    loadCurso(id) {
        return this.http().get(`${CURSO_BASE_URL}/${id}`)
            .then(response => response.data)
            .catch(error => this.handleHttpError(`Erro ao carregar os dados do curso com id: ${id}`, error));
    }

    /**
     * Load aula
     * @param {*} id 
     */
    loadAula(id) {
        return this.http().get(`${AULA_BASE_URL}/${id}`)
        .then(response => response.data)
        .catch(error => this.handleHttpError(`Erro ao carregar os dados da aula com id: ${id}`, error));
    }

}