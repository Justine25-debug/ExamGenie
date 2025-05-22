import { Check } from "lucide-react";

export const Feature2 = () => (
<div className="w-full pt-6 pb-6 lg:pt-12 lg:pb-8">
    <div className="container mx-auto">
      <div className="flex gap-4 py-6 lg:py-8 flex-col items-start">
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Lorem, ipsum.
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Lorem, ipsum.</p>
                <p className="text-muted-foreground text-sm">
                  Lorem, ipsum.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Lorem, ipsum.</p>
                <p className="text-muted-foreground text-sm">
                  Lorem, ipsum.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Lorem, ipsum.</p>
                <p className="text-muted-foreground text-sm">
                  Lorem, ipsum.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Lorem, ipsum.</p>
                <p className="text-muted-foreground text-sm">
                   Lorem, ipsum.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Lorem, ipsum.</p>
                <p className="text-muted-foreground text-sm">
                Lorem, ipsum.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Lorem, ipsum.</p>
                <p className="text-muted-foreground text-sm">
                Lorem, ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);