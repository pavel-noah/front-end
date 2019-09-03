export const getDogs = () => {
    return fetch('https://pavels-dogs-server.herokuapp.com/api/v1/dogs')
        .then(res => {
            if(!res.ok) throw 'Ohhhhhdang something went wrong you can\'t get dogs!';
            return res.json();
        })
        .then((json) => {
            return json ;
        });
};

export const createDogApi = (name, age, weight) => {
    return fetch('https://pavels-dogs-server.herokuapp.com/api/v1/dogs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, age, weight })
    })
        .then(res => {
            return res.json();
        });
};

export const searchDog = (searchInput) => {
    return fetch(`https://pavels-dogs-server.herokuapp.com/api/v1/dogs/${searchInput}`)
        .then(res => {
            if(!res.ok) throw 'Ohhhhhdang something went wrong you can\'t get that dog by name!';
            return res.json();
        });
};
