import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    attr1: '0',
    attr2: '0',
    attr3: '0',
    rariti: '',
    cardImage: '',
    isTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    maxAttr: 210,
    deck: [],
  };

  deckHasTrunfo = () => {
    const { deck: trunfo } = this.state;
    const hasTrunfoInDeck = trunfo.some((value) => value.trunfo === true);
    if (hasTrunfoInDeck === true) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  };

  handleEvent = async (event) => {
    const {
      target: { name, value, checked, type },
    } = event;
    if (type === 'checkbox') {
      this.setState({ [name]: checked });
    } else {
      this.setState({ [name]: value }, () => {
        const {
          cardName,
          cardDescription,
          cardImage,
          rariti,
          attr1,
          attr2,
          attr3,
          maxAttr,
        } = this.state;
        const isEmpty = [
          cardName,
          cardDescription,
          cardImage,
          rariti,
        ].some((cardSession) => cardSession === '');
        const max = 90;
        const min = 0;
        const atribute1 = Number(attr1);
        const atribute2 = Number(attr2);
        const atribute3 = Number(attr3);
        const sum = atribute1 + atribute2 + atribute3;
        if (
          atribute1 <= max
          && atribute1 >= min
          && atribute2 <= max
          && atribute2 >= min
          && atribute3 <= max
          && atribute3 >= min
          && sum <= maxAttr
          && isEmpty === false
        ) {
          this.setState({ isSaveButtonDisabled: false });
        } else {
          this.setState({ isSaveButtonDisabled: true });
        }
      });
    }
  };

  saveButton = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardImage,
      rariti,
      attr1,
      attr2,
      attr3,
      isTrunfo,
      deck,
    } = this.state;
    deck.push(
      {
        nome: cardName,
        descricao: cardDescription,
        imagem: cardImage,
        atributo1: attr1,
        atributo2: attr2,
        atributo3: attr3,
        raridade: rariti,
        trunfo: isTrunfo,
      },
    );
    this.setState({
      cardName: '',
      cardDescription: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      rariti: '',
      cardImage: '',
    });
    this.deckHasTrunfo();
  };

  render() {
    const {
      cardName,
      cardDescription,
      attr1,
      attr2,
      attr3,
      rariti,
      hasTrunfo,
      cardImage,
      isTrunfo,
      isSaveButtonDisabled,
      deck,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <section>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ cardImage }
            cardRare={ rariti }
            cardTrunfo={ isTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.handleEvent }
            onSaveButtonClick={ this.saveButton }
          />
          <div>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ attr1 }
              cardAttr2={ attr2 }
              cardAttr3={ attr3 }
              cardImage={ cardImage }
              cardRare={ rariti }
              cardTrunfo={ isTrunfo }
            />
          </div>
        </section>
        <ul>
          {
            deck.map((card) => (
              <li key={ card.name }>
                <Card
                  cardName={ card.nome }
                  cardDescription={ card.descricao }
                  cardAttr1={ card.atributo1 }
                  cardAttr2={ card.atributo2 }
                  cardAttr3={ card.atributo3 }
                  cardImage={ card.imagem }
                  cardRare={ card.raridade }
                  cardTrunfo={ card.trunfo }
                />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
