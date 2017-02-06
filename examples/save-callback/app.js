import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from 'formsy-react';

import MyInput from './../components/Input';

const App = React.createClass({
  afterTextSetValueComplete() {
    alert('Set Value Complete');
  },
  render() {
    return (
      <Form onSubmit={this.submit}  className="login">
        <MyInput value="" name="valueone" title="Value One" afterSave={this.afterTextSetValueComplete} type="text" />
      </Form>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('example'));
