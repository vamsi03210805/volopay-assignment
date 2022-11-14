import AddItems from '../../context/AddItems'
import CardsYour from '../CardsYour'
import './index.css'

const Your = () => (
  <AddItems.Consumer>
    {value => {
      const {cards} = value
      return (
        <div className="all-card-in-place">
          {cards.map(each => (
            <CardsYour each={each} key={each.id} />
          ))}
        </div>
      )
    }}
  </AddItems.Consumer>
)

export default Your
