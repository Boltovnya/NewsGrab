import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import { NewsItem } from "./NewsItem";
import { Item } from "semantic-ui-react";

class Posts extends Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    this.props.fetchPosts(this.props.type);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.type !== this.props.type) {
      demoAsyncCall().then(() => this.setState({ loading: false }));
      this.props.fetchPosts(this.props.type);
    }
  }

  render() {
    const postItems = this.props.posts.map((post) => (
      <div key={post.id}>
        <NewsItem
          className="container"
          title={post.title}
          body={post.description}
          author={post.author}
          img={post.urlToImage}
          date={post.publishedAt}
          url={post.url}
        />
      </div>
    ));

    return (
      <div>
        <h1>Posts</h1>
        <div class="loader">
          <Item.Group>{postItems}</Item.Group>
        </div>
      </div>
    );
  }
}

const demoAsyncCall = () =>
  new Promise((resolve) => setTimeout(() => resolve(), 2500));

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
};

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
