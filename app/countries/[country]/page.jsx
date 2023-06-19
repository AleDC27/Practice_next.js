import Image from "next/image";

const getCountries=async (country)=>{
    return await fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res=>res.json())
    .then(data=>data[0])
}

export default async function Page({ params }) {
    const {country}=params;
    const dataCountry=await getCountries(country)
    const {alt}=dataCountry.flags||"NOT ALT";
    const {png}=dataCountry.flags;
  return (
    <>
    <h1>Country</h1>
    <h1>{dataCountry.name.common}</h1>
    <h2>{png}</h2>
    <h2>{alt}</h2>
     <Image
      src={png}
      alt={alt||"NOT ALL"}
      width={500}
      height={500}
    /> 
    </>
  )
}


/* export default function CountryPage() {
  return (
    <div>[pageasd]</div>
  )
} */
