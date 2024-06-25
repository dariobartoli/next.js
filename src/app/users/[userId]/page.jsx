'use client'
import { useParams } from "next/navigation"


function userPage() {

    const params = useParams()
    console.log(params);
  return (
    <div>userPage</div>
  )
}

export default userPage