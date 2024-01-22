import React, { useEffect, useState } from 'react'
import { Header, Info, Testimonial, Topic, Blog, Footer,} from './Components'
import client from "./client";

const App = () => {

  const [post, setPost] = useState ([]);

  useEffect(() => {
    const query = '*[_type == "post"]'; 

    client.fetch(query).then((data) => {
      setPost(data);
    })
  }, [])
    return (
    <>
      <Header />
      <h1>{post[1] && post[1].title}</h1>
      <Topic />
      <Info />
      <Blog />
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App
