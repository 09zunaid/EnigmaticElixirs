'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Gift } from 'lucide-react';

const giftCardAmounts = [50, 100, 150, 250];

export default function GiftCardPage() {
  const [amount, setAmount] = useState('100');
  const [isPurchased, setIsPurchased] = useState(false);
  const { toast } = useToast();

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const recipientEmail = (form.elements.namedItem('recipientEmail') as HTMLInputElement).value;
    
    if (!recipientEmail) {
        toast({
            variant: 'destructive',
            title: 'Missing Information',
            description: 'Please enter the recipient\'s email address.',
        });
        return;
    }

    setIsPurchased(true);
    toast({
      title: 'Gift Card Sent!',
      description: `A gift card for $${amount} has been sent to ${recipientEmail}.`,
    });
  };

  if (isPurchased) {
    return (
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center justify-center text-center">
          <CheckCircle className="h-20 w-20 text-green-500 mb-6" />
          <h1 className="font-headline text-4xl md:text-5xl">Gift Card Sent Successfully!</h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            The lucky recipient will receive their digital gift card shortly. Thank you for sharing the gift of scent.
          </p>
          <Button onClick={() => setIsPurchased(false)} className="mt-8">Purchase Another</Button>
        </div>
      );
  }

  return (
    <div className="bg-secondary">
        <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl">Give the Gift of Scent</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Perfect for any occasion, a digital gift card invites them to create their own signature fragrance.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-start">
                <Card>
                    <form onSubmit={handlePurchase}>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Purchase a Gift Card</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-3">
                                <Label className="text-base">Select Amount</Label>
                                <RadioGroup value={amount} onValueChange={setAmount} className="grid grid-cols-2 gap-4">
                                    {giftCardAmounts.map((value) => (
                                        <div key={value}>
                                            <RadioGroupItem value={String(value)} id={`amount-${value}`} className="sr-only" />
                                            <Label htmlFor={`amount-${value}`} className={`flex items-center justify-center rounded-md border-2 p-4 text-lg font-medium hover:bg-accent hover:text-accent-foreground cursor-pointer ${amount === String(value) ? 'bg-accent text-accent-foreground' : 'bg-background'}`}>
                                                ${value}
                                            </Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="recipientName">Recipient's Name</Label>
                                <Input id="recipientName" placeholder="Jane Doe" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="recipientEmail">Recipient's Email</Label>
                                <Input id="recipientEmail" type="email" placeholder="jane@example.com" required />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="senderName">Your Name</Label>
                                <Input id="senderName" placeholder="John Smith" required />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="message">Personal Message (Optional)</Label>
                                <Textarea id="message" placeholder="Happy Birthday! Enjoy creating your unique scent." />
                            </div>
                            <Button type="submit" size="lg" className="w-full">
                                Purchase for ${amount}
                            </Button>
                        </CardContent>
                    </form>
                </Card>
                <div className="flex items-center justify-center p-4">
                    <Card className="w-full max-w-sm bg-primary text-primary-foreground shadow-2xl relative overflow-hidden">
                        <CardContent className="p-8 flex flex-col justify-between aspect-[1.6]">
                            <div>
                                <div className="flex justify-between items-start">
                                    <p className="font-headline text-2xl">Gift Card</p>
                                    <Gift className="h-8 w-8 text-accent"/>
                                </div>
                                <p className="text-sm opacity-80">Enigmatic Elixirs</p>
                            </div>
                            <div className="text-right">
                                <p className="text-4xl font-bold tracking-wider">${amount}</p>
                                <p className="text-xs opacity-70 mt-2">Redeemable for one custom fragrance experience.</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  );
}
