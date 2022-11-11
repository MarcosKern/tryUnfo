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
        <label
          htmlFor="trunfo"
          className="trunfo"
        >
          <span>
            This card is a Super Trunfo?
          </span>
          <input
            name="isTrunfo"
            type="checkbox"
            id="trunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
      );
    }
    return (
      <p className="trunfo">
        Your deck already have a SuperTrunfo
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
        <h1>Tryunfo</h1>
        <input
          type="text"
          name="cardName"
          id=""
          data-testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
          placeholder="Card name"
          maxLength="12"
        />
        <textarea
          name="cardDescription"
          id=""
          cols="25"
          rows="5"
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
          placeholder="Card description"
          maxLength="100"
        />
        <label htmlFor="attr1" className="attr">
          <span>
            ATK:
          </span>
          <input
            type="number"
            name="attr1"
            min="0"
            max="90"
            id="attr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2" className="attr">
          <span>
            DEF:
          </span>
          <input
            type="number"
            name="attr2"
            min="0"
            max="90"
            id="attr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3" className="attr">
          <span>
            AGI:
          </span>
          <input
            type="number"
            name="attr3"
            min="0"
            max="90"
            id="attr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <input
          name="cardImage"
          type="text"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
          placeholder="Card image url"
        />
        <select
          id="rarity"
          name="rariti"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="Normal" selected>Normal</option>
          <option value="Rara">Rara</option>
          <option value="Lendaria">Lendaria</option>
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
