import MainPage from './pages/main';
import { Chart, registerables} from 'chart.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass, fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faMagnifyingGlass)

Chart.register(...registerables);

export function App(): JSX.Element {
  return (
        <div>
          <MainPage />
        </div>
        
    )
}
