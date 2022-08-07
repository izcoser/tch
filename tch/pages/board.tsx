import Link from "next/link"
import useSWR from 'swr'
import Post, { PostData } from "../components/posts/post"
import Thread from "../components/posts/thread"

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

interface PostResponse {
  title: string;
  body: string;
  id: string;
  userId: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Board() {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  const { data: photoData, error: photoError } = useSWR('https://jsonplaceholder.typicode.com/photos', fetcher)

  if (error || photoError) return <div>failed to load</div>
  if (!data || !photoData) return <div>loading...</div>

  const posts: PostData[] = data.map((p: PostResponse, i: number) =>
    ({ title: p.title, body: p.body, id: p.id, userId: p.userId, url: photoData[i].url, thumbnailUrl: photoData[i].thumbnailUrl }))

  const threads: PostData[][] = []
  while(posts.length){
    threads.push(posts.splice(0, 10));
  }

  return (
    <div className="color-pink grid justify-items-center grid-cols-1 gap-5 content-center">
      {
        threads.map((posts: PostData[]) => (<Thread posts={posts} key={posts[0].id + 't'}></Thread>))
      }
    </div>
  )
}
