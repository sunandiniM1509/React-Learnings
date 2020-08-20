import React, {useState,useEffect} from 'react'
import Button from '@material-ui/core/Button';

function DocTitleOne() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
  document.title=`Count ${count}`
  },[count])

  return (
    <div>
      <Button  height="25%" size="large" type="submit"  color="primary" onClick={() => setCount(count + 1)}>Count - {count}</Button>
    </div>
  )
}

export default DocTitleOne
