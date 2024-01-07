import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Input,
    Button
  } from "@material-tailwind/react";
import React, {useState, useEffect } from 'react';
 import axios from 'axios';


  export function Main() {
    const [city, setCity] = useState('');
    const [response, setResponse] = useState('0');
    useEffect(() => {
        // If you want do do some other action after
        // the response is set do it here. This useEffect will only fire
        // when response changes.
     }, [response]); // Makes the useEffect dependent on response.
  
     function callAPI(city) {
        var url = 'http://localhost:3001/api/v1/send/location';
        axios.post(url, {
        "location" : city
      })
      .then((res) => {
        // Handle the response
        setResponse(res.data)
      })
      .catch((error) => {
        // Handle the error
        console.log(error);
      });
     };
  

    function HandleChange(event) {
        setCity(event.target.value);
    }
    return (
        <>
             <div className="m-10 bg-gray-300 flex items-center gap-4 p-2 rounded-md" >
                <div className="w-72 m-1">
                    <Input size="lg" label="Search City" value={city} onChange={HandleChange}/>
                </div>
                <Button onClick={() => callAPI(city)} disabled={city === null || city === ''}
                    variant="gradient">Search</Button>
            </div>

            <Card
        shadow={false}
        className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1555441293-6c6fb1eb9773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            Shoot! You smoke { response.noOfCigarette || '0'   } Sutta Daily. <br /> AQI now in your city { response.aqi || '0'   }.
          </Typography>
        </CardBody>
      </Card>
        </>
     
    );
  }

  export default  Main;