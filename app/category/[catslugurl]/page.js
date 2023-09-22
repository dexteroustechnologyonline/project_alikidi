import CategoryNewsAll from "../categoryNewsAll";



export default async function CategoryNews({ params }) {
  return (
    <CategoryNewsAll caturl={params.catslugurl} />
  )

}