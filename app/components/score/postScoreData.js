"use client"
import axios from "axios"

export default function PostScoreData() {
  const url = process.env.NEXT_PUBLIC_URL
  const data = {
    answer: process.env.NEXT_PUBLIC_SCORE,
    name: process.env.NEXT_PUBLIC_NAME,
  }

  const submitScoreHandler = async () => {
    try {
      const res = await axios.post(url, data)
      console.log(res)
      if (res.statusCode === 200) {
        console.log("success")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section>
      <div>
        <button type="submit" onClick={submitScoreHandler} className="button">
          Submit Score
        </button>
      </div>
    </section>
  )
}
