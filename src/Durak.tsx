import { FC } from "react";
type Props = {
  title: string,
  age: number,
  isMan: boolean,
  deb?: undefined
}
const App: FC<Props> = ({title, age, isMan, deb}) => {
  return (
     <>
      <h1>{title} {age}</h1> <br />
      <p>{isMan} {deb}</p>
     </>
      
  )
}

export default App;