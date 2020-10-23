import db from './firebase/config';
import { retornaDocs } from './helpers/mostrar-documentos';

const d = document,
      usuariosRef = db.collection('usuarios'),
      btnPrev = d.createElement('button'),
      btnNext = d.createElement('button');

let firstDoc: any = null,
    lastDoc: any = null;

btnPrev.textContent = 'Previous';
btnNext.textContent = 'Next';

d.body.append(btnPrev);
d.body.append(btnNext);

btnPrev.addEventListener('click', () => {
    const query = usuariosRef.orderBy('nombre')
                            .endBefore(firstDoc);

    query.limit(2).get().then(snap => {

        firstDoc = snap.docs[0] || null;
        lastDoc = snap.docs[snap.docs.length - 1] || null;

        retornaDocs(snap);
    })

})

btnNext.addEventListener('click', () => {
    const query = usuariosRef.orderBy('nombre')
                            .startAfter(lastDoc);

    query.limit(2).get().then(snap => {

        firstDoc = snap.docs[0] || null;
        lastDoc = snap.docs[snap.docs.length - 1] || null;

        retornaDocs(snap);
    })

})




