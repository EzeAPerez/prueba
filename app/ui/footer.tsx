import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16 bg-white dark:bg-gray-900 inset-0 bg-gradient-to-t from-black/80 to-transparent">
      <div className="hidden md:grid container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-500 dark:text-gray-400">
        <div>
          <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Acme Inc.</h3>
          <p className=" mb-6">
            Acme Inc. is a leading provider of innovative technology solutions. We are dedicated to helping our clients
            achieve their goals through cutting-edge products and exceptional service.
          </p>
          <div className="flex space-x-4">
            <a className="hover:text-black dark:hover:text-white" href="#">
              <FacebookIcon  />
            </a>
            <a className="hover:text-black dark:hover:text-white" href="#">
              <TwitterIcon/>
            </a>
            <a className="hover:text-black dark:hover:text-white" href="#">
              <LinkedinIcon/>
            </a>
            <a className="hover:text-black dark:hover:text-white" href="#">
              <InstagramIcon/>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Contact Us</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 ">
              <MailIcon/>
              <a className=" hover:text-black dark:hover:text-white" href="#">
                info@acme.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon/>
              <a className="hover:text-black dark:hover:text-white" href="#">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <LocateIcon/>
              <span >123 Main St, Anytown USA</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Quick Links</h3>
          <div className="space-y-2 space-x-2 ">
            <Link className="hover:text-black dark:hover:text-white" href="#">
              Home
            </Link>
            <Link className="hover:text-black dark:hover:text-white" href="#">
              About
            </Link>
            <Link className="hover:text-black dark:hover:text-white" href="#">
              Services
            </Link>
            <Link className="hover:text-black dark:hover:text-white" href="#">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="md:hidden container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-500 dark:text-gray-400">
        <div>
          <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Acme Inc.</h3>
          <div className="flex space-x-4">
            <a className="hover:text-black dark:hover:text-white" href="#">
              <FacebookIcon  />
            </a>
            <a className="hover:text-black dark:hover:text-white" href="#">
              <TwitterIcon/>
            </a>
            <a className="hover:text-black dark:hover:text-white" href="#">
              <LinkedinIcon/>
            </a>
            <a className="hover:text-black dark:hover:text-white" href="#">
              <InstagramIcon/>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Contact Us</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <MailIcon/>
              <a className="hover:text-black dark:hover:text-white" href="#">
                info@acme.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon/>
              <a className="hover:text-black dark:hover:text-white" href="#">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <LocateIcon/>
              <span>123 Main St, Anytown USA</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Quick Links</h3>
          <div className="space-x-2">
            <Link className="hover:text-black dark:hover:text-white" href="#">
              Home
            </Link>
            <Link className="hover:text-black dark:hover:text-white" href="#">
              About
            </Link>
            <Link className="hover:text-black dark:hover:text-white" href="#">
              Services
            </Link>
            <Link className="hover:text-black dark:hover:text-white" href="#">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
        © 2024 Acme Inc. All rights reserved.
      </div>
    </footer>
  )
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function LocateIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}