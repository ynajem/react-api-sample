import React, { Component } from "react";

const API_KEY = "94ffad3e7ebe48ca9f3f53d4f9c56794";
const API_URL =
	"https://newsapi.org/v2/top-headlines?pageSize=5&page=1&language=en&apiKey=" +
	API_KEY;

export default class App extends Component {
	state = { articles: [] };

	componentDidMount = async () => {
		const response = await fetch(API_URL);
		const data = await response.json();
		this.setState({ articles: data.articles });
	};

	render() {
		return (
			<ul>
				{this.state.articles.map((item, index) => (
					<li key={index}>{item.title}</li>
				))}
			</ul>
		);
	}
}
