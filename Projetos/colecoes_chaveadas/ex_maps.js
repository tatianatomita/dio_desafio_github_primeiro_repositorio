function getAdmin(map){
    let admins= [];
    for ( [key, value] of map ){
        if (value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}
const usuario =new Map();

usuario.set('luiz','Admin');
usuario.set('tatiana','Admin');
usuario.set('Geraldo','User');
usuario.set('Rodrigo','Admin');
usuario.set('Sebastiao','User');
usuario.set('Carla','Admin');

console.log(getAdmin(usuario));