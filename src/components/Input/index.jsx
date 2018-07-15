import React, { PureComponent } from 'react';
import PropTypes from "prop-types";

export default class Input extends PureComponent {
  render() {
    const { onChange, value } = this.props;
    return <input type="text" onChange={onChange} value={value} />;
  }
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}
