import React, {useState} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle';
import Button from '@material-ui/core/Button';

function DocTitleTwo() {
  const [count, setCount] = useState(0)

  //reusable code
  useDocumentTitle(count)
  return (
    <div>
      <Button  height="25%" size="large" type="submit"  color="secondary" onClick={() => setCount(count + 1)}>Count - {count}</Button>
    </div>
  )
}

export default DocTitleTwo
