import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { onClick, padded, selected, children } = this.props;
    const CardTag = onClick ? 'a' : 'div';
    const classNames = ['card'];
    if (padded) classNames.push('card_padded');
    if (selected) classNames.push('card_selected');

    return (
      <CardTag
        className={classNames.join(' ')}
        onClick={onClick}
      >
        {children}
      </CardTag>
    );
  }
}

export default Card;
