import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa";
import { Link } from "react-router-dom";

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your details to sign up for an account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col">
            <Label htmlFor="firstname" className="mb-2">First Name</Label>
            <Input id="firstname" type="text" placeholder="John" className="w-full sm:w-auto" required />
          </div>
        <div className="flex flex-col">
          <Label htmlFor="lastname" className="mb-2">Last Name</Label>
          <Input id="lastname" type="text" placeholder="Doe" className="w-full sm:w-auto" required />
        </div>
      </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
        <Button variant="outline" className="w-full">
        <FcGoogle />
          Sign Up with Google
        </Button>
        <Button variant="outline" className="w-full">
        <FaMicrosoft />
          Sign Up with Microsoft
        </Button>
      </div>
      <div className="text-center text-sm">
       Already have an account?{" "}
        <Link to="/login" className="underline underline-offset-4">
          Log In
        </Link>
      </div>
    </form>
  )
}
