// import { Button } from "@/components/ui/button"

// interface FooterProps {
//   logo: React.ReactNode
  
//   socialLinks: Array<{
//     icon: React.ReactNode
//     href: string
//     label: string
//   }>
//   mainLinks: Array<{
//     href: string
//     label: string
//   }>
//   legalLinks: Array<{
//     href: string
//     label: string
//   }>
//   copyright: {
//     text: string
//     license?: string
//   }
// }

// export function Footer({
//   logo,
  
//   socialLinks,
//   mainLinks,
//   legalLinks,
//   copyright,
// }: FooterProps) {
//   return (
//     <footer className="pb-6 pt-16 lg:pb-8 lg:pt-24">
//       <div className="px-4 lg:px-8">
//         <div className="md:flex md:items-start md:justify-between">
//           <a
//             href="/#"
//             className="flex items-center gap-x-2"
            
//           >
//             {logo}
            
//           </a>
//           <ul className="flex list-none mt-6 md:mt-0 space-x-3">
//             {socialLinks.map((link, i) => (
//               <li key={i}>
//                 <Button
//                   variant="secondary"
//                   size="icon"
//                   className="h-10 w-10 rounded-full"
//                   asChild
//                 >
//                   <a href={link.href} target="_blank" aria-label={link.label}>
//                     {link.icon}
//                   </a>
//                 </Button>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="border-t mt-6 pt-6 md:mt-4 md:pt-8 lg:grid lg:grid-cols-10">
//           <nav className="lg:mt-0 lg:col-[4/11]">
//             <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end">
//               {mainLinks.map((link, i) => (
//                 <li key={i} className="my-1 mx-2 shrink-0">
//                   <a
//                     href={link.href}
//                     className="text-sm text-primary underline-offset-4 hover:underline"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//           <div className="mt-6 lg:mt-0 lg:col-[4/11]">
//             <ul className="list-none flex flex-wrap -my-1 -mx-3 lg:justify-end">
//               {legalLinks.map((link, i) => (
//                 <li key={i} className="my-1 mx-3 shrink-0">
//                   <a
//                     href={link.href}
//                     className="text-sm text-muted-foreground underline-offset-4 hover:underline"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="mt-6 text-sm leading-6 text-muted-foreground whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4]">
//             <div>{copyright.text}</div>
//             {copyright.license && <div>{copyright.license}</div>}
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }




import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center space-x-2 mb-8">
              {/* <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-lg">
                <span className="text-white font-serif font-bold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight leading-none text-white">ALLEEN</span>
                <span className="text-[8px] tracking-[0.2em] font-medium text-slate-500">CONSULTANCY</span>
              </div> */}
                {/* logo= */}
                {<img src="./logo.png" alt="logo" className="h-8 w-auto" />}
            </a>
            <p className="text-slate-400 leading-relaxed mb-6">
              Leading the way in strategic advisory and impact-driven policy consultancy for global development partners.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Facebook'].map(social => (
                <a key={social} href="#" className="text-sm font-medium hover:text-white transition-colors">{social}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Strategic Advisory</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Impact M&E</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Capacity Building</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Institutional Reform</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Grant Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Impact Stories</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Press Kit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Join Our Newsletter</h4>
            <p className="text-sm text-slate-400 mb-6">Receive insights on the latest global policy trends.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-slate-800 border-none rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-accent outline-none"
              />
              <button className="absolute right-2 top-2 bg-primary px-3 py-1 rounded text-xs font-bold text-white hover:bg-secondary">Join</button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2025 Alleen Consultancy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
