import React from 'react'
import spinner from './spinner.gif'

/*CLASS-BASED COMPONENT
export default class Spinner extends Component {
      render() {
            return (
                  <div className='text-center'>
                        <img className='my-3' src={spinner} alt="loading...." />
                  </div>
            )
      }
}

*/

const Spinner = () => {
      return (
            <div className='text-center'>
                  <img className='my-3' src={spinner} alt="loading...." />
            </div>
      )
}

export default Spinner;
