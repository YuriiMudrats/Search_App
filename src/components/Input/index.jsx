import React, { PureComponent } from "react";

export default class Input extends PureComponent {
  render() {
    const { onChange, value } = this.props;
    return <input type="text" onChange={onChange} value={value} />;
  }
}
