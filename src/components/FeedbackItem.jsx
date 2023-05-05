import { FaTimes} from 'react-icons/fa'
import Card from "./shared/Card"
import PropTypes from 'prop-types'

function FeedbackItem({ item, handleDelete }) {
    // destructuring useState hook
    // using component level state
    // returns a variable which identifies the state and a function that sets that state
    
  return (
    <Card >
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={() => handleDelete(item.id)}>
          <FaTimes color='purple'/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem