import {
  EntityId,
  PayloadAction,
  createEntityAdapter,
  createSlice,
  nanoid,
} from "@reduxjs/toolkit";

export interface Todo {
  id: EntityId;
  title: string;
  datetime: number;
}

const todosAdapter = createEntityAdapter<Todo>({
  sortComparer: (a, b) => {
    if (a.datetime < b.datetime) return 1;
    if (a.datetime > b.datetime) return -1;
    return 0;
  },
});

const initialState = {
  list: todosAdapter.getInitialState(),
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        todosAdapter.addOne(state.list, { ...action.payload });
      },
      prepare: (title: string) => {
        return {
          payload: {
            id: nanoid(),
            title,
            datetime: Date.now()
          }
        }
      }
    },
    removeTodo: (state, action: PayloadAction<EntityId>) => {
      todosAdapter.removeOne(state.list, action.payload);
    },
  },
  selectors: {
    selectTodoList: state => state.list
  },
});

export const todosReducer = todosSlice.reducer;

export const { addTodo, removeTodo } = todosSlice.actions;

export const { selectTodoList } = todosSlice.selectors;
