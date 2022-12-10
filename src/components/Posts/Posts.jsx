import { fetchArticles } from 'api/articlesAPI';
import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';
import { useWatch } from 'Hooks/useWatch';
import { useFetch } from 'Hooks/useFetch';
import { useState } from 'react';
import { useEffect } from 'react';
import { Post } from './Post/Post';
import * as SC from './Posts.styled.js';
import { Parination } from 'components/Pagination/Pagination';
import { usePaginationContext } from 'components/context/pagination';

export const Posts = () => {
  const params = new URLSearchParams(window.location.search);
  const [query, setQuery] = useState(params.get('query'));
  const [loading, setLoading] = useState(false);
  const [hasPostsError, setHasPostsError] = useState(false);
  const { page, setPage, setTotalPages } = usePaginationContext();

  const {
    data: articles,
    isLoading,
    error,
  } = useFetch(
    () =>
      fetchArticles(query, page).then(res => {
        return res.data;
      }),
    [query, page]
  );

  const handleQueryChange = evt => {
    const { target } = evt;
    setQuery(target.value);
  };

  useWatch(() => {
    const params = new URLSearchParams(window.location.search);
    params.set('query', query);
    window.history.replaceState(null, null, `?${params.toString()}`);
  }, [query]);

  useEffect(() => {
    if (!articles) return;

    setTotalPages(articles.nbPages);
  }, [articles, setTotalPages]);

  return (
    <div>
      <Container>
        <SC.Form>
          <input type="text" value={query} onChange={handleQueryChange} />
          <button>Add</button>
        </SC.Form>
        {isLoading && <Loader />}
        {error && <>There was an error</>}
        <SC.Posts>
          {articles?.hits?.map(({ title, points, objectID }) => (
            <Post title={title} likes={points} key={objectID} />
          ))}
        </SC.Posts>
        <Parination page={1} />
      </Container>
    </div>
  );
};
