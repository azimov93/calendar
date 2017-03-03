export const getMeets = (data) => {
    if (localStorage.getItem(data)) {
        return JSON.parse(localStorage.getItem(data))
    } else {
        return {}
    };

};

export const saveMeets = (data) => {
    if (localStorage.getItem(data.id)) {
        const Obj = JSON.parse(localStorage.getItem(data.id));
        const number = Obj[data.id].length;
        const newData = {id: number, name: data.name, description: data.description};
        console.group('Obj');
        console.log(Obj);
        console.groupEnd();
        Obj[data.id] = [...Obj[data.id], newData];
        localStorage.setItem(data.id, JSON.stringify(Obj));
        console.group('Meets');
        console.log(Obj);
        console.groupEnd();
        return Obj;
    } else {
        const Obj = { [data.id]: []};
        const number = Obj[data.id].length;
        const newData = {id: number, name: data.name, description: data.description};
        Obj[data.id].push(newData);
        localStorage.setItem(data.id, JSON.stringify(Obj));
        return Obj;
    }
};

export const deleteMeets = (data) => {
    const Arr = JSON.parse(localStorage.getItem(data.id));
};