import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const DogCard = ( {dogID}) =>  {
  return (

    <>
      <Link to="">
        <Card>
          <Image src='' />
          <Card.Content>
            <Card.Header>Dog Name</Card.Header>
            <Card.Meta>Location</Card.Meta>
            <Card.Description>Description of dog.</Card.Description>
          </Card.Content>
        </Card>
      </Link>

      <Button primary>Skip</Button>
      <Button secondary>Message</Button>
    </>

  )
}


export default DogCard;
