// el argumento state no es el state de la app
// sólo el state del que es responsable este reducer
export default function(state = null, action) {
    switch(action.type) {
      case 'BOOK_SELECTED':
        return action.payload;
    }

    return state;
}