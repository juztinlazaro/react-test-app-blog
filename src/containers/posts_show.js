import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletehPost } from '../actions';
import { Link } from 'react-router';
import delay from 'lodash.delay';

class PostsShow extends Component {

  static contextTypes = {
		router: PropTypes.object
	}

	constructor() {
		super();
		this.state = {
			status: false
		}
	}

  componentWillMount() {
  	this.props.fetchPost(this.props.params.id);
  }

  onDelete() {
  	this.props.deletehPost(this.props.params.id).then( (result) => {
  		if (result.payload.status) {
  			this.setState({ status: true });
  		}
  		
  		delay( () => {
  			this.context.router.push('/'); 
  		}, 2000, 'later');
  	});
  };

	render() {
		const { post } = this.props;

		if (post === null) {
			return <div> Loading... </div>;
		} 

		if (post === undefined) {
			return <div> Post is not found </div>
		}

		if (this.state.status) {
			return (
				<div className="alert alert-danger" role="alert">
					<strong> Post is already delete </strong>
				</div>
			);
		}

		return (
			<div>
				<Link className="btn btn-primary" to="/"> 
					Back to Index 
				</Link>

				<button className="btn btn-danger pull-xs-right" 
					onClick={ () => this.onDelete() }>
					Delete Post
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
	return {
		post: state.posts.post,
	}
}

export default connect(mapStateToProps, { fetchPost, deletehPost }) (PostsShow);