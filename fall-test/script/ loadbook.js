
function loadBook(){
    return function(WrapComponent){
        class BookLoader extends React.Compoment{
            constructor(props){
                super(props);
                this.state={

                }
            }
            componentDidMount(){

            }

            render(){
                const {book} = this.state;

                return(
                    <WrapComponent {...this.props} book={this.book}/>
                )
            }
        }
        return BookLoader;
    }

}

export default loadBook;