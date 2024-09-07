import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  // Popover,
  // PopoverButton,
  PopoverGroup,
  // PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Bureaucrat Forum', description: 'Get a better understanding of your traffic', href: '/forums/bureaucrat-forum', icon: ChartPieIcon },
  { name: 'Celebrity Forum', description: 'Speak directly to your customers', href: '/forums/celebrity-forum', icon: CursorArrowRaysIcon },
  { name: 'Entrepreneur Forum', description: 'Get a better understanding of your traffic', href: '/forums/entrepreneur-forum', icon: ChartPieIcon },
  { name: 'Global Embassy Forum', description: 'Get a better understanding of your traffic', href: '/forums/global-embassy-forum', icon: ChartPieIcon },
  { name: 'International Economic Forum', description: 'Your customers data will be safe and secure', 
    href: '/forums/international-forum', icon: FingerPrintIcon },
  { name: 'Law Forum', description: 'Get a better understanding of your traffic', href: '/forums/law-forum', icon: ChartPieIcon },
  { name: 'Medico Forum', description: 'Connect with third-party tools', href: '/forums/medico-forum', icon: SquaresPlusIcon },
  { name: 'Political Forum', description: 'Build strategic funnels that will convert', href: '/forums/political-forum', icon: ArrowPathIcon },
  { name: 'Sports Forum', description: 'Build strategic funnels that will convert', href: '/forums/sports-forum', icon: ArrowPathIcon },
  { name: 'Youth Forum', description: 'Build strategic funnels that will convert', href: '/forums/youth-forum', icon: ArrowPathIcon },
]

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to='/' className=" -m-1.5 p-1.5">
            <span className="sr-only">M_Aashiyana</span>
            <img alt="" src="/logo.png" className=" inline h-16 w-auto transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300" />
            {/* <div className='inline p-2'>
            <p className=' text-lg font-semibold text-blue-950'>Youth United for Change India</p>
            <p className=' text-xs'>World's First and Largest Platform of Professionals</p>
            </div> */}
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link to='/' className="text-sm font-semibold leading-6 text-gray-700 active:text-yellow-500 hover:text-yellow-500
          transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"> 
            HOME
          </Link>

          <div className="relative group">
            <button className="text-sm font-semibold leading-6 text-gray-700 active:text-yellow-500 hover:text-yellow-500
            transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
                <Link to='/forums'>OUR WORK<ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none inline text-gray-400" /></Link>
            </button>
            <div
              className="absolute text-center -left-8 top-full z-10 overflow-hidden rounded-3xl w-screen max-w-60 bg-white shadow-lg ring-4 ring-gray-600/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in hidden group-hover:block"
            >
              {/* <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="relative flex items-center gap-x-6 rounded-lg p-4 text-sm"
                  >
                    {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div> 
                    <div className="flex-auto">
                      <Link to={item.href} className="block font-semibold text-gray-700 hover:text-yellow-500">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div> */}
              {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div> */}
            </div> 
          </div> 


          {/* <Popover className="relative group">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-700 active:text-yellow-500 hover:text-yellow-500">
              <Link to='/forums'>
                Forums
              </Link>
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in hidden group-hover:block"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-700">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover> */}

          
          <Link to='/why-us' className="text-sm font-semibold leading-6 text-gray-700 active:text-yellow-500 hover:text-yellow-500
          transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
            EVENTS
          </Link>
          <Link to='/contact-us' className="text-sm font-semibold leading-6 text-gray-700 active:text-yellow-500 hover:text-yellow-500
          transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
            GET INVOLVED
          </Link>
          <Link to='/contact-us' className="text-sm font-semibold leading-6 text-gray-700 active:text-yellow-500 hover:text-yellow-500
          transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
            OUR MISSION
          </Link>
          <Link to='/contact-us' className="text-sm font-semibold leading-6 text-gray-700 active:text-yellow-500 hover:text-yellow-500
          transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
            OUR VISION
          </Link>
          <Link to='/contact-us' className="text-sm font-semibold leading-6 text-gray-700 active:text-yellow-500 hover:text-yellow-500 
          transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
            CONTACT US
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to='/join-us' className="text-sm font-semibold leading-6 text-white bg-yellow-500
          active:text-yellow-500 hover:text-yellow-500 border-yellow-500
           border-2
            px-2 py-1 rounded
          hover:bg-white
            hover:font-extrabold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
            SUPPORT US <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link onClick={() => setMobileMenuOpen(false)} to='/' className="-m-1.5 p-1.5">
              <span className="sr-only">M_Aashiyana</span>
              <img
                alt=""
                src="/logo.png"
                className="h-16 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to='/'
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50 active:text-yellow-500 hover:text-yellow-500"
                >
                  Home
                </Link>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50 active:text-yellow-500 hover:text-yellow-500">
                    <Link onClick={() => setMobileMenuOpen(false)} to='/forums'>
                      Our Work
                    </Link>
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {products.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-700 hover:bg-gray-50"
                      >
                      <button onClick={() => setMobileMenuOpen(false)}>
                      <Link 
                        onClick={() => setMobileMenuOpen(false)}
                        to={item.href}
                      >
                        {item.name}
                      </Link>
                      </button>
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  to='why-us'
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50 active:text-yellow-500 hover:text-yellow-500"
                >
                  Events
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  to='contact-us'
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50 active:text-yellow-500 hover:text-yellow-500"
                >
                  Get Involved
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  to='contact-us'
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50 active:text-yellow-500 hover:text-yellow-500"
                >
                  Our Missioon
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  to='contact-us'
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50 active:text-yellow-500 hover:text-yellow-500"
                >
                  Our Vision
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  to='contact-us'
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50 active:text-yellow-500 hover:text-yellow-500"
                >
                  Contact Us
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to='join-us'
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50 active:text-yellow-500 hover:text-yellow-500"
                >
                  Support Us
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
