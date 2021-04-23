import React, {useEffect, useState} from 'react';
import {Container} from "@material-ui/core";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { TextField } from "@material-ui/core";
import {Button, Input} from "@material-ui/core";


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

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              {...register('name')}
              label="Full Name"
            />
            <br/>

            <TextField
              variant="outlined"
              {...register('email', { required: true })}
              label="Email"
            />
            {errors.email && <span className="error"><br/>An email is required.</span>}
            <br/>

            <TextField
              variant="outlined"
              {...register('organisation', { required: true })}
              label="Organisation/Organization"
            />
            {errors.organisation && <span className="error"><br/>An organisation is required.</span>}
            <br/>

            <br/>

            <TextField
              multiline
              variant="outlined"
              rows={2}
              {...register('why', { required: true }) } label="The 'Why'"
            />
            {errors.why && <span className="error"><br/>Why is this needed?</span>}
            <br/>

            <TextField
              multiline
              variant="outlined"
              rows={2}
              {...register('summary', { required: true })} label="A Simple Summary"
            />
            {errors.summary && <span className="error"><br/>Please give a very simple summary (like you would in the 'subject' of an email).</span>}
            <br/>

            <TextField
              multiline
              variant="outlined"
              rows={4}
              {...register('info', { required: true })} label="Details"
            />
            {errors.info && <span className="error"><br/>Details required (don't worry, we will get in touch if anything is missing).</span>}
            <br/>

            <br/>

            <Button type="submit" color="primary" variant="contained" className="list-item">
              Submit
            </Button>
          </form>

        </Container>
      </div>
    </section>
  );
}
