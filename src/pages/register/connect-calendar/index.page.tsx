import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { signIn, useSession } from 'next-auth/react'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { ArrowRight, Check } from 'phosphor-react'
// import { api } from "../../../lib/axios"
import { Container, Header } from '../styles'
import { AuthError, ConnectBox, ConnectItem } from './styles'

export default function ConnectCalendar() {
  const session = useSession()
  const router = useRouter()

  const hasAuthError = !!router.query.error
  const isSignedId = session.status === 'authenticated'

  async function handleConnectCalendar() {
    await signIn('google')
  }

  async function handleNavigateToNextStep() {
    await router.push('/register/connect-calendar')
  }

  return (
    <>
      <NextSeo title="Connect your Google Calendar | Ignite Call" noindex />

      <Container>
        <Header>
          <Heading as="strong">Connect your schedule!</Heading>
          <Text>
            Connect your calendar to automatically check busy times and new
            events as they are scheduled.
          </Text>

          <MultiStep size={4} currentStep={2} />
        </Header>

        <ConnectBox>
          <ConnectItem>
            <Text>Google Calendar</Text>
            {isSignedId ? (
              <Button size="sm" disabled>
                Connected
                <Check />
              </Button>
            ) : (
              <Button
                variant="secondary"
                size="sm"
                onClick={handleConnectCalendar}
              >
                Connect
                <ArrowRight />
              </Button>
            )}
          </ConnectItem>

          {hasAuthError && (
            <AuthError size="sm">
              Failed to connect to Google, please check if you have enabled
              access permissions to Google Calendar
            </AuthError>
          )}

          <Button
            onClick={handleNavigateToNextStep}
            type="submit"
            disabled={!isSignedId}
          >
            Next step
            <ArrowRight />
          </Button>
        </ConnectBox>
      </Container>
    </>
  )
}
