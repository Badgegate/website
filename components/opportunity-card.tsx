'use client'

import { ShieldIcon, CircleUserRound } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export  default function OpportunityCard() {
  return (
    <Card className="w-full max-w-3xl">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 border-b md:border-b-0 md:border-r border-border md:min-h-80 flex flex-col items-start">
            <div className="flex-grow">
              <div className="mb-2 text-sm text-muted-foreground font-semibold">9 days ago</div>
              <h2 className="font-bold mb-2">Front-end Software Engineer</h2>
              <p className="mb-4">
                Blanditiis officia autem eos molestiae aut aliquam. Aperiam qui deleniti hic tempora deserunt in quia fugit.
              </p>
              <div className="flex items-center mb-6 text-sm text-muted-foreground gap-px">
                <span className="font-semibold mr-1">By </span>
                <CircleUserRound className="w-4 h-4" />
                <span className="font-semibold">DFINITY Foundation</span>
              </div>
            </div>
            <Button variant="outline" >
            Learn more
            
              </Button>
           {/*
           <Button variant="secondary" disabled >
            <LockIcon className="w-4 h-4 mr-2" />
            No access
              </Button>
           */} 
          </div>
          <div className="p-6 flex flex-col">
            <div className="flex-grow">
              <h3 className="text-xs font-bold mt-1 mb-2 uppercase tracking-wide">unlock opportunity</h3>
              <p className=" mb-6">
                The following verified credentials are needed to unlock this opportunity
              </p>
            </div>
            <ul className=" flex flex-col gap-2 items-start">
              {["TypeScript Smart Contract 101", "TypeScript Development 201"].map((credential, index) => (
                <li key={index} className="flex items-center gap-1 h-10 pl-3 pr-4 py-2 rounded-full bg-muted text-muted-foreground">
                  <ShieldIcon className="w-4 h-4" />
                  <span className="text-sm font-semibold">{credential}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}