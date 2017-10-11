import React, { Component, PropTypes } from 'react';
import { Field,reduxForm } from 'redux-form';
import { createPost } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { renderField } from '../components/render_field';

class PostsNew extends Component {
  // context is like a prop,
  // avoid using contxt, use it only for react router 
  static contextTypes = {
    //search all over the application -> router
   router: PropTypes.object
  };

  onSubmit(props){
    this.props.createPost(props).then(
    	() => { 
        this.context.router.push('/'); 
    } );
  }

  render (){
    const { handleSubmit } = this.props;
    return(
      <form onSubmit ={ handleSubmit((props) => this.onSubmit(props)) }>
        <h3>Create A New Post</h3>
        <Field label="Title" 
        	name="title" 
        	type="text" 
        	component={renderField}  />

        <Field 
        	label="Categories" 
        	name="categories" 
        	type="text" 
        	component={renderField} 
        />
        
        <Field label="Categories"  
          name="content" 
        	component={renderField} 
          textarea={true}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <Link to="/" className="btn btn-danger" >
          Cancel
        </Link>
      </form>
    );
  }
}

//Validation works, if the object error key match in the object field keys
function validate(values){
  const errors ={};

  if(!values.title){
    errors.title= 'Title cannot be empty';
  } else if (values.title.length < 10) {
    errors.title= 'Title cannot be less than 10';
  }

  if(!values.categories) {
      errors.categories= 'Categories cannot be empty';
  }

  if(!values.content) {
      errors.content= 'Content cannot be empty';
  }

  return errors;
}

export default connect(null, { createPost })(reduxForm({
  form:'PostsNewForm',
  fileds: [ 
    'title', 
    'categories', 
    'content' 
  ],
  validate
})(PostsNew));