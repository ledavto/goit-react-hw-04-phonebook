export const Filter = ({ filterStr }) => {
  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        Find contact by name
        <input
          type="text"
          name="filter"
          className="form-control"
          id="exampleFormControlInput1"
          onChange={event => filterStr(event.target.value)}
        />
      </label>
    </div>
  );
};
