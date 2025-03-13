import './CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <button className="CreateTodoButon" onClick={
      (event) => {console.log('Aquí se debería abrir')
      console.log(event)
    }}>+</button>
  );
}

export { CreateTodoButton };