# Order by

## Order by con un solo campo
```
usuariosRef
    .where('salario', '<', 2000000)
    .orderBy('salario', 'desc').get().then(retornaDocs);
```

## Order by con dos campos, priorizando el primero (nombre)
```
usuariosRef
    .orderBy('nombre')
    .orderBy('salario')
    .get().then(retornaDocs);
```