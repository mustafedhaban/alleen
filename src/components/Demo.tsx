import { Hexagon, Github, Twitter } from "lucide-react"
import { Footer } from "./Footer"

function Demo() {
  return (
    <div className="w-full">
      <Footer
        logo={<img src="./logo.png" alt="logo" className="h-10 w-auto" />}
        
        socialLinks={[
          {
            icon: <Twitter className="h-5 w-5" />,
            href: "https://twitter.com",
            label: "Twitter",
          },
          {
            icon: <Github className="h-5 w-5" />,
            href: "https://github.com",
            label: "GitHub",
          },
        ]}
        mainLinks={[
          { href: "#services", label: "Services" },
          { href: "#about", label: "About" },
          { href: "#approach", label: "Features" },
          { href: "#contact", label: "Contact" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
        ]}
        copyright={{
          text: "© 2025 Alleen Consultancy",
          license: "All rights reserved",
        }}
      />
    </div>
  )
}

export { Demo }