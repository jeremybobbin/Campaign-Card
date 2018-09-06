import React, { Component } from 'react';
import Campaign from './components/Campaign';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			id: 6,
			name: 'Jer\'s Campaign',
			url: 'https://www.google.com',
			isEnabled: true,
			message: 'This is the default message.',
			location: 3,
			leadCount: 1826,
			effect: 'fadeIn'
		};
	}

	toLeads(id) {
		console.log('Redirecting to Leads...  ' + id);
	}

	update(k, v) {
		const state = this.state;
		state[k] = v;
		this.setState(state);
	}

	remove(id) {
		console.log('Removing....')
	}

	toggle(k) {
		const state = this.state;
		state[k] = !state[k];
		this.setState(state);
	}

	render() {
		return (
			<div className="App">
				<Campaign
					{...this.state}
					remove={() => this.remove(6)}
					update={(k, v) => this.update(k, v)}
					toggle={k => this.toggle(k)}
					toLeads={id => this.toLeads(id)}
				/>
			</div>
		);
	}
}

export default App;

// isOpen, name, url, remove, enabled, effect,
// location, toLeads, toggleSettings, update, leads, message}