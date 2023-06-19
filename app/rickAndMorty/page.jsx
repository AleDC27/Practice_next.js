import Image from "next/image";

const getCharacters=()=>{
    return fetch('https://rickandmortyapi.com/api/character')
    .then(res=>res.json())
}

export default async function page() {
    const characters=await getCharacters()
    console.log(characters.results)
  return (
    <div>
        <h1>Rick and Morty</h1>
        <br />
        <hr />
        <main>
            {characters.results.map((cur,idx)=>
             <article key={cur.id}>
                <h1>{cur.name}</h1>
                <article>
                  {cur.id}
                  <Image
                  src={cur.image}
                  width={50}
                  height={50}
                  />
                </article>
                <br />
             </article>
             )}
        </main>
    </div>
  )
}
