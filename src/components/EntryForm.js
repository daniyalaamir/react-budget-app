import React, { Fragment } from 'react'
import { Form, Segment, Checkbox } from 'semantic-ui-react';

function EntryForm({ description, value, isExpense, setDescription, setValue, setIsExpense }) {
  return (
    <Fragment>
      <Form.Group>
        <Form.Input
          width={12}
          icon="tags"
          label="Description" 
          placeholder="New shinny thing"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
        <Form.Input
          width={4}
          icon="dollar"
          iconPosition="left"
          label="Value" 
          placeholder="100.00"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label="is expense"
          checked={isExpense}
          onChange={() => setIsExpense(oldState => !oldState)}
        />
      </Segment>
    </Fragment>
  )
}

export default EntryForm
