export const ContactList = ({ listCont, filter, deleteCont }) => {
  return (
    <ul className="list-group">
      {listCont
        .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        .map(elem => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={elem.id}
          >
            <label>
              {elem.name} - {elem.number}
            </label>

            <button
              className="btn btn-primary"
              type="button"
              onClick={() => deleteCont(elem.id)}
            >
              Del
            </button>
          </li>
        ))}
    </ul>
  );
};
