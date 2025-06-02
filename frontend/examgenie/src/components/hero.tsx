import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => (
  <div className="w-full pt-30 pb-4 lg:pt-30 lg:pb-6">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-bold">
              Generate and Check Exams in seconds!
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Create, manage, and grade exams effortlessly with ExamGenie. Our platform streamlines the entire process so you can focus on what matters most — teaching. Fast, easy, and reliable tools designed to make your workflow smoother and smarter.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4" variant="outline">
              Connect with us <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Learn more <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <img
            src="/image1.jpg"
            alt="ExamGenie feature 1"
            className="rounded-md aspect-square object-cover"
          />
          <img
            src="/image3.jpg"
            alt="ExamGenie feature 2"
            className="rounded-md row-span-2 object-cover"
          />
          <img
            src="/image2.jpg"
            alt="ExamGenie feature 3"
            className="rounded-md aspect-square object-cover"
          />
        </div>
      </div>
    </div>
  </div>
);
