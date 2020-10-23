import firebase from 'firebase';

export const retornaDocs = (snapshot: firebase.firestore.QuerySnapshot ) => {
    let documentos: any[] = [];
    snapshot.forEach(snapHijo => documentos.push({
        id: snapHijo.id,
        ...snapHijo.data()
    }));

    console.log(documentos);

    return documentos;
}