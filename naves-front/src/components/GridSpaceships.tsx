import { Card } from "./"
import { SpaceshipResponse } from "../interfaces"

interface Props {
    data: SpaceshipResponse[] | null
}

export const GridSpaceships = ({data}: Props) => {
  return (
    <div className="container">
        <div className="row">
          {data?.map((spaceship: SpaceshipResponse) => (
            <Card key={spaceship.id} {...spaceship} />
          ))}
        </div>
      </div>
  )
}
