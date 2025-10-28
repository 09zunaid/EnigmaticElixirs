import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-secondary min-h-full">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="font-headline text-3xl">Welcome Back</CardTitle>
            <CardDescription>Sign in to access your profile and saved elixirs.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link href="#" className="text-sm text-accent hover:underline">
                            Forgot password?
                        </Link>
                    </div>
                    <Input id="password" type="password" required />
                </div>
            </div>
            <Button type="submit" className="w-full" size="lg">Sign In</Button>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                    Or continue with
                    </span>
                </div>
            </div>
             <div className="grid grid-cols-2 gap-4">
                <Button variant="outline">Google</Button>
                <Button variant="outline">Facebook</Button>
            </div>
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link href="/signup" className="font-medium text-accent hover:underline">
                    Sign up
                </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
