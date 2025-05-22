import { GalleryVerticalEnd } from "lucide-react"
import { Link } from "react-router-dom";
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            ExamGenie
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pup.edu.ph%2Fabout%2Fimages%2Fpylon2022.jpg&f=1&nofb=1&ipt=0b5b6a92c599ea4b9119722ad2314fcbd87a17694047abdbab7c45e9ed89f8e7"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
