import React, { useCallback, useState } from "react";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { addTodo } from "./todosSlice";
import Container from "../../components/Container";

import type { AppDispatch } from "../../store/store";

const TodoForm = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>("");
  const dispatch = useDispatch<AppDispatch>();

  const submitHandler: React.FormEventHandler = (e) => {
    e.preventDefault();

    if (text === "") {
      setError("Type Something");
      return;
    }

    dispatch(addTodo(text));

    setError(null);
    setText("");
  };

  const inputHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    setText(val);
    setError(null);
  }, []);

  return (
    <Container>
      <section>
        <h1 className="text-3xl font-bold">Type Todo</h1>
      </section>

      <div className="h-6" />

      <section>
        <form onSubmit={submitHandler}>
          <input
            className="border-b-2 border-black p-2 text-lg mr-4"
            value={text}
            onChange={inputHandler}
          />
          <Button type="submit" disabled={Boolean(error !== null)}>
            Add
          </Button>
        </form>

        {error && <span className="text-red-600 font-light text-sm">{error}</span>}
      </section>
    </Container>
  );
};

export default TodoForm;
