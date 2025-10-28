import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-secondary min-h-full">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="font-headline text-3xl">Create an Account</CardTitle>
            <CardDescription>Begin your journey into the world of personal fragrance.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Jane Doe" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                </div>
            </div>
            <Button type="submit" className="w-full" size="lg">Create Account</Button>
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link href="/login" className="font-medium text-accent hover:underline">
                    Sign In
                </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
