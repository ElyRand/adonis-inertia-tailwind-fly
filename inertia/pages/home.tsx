import { Head } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from '~/components/ui/input_otp'

export default function Home(props: { user: { name: string } }) {
  return (
    <>
      <Head title="Homepage" />

      <div className="container">
        <span>
          Learn more about AdonisJS and Inertia.js by visiting the
          <a href="https://docs.adonisjs.com/guides/inertia">AdonisJS documentation</a>.
          <p className="bg-yellow-200">Hello {props?.user?.name}</p>
          <p className="text-red-500">Imma try to do this stuff</p>
          <p className=""> Imma try to add a shadcn ui</p>
          <Button> Click me</Button>
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </span>
      </div>
    </>
  )
}
