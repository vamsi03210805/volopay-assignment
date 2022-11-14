import AddItems from '../../context/AddItems'
import CardsYour from '../CardsYour'

const BlockCards = () => (
  <AddItems.Consumer>
    {value => {
      const {blockCards} = value
      return (
        <div className="all-card-in-place">
          {blockCards.map(each => (
            <CardsYour each={each} key={each.id} />
          ))}
        </div>
      )
    }}
  </AddItems.Consumer>
)

export default BlockCards
