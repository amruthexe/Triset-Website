import { ContactSection } from '@/components/layout/sections/contact'
import { FooterSection } from '@/components/layout/sections/footer'
import { GlowingEffectDemoSecond } from '@/components/layout/sections/GlowingEffectDemoSecond'
import { StepsSection } from '@/components/layout/sections/StepsSection'
import { WhyTrisetSolutionsSection } from '@/components/layout/sections/WhyTrisetSolutionsSection'
import React from 'react'

const page = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Content with padding added for left and right spacing */}

     <div className='text-center pt-12 pb-4 sm:pt-24 '>
     <h2 className="text-lg text-primary tracking-wider mb-2">Our Services</h2>
<h2 className="text-3xl md:text-4xl font-bold mb-4">
Outsourcing all your website development 🚀
</h2>
     </div>
      <GlowingEffectDemoSecond />
      <StepsSection />
      <WhyTrisetSolutionsSection/>
      <ContactSection/>
      <FooterSection/>
    </div>
  )
}

export default page
