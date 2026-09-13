import { useEffect, useState } from 'react'

export default function UserCurrencyInfo(currency) { 

    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json?utm_source=chatgpt.com`).then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data)
    },[currency])
  return data
}


