import React, { useState, useEffect } from 'react'

import { client } from '../client'
import { feedQuery, searchQuery } from '../utils/data'
import Spinner from './Spinner'
import { MasonryLayout } from '../components'

const Search = ({ searchTerm }) => {

  const [pins, setPins] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    setLoading(true)

    if (searchTerm) {

      const query = searchQuery(searchTerm.toLowerCase())

      client
        .fetch(query)
        .then((data) => {
          setPins(data)
          setLoading(false)
        })

    } else {

      client
        .fetch(feedQuery)
        .then((data) => {
          setPins(data)
          setLoading(false)
        })

    }

  }, [searchTerm])

  return (
    <div>
      {loading && (
        <Spinner message='Searching pins...'/>
      )}
      {searchTerm !== '' && !loading && pins?.length === 0 && (
        <div className="mt-10 text-center text-xl ">No Pins Found!</div>
      )}
      <MasonryLayout pins={pins}/>
    </div>
  )
}

export default Search