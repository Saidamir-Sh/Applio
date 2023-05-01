import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from './components/elements/buttons'
import { Input } from './components/forms/Input'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Input type='text' placeholder='First name'></Input>
      <Button size="md" variant='primary'>Sign Up</Button>
      <Button size="md" variant='danger'>Delete</Button>
      <Button size="md" variant='success'>Save</Button>
    </>
    )
}
