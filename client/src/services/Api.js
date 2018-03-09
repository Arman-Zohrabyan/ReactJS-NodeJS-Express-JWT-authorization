import Auth from '../modules/Auth';
// import exception from './exception';
import config from '../config';

const API_ENDPOINT = config.API_ENDPOINT;

class ApiService {

  async get(resource, params = new Map(), withResponse = false) {
    let options = {
      method: 'GET',
      headers: {
        'Client': 'true',
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    let url = API_ENDPOINT + resource + '?' + this.serializeParams(params);

    let [response, data] = await this.request(url, options);
    if (!response.ok) {
      return exception.throwFromResponse(data);
    }
    return withResponse ? [response, data.data] : data.data;
  }

  async post(resource, params, withResponse = false) {
    let body = JSON.stringify(params);
    // params.forEach((value, key) => {
    //   formData.append(key, value);
    // });

    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    };

    let url = API_ENDPOINT + resource;

    let [response, data] = await this.request(url, options);
    
    return withResponse ? [response, data] : data;
  }

  async postFiles(resource, params = new Map(), withResponse = false) {
    let formData = new FormData();
    params.forEach((value, key) => {
      formData.append(key, value);
    });

    let options = {
      method: 'POST',
      headers: {
        'Client': 'true',
        'Accept': 'application/json',
      },
      body: formData,
    };

    let url = API_ENDPOINT + resource;

    let [response, data] = await this.request(url, options);
    if (!response.ok) {
      return exception.throwFromResponse(data);
    }
    return withResponse ? [response, data.data] : data.data;
  }

  async put(resource, params = new Map(), withResponse = false) {
    let options = {
      method: 'PUT',
      headers: {
        'Client': 'true',
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: this.serializeParams(params),
    };

    let url = API_ENDPOINT + resource;

    let [response, data] = await this.request(url, options);
    if (!response.ok) {
      return exception.throwFromResponse(data);
    }
    return withResponse ? [response, data.data] : data.data;
  }

  async delete(resource, params = new Map(), withResponse = false) {
    let options = {
      method: 'DELETE',
      headers: {
        'Client': 'true',
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: this.serializeParams(params),
    };

    let url = API_ENDPOINT + resource;

    let [response, data] = await this.request(url, options);
    if (!response.ok) {
      return exception.throwFromResponse(data);
    }
    return withResponse ? [response, data.data] : data.data;
  }

  async request(url, options, accessToken) {
    if (accessToken) {
      options.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    else if (Auth.isUserAuthenticated()) {
      const getAccessToken = await auth.getAccessToken();
      options.headers['Authorization'] = `Bearer ${getAccessToken.value}`;
    }

    let response = await fetch(url, options);
    let data = {};

    try {
      data = await response.json();
    } catch(e) {
      // nothing to do here
    }

    return [response, data];
  }

  serializeParams(params) {
    let array = [];

    params.forEach((value, key) => {
      array.push(key + '=' + encodeURIComponent(value));
    });

    return array.join('&');
  }

}

export default new ApiService();