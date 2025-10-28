'use client';

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle } from 'lucide-react';

const availableTimes = ["10:00 AM", "11:30 AM", "02:00 PM", "03:30 PM", "05:00 PM"];

export default function ConsultationPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | undefined>();
  const [isBooked, setIsBooked] = useState(false);
  const { toast } = useToast();

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !selectedTime) {
      toast({
        variant: 'destructive',
        title: 'Incomplete Selection',
        description: 'Please select a date and time for your consultation.',
      });
      return;
    }
    setIsBooked(true);
    toast({
        title: 'Consultation Booked!',
        description: `We look forward to seeing you on ${date.toLocaleDateString()} at ${selectedTime}.`,
    });
  };

  if (isBooked) {
    return (
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center justify-center text-center">
          <CheckCircle className="h-20 w-20 text-green-500 mb-6" />
          <h1 className="font-headline text-4xl md:text-5xl">Booking Confirmed!</h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Your consultation is scheduled. An email with the details has been sent to you. We look forward to crafting your unique scent together.
          </p>
          <Button onClick={() => setIsBooked(false)} className="mt-8">Book Another Session</Button>
        </div>
      );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl">Book a Private Consultation</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Schedule a one-on-one session with our master perfumer to create a truly bespoke fragrance in our studio.
        </p>
      </div>

      <form onSubmit={handleBooking}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Select a Date & Time</CardTitle>
              <CardDescription>Choose a day and time slot that works for you.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex justify-center">
                 <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}
                    className="rounded-md border"
                  />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Available Times on {date ? date.toLocaleDateString() : '...'}</h3>
                 <RadioGroup value={selectedTime} onValueChange={setSelectedTime} className="grid grid-cols-2 gap-4">
                    {availableTimes.map((time) => (
                        <div key={time}>
                            <RadioGroupItem value={time} id={time} className="sr-only" />
                            <Label htmlFor={time} className={`flex items-center justify-center rounded-md border-2 p-4 text-sm font-medium hover:bg-accent hover:text-accent-foreground ${selectedTime === time ? 'bg-accent text-accent-foreground' : ''}`}>
                                {time}
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
          
          <Card>
             <CardHeader>
                <CardTitle className="font-headline text-2xl">Your Details</CardTitle>
                <CardDescription>So we know who to expect.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Jane Doe" required />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="jane@example.com" required />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                </div>
                <Button type="submit" className="w-full !mt-6" size="lg">Book Now</Button>
            </CardContent>
          </Card>
        </div>
      </form>
    </div>
  );
}
