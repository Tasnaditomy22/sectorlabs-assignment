import http from "../http-common";

class GistServices {

    getGistsForUser(userName) {
        return http.get(`users/${userName}/gists`);
    }

}

export default new GistServices();