import http from "../http-common";

class GistServices {

    getGistsForUser(userName) {
        return http.get(`users/${userName}/gists`);
    }

    getForksForGist(url) {
        return http.get(url);
    }

}

export default new GistServices();