import React, {useEffect, useState} from 'react';
import {Container} from "@material-ui/core";
import axios from 'axios';

export default function PageOne(): JSX.Element {

  const [imageUrl, setImageUrl] = useState("");
  const apiURL = "https://gc4fvpbabl.execute-api.eu-west-2.amazonaws.com/live";

  useEffect(() => {
    async function fetchImage() {
      const response = await axios.get(apiURL);
      console.log(response);

      let data = JSON.parse(response.data.Payload);
      let imageUrl = `https://${data.body}.ipfs.dweb.link`;
      setImageUrl(imageUrl);
    }
    fetchImage()
  }, [imageUrl, setImageUrl])

  return (
    <section className="container">
      <div>
        <Container maxWidth="sm">
          Hi

          <img src={imageUrl} />

        </Container>
      </div>
    </section>
  );
}
