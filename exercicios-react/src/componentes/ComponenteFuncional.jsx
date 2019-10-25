import React from 'react'

const devs = ['Alessandro', 'Weslley', 'Randerson', 'Vera', 'Brian', 'Arbex']

export default props => {

  const renderItemList = items => {
    return items.map(item => <li>{item}</li>)
  }

  // Meu método map =)
  // const renderItemListFunction = function(items) {
  //   let map_array = []

  //   items.forEach(item => map_array.push(<li>{item}</li>))

  //   return map_array
  // }

  return (
    <ul>
      {renderItemList(devs)}
    </ul>
  )
}