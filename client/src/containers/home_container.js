import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBooks} from '../actions';
import BookItem from '../widgetsUI/book_item';

class HomeContainer extends Component{
    componentWillMount(){
        this.props.dispatch(getBooks(1,0,'desc'));
    }

    renderItems = (books)=>{
        return books.list?
                (books.list.map( item=>{
                    return (
                        <BookItem {...item} key={item._id}/>
                        )
                    })
                )
            :
            null;
    }

    loadmore =()=>{
        let count = this.props.books.list.length;
        this.props.dispatch(getBooks(1,count,'desc',this.props.books.list))
    }

    render(){
        console.log("home_container");
        console.log(this.props.books);

        return (
            <div>
                {this.renderItems(this.props.books)}
                <div className="loadmore"
                    onClick={this.loadmore}>LoadMore</div>
            </div>
        );
    }
}

function mapStatetoProps(state){
    return {
        books:state.books
    }
}

export default connect(mapStatetoProps)(HomeContainer)