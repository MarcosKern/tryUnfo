import React from 'react';
import PropTypes from 'prop-types';

class Delete extends React.Component {
  render() {
    const { click, deleteCard } = this.props;
    return (
      <button
        type="button"
        name={ deleteCard }
        data-testid="delete-button"
        onClick={ click }
      >
        Excluir
      </button>
    );
  }
}

Delete.propTypes = {
  deleteCard: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

export default Delete;
