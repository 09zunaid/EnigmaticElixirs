'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl">Get In Touch</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Have a question or a special request? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll reply as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Jane Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="jane@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="e.g., 'Question about an order'" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message here..." required className="min-h-[150px]" />
                </div>
                <Button type="submit" size="lg">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-8">
            <Card className="bg-secondary">
                <CardHeader>
                    <CardTitle className="font-headline text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <div className="flex items-start gap-4">
                        <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-foreground">Our Studio</p>
                            <p>123 Scent Avenue,</p>
                            <p>Aromaville, Perfume State, 98765</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Mail className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-foreground">Email Us</p>
                            <a href="mailto:hello@enigmaticelixirs.com" className="hover:text-accent">hello@enigmaticelixirs.com</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                        <div>
                           <p className="font-semibold text-foreground">Call Us</p>
                           <a href="tel:+1234567890" className="hover:text-accent">(123) 456-7890</a>
                        </div>
                    </div>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-xl">Studio Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                   <div className="flex justify-between"><span>Monday - Friday:</span> <span className="font-medium text-foreground">10am - 6pm</span></div>
                   <div className="flex justify-between"><span>Saturday:</span> <span className="font-medium text-foreground">11am - 4pm</span></div>
                   <div className="flex justify-between"><span>Sunday:</span> <span className="font-medium text-foreground">Closed</span></div>
                </CardContent>
             </Card>
        </div>
      </div>
    </div>
  );
}