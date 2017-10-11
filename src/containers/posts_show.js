import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletehPost } from '../actions';
import { Link } from 'react-router';
import _ from 'lodash';

class PostsShow extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

  componentWillMount() {
  	this.props.fetchPost(this.props.params.id);
  }

  onDelete() {
  	this.props.deletehPost(this.props.params.id).then( () => {
  		_.delay( () => {
  			this.context.router.push('/'); 
  		}, 2000, 'later');
  	});
  };

	render() {
		const { post, status } = this.props;
		if(post === null) {
			return <div> Loading... </div>;
		} 

		if ( post === undefined) {
			return <div> Post is not found </div>
		}

		if (status) {
			return (
				<div class="alert alert-danger" role="alert">
					<strong> { status } </strong>
				</div>
			);
		}

		return (
			<div>
				<Link to="/"> 
					Back to Index 
				</Link>

				<button onClick={ () => this.onDelete()} >
					Delete
				</button>

			  <h3> Title: { post.title } </h3>

			  <h6> Categories: { post.categories } </h6>

			  <p>
			  	{ post.content }
			  </p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log(state);
	return {
		post: state.posts.post,
		status: state.posts.status
	}
}

export default connect(mapStateToProps, { fetchPost, deletehPost }) (PostsShow);