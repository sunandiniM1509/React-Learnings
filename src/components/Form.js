import React, { Component } from 'react'

const backg = {
	backgroundColor: 'pink',
	color: 'blue'
}
class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			password: '',
			topic: 'react'
		}
	}

	handleUsernameChange = event => {
		this.setState({
			username : event.target.value
		})
	}

	handlePasswordChange = event => {
		this.setState({
			password: event.target.value
		})
	}

	handleTopicChange = event => {
		this.setState({
			topic: event.target.value
		})
	}

	handleSubmit = event => { 
		alert(`${this.state.username} is successfully enrolled for the ${this.state.topic} course `)
		event.preventDefault()
	}

	render() {
		const { username, password, topic } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<h2 style={backg}>Login Form</h2>
					<label>Username </label>
					<input
						type="text"
						value={username}
						onChange={this.handleUsernameChange}
					/>
				</div>
				<br></br>
				<div>
					<label>Password</label>
					<input type="password"
						value={password}
						onChange={this.handlePasswordChange}
					/>
				</div>
				<br></br>
				<div>
					<label> Select a Topic to Enroll</label>
					<select value={topic} onChange={this.handleTopicChange}>
						<option value="react">React</option>
						<option value="angular">Angular</option>
						<option value="vue">Vue</option>
						<option value="express">Express</option>
					</select>
				</div>
				<br></br>
				<button type="submit">Enroll</button>
			</form>
		)
	}
}

export default Form