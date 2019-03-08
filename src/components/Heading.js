import React, { Component } from 'react';

class Heading extends Component {
  render() {
    const { size, children } = this.props;
    const HeadingTag = `h${this.props.size || 1}`;

    return (
      <HeadingTag className={`heading heading_h${size || '1'} `}>
        {children}
      </HeadingTag>
    );
  }
}

export default Heading;
