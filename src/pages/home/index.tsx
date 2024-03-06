import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Simplify your schedule | Ignite Call"
        description="Connect your calendar and allow people to schedule appointments in your free time."
      />

      <Container>
        <Hero>
          <Heading as="h1" size="4xl">
            Uncomplicated scheduling
          </Heading>
          <Text size="xl">
            Connect your calendar and allow people to schedule appointments in
            your free time.
          </Text>

          <ClaimUsernameForm />
        </Hero>

        <Preview>
          <Image
            src={previewImage}
            height={400}
            quality={100}
            priority
            alt="Calendar symbolizing application in operation"
          />
        </Preview>
      </Container>
    </>
  )
}
