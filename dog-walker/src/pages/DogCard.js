import React, {useState, useEffect} from 'react';
import { Button, Card, Image, Divider, Container, Grid } from 'semantic-ui-react';
import {FaMoneyBill, FaHome} from 'react-icons/fa';
const DogCard = ( {dogID}) => {

  const number = dogID;

  const [dogInfo, setDogInfo] = useState({
    name: 'Bowie',
    owner: 'Blake',
    breed: 'Australian Cattle Dog',
    location: '1000 Paper St. Cincinnati OH 45000',
    age: 3,
    desc: 'This bundle of energy loves to go on walks!',
    payment: '$25',
    image: '',
    sex: 'male',
  });

  const [size, setSize] = useState({ size: 1, array: [0]});

  const generateDog = (e) => {
    const fetchData = async () => {
      // Generate random number
      let rand = 1;
      let includes = true;
      while (includes == true) {
        rand = Math.floor((Math.random() * 9) + 1);
        if (size.array.includes(rand) == false) {
          console.log(`This is not in the original array`);
          includes = false;
        }
      }

      if (size.array.length == 9) {
        console.log("all full!");
      } else {
        size.array.push(rand);
        console.log(size.array);
        const result = await fetch(`/api/dogs/${rand}`);

        const body = await result.json();
        setDogInfo(body);
      }
    }
    fetchData();
  }


  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/dogs/${dogID}`);
      const body = await result.json();
      setDogInfo(body);
    }
    fetchData();
  }, []);

  return (
    <>
      <Grid centered>
      <Grid.Row centered>
        <Grid.Column width={12}>
          <Card color='blue'>
            <Image src={dogInfo.image}/>
              <Card.Content>

                <Card.Header>{dogInfo.name}</Card.Header>
                <Card.Meta>{dogInfo.age} year old  {dogInfo.sex} {dogInfo.breed} </Card.Meta>
                <Card.Description>{dogInfo.desc}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Card.Description> <FaHome />{dogInfo.location} <br/> <FaMoneyBill /> {dogInfo.payment} per hour </Card.Description>
              </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
      <Grid.Column width={12}>
          <Button primary onClick={generateDog}>Skip</Button>
          <Button secondary>Message</Button>
        </Grid.Column>
      </Grid.Row>
      </Grid>
    </>
  );
}

export default DogCard;
