"use client";

import { useState } from "react";
import SectionDivider from "@/components/SectionDivider";

export default function ContactForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const numbersOnly = value.replace(/\D/g, "");
    
    // Limit to 10 digits
    const limitedNumbers = numbersOnly.slice(0, 10);
    
    // Format based on length
    if (limitedNumbers.length === 0) {
      return "";
    } else if (limitedNumbers.length <= 3) {
      return `(${limitedNumbers}`;
    } else if (limitedNumbers.length <= 6) {
      return `(${limitedNumbers.slice(0, 3)}) ${limitedNumbers.slice(3)}`;
    } else {
      return `(${limitedNumbers.slice(0, 3)}) ${limitedNumbers.slice(3, 6)}-${limitedNumbers.slice(6)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const formData = new FormData(e.currentTarget);
      
      const submitData = {
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
        email: formData.get('email') as string,
        phone: phoneNumber,
        eventType: eventType,
        eventDate: eventDate,
        message: formData.get('message') as string,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      
      // Reset form after successful submission
      (e.target as HTMLFormElement).reset();
      setPhoneNumber('');
      setEventType('');
      setEventDate('');
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-secondary mb-8">
              Get In Touch
            </h2>
            <SectionDivider />
            <p className="font-sans text-lg text-dark">
              Ready to start your journey with us? We&apos;d love to hear from you.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="font-sans block text-dark mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full p-3 border-2 border-muted rounded focus:border-primary focus:outline-none text-dark"
                required
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="font-sans block text-dark mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full p-3 border-2 border-muted rounded focus:border-primary focus:outline-none text-dark"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="font-sans block text-dark mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border-2 border-muted rounded focus:border-primary focus:outline-none text-dark"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="font-sans block text-dark mb-2">
                Phone Number (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="(___) ___-____"
                className="w-full p-3 border-2 border-muted rounded focus:border-primary focus:outline-none text-dark"
              />
            </div>
            
            <div>
              <label htmlFor="eventType" className="font-sans block text-dark mb-2">
                Event Type (optional)
              </label>
              <select
                id="eventType"
                name="eventType"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full p-3 border-2 border-muted rounded focus:border-primary focus:outline-none text-dark bg-white"
              >
                <option value="">Select an event type</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Festival">Festival</option>
                <option value="Fundraiser">Fundraiser</option>
                <option value="Tailgate">Tailgate</option>
                <option value="Wedding">Wedding</option>
                <option value="Other Special Occasion">Other Special Occasion</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="eventDate" className="font-sans block text-dark mb-2">
                Event Date (optional)
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full p-3 border-2 border-muted rounded focus:border-primary focus:outline-none text-dark"
              />
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="message" className="font-sans block text-dark mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full p-3 border-2 border-muted rounded focus:border-primary focus:outline-none resize-vertical text-dark"
                placeholder="Let us know how we can tailor your experience to meet your unique needs..."
                required
              ></textarea>
            </div>
            
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`font-sans font-semibold py-4 px-8 rounded transition-colors ${
                  isSubmitting
                    ? 'bg-muted text-dark cursor-not-allowed'
                    : 'bg-primary text-secondary hover:bg-secondary hover:text-primary'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="md:col-span-2 mt-4 p-4 bg-green-100 border-2 border-green-300 rounded text-center">
                <p className="font-sans text-green-800 font-semibold">
                  ✓ Thank you! Your message has been sent successfully. We&apos;ll get back to you soon!
                </p>
              </div>
            )}
            
            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="md:col-span-2 mt-4 p-4 bg-red-100 border-2 border-red-300 rounded text-center">
                <p className="font-sans text-red-800 font-semibold">
                  ✗ {errorMessage || 'There was an error sending your message. Please try again.'}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
