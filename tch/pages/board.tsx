import Link from "next/link"
import useSWR from 'swr'

interface PostResponse {
  title: string;
  body: string;
  id: string;
  userId: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Board() {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div className="postList">
      {data.map((p: PostResponse) =>

        <div className="post" key={p.id}>
          <div className="postTitle">
            {p.title}
          </div>
          <div className="postBody">
            {p.body}
          </div>
        </div>)}
    </div>
  )
}