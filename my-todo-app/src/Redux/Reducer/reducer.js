import {ADD_TODO, FILTER_TODO, MARK_ALL_COMPLETED_TODO, MARK_ALL_INCOMPLETE_TODO, MARK_COMPLETED_TODO, MARK_INCOMPLETE_TODO, REMOVE_TODO, SEARCH_TODO, TOGGLE_TODO} from '../Action/actionTypes';

const initialStete={
    todos:[],
    filter:'ALL',
    search:''
};

const todoReducer=(state=initialStete,action)=>{
    switch(action.type){
        case 'ADD_TODO':
           return{  
            todos: [...state.todos, {
                text: action.payload.text, 
                completed: false
            }],
            filter: state.filter,
            search: state.search
           }
        
        case TOGGLE_TODO:
            return{
                todos:state.todos.map((todo,index)=>
                    index===action.payload.id?
                {...todo, completed: !todo.completed}: todo
               ),
                filter: state.filter,
                search: state.search
            }

            case REMOVE_TODO:
            return{
                todos:state.todos.filter((todo,index)=>
                    index!==action.payload.id                
               ),
                filter: state.filter,
                search: state.search
            }

            case MARK_COMPLETED_TODO: 
            return{
                todos: state.todos.map((todo,index)=>
                    index===action.payload.id ?
                   {...todo, completed: true}:todo
                ),
                filter: state.filter,
                search: state.search
            }

            case MARK_INCOMPLETE_TODO: 
            return{
                todos: state.todos.map((todo,index)=>
                    index===action.payload.id ?
                   {...todo, completed: false}:  todo
                ),
                filter: state.filter,
                search: state.search
            }

            case FILTER_TODO: 
            return{
                todos: state.todos,
                filter: action.payload.filter,
                search: state.search
            }

            case SEARCH_TODO: 
            return{
                todos: state.todos,
                filter: state.filter,
                search: action.payload.search
            }

            case MARK_ALL_COMPLETED_TODO: 
            return{
                todos: state.todos.map((todo)=>
                ({
                    ...todo, completed:true
                }) 
                ),
                filter: state.filter,
                search: state.search
            }

            case MARK_ALL_INCOMPLETE_TODO:
            return {
            ...state,
            todos: state.todos.map(todo => ({
            ...todo,
          completed: false
           }))
          };

            default: 
             return state;
    }
}

export default todoReducer;