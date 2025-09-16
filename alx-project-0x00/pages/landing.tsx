import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Click Me" size="large" shape="rounded-full" onClick={() => alert('Button Clicked!')} />
    </div>
  )
}
export default Landing