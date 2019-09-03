export const getDogs = () => {
    return fetch('http://localhost:7899/api/v1/dogs')
        .then(res => {
            if(!res.ok) throw 'Ohhhhhdang something went wrong you can\'t get dogs!';
            return res.json();
        })
        .then(([json]) => {
            return { dogName: json.name, dogAge: json.age, dogWeight: json.weight };
        });
};
