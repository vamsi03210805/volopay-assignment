import {useState, useEffect} from 'react'

import InfiniteScroll from 'react-infinite-scroll-component'

import CardList from '../CardList'

import './index.css'

const All = () => {
  const [cardItem, setCardItems] = useState([])

  const [perPage, setPerPage] = useState(10)

  console.log(perPage)

  useEffect(() => {
    const apiResult = async () => {
      const options = {
        method: 'GET',
      }
      const response = await fetch(
        `https://636df5d6b567eed48ace4185.mockapi.io/all?p=1&l=${perPage}`,
        options,
      )
      const data = await response.json()
      const finalData = data.map(each => ({
        name: each.Name,
        available: each.available_to_spend,
        budgetName: each.budget_name,
        cardType: each.card_type,
        expiry: each.expiry,
        id: each.id,
        image: each.image,
        limit: each.limi,
        ownerId: each.owner_id,
        personName: each.person_name,
        status: each.status,
        spent: each.spent,
      }))

      console.log(data)
      setCardItems(finalData)
    }
    apiResult()
  }, [perPage])

  const onValueChange = e => {
    const filter = cardItem.filter(each => each.name.includes(e.target.value))
    setCardItems(filter)
  }

  const v = true
  return (
    <InfiniteScroll
      dataLength={cardItem.length}
      hasMore={v}
      next={() => setPerPage(perPage + 10)}
      loader={<h4>Loading...</h4>}
    >
      <div>
        <input type="search" onChange={onValueChange} />
      </div>
      <div className="all-card-in-place">
        {cardItem.map(each => (
          <CardList each={each} key={each.id} />
        ))}
      </div>
    </InfiniteScroll>
  )
}

export default All
