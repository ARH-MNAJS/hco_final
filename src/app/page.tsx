import { Marquee } from '@devnomic/marquee'
import { ArrowUpRight, Check } from 'lucide-react'
import '@/styling/marquee.css'
import Link from 'next/link'
import reviews from '@/data/reviews'
import {Globe} from "@/components/app/Globe";
import EnrollButton from "@/components/app/Enroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import FlickeringGrid from "@/components/app/flickering-grid";
import Pricing from '@/components/app/Pricing'
import * as DialogPrimitive from '@radix-ui/react-dialog';
import CurriculumDialog from '@/components/app/CurriculumDialog';
import CurriculumTrigger from '@/components/app/CurricullumTrigger'; // Adjust the path based on your folder structure


export default function Home() {

  const GLOBE_CONFIG = {
    width: 800,
    height: 800,
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [1, 1, 1], // White for light mode
    markerColor: [254 / 255, 234 / 255, 99 / 255], // Yellow points
    glowColor: [1, 1, 1], // White glow
    markers: [
      { location: [14.5995, 120.9842], size: 0.03 },
      { location: [19.076, 72.8777], size: 0.1 },
      { location: [23.8103, 90.4125], size: 0.05 },
      { location: [30.0444, 31.2357], size: 0.07 },
      { location: [39.9042, 116.4074], size: 0.08 },
      { location: [-23.5505, -46.6333], size: 0.1 },
      { location: [19.4326, -99.1332], size: 0.1 },
      { location: [40.7128, -74.006], size: 0.1 },
      { location: [34.6937, 135.5022], size: 0.05 },
      { location: [41.0082, 28.9784], size: 0.06 },
    ],
  };

  return (
    <div className="text-text dark:text-darkText">
<main className="h-[90svh] px-5 py-20 relative flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 -z-10 w-full h-full">
    <FlickeringGrid
      className="w-full h-full"
      squareSize={6}
      gridGap={10}
      color="#feea63"
      maxOpacity={1.5}
      flickerChance={0.5}
    />
  </div>
  <div className="w-full max-w-3xl flex items-center justify-center">
    <div className="bg-white text-black rounded border-2 border-black shadow-[4px_4px_0px_#000] p-8 flex flex-col items-center gap-4 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading">
        HAWKING CODE OLYMPIAD
      </h1>

      <p className="text-xl sm:text-2xl md:text-3xl">
        Success tomorrow begins with action today
      </p>

      <div className="flex flex-wrap justify-center gap-8 mt-4">
      <DialogPrimitive.Root>
      <CurriculumTrigger />
      <CurriculumDialog />
    </DialogPrimitive.Root>

      <EnrollButton />



      </div>
    </div>
  </div>
</main>
      <div>
      <Marquee
  className="border-b-4 border-t-4 border-border dark:border-darkBorder bg-white dark:bg-secondaryBlack py-5 m500:py-4 font-base"
  direction="left"
>
  {[
    "Phase 3 starting from December",
    "Enroll now to secure your spot!",
    "Exciting prizes await the winners!",
    "Workshops and webinars available",
    "Hawking Code Olympiad - Get ready!",
    "Learn, Compete, and Succeed!",
    "Mentorship sessions for participants",
    "Collaborate with top coders worldwide",
    "Develop skills for future success",
    "Registration ends soon - Don't miss out!",
  ].map((text, id) => (
    <div className="flex items-center" key={id}>
      <span className="mx-5 text-4xl m800:text-2xl m500:text-xl">
        {text}
      </span>
    </div>
  ))}
</Marquee>

<section
  id="enroll"
  className="border-b-border dark:border-b-darkBorder dark:bg-secondaryBlack inset-0 flex w-full flex-col items-center justify-center border-b-2 bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base"
>
  <div className="mx-auto w-container max-w-full px-5 py-20 lg:py-[100px]">
    <h2 className="mb-14 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
      Prepare for a Better Tomorrow
    </h2>
    <div
      className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 w900:mx-auto w900:w-2/3"
    >
      <Pricing
        planName="Spark"
        description="a flash of light with potential"
        price="8-10"
        perks={[
          "Logical and Analytical Thinking",
          "Reasoning Ability",
          "Foundational Coding Skills",
          "Mathematics and Combinatorics",
        ]}
      />
      <Pricing
        planName="Ignite"
        description="focused efforts for bright outcomes"
        price="11-14"
        perks={[
          "Number Theory",
          "Situation Based Questions",
          "Probability & Statistics",
          "Programming Language",
          "Debugging & Error Handling",
        ]}
        mostPopular
      />
      <Pricing
        planName="Blaze"
        description="brightest of all the stars"
        price="15-18"
        perks={[
          "Project-based Questions",
          "Data Structures & Algorithms",
          "Code Optimization",
          "Object-Oriented Programming",
          "Scalable Systems",
          "Computer Architecture",
        ]}
      />
    </div>
  </div>
</section>



<div className="grid grid-cols-2 border-b-4 border-t-2 border-border dark:border-darkBorder m700:grid-cols-1">
  <section className="border-b-4 border-r-4 border-border dark:border-darkBorder bg-bg dark:bg-darkBg p-14 py-16 m1300:p-10 m1300:py-12 m800:p-6 m800:py-8 m700:border-r-0 m700:bg-main dark:m700:bg-main m700:dark:text-text">
    <div className="flex items-center gap-6 mb-6">
      <div className="w-[70px] h-[70px] m1300:w-[55px] m1300:h-[55px] m800:h-10 m800:w-10 flex items-center justify-center">
        <TailwindIcon />
      </div>

      <h2 className="font-heading text-4xl m1300:text-3xl m800:text-2xl m500:text-xl">
        Hosted by Campus Credentials
      </h2>
    </div>

    <p className="text-2xl font-base m1300:text-xl m800:text-lg m500:text-base">
      The Hawking Code Olympiad is organized by Campus Credentials, a leader in
      placement training and skill development.
    </p>
  </section>
  <section className="border-b-4 border-border dark:border-darkBorder dark:text-text m700:dark:text-darkText bg-main p-14 py-16 m1300:p-10 m1300:py-12 m800:p-6 m800:py-8 m700:bg-bg m700:dark:bg-darkBg">
    <div className="flex items-center gap-6 mb-6">
      <div className="w-[70px] h-[70px] m1300:w-[55px] m1300:h-[55px] m800:h-10 m800:w-10 flex items-center justify-center">
        <OpenSourceIcon />
      </div>

      <h2 className="font-heading text-4xl m1300:text-3xl m800:text-2xl m500:text-xl">
        Open for All
      </h2>
    </div>

    <p className="text-2xl font-base m1300:text-xl m800:text-lg m500:text-base">
      This Olympiad welcomes participants from all backgrounds and skill levels,
      fostering a spirit of inclusivity and innovation.
    </p>
  </section>
  <section className="border-r-4 border-border dark:border-darkBorder bg-main dark:text-text p-14 py-16 m1300:p-10 m1300:py-12 m800:p-6 m800:py-8 m700:border-b-4 m700:border-r-0">
    <div className="flex items-center gap-6 mb-6">
      <div className="w-[70px] h-[70px] m1300:w-[55px] m1300:h-[55px] m800:h-10 m800:w-10 flex items-center justify-center">
        <Check className="w-full h-full" strokeWidth={3} />
      </div>

      <h2 className="font-heading text-4xl m1300:text-3xl m800:text-2xl m500:text-xl">
        Skill Development
      </h2>
    </div>

    <p className="text-2xl font-base m1300:text-xl m800:text-lg m500:text-base">
      The Olympiad focuses on enhancing participants coding and problem-solving
      skills, preparing them for real-world challenges.
    </p>
  </section>
  <section className="bg-bg dark:bg-darkBg p-14 py-16 m1300:p-10 m1300:py-12 m800:p-6 m800:py-8">
    <div className="flex items-center gap-6 mb-6">
      <div className="w-[70px] h-[70px] m1300:w-[55px] m1300:h-[55px] m800:h-10 m800:w-10 flex items-center justify-center">
        <CustomizableIcon />
      </div>

      <h2 className="text-4xl font-heading m1300:text-3xl m800:text-2xl m500:text-xl">
        Custom Challenges
      </h2>
    </div>

    <p className="text-2xl font-base m1300:text-xl m800:text-lg m500:text-base">
      Participants can tackle a wide range of challenges, catering to different
      levels of expertise and areas of interest.
    </p>
  </section>
</div>

        
        <section className="inset-0 flex w-full px-5 flex-col items-center justify-center bg-white dark:bg-secondaryBlack bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base">
          <div className="mx-auto w-container max-w-full py-20 m500:py-14 lg:py-[100px]">
            <h2 className="mb-10 text-center text-4xl font-heading m1300:text-3xl m700:text-2xl m500:text-xl lg:mb-20">
            Hailed by Visionaries across Industries
            </h2>
            <div className="m1000:grid-cols-1 m1000:gap-0 grid grid-cols-3 gap-4 lg:gap-8">
              {[
                [reviews[0], reviews[1]],
                [reviews[2], reviews[3], reviews[4]],
                [reviews[5], reviews[6]],
              ].map((card, index) => (
                <div className="group flex flex-col justify-center" key={index}>
                  {card.map(({ jobTitle, pfp, fullName, review }, index) => (
                    <div
                      className="m1000:min-h-20 m1000:w-2/3 m1000:mx-auto m500:w-full mb-4 min-h-48 w-full rounded-base border-2 border-border dark:border-darkBorder bg-bg dark:bg-darkBg p-5 shadow-light dark:shadow-dark lg:mb-8"
                      key={index}
                    >
                      <div className="flex items-center gap-5">
                        <img
                          className="h-12 w-12 rounded-base border-2 border-border dark:border-darkBorder"
                          src={`${pfp.src}`}
                          alt="pfp"
                        />

                        <div>
                          <h4 className="text-lg font-heading">{fullName}</h4>
                          <p className="text-sm font-base">{jobTitle}</p>
                        </div>
                      </div>
                      <div className="mt-5 break-words">{review}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="border-t-4 border-t-border dark:border-t-darkBorder border-b-4 border-b-border dark:border-b-darkBorder bg-bg dark:bg-darkBg py-20 m500:py-14 font-base lg:py-[100px]">
  <h2 className="mb-10 px-5 text-center text-4xl font-heading m1300:text-3xl m700:text-2xl m500:text-xl lg:mb-20">
    Frequently asked questions
  </h2>

  <div className="mx-auto grid w-[700px] max-w-full gap-y-10 gap-x-10 px-5 lg:w-[1200px] lg:grid-cols-2 m700:gap-y-2">
    <Accordion
      className="text-base sm:text-lg"
      type="single"
      collapsible
    >
      <AccordionItem className="mb-2" value="item-1">
        <AccordionTrigger className="text-left">
          What is the Hawking Code Olympiad?
        </AccordionTrigger>
        <AccordionContent className="text-sm sm:text-base">
          The Hawking Code Olympiad is a prestigious programming competition
          designed for coding enthusiasts and students to showcase their
          problem-solving and algorithmic skills.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="mb-2" value="item-2">
        <AccordionTrigger className="text-left">
          Who can participate in the Olympiad?
        </AccordionTrigger>
        <AccordionContent className="text-sm sm:text-base">
          The Olympiad is open to students, professionals, and coding enthusiasts
          of all skill levels. Participants must register online before the
          deadline to secure their spot.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-left">
          What programming languages are allowed?
        </AccordionTrigger>
        <AccordionContent className="text-sm sm:text-base">
          Participants can use popular programming languages such as Python, Java,
          C++, and JavaScript. The competition platform supports a wide range of
          languages to ensure flexibility.
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    <Accordion
      className="text-base sm:text-lg"
      type="single"
      collapsible
    >
      <AccordionItem className="mb-2" value="item-4">
        <AccordionTrigger className="text-left">
          Are there any registration fees?
        </AccordionTrigger>
        <AccordionContent className="text-sm sm:text-base">
          Yes, there is a nominal registration fee for participation. The fee
          details are provided during the registration process on the official
          website.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="mb-2" value="item-5">
        <AccordionTrigger className="text-left">
          What are the prizes for the winners?
        </AccordionTrigger>
        <AccordionContent className="text-sm sm:text-base">
          Winners will receive exciting prizes, including cash rewards, coding
          resources, and certificates of achievement. Additionally, top
          performers may receive internship or job opportunities with leading
          tech companies.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="text-left">
          How can I prepare for the Olympiad?
        </AccordionTrigger>
        <AccordionContent className="text-sm sm:text-base">
          Participants can prepare by practicing coding challenges on platforms
          like Codeforces, HackerRank, and LeetCode. Reviewing algorithms and
          data structures is highly recommended.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</section>



        <Marquee
  className="border-b-4 border-border dark:border-darkBorder bg-white dark:bg-secondaryBlack py-5 m500:py-4 font-base"
  direction="left"
  reverse
>
  {[
    "Phase 3 starting from December",
    "Enroll now to secure your spot!",
    "Exciting prizes await the winners!",
    "Workshops and webinars available",
    "Hawking Code Olympiad - Get ready!",
    "Learn, Compete, and Succeed!",
    "Mentorship sessions for participants",
    "Collaborate with top coders worldwide",
    "Develop skills for future success",
    "Registration ends soon - Don't miss out!",
  ].map((text, id) => (
    <div className="flex items-center" key={id}>
      <span className="mx-5 text-4xl m800:text-2xl m500:text-xl">
        {text}
      </span>
    </div>
  ))}
</Marquee>

<section className="relative w-full h-[400px] overflow-hidden bg-main bg-[linear-gradient(to_right,#00000033_1px,transparent_1px),linear-gradient(to_bottom,#00000033_1px,transparent_1px)] bg-[size:70px_70px]">
  {/* Text Section */}
  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-8 space-y-4 text-center md:items-start md:justify-center md:text-left">
    
    {/* New Heading */}
    <h1 className="text-text font-heading text-6xl lg:text-8xl m1000:text-3xl m500:text-2xl">
      Be a <span className="font-cursive">Neokid</span>
    </h1>
    
    {/* Reduced Size Subheading */}
    <h2 className="text-text font-heading text-2xl lg:text-2xl m1000:text-xl m500:text-lg">
      Join our community of 1.2 million learners
    </h2>
    
    {/* Call to Action Button */}
    <Link
      href="#"
      className="flex items-center rounded-base border-2 border-black bg-white dark:bg-secondaryBlack px-8 py-3 text-lg lg:text-xl shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
    >
      Join Community
      <ArrowUpRight className="ml-3 w-6 h-6" />
    </Link>
  </div>

  {/* Globe Section - Hidden on Small Devices */}
  <div className="hidden md:block absolute -bottom-40 -right-40 w-[500px] h-[500px] z-0 overflow-hidden">
    <Globe className="relative w-full h-full" />
  </div>
</section>









      </div>
      <footer className="z-30 border-t-4 border-border dark:border-darkBorder bg-white dark:bg-secondaryBlack px-5 py-5 font-base flex flex-wrap items-center justify-between space-y-4 md:space-y-0 md:flex-row">
  {/* Left Section */}
  <div className="text-lg text-center md:text-left">
    © {new Date().getFullYear()} Campus Credential LLP | All Rights Reserved.
    <p className="text-xs mt-1 text-gray-500">
      No part of this site, including content and/or logo, may be copied and/or used in any manner without prior written consent of Neo Education LLP.
    </p>
  </div>

  {/* Right Section */}
  <div className="flex flex-wrap justify-center space-x-4 text-sm">
    <a href="/tos" className="font-heading">
      Terms of Service
    </a>
    <a href="/privacy-policy" className="font-heading">
      Privacy Policy
    </a>
    <a href="/refund-policy" className="font-heading">
      Refund Policy
    </a>
    <a href="/contact" className="font-heading">
      Contact
    </a>
  </div>
</footer>



    </div>
  )
}

const OpenSourceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 768" fill="none">
    <path
      d="M400 10C615.398 10 790 184.585 790 399.958C790 557.315 696.772 692.954 562.483 754.562L468.604 510.384C505.457 487.481 530 446.609 530 399.958C530 328.161 471.802 269.971 400 269.971C328.198 269.971 270 328.161 270 399.958C270 446.619 294.587 487.487 331.438 510.419L237.559 754.599C103.226 692.917 10 557.313 10 399.958C10 184.585 184.602 10 400 10Z"
      className="fill-black m700:stroke-black m700:fill-main m700:dark:fill-darkText"
      strokeWidth="30"
    />
  </svg>
)

const EasyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 839 635" fill="none">
    <path
      d="M753.075 21.7886L753.066 21.7796C737.326 6.07842 711.886 6.06551 696.164 21.7886L318.706 399.275L142.862 222.146L142.849 222.133L142.836 222.121C127.114 206.398 101.674 206.411 85.934 222.112L85.925 222.121L21.7874 286.263L21.7784 286.272C6.08246 302.009 6.06592 327.442 21.7765 343.165C21.7801 343.169 21.7838 343.173 21.7874 343.176L289.976 613.188L289.987 613.2L289.999 613.211C305.716 628.93 331.193 628.93 346.91 613.211L340.57 606.872L346.91 613.211L817.204 142.853C832.937 127.158 832.924 101.644 817.213 85.931L753.075 21.7886Z"
      className="fill-black"
    />
  </svg>
)

const CustomizableIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none">
    <path
      d="M493.281 161.223L493.259 161.244L493.237 161.266C479.348 175.17 479.348 198.163 493.237 212.067L588.139 307.067C602.034 320.978 625.021 320.978 638.917 307.067L773.317 172.527C775.305 171.081 777.213 170.855 778.356 171.073C778.936 171.184 779.329 171.398 779.603 171.635C779.852 171.85 780.207 172.255 780.494 173.074C786.805 193.659 790 215.947 790 240C790 375.796 673.608 484.265 534.943 468.421C513.811 465.156 493.099 460.323 474.193 452.437L468.006 449.857L463.269 454.599L153.591 764.599C137.117 781.091 114.674 790 94.0687 790C73.4638 790 51.0205 781.091 34.5461 764.599L34.464 764.517L34.3799 764.437C1.96834 733.466 1.72473 679.929 34.5409 647.073C34.5427 647.071 34.5444 647.069 34.5461 647.067L345.87 337.086L350.624 332.352L348.046 326.157C340.129 307.138 335.322 288.025 332.083 265.39C316.219 126.527 424.606 10 560.25 10C582.145 10 605.607 13.0663 627.556 19.181C628.909 20.2855 629.87 21.8429 630.23 23.3556C630.631 25.0419 630.177 25.8434 629.774 26.254C629.77 26.2581 629.766 26.262 629.762 26.2659L493.281 161.223Z"
      className="fill-main stroke-black m700:dark:fill-darkText"
      strokeWidth="30"
    />
  </svg>
)

const TailwindIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 481" fill="none">
    <mask
      id="mask0_16_29"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="800"
      height="481"
    >
      <path
        d="M10 10H790V470.109H10V10Z"
        fill="white"
        stroke="white"
        strokeWidth="20"
      />
    </mask>
    <g mask="url(#mask0_16_29)">
      <path
        d="M423.375 147.135L423.377 147.137C443.066 167.128 463.341 187.643 490.645 203.37C517.718 218.964 552.121 230.055 600 230.055C651.642 230.055 692.597 217.167 723.752 192.237C745.528 174.813 763.021 151.101 776.006 120.731C764.266 130.791 751.918 138.658 738.94 144.222C713.428 155.158 686.175 156.885 657.574 149.733C624.429 141.452 600.952 117.617 577.656 93.9664L576.625 92.9192L576.623 92.918C556.934 72.9264 536.659 52.4117 509.355 36.6846C482.282 21.0905 447.879 10 400 10C348.358 10 307.403 22.8873 276.248 47.8171C254.472 65.2416 236.979 88.9535 223.994 119.324C235.734 109.264 248.082 101.396 261.06 95.8327C286.572 84.8967 313.824 83.1696 342.424 90.3209L423.375 147.135ZM423.375 147.135L422.344 146.088M423.375 147.135L422.344 146.088M422.344 146.088C399.048 122.437 375.571 98.6022 342.426 90.3214L422.344 146.088ZM576.006 360.785C563.021 391.156 545.528 414.868 523.752 432.292C492.597 457.222 451.642 470.109 400 470.109C352.121 470.109 317.718 459.019 290.645 443.424C263.341 427.697 243.066 407.183 223.377 387.191L223.375 387.19L222.386 386.185C199.072 362.517 175.589 338.677 142.428 330.377L142.426 330.376C113.825 323.224 86.5722 324.951 61.0601 335.887C48.0816 341.451 35.7343 349.318 23.9935 359.378C36.9788 329.008 54.4722 305.296 76.2478 287.872C107.403 262.942 148.358 250.055 200 250.055C247.879 250.055 282.282 261.145 309.355 276.739C336.659 292.466 356.934 312.981 376.623 332.973L376.625 332.974L377.656 334.021C400.952 357.672 424.429 381.507 457.574 389.788C486.175 396.94 513.428 395.213 538.94 384.276C551.918 378.713 564.266 370.845 576.006 360.785Z"
        className="fill-main m700:fill-black"
        stroke="black"
        strokeWidth="20"
      />
    </g>
  </svg>
)
