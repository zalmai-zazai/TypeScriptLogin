const Events = () => {
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('item has been searched');
  };

  const handelDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    console.log(`The post with id ${id} has been deleted`);
  };

  return (
    <div>
      <h1>This is where all the events gona show</h1>

      <form action="">
        <input
          type="text"
          placeholder="Search for anything..."
          onChange={handelChange}
        />
        <button onClick={handleClick}>Search</button>
      </form>

      <div className="posts">
        <form action="">
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non sequi
            quasi quia magni distinctio explicabo quod blanditiis quibusdam,
            assumenda culpa odio. Odit culpa maiores facilis saepe repellendus.
            Dicta, architecto quibusdam?
          </p>
          <button onClick={(e) => handelDelete(e, 1)}>Delete</button>
        </form>
        <form action="">
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit 2.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non sequi
            quasi quia magni distinctio explicabo quod blanditiis quibusdam,
            assumenda culpa odio. Odit culpa maiores facilis saepe repellendus.
            Dicta, architecto quibusdam?
          </p>
          <button onClick={(e) => handelDelete(e, 2)}>Delete</button>
        </form>
      </div>
    </div>
  );
};

export default Events;
