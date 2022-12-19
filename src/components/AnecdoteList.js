import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
    return (
      <div>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={handleClick}>vote</button>
        </div>
      </div>
    )
}

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)
    const anecdotes = useSelector(({ anecdotes }) => {
      return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter))
    })

    const handleVote = anecdote => {
      dispatch(vote(anecdote.id))
      dispatch(setNotification(`You voted for '${anecdote.content}'`))
    }

    return (
        <div>
            {anecdotes.map(anecdote =>
                <Anecdote
                  key={anecdote.id}
                  anecdote={anecdote}
                  handleClick={() => handleVote(anecdote)
                  }
                />
            )}
        </div>
    )
}

export default AnecdoteList