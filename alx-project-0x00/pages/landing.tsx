import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Small Rounded-sm" size="small" shape="rounded-sm" styles="bg-blue-500 text-white" onClick={() => alert("Sm Button Clicked!")} />
      <Button title="Medium Rounded-lg" size="medium" shape="rounded-lg" styles="bg-green-500 text-white" onClick={() => alert("Lg Button Clicked!")} />
      <Button title="Large Rounded-full" size="large" shape="rounded-full" styles="bg-purple-500 text-white" onClick={() => alert("Full Button Clicked!")} />
    </div>
  )
}
export default Landing