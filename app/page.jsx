import Link from "next/link";
const page=[
    {
        link:'/',
        label:'Home'
    },
    {
        link:'/countries',
        label:'Countries'
    },
    {
        link:'/rickAndMorty',
        label:'Rick and Morty'
    }
]
export default async function HomePage() {
  return (
    <>
    <h1>Home</h1>
    <nav>
        <ul>
            {page.map((cur,idx)=>
            <Link key={idx} href={cur.link}>{cur.label}<br/> </Link>
            )}
        </ul>
    </nav>
    </>
  )
}
