import { useState, ChangeEvent } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelector';

const RepositoriesList = () => {
  const [term, setTerm] = useState('')
  const { searchRepositories } = useActions();
  //dispatch 함수에 actioncreator가 binding된 형태
  const { data, error, loading } = useTypedSelector(state => state.repositories);

  const onSubmit = (event:ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
    // dispatch(actionCreators.searchRepositories(term));
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={e => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && 
        data.map((name) => <div key={name}>{name}</div>)
      }
    </div>
  )
}

export default RepositoriesList;

// dispatch(actionCreators.searchRepositories(term) as any);