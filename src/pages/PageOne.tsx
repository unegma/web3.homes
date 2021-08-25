import React, {useState} from 'react';
import {Box, Container} from "@material-ui/core";
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
      <Container maxWidth="md">
        <Box my={4}>
        <Typography variant="h2">
          Get Started<br/><br/>
        </Typography>
        <Typography className="pageText--body">
          Setting up a Web3 domain attached to your wallet can be a bit complicated..<br/>
        </Typography>
        <Typography className="pageText--body">
          So we will do it for you for free (although we wouldn't say no to a tip)..<br/>
        </Typography>
        <Typography className="pageText--body">
          All you need to cover is the cost of the domain and any transaction fees.<br/><br/>
        </Typography>
        <Typography className="pageText--body">
          You will then be able to ask for Digital Tokens (in supported places) by giving a human readable domain, such as:&nbsp;
          <a target="_blank" href="#">unegma.eth</a><br/><br/>
        </Typography>
        <Typography className="pageText--body">
          All you need to do is choose an <a target="_blank" href="https://ens.domains/">ENS domain</a> (pay yearly),<br/> or an&nbsp;
          <a target="_blank" href="https://unstoppabledomains.com">Unstoppable Domain</a> (pay once)<br/> and then fill out the form below, and we will do the rest for you.
        </Typography>
        <br/>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            {...register('name')}
            label="Name (optional)"
          />
          <br/>

          <TextField
            variant="outlined"
            {...register('email', { required: true })}
            label="Email*"
          />
          {errors.email && <span className="error"><br/>An email is required.</span>}
          <br/>

          <TextField
            variant="outlined"
            {...register('domain', { required: true })}
            label="Desired Domain Name*"
          />
          {errors.domain && <span className="error"><br/>A domain is required.</span>}
          <br/>

          <TextField
            variant="outlined"
            {...register('other')}
            label="Extra details (optional)"
          />
          <br/>
          <br/>


          <Typography className="pageText--body">
            Please include as much detail as possible. We will get in touch if any details are missing.
            See <Link to="/about" className="enterButton">here for more info.</Link>
          </Typography>

          <br/>

          <Button type="submit" color="primary" variant="contained" className="list-item">
            Submit
          </Button>
        </form>
        </Box>
      </Container>
    )
  }

  return (
    <Container maxWidth="md">
      <Box my={4}>

      { showForm && !submittedForm ? <SubmissionForm></SubmissionForm> : showForm && submittedForm ? <span>Submitting...</span> :
        <Typography className="pageText--body">Thanks for helping improve the Web3 Ecosystem! <br/>
        We will be in touch if we need any extra details.<br/>
        Please contact <a href="https://unegma.com/contact" target="_blank">Unegma LTD</a> for any other queries.
        </Typography>
      }
      </Box>
    </Container>
  );
}
