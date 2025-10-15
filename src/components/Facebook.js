import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

export class Facebook extends Component {
  state= {
    isLoggedIn:false,
    userID:'',
    name:'',
    email:'',
    picture: ''
  }

  responseFacebook = response => {
    console.log(response);
    if (response && response.picture && response.picture.data) {
      this.setState({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url
      });
    } else {
      console.error('Invalid response from Facebook:', response);
    }
  };

  componentClicked = () => console.log("clicked");  
  
    render() {
    let fbContent;

    if(this.state.isLoggedIn){
        fbContent = (
            <div style={{
                width: '400px',
                margin: 'auto',
                background: '#f4f4f4',
                padding: '20px'
            }}>
                <img src={this.state.picture} alt={this.state.name}/>
                <h2>Welcome {this.state.name}</h2>
                Email: {this.state.email}
            </div>
        )
    }else{
        fbContent = (<FacebookLogin
            appId="1088597931155576"
            autoLoad={true}
            fields='name,email,picture'
            onClick={this.componentClicked}
            callback={this.responseFacebook} />);
    }
    return <div>{fbContent}</div>;
  }
}

export default Facebook
