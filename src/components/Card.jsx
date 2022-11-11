import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      del,
    } = this.props;

    const isTrunfo = () => {
      if (cardTrunfo) {
        return (
          <p
            data-testid="trunfo-card"
            className="superTrunfo"
          >
            Trunfo
          </p>
        );
      }
    };

    return (
      <div
        className={ `cardPreview ${cardRare}` }
      >
        <section
          className="innerCard"
        >
          <h2
            data-testid="name-card"
          >
            { cardName }
          </h2>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />
          <p
            data-testid="description-card"
            className="description"
          >
            { cardDescription }
          </p>
          <section
            className="cardStatus"
          >
            <div className="attr">
              <span>
                ATK
              </span>
              <p
                data-testid="attr1-card"
              >
                { cardAttr1 }
              </p>
            </div>
            <div className="attr">
              <span>
                DEF
              </span>
              <p
                data-testid="attr2-card"
              >
                { cardAttr2 }
              </p>
            </div>
            <div className="attr">
              <span>
                AGI
              </span>
              <p
                data-testid="attr3-card"
              >
                { cardAttr3 }
              </p>
            </div>
            <p
              data-testid="rare-card"
            >
              { cardRare }
            </p>
          </section>
          { isTrunfo() }
          { del }
        </section>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  del: PropTypes.func.isRequired,
};

export default Card;
