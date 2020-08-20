import React, { useState } from 'react'
import useInput from '../hooks/useInput';
import Tfield from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')

  const submitHandler = e => {
    e.preventDefault()
    alert(`Hello ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }
	return (

		<div>
      <form onSubmit={submitHandler}>
				<div>
					<label>First Name</label>
					<Tfield
            type="text"
            {...bindFirstName}
					/>
				</div>
				<div>
					<label>Last Name</label>
					<Tfield
            type="text"
            {...bindLastName}
					/>
        </div>
        <Button height="25%" size="large" type="submit"  color="secondary">Submit</Button>
			</form>
		</div>
	)
}

export default UserForm
