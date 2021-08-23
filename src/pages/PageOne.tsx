import React, {useState} from 'react';
import {Container} from "@material-ui/core";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { TextField } from "@material-ui/core";
import {Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

export default function PageOne(): JSX.Element {
  const [showForm, setShowForm] = useState(true);
  const [submittedForm, setSubmittedForm] = useState(false);
  const apiURL = "https://ox8teaek5e.execute-api.eu-west-2.amazonaws.com/live";

  async function submitForm(data: any) {
    const response = await axios.post(apiURL, data);
    console.log(response);
    setShowForm(false);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    setSubmittedForm(true)
    console.log(data);
    submitForm(data);
  };

  const SubmissionForm = () => {
    return (
      <>
        <Typography className="pageText--body">
          Please include as much detail as possible. We will get in touch if any details are missing.
          See <Link to="/about" className="enterButton">here for more info.</Link>
        </Typography>
        <br/>

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

          <Button type="submit" color="primary" variant="contained" className="list-item">
            Submit
          </Button>
        </form>
      </>
    )
  }

  return (
    <section className="container">
      <div>
        <Container maxWidth="sm">


          { showForm && !submittedForm ? <SubmissionForm></SubmissionForm> : showForm && submittedForm ? <span>Submitting...</span> :
            <Typography className="pageText--body">Thanks for helping improve Ethereum! <br/>
            We will be in touch if we need any extra details.<br/>
            Please contact <a href="https://unegma.com/contact" target="_blank">Unegma LTD</a> for any other queries.
            </Typography>
          }

        </Container>
      </div>
    </section>
  );
}
