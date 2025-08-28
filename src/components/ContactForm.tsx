/**
 * To make this contact form work, create your free access key from https://web3forms.com/
     Then you will get all form submissions in your email inbox.
     Create your free access key from https://web3forms.com/
 */

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/ui/textarea'
import { useState } from 'react'
import { toast } from 'sonner'
import { z } from 'zod'
const PUBLIC_WEB3FORMS_KEY = import.meta.env.PUBLIC_WEB3FORMS_KEY

const formDataValidation = z.object({
  name: z.string().min(3, { message: 'Name must be 3 or more characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(5, { message: 'Message must be 5 or more characters long' }),
})

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsSubmitted(true)
    try {
      formDataValidation.parse(formData)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: PUBLIC_WEB3FORMS_KEY,
          replyto: formData.email,
          from_name: formData.name,
          ...formData,
        }),
      })

      toast(`Your message was successfully sent!`)
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
      console.log('Form submitted:', response)
    } catch (error) {
      console.log('Error:', error)
      let errorMessage = error

      if (error instanceof z.ZodError) {
        errorMessage = JSON.stringify(error.issues[0].message).slice(1, -1)
      }
      toast(`Oops: ${errorMessage}`)
    }
  }

  return (
    <div className="flex flex-col gap-8 max-w-[500px] min-w-[200px] w-full border-none">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            minLength={3}
            className={`${isSubmitted && 'invalid:border-destructive'}`}
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={e => handleChange(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            pattern="/^[^\s@]+@[^\s@]+\.[^\s@]+$/"
            className={`${isSubmitted && 'invalid:border-destructive'}`}
            placeholder="Enter your email"
            required
            type="email"
            value={formData.email}
            onChange={e => handleChange(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            minLength={3}
            className={`${isSubmitted && 'invalid:border-destructive'}`}
            id="message"
            name="message"
            placeholder="Enter your message"
            required
            value={formData.message}
            onChange={e => handleChange(e)}
          />
        </div>
      </div>

      <Button className="w-full" type="submit" onClick={handleSubmit}>
        Send
      </Button>
    </div>
  )
}

export default ContactForm
