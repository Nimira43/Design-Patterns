import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-[#666] px-2 bg-[#fff]'>
        <Image src='/search-3.png' alt='' width={14} height={14} />
        <input type='text' placeholder='Search...' className='w-200px p-2 bg-transparent outline-none'/>
      </div>
      <div className='flex items-center gap-6 justify-end w-full'>
        <div className='bg-[#fff] rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <Image src='/message.png' alt='' width={20} height={20} />
        </div>
        <div className='bg-[#fff] rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
          <Image src='/announcement.png' alt='' width={20} height={20} />
          <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-[#87ceeb] text-[#fff] rounded-full text-xs'>1</div>
        </div>
        <div className='flex flex-col'>
          <span className='text-xs leading-3 font-medium'>Ed Walker</span>
          <span className='text-[10px] text-[#333] text-right'>Admin</span>
        </div>
        <Image src='/user.png' alt='' width={36} height={36} className='rounded-full bg-[#fff]' /> {/* added p-1 */}
      </div>
    </div>
  )
}

export default Navbar
