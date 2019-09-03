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
