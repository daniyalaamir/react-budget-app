import React from 'react'
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

function NewEntryForm() {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          width={12}
          icon="tags"
          label="Description" 
          placeholder="New shinny thing" 
        />
        <Form.Input
          width={4}
          icon="dollar"
          iconPosition="left"
          label="Value" 
          placeholder="100.00" 
        />
      </Form.Group>
      <ButtonSaveOrCancel />
    </Form>
  )
}

export default NewEntryForm
