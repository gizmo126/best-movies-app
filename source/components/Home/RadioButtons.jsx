import React, { Component } from 'react';
import { Form, Radio } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export class RadioButtons extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
          <Form>
            <Form.Field>
              <Radio
                label='Ascending'
                name='radioGroup'
                value='ascending'
                checked={this.props.radioOrder === 'ascending'}
                onChange={this.props.handleRadio}
              />
            </Form.Field>
            <Form.Field>
                <Radio
                  label='Descending'
                  name='radioGroup'
                  value='descending'
                  checked={this.props.radioOrder === 'descending'}
                  onChange={this.props.handleRadio}
                />
            </Form.Field>
          </Form>
        )
  }
}

RadioButtons.propTypes = {
    radioOrder : PropTypes.string,
    handleRadio : PropTypes.func
}

export default RadioButtons
