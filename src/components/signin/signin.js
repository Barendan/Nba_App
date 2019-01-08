import React, { Component } from 'react';
import styles from './signin.css';



class SignIn extends Component {

	state = {
		registerError:'',
		loading:false,
		formdata:{
			email:{
				element:'input',
				value:'',
				config:{
					name:'email_input',
					type:'email',
					placeholder:'Enter your email'
				},
				validation:{
					required:true,
					email:true
				},
				valid:false,
				touched:false,
				validationMessage:''
			},
			password:{
				element:'input',
				value:'',
				config:{
					name:'password_input',
					type:'password',
					placeholder:'Enter your password'
				},
				validation:{
					required:true,
					password:true
				},
				valid:false,
				touched:false,
				validationMessage:''
			}
		}
	}

	render(){
		return(
			<div>
				sign in
			</div>
		)
	}

}

export default SignIn