import Vue from 'vue';

const GLOBAL_LOADING = 'global-loading';
export { GLOBAL_LOADING };

export default class LoadinPageService {

    static _eventBus = new Vue();

    static subscribe(id, callBack) {
        return LoadinPageService._eventBus.$on(this._getObjLoading(id), callBack);
    }

    static unsubscribe(id) {
        return LoadinPageService._eventBus.$off(this._getObjLoading(id));
    }

    static on(id) {
        LoadinPageService._eventBus.$emit(this._getObjLoading(id), { isOn: true })
    }
    
    static off(id) {
        LoadinPageService._eventBus.$emit(this._getObjLoading(id), { isOn: false })
    }

    static _getObjLoading(id) {
        return id ? id : GLOBAL_LOADING;
    }

}