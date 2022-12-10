import { fetchArticles } from 'api/articlesAPI';
import { ApiRequest } from 'components/ApiRequest';
import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';
import { Component } from 'react';
import { Post } from './Post/Post';
import * as SC from './Posts.styled.js';

// const POSTS = [
//   {
//     title: 'Vsevolodych is awesome1',
//     likes: 100,
//   },
//   {
//     title: 'Vsevolodych is awesome2',
//     likes: 200,
//   },
//   {
//     title: 'Vsevolodych is awesome3',
//     likes: 300,
//   },
//   {
//     title: 'Vsevolodych is awesome4',
//     likes: 400,
//   },
//   {
//     title: 'Vsevolodych is awesome5',
//     likes: 500,
//   },
//   {
//     title: 'Vsevolodych is awesome6',
//     likes: 600,
//   },
// ];

const POSTS_KEY = 'posts';

export class Posts extends Component {
  state = {
    posts: [],
    articles: [],
    loading: false,
    error: null,
    query: '',
    hasPostsError: false,
    // x: 0,
    // y: 0,
  };

  handleQueryChange = evt => {
    const { target } = evt;
    this.setState({
      query: target.value,
    });
  };

  handlePostCreation = evt => {
    evt.preventDefault();
    const { newTitle } = this.state;
    const newPost = {
      title: newTitle,
    };

    this.setState(prev => ({
      posts: [newPost, ...prev.posts],
      newTitle: '',
    }));
  };

  getPersistedPosts = () => {
    const persistedSerializedPosts = localStorage.getItem(POSTS_KEY);
    let persistedPosts;

    try {
      persistedPosts = JSON.parse(persistedSerializedPosts);
    } catch (error) {
      persistedPosts = null;
    }

    if (persistedPosts && persistedPosts.length > 0) {
      this.setState({ posts: persistedPosts });
    }
  };

  // handleMouseMove = evt => {
  //   const { clientX, clientY } = evt;
  //   this.setState({
  //     x: clientX,
  //     y: clientY,
  //   });
  // };

  async searchArticles() {
    const { query } = this.state;
    this.setState({ loading: true });
    try {
      const { data } = await fetchArticles(query);
      this.setState({ articles: data.hits, error: null });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.getPersistedPosts();
    // this.searchArticles();
    const params = new URLSearchParams(window.location.search);
    const query = params.get('query');
    if (query === '') {
      this.searchArticles();
    }
    this.setState({ query: params.get('query') });
    // fetchArticles('react').then(console.log);
    // window.document.addEventListener('mousemove', this.handleMouseMove);
  }

  componentDidUpdate(prevProps, prevState) {
    const { posts, query } = this.state;

    if (query !== prevState.query) {
      const params = new URLSearchParams();
      params.set('query', query);
      window.history.replaceState(null, null, `?${params.toString()}`);
      this.searchArticles();
    }

    if (posts === prevState.posts) return;

    try {
      localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
    } catch (error) {
      console.error(error);
    }
  }

  // componentWillUnmount() {
  //   window.document.removeEventListener('mousemove', this.handleMouseMove);
  // }

  componentDidCatch(error) {
    this.setState({ hasPostsError: true });
  }

  render() {
    const { articles, query, hasPostsError, loading, error } = this.state;
    return (
      <div>
        <Container>
          {/* <SC.MouseDecorator style={{ top: y, left: x }} /> */}
          <SC.Form onSubmit={this.handlePostCreation}>
            <input
              type="text"
              value={query}
              onChange={this.handleQueryChange}
            />
            <button>Add</button>
          </SC.Form>
          {loading && <Loader />}
          {error && <>There was an error</>}
          {/* <SC.Posts>
            {articles.map(({ title, points, objectID }) => (
              <Post title={title} likes={points} key={objectID} />
            ))}
            {hasPostsError && <>There was error</>}
          </SC.Posts> */}
          <ApiRequest request={() => fetchArticles(query)}>
            {({ data, loading, error }) => {
              if (loading) {
                return <Loader />;
              }
              if (error) {
                return <>There was an error</>;
              }
              return data?.hits.map(({ title, points, objectID }) => (
                <Post title={title} likes={points} key={objectID} />
              ));
            }}
          </ApiRequest>
        </Container>
      </div>
    );
  }
}

// export const Posts = () => {
//   return <div>{<Post />}</div>;
// };
