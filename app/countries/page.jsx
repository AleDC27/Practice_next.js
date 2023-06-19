import Link from "next/link";

const getCountries= async()=>{
    return await fetch('https://restcountries.com/v3.1/all')
    .then(response=>response.json())
}

export default async function CountriesPage(props) {
    const countries=await getCountries();
  return (
    <>
    <h1>CountriesPage</h1>
    <div>
    {countries.map((cur,idx)=>
            <article key={idx} >
                <Link href={`countries/${cur.name.common}`}><h3>{cur.name.common}</h3></Link>
                <br />
                <hr />
            </article>
        ).slice(0,10)}
    </div>
    </>
  )
}
