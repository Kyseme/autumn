import loadBook from './ loadbook';

class BookDetails extends React.Component{
    render(){
        const {book} = this.props;
        return(
            <div>{book.name}</div>
        )
    }
}

export default loadBook()(BookDetails);