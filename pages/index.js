import Head from 'next/head'


import Alert from '../components/alert'
import H1 from '../components/h1'

// https://nextjs.org/blog/styling-next-with-styled-jsx


import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
        <H1>Page Title</H1>
        <Alert state="error">Something has gone wrong!</Alert>
        <Alert state="warning">Something needs a warning!</Alert>
    </>
  )
}
