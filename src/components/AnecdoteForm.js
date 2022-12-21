import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const NewAnecdote = (props) => {

    const addAnecdote = async (event) => {
      event.preventDefault()
      const content = event.target.anecdote.value
      event.target.anecdote.value = ''
      props.createAnecdote(content)
      props.setNotification(`You created new anecdote '${content}'`, 5)
    }

    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
        </form>
      </div>
    )
}

const mapDispatchToProps = {
  createAnecdote,
  setNotification
}


export default connect(
  null,
  mapDispatchToProps
)(NewAnecdote)