const initialState = {
    qte: "",
    article: "",
    rayon: "",
    liste: [],   

}

function tri(a, b) 
    {
        if (a.rayon < b.rayon) return -1;
        else if (a.rayon === b.rayon) return 0;
        else return 1;
    }

const ajout = (state = initialState, action) => {
    let newState;
    
    switch(action.type) {
        case 'RECUP':  
            newState = {
                ...state,
                article: action.val,                  
            }
            return newState;
        case 'RAYON':  
            newState = {
                ...state,
                rayon: action.rayon,       
            }
            return newState;
        case 'AJOUT':  
            let tempObj = {};
            tempObj.checked = false;
            tempObj.article = state.article;    
            tempObj.qte = state.qte;
            tempObj.rayon = state.rayon;
            let temp = [...state.liste, tempObj];
            temp.sort(tri);
            newState = {
                ...state,
                liste: temp,
                article: "",
                qte: "",
                rayon: "",
            }
            return newState;
        case 'SUPP':    
            let tempo = state.liste;
            let tempFiltre = tempo.filter((item, index) => {

               return index !== action.index;
            });
            newState = {
                ...state,
                liste: tempFiltre,
            }
            return newState;
        case 'CHECK':
            let tempCheck = state.liste;
            let tempCheckFiltre = tempCheck.map((item, index) => {
                
            if (index === action.index) {
                    item.checked = !item.checked;                    
            } 
            return item;
            
            });
            newState = {
                ...state,
                liste: tempCheckFiltre,         
            }
            return newState;
        case 'QTE':
            newState = {
                ...state,
                qte: action.qte,                  
            }
            return newState;

        case 'VIDER':
            newState = {
                ...state,
                liste: [],                  
            }
            return newState;

        default:
            return state;    
    }
}

export default ajout;