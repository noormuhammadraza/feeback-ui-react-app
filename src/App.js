// root component named similar as the file name
// all the other components are embeded within the App component
// it returns JSX JavaScript xml
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom' // uses HTML5 history API to keep our UI insync with URL
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutIconLink from './components/AboutIconLink'

function App() {

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes> 
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }>   
                        </Route>
                    
                        <Route path='/about' element={ <AboutPage />}/>
                    </Routes>
                    
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App