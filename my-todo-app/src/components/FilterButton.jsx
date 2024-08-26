import { useSelector, useDispatch } from 'react-redux';
import { FilterTodo, markAllCompleted, markAllIncomplete } from '../Redux/Action/actions';

function FilterButton() {
  const dispatch = useDispatch();
  const currentFilter = useSelector(state => state.filter);
  const todos = useSelector(state => state.todos);

  const handleFilter = (filter) => {
    dispatch(FilterTodo(filter));
  };

  const allCompleted = todos.every(todo => todo.completed);

  const handleMarkAll = () => {
    if (allCompleted) {
      dispatch(markAllIncomplete());
    } else {
      dispatch(markAllCompleted());
    }
  };

  return (
    <div className='flex space-x-4 items-center'>
      <select
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
        className='text-sm px-2 py-1 border-blue-300 focus:outline-none'>
        <option value='ALL'>Default</option>
        <option value='COMPLETED'>Completed</option>
        <option value='INCOMPLETE'>Incomplete</option>
      </select>
      <button 
        className='text-sm px-2 py-1 bg-blue-700 text-white ml-2 rounded'
        onClick={handleMarkAll}>
        {allCompleted ? 'Mark All Incomplete' : 'Mark All Completed'}
      </button>
    </div>
  );
}

export default FilterButton;
