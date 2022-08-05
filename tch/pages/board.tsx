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
    <div className="color-pink grid justify-items-center grid-cols-1 gap-5">
      {data.map((p: PostResponse) =>
        <div className="w-8/12 text-center rounded-md border bg-purple-900" key={p.id}>
          <div className="text-fuchsia-200 text-2xl"><span className="text-slate-900/100">No. {p.id}</span> {p.title}</div>
          <div className="text-indigo-200">{p.body}</div>
        </div>)}
    </div>
  )
}