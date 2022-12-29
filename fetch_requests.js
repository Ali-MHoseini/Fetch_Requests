function getTodos(url) {
    return fetch(url)
        .then((res) => res.json())
        .then((result) => {
            return result;
        })
        .catch((err) => {
            return [];
        });
}

function getTodo(url,id) {
    return fetch(`${url}?id=${id}`)
        .then((res) => res.json())
        .then((result) => {
            return result;
        })
        .catch((err) => {
            throw Error
        });
}

function addTodo(url,data) {
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

function editTodo(url,data, id) {
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

function deleteTodo(url,id) {
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

export { addTodo, getTodos, editTodo, deleteTodo, getTodo };