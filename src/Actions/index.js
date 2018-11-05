export const ajout = () => ({
    type: 'AJOUT',
     
});

export const recupArticle = (value) => ({   
    type: 'RECUP',
    val: value,
});

export const supp = (value) => ({   
    type: 'SUPP',
    index: value,
});

export const check = (value) => ({   
    type: 'CHECK',
    index: value,
});

export const recupQte = (value) => ({   
    type: 'QTE',
    qte: value,
});

export const vider = () => ({   
    type: 'VIDER',
});

export const recupRayon = (value) => ({   
    type: 'RAYON',
    rayon: value,
});

