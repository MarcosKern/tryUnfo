import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form action="">
        <input
          type="text"
          name="card-name"
          id=""
          data-testid="name-input"
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          data-testid="description-input"
        />
        <input
          type="number"
          name=""
          id=""
          data-testid="attr1-input"
        />
        <input
          type="number"
          name=""
          id=""
          data-testid="attr2-input"
        />
        <input
          type="number"
          name=""
          id=""
          data-testid="attr3-input"
        />
        <input
          type="text"
          data-testid="image-input"
        />
        <select
          name=""
          id=""
          data-testid="rare-input"
        >
          <option value="normal">Normal</option>
          <option value="raro">Rara</option>
          <option value="muito raro">Muito rara</option>
        </select>
        <checkbox
          data-testid="trunfo-input"
        />
        <button
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
