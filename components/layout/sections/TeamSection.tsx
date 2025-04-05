'use client';

import Image from 'next/image';

const teamMembers = [
  {
    name: 'Ramu Tiruveedula',
    role: 'Photogrammetry',
    experience: 'Over 15 years of Experience',
    profileImage: '/ramu.webp',
    backgroundImage: '/photogrammetry.gif',
    borderColor: 'border-yellow-500',
  },
  {
    name: 'Bhanu Chennamsetty',
    role: 'Data Entry',
    experience: 'Over 6 years of Experience',
    profileImage: '/dataentry.webp',
    backgroundImage: '/dataentry.gif',
    borderColor: 'border-purple-500',
  },
  {
    name: 'Sesi Kumar Peddipeta',
    role: 'Web Developer',
    experience: 'Over 5 years of Experience',
    profileImage: '/sesi1.webp',
    backgroundImage: '/webdevelopment.gif',
    borderColor: 'border-yellow-400',
  },
  {
    name: 'Shaik.muhammad Ali',
    role: 'App Developer',
    experience: 'Over 3 years of Experience',
    profileImage: '/ali1.webp',
    backgroundImage: '/app.gif',
    borderColor: 'border-red-600',
  },
  {
    name: 'Sowjanya Yenuganti',
    role: 'Digital Marketing',
    experience: 'Over 3 years of Experience',
    profileImage: '/digital_mark.webp',
    backgroundImage: '/digital1.webp',
    borderColor: 'border-green-500',
  },
  {
    name: 'Jayanth Mukkala',
    role: 'E-Commerce',
    experience: 'Over 3 years of Experience',
    profileImage: '/jayanth.webp',
    backgroundImage: '/e-commerce.gif',
    borderColor: 'border-white',
  },
];

export default function TeamSection() {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-black via-[#1a0000] to-black">
      <div className="text-center mb-10">
        <h3 className="text-gray-400 tracking-widest font-medium uppercase">Our Team</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Meet Our <span className="text-red-500">Expert Team</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="rounded-lg bg-white dark:bg-white overflow-hidden border border-gray-200 dark:border-neutral-800 relative shadow-xl hover:shadow-red-500/60 transition-shadow duration-300"
          >
            {/* Top image background */}
            <div className="relative h-36 w-full overflow-hidden">
              <Image
                src={member.backgroundImage}
                alt={member.role}
                fill
                style={{ objectFit: 'cover' }}
                className="w-full h-full"
              />
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white text-sm px-4 py-1 rounded font-medium shadow-md z-20">
                {member.role}
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center -mt-16 z-10 relative">
              <div className={`w-32 h-32 md:w-36 md:h-36 rounded-full border-4 ${member.borderColor} overflow-hidden bg-white shadow-md`}>
                <Image
                  src={member.profileImage}
                  alt={member.name}
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name & Experience */}
            <div className="bg-red-600 text-white text-center py-4 mt-4 rounded-b-lg">
              <h4 className="font-semibold text-lg">{member.name}</h4>
              <p className="text-sm">{member.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
