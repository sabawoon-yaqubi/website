"use client"

import { Smartphone } from "lucide-react"

export default function DownloadAppSection() {
  return (
    <div className="bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-orange-500/10 border-y border-orange-500/20 py-4 px-4 md:px-6 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 md:gap-4 flex-1">
          <div className="hidden sm:flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-500/20">
            <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
          </div>
          <div className="flex-1 min-w-0 text-center sm:text-left">
            <h3 className="text-sm md:text-base font-bold text-foreground mb-1">
              Download Our App
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Get the best experience with our mobile app
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
          <a
            href="https://apps.apple.com/ie/app/oscars-pizza/id6741105059?itscg=30200&itsct=apps_box_badge&mttnsubad=6741105059"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity inline-flex items-center justify-center"
            aria-label="Download on the App Store"
            style={{ height: '40px', width: '120px' }}
          >
            <img
              src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/white/en-us?releaseDate=1738195200"
              alt="Download on the App Store"
              className="h-full w-full object-contain"
            />
          </a>
          
          <a
            href="https://play.google.com/store/apps/details?id=com.kebab.oscarspizza&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity inline-flex items-center justify-center"
            aria-label="Get it on Google Play"
            style={{ height: '45px', width: '135px' }}
          >
            <img
              src="/agogleplay.png"
              alt="Get it on Google Play"
              className="h-full w-full object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
