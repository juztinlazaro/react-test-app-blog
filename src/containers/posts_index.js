import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<div> 
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">
						Add a Post
					</Link>
				</div>
				
				List of blog post 
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log(state);
	return {
		posts: state.posts
	};
}


export default connect(mapStateToProps, { fetchPosts })(PostsIndex);