function setContent(obj){
    sessionStorage.setItem('idAdmin', obj.idAdmin);
    sessionStorage.setItem('firstName', obj.firstName);
    sessionStorage.setItem('lastName', obj.lastName);
    sessionStorage.setItem('password', obj.password);
    sessionStorage.setItem('userName', obj.userName);
}

function getContent(){
    return ({
        idAdmin: sessionStorage.getItem('idAdmin'),
        firstName: sessionStorage.getItem('firstName'),
        lastName: sessionStorage.getItem('lastName'),
        password: sessionStorage.getItem('password'),
        userName: sessionStorage.getItem('userName')
    });
}

function deleteContent(){
    sessionStorage.removeItem('idAdmin');
    sessionStorage.removeItem('firstName');
    sessionStorage.removeItem('lastName');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('userName');

    return false;
}

function isNull(){
    if(sessionStorage.getItem('idAdmin')==='0' || sessionStorage.getItem('idAdmin')===null)
        return true;
    if(sessionStorage.getItem('firstName')==='null' || sessionStorage.getItem('firstName')===null)
        return true;
    if(sessionStorage.getItem('lastName')==='null' || sessionStorage.getItem('lastName')===null)
        return true;
    if(sessionStorage.getItem('password')==='null' || sessionStorage.getItem('password')===null)
        return true;
    if(sessionStorage.getItem('userName')==='null' || sessionStorage.getItem('userName')===null)
        return true;

    return false;
}


export const storage = {
    setContent: obj => setContent(obj),
    getContent: () => getContent(),
    deleteContent: () => deleteContent(),
    isNull: () => isNull()
};