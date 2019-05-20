import React, { Component } from 'react';
import { updateUser } from '../../actions';
import axios from 'axios';

class User extends Component {
    state = {
        name:'',
        lastname:'',
        email:'',
        photo:'',
        edit:false,
        image:null
    }

    componentDidMount(){
        let user = this.props.user.login;
        this.setState({email:user.email})
        if(user.photo && user.photo.length>0)
            this.setState({photo:user.photo})
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user.login.isAuth){
            this.props.history.push('/user')
        }
    }

    printPhoto= ()=>{
        return (
            this.state.photo===''?
            <img alt="avatar" src="/images/avatar.png"/>
                :
            <img alt="avatar" src={this.state.photo}/>
        )
    }

    editMe = ()=>{
        this.setState({edit:true});
    }

    handleInputName = (event) => {
        this.setState({name:event.target.value})
    }
    handleInputLastname = (event) => {
        this.setState({lastname:event.target.value})
    }

    handleInputImage = (event) => {
        this.setState({image:event.target.files[0]})
    }

    submitForm = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', this.state.email);
        if(this.state.image){
            formData.append('image', this.state.image);

            for (let [key, value] of formData.entries()) { 
                console.log(key, value);
            }
            
            axios.post('/api/updatephoto', formData).then(response => response.data);
        }
        this.props.dispatch(updateUser({name:this.state.name,lastname:this.state.lastname,email:this.state.email}))
        this.setState({edit:false})        
    }

    render(){
        const pStyle = {
            left: '3vw',
            position: 'relative',
            fontSize: '13px',
            width: '100px',
            height: '50px',
            textAlign: 'center'
          };

        let user = this.props.user.login;
    
        return (
            this.state.edit===false?
                <div className="user_container">
                    <div className="avatar">
                        {this.printPhoto()}
                    </div>
                    <div className="nfo">
                        <div><span>Name:</span> {user.name}</div>
                        <div><span>Lastname:</span> {user.lastname}</div>
                        <div><span>Email:</span> {user.email}</div>
                    </div>
                    <button className="nfo" style={pStyle} onClick={this.editMe}> Edit me</button>
                </div>
            :
                <div className="user_container">
                    <form onSubmit={this.submitForm}>
                        <div className="avatar">
                            {this.printPhoto()}
                        </div>

                        <div className="nfo">
                            <div><span>Image: </span>
                             <input type="file" name="image" onChange={this.handleInputImage}/>
                            </div> 

                            <div>
                            <span>Name: </span>
                            <input 
                                type="name"
                                placeholder="Enter your Name"
                                onChange={this.handleInputName}
                            />
                            </div>

                            <div>
                            <span>Lastname: </span>
                            <input 
                                type="lastname"
                                placeholder="Enter your Lastname"
                                onChange={this.handleInputLastname}
                            />
                            </div>
                            <div>
                                <span>Email:</span> {user.email}
                            </div>
                        </div>
                        <button className="nfo" style={pStyle} onClick={this.editMe}> Submit </button>

                    </form>
                </div>
        );
    }
};

export default User;