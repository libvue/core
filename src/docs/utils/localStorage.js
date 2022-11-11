export function isLocalStorageAvailable(){
    if (typeof localStorage !== 'undefined') {
        try {
            localStorage.setItem('feature_test', 'yes');
            if (localStorage.getItem('feature_test') === 'yes') {
                localStorage.removeItem('feature_test');
                return localStorage;
            } else {
                return false;
            }
        } catch(e) {
            return false;
        }
    } else {
        return false;
    }
}

class LocalStorage {
    constructor() {
        this.localStorage = isLocalStorageAvailable();
    }
    
    setItem(key, value) {
        if(this.localStorage) {
            this.localStorage.setItem(key, value);
        }
    }
    
    getItem(key) {
        if(this.localStorage) {
            return this.localStorage.getItem(key);
        }
    }
    
    removeItem(key) {
        if(this.localStorage) {
            this.localStorage.removeItem(key);
        }
    }
};

export default new LocalStorage();