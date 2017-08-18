import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            )
        })
    }
    render(){
        return (
            <ul className="list-group col-sm-4">
              {this.renderList()}
            </ul>
        )
    }
}

// lo que devuelva esta función terminará como props del BookList container 
function mapStateToProps(state) {
    // lo que devuelve aqui serán props de BookList
    return {
        books: state.books
    }
}

function mapDispatchToProps(dispatch) {
    // cuando se llame a selectBook el resultado se pasará a todos mis reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}


// Convierto el componente BookList en container
// necesita sabersobre el nuevo dispatch method, selectBook.
// Lo hace disponible como prop
export default connect(mapStateToProps, mapDispatchToProps) (BookList);