function getItems(url) {
    return fetch(url)
        .then((res) => res.json())
        .then((result) => {
            return result;
        })
        .catch((err) => {
            return [];
        });
}

function getItem(url,id) {
    return fetch(`${url}?id=${id}`)
        .then((res) => res.json())
        .then((result) => {
            return result;
        })
        .catch((err) => {
            throw Error
        });
}

function addItem(url,data) {
    return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((result) => {
            return true;
        })
        .catch((err) => {
            return false;
        });
}

function editItem(url,data, id) {
    return fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((result) => {
            return true;
        })
        .catch((err) => {
            return false;
        });
}

function deleteItem(url,id) {
    return fetch(`${url}/${id}`, {
            method: "DELETE",
        })
        .then((res) => {
            if (!res.ok) {
                throw "Error";
            }
        })
        .then((result) => {
            return true;
        })
        .catch((err) => {
            return false;
        });
}

export { addItem, getItems, editItem, deleteItem, getItem };
