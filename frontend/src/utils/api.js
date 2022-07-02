class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _returnRes(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  }

  fetchCards(revenue, segment, location, growth, skip) {
    let queryString = '';


    if (revenue?.min && (revenue.min !== 10)) {
      queryString += `&revenueMin=${revenue?.min}`;
    }

    if (revenue?.max && revenue.max !== 200) {
      queryString += `&revenueMax=${revenue?.max}`;
    }

    if (segment) {
      queryString += `&segment=${segment}`;
    }

    if (location) {
      queryString += `&location=${location}`;
    }

    if (growth?.min && growth.min !== 10) {
      queryString += `&growthMin=${growth?.min}`;
    }

    if (growth?.max && growth.max !== 200) {
      queryString += `&growthMax=${growth?.max}`;
    }

    if (skip) {
      queryString += `&skip=${skip}`;
    }

    return fetch(this._baseUrl + `api/startups?${queryString}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
      credentials: 'include',
    }).then((res) => {
      return this._returnRes(res);
    });
  }

  updateUser(user, formFields) {
    return fetch(this._baseUrl + `api/investors/${user._id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
      body: formFields,
      credentials: 'include',
    }).then((res) => {
      return this._returnRes(res);
    });
  }

  validateUser() {
    return fetch(`${this._baseUrl}api/investors`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
      credentials: 'include',
    }).then((res) => {
      return this._returnRes(res);
    });
  }

  deleteInvestor(investorId) {
    return fetch(`${this._baseUrl}api/investors/${investorId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
      credentials: 'include',
    }).then((res) => {
      return this._returnRes(res);
    });
  }

  getForm(formUrl) {
    return fetch(`${this._baseUrl}api/forms/${formUrl}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    }).then((res) => {
      return this._returnRes(res);
    });
  }

  saveStartup(startupData) {
    // Create empty formData object
    var formData = new FormData(); // Currently empty
    // Append form values to formData object
    Object.keys(startupData).forEach((key) => {
      formData.append(key, startupData[key]);
    });
    return fetch(`${this._baseUrl}api/forms`, {
      // Content type set automatically
      method: 'POST',
      // Send formData as is
      body: formData,
    }).then((res) => {
      return this._returnRes(res);
    });
  }
}

const api = new Api({
  baseUrl: `${process.env.REACT_APP_BACKEND_URL}`,
});

export default api;
