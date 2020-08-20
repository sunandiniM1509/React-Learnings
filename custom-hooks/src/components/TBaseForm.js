import React, { useState } from 'react'
import Txfield from './KLTextField'
import Tfield from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';

function UserForm() {
  const [firstName,setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const submitHandler = e => {
    e.preventDefault()
    alert(`Hello ${firstName} ${lastName}`)
  }
	return (
    
		<div>
      <form onSubmit={submitHandler}>
				<div>
					<label>First Name</label>
					<Tfield 
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            type='text'
					/>
				</div>
				<div>
					<label>Last Name</label>
          <Tfield
           value={lastName}
            onChange={e => setLastName(e.target.value)}
            type='text'/>
        </div>
        <Button height="25%" size="large" type="submit"  color="primary">Submit</Button>
			</form>
		</div>

	)
}

export default UserForm
