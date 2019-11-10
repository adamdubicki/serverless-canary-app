class Post extends React.Component {
  static async getInitialProps({ query }) {
    return {
      slug: query.slug
    };
  }
  render() {
    return (
      <div>
        <h1>Post page: {this.props.slug}</h1>
      </div>
    )
  }
}
 
export default Post;