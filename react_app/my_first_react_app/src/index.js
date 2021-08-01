
import ReactDOM from 'react-dom';

import App from './App';

let counter = 1

const refresh = () => {
  // the page will be rendered only the ReactDOM.render is called

  ReactDOM.render(<App counter={counter} />, 
  document.getElementById('root'))
}

// value will stay on the screen for 1000s or once its updated
// setInterval(() => {
//   refresh()
//   counter += 1
// }, 1000)


// we will only be able ro see the final value 9 
refresh()
counter += 1
refresh()
counter += 1
refresh()
refresh()
counter += 1
refresh()
counter += 1
refresh()
refresh()
counter += 1
refresh()
counter += 1
refresh()
refresh()
counter += 1
refresh()
counter += 1
refresh()