import React from 'react'

function SkillBadge() {
  return (
    <div>
        {/* // Skill Badge */}
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">HTML</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">CSS</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">JavaScript</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">Java</span>
          {/* <br /> */}
          <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">Python</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">React.JS</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">Vue.JS</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">Next.JS</span>
          {/* <br /> */}
          <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">Tailwind CSS</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">Node.JS</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">Figma</span>
          </div>
    </div>
  )
}

export default SkillBadge