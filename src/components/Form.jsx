import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  haveTrunfo = () => {
    const {
      hasTrunfo,
      onInputChange,
      cardTrunfo,
    } = this.props;
    if (hasTrunfo === false) {
      return (
        <input
          name="isTrunfo"
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      );
    }
    return (
      <p>
        Você já tem um Super Trunfo em seu baralho
      </p>
    );
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form action="">
        <input
          type="text"
          name="cardName"
          id=""
          data-testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />
        <textarea
          name="cardDescription"
          id=""
          cols="30"
          rows="10"
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <input
          type="number"
          name="attr1"
          min="0"
          max="90"
          id=""
          data-testid="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <input
          type="number"
          name="attr2"
          min="0"
          max="90"
          id=""
          data-testid="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <input
          type="number"
          name="attr3"
          min="0"
          max="90"
          id=""
          data-testid="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <input
          name="cardImage"
          type="text"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <select
          name="rariti"
          id=""
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        { this.haveTrunfo() }
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
