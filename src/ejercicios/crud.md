# CRUD

## Referencia a la colección usuarios
```
const usuariosRef = db.collection('usuarios');
```
## Objeto
```
const usuario = {
    nombre: 'Kevin',
    activo: true,
    fecha: 0
}
```

## Insertar elementos
```
usuariosRef
    .add(usuario)
    .then(docRef => console.log(docRef))
    .catch(err => console.error(err));
```

## UPDATE USUARIOS SET activo = true where ....
```
usuariosRef
    .doc('29uyoQjtqu4amD1dstlk')
    .update({ activo: true})
```

## Destructivo
```
usuariosRef
.doc('29uyoQjtqu4amD1dstlk')
.set({ activo: true,
    edad: 44
})
```

## delete from usuarios where id = 'xx'
```
usuariosRef.doc('29uyoQjtqu4amD1dstlk')
           .delete().then(() => console.log('Borrado'))
                    .catch(err => console.error(err));
```

## select * from usuarios;
```

usuariosRef.onSnapshot(retornaDocs);

```

## get, para no estar pendiente del cambio de los documentos
```

usuariosRef.get().then(retornaDocs)
                 .catch(console.error)
```

## Select * from usuarios where activo = true
```

usuariosRef.where('activo', '==', true).get().then(retornaDocs).catch(console.error)

```


## Usuarios con salario mayor o igual a 2M
```

usuariosRef.where('salario', '>=', 1800000).get().then(retornaDocs).catch(console.error)

```
## Usuarios con salario entre 1M y 2M
```
 usuariosRef.where('salario', '>=', 1000000)
           .where('salario', '<=', 2000000)
           .get().then(retornaDocs).catch(console.error)
```

## Usuarios con salario inferior a 2M y estén activos
```

usuariosRef.where('salario', '<=', 2000000)
           .where('activo', '==', true)
            .get().then(retornaDocs).catch(console.error)
```