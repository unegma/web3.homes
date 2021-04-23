import React, {useEffect, useState} from 'react';
import {Container} from "@material-ui/core";
import axios from 'axios';
import { useForm } from 'react-hook-form';

export default function PageOne(): JSX.Element {

  // const [imageUrl, setImageUrl] = useState("");
  // const apiURL = "https://gc4fvpbabl.execute-api.eu-west-2.amazonaws.com/live";

  // useEffect(() => {
  //   async function fetchImage() {
  //     const response = await axios.get(apiURL);
  //     console.log(response);
  //
  //     let data = JSON.parse(response.data.Payload);
  //     let imageUrl = `https://${data.body}.ipfs.dweb.link`;
  //     setImageUrl(imageUrl);
  //   }
  //   fetchImage()
  // }, [imageUrl, setImageUrl]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data)
  };

  return (
    <section className="container">
      <div>
        <Container maxWidth="sm">
          Hi

          {/*<img src={imageUrl} />*/}

          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstName')} /> {/* register an input */}
            <input {...register('lastName', { required: true })} />
            {errors.lastName && <p>Last name is required.</p>}
            <input {...register('age', { pattern: /\d+/ })} />
            {errors.age && <p>Please enter number for age.</p>}
            <input type="submit" />
          </form>

        </Container>
      </div>
    </section>
  );
}
