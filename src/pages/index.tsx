import Image from 'next/image';
import { useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import HeroImage from '@/assets/hero-image.png';
import FirstBox from '@/assets/first-box.png';
import SecondBox from '@/assets/second-box.png';
import ThirdBox from '@/assets/third-box.png';
import YouTube from '@/assets/youtube.png';
import Instagram from '@/assets/instagram.png';
import Facebook from '@/assets/facebook.png';
import Twitter from '@/assets/twitter.png';
import LinkedIn from '@/assets/linkedin.png';
import Ustadz from '@/assets/ustadz.png';
import Logo from '@/assets/logo.png';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const products = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div>
      <div className="relative h-full">
        <Image
          src={HeroImage}
          alt="hero-image"
          style={{ objectFit: 'contain' }}
        ></Image>
        <div className="max-w-[1200px] mx-auto px-4 py-5 flex justify-between absolute top-0 w-full right-0 left-0 z-40">
          <Image
            src={Logo}
            alt="logo"
            style={{ objectFit: 'contain' }}
            width={100}
            height={40}
          ></Image>
          {!mobileMenuOpen && (
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-rose-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          )}

          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            Product
                            <ChevronDownIcon
                              className={classNames(
                                open ? 'rotate-180' : '',
                                'h-5 w-5 flex-none'
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {[...products, ...callsToAction].map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Marketplace
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Company
                    </a>
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>

          <div className="lg:grid grid-cols-4 gap-4 text-white hidden">
            <Link href="#">Program</Link>
            <Link href="#">Event</Link>
            <Link href="#">Struktur</Link>
            <Link href="#">Campaign</Link>
          </div>
        </div>
        <div className="w-full absolute my-auto mx-auto left-0 right-0 top-0 bottom-0 justify-center flex flex-col items-center text-white">
          <div className="text-6xl font-jakarta font-extrabold">RAHEELA</div>
          <div className="text-6xl font-jakarta font-extrabold">
            PEMUDA LANGIT
          </div>
          <div className="text-xs font-jakarta">
            forum pemuda pembawa perubahan
          </div>
        </div>
      </div>
      <div className="text-center bg-white w-[750px] mx-auto">
        <div>
          <div className="text-3xl mt-[100px] font-bold">VISI</div>
          <div className="text-2xl mt-[21px] ">
            Membangun peradaban Islam melalui dakwah bersama anak muda untuk
            menjadi pengangkut beban umat
          </div>
        </div>
        <div>
          <div className="text-3xl mt-[32px] font-bold">MISI</div>
          <div className="text-2xl mt-[21px] mb-[100px]">
            Menjadi programer dakwah secara terencana, terkonsep,
            terintegrasi,dan profesional agar menjadi solusi bagi permasalahan
            umat di bidang sosial, ekonomi, dan pendidikan.
          </div>
        </div>
      </div>
      <div className="mx-auto py-9 bg-green-500">
        <div className="text-center text-3xl mb-[32px] font-bold text-white">
          Event dan Program
        </div>
        <div className="max-w-[1200px] grid grid-cols-3 gap-7 mx-auto">
          {/* parent */}
          <div className="rounded-3xl overflow-hidden shadow-lg relative">
            <Image src={FirstBox} alt="Sunset in the mountains"></Image>
            {/* child dari div atas */}
            <div className="absolute bottom-8 left-4 font-mono text-white">
              Kajian Rutin Kamis Sore bersama Ustad...
            </div>
          </div>
          <div className=" rounded-3xl overflow-hidden shadow-lg relative">
            <Image src={SecondBox} alt="Sunset in the mountains"></Image>
            <div className="absolute bottom-8 left-4 font-mono text-white">
              Penghijauan di Gunung Bromo dala...
            </div>
          </div>
          <div className=" rounded-3xl overflow-hidden shadow-lg relative">
            <Image src={ThirdBox} alt="Sunset in the mountains"></Image>
            <div className="absolute bottom-8 left-4 font-mono text-white">
              Pengajian Akbar pada Tanggal 12 Septemb...
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[64px] bg-white">
        <div className="ml-auto">
          <Image src={Ustadz} width={556} height={472} alt="ustadz"></Image>
        </div>
        <div className="h-full flex justify-center flex-col gap-4">
          <div>
            Jadilah bagian dari perubahan dengan berkolaborasi bersama kami
          </div>
          <button className="bg-green-500 text-white rounded-lg px-4 py-2 w-fit">
            Hubungi Kami
          </button>
        </div>
      </div>
      <div className="w-full flex items-center flex-col gap-4 pt-28 pb-28 bg-[#F2F2F2]">
        <Image
          src={Logo}
          alt="logo"
          style={{ objectFit: 'contain' }}
          width={100}
          height={40}
        ></Image>
        <div className="w-full flex flex-row justify-center gap-4">
          <Image
            src={Facebook}
            alt="logo"
            style={{ objectFit: 'contain' }}
            width={30}
            height={30}
          ></Image>
          <Image
            src={Twitter}
            alt="logo"
            style={{ objectFit: 'contain' }}
            width={30}
            height={30}
          ></Image>
          <Image
            src={Instagram}
            alt="logo"
            style={{ objectFit: 'contain' }}
            width={30}
            height={30}
          ></Image>
          <Image
            src={Twitter}
            alt="logo"
            style={{ objectFit: 'contain' }}
            width={30}
            height={30}
          ></Image>
          <Image
            src={LinkedIn}
            alt="logo"
            style={{ objectFit: 'contain' }}
            width={30}
            height={30}
          ></Image>
          <Image
            src={YouTube}
            alt="logo"
            style={{ objectFit: 'contain' }}
            width={30}
            height={30}
          ></Image>
        </div>
      </div>
      <Footer />
    </div>
  );
}
