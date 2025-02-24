import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

const Avatars = () => {
  const avatars = [
    'Sto Cazzo',
    'Gabriele Corbani',
    'Sta Minchia',
    'Kent Dodds',
  ];

  return (
    <div className='p-2.5 border border-dark-15 inline-block rounded-full bg-dark-10'>
      <AvatarGroup
        max={4}
        spacing='small'
        sx={{ display: 'inline-flex' }}
      >
        {avatars.map((avatar) => (
          <Avatar
            key={avatar}
            {...stringAvatar(avatar)}
            sx={{
              width: 60,
              height: 60,
              border: '2px solid #666666 !important',
            }}
          />
        ))}
      </AvatarGroup>
    </div>
  );
};

export default function Hero() {
  return (
    <section className='w-full'>
      <div className='container mx-auto p-6'>
        <div className='flex items-center -tracking-3 leading-normal'>
          <div className='w-2/3 space-y-8'>
            <h3 className='font-kumbh text-3xl text-dark-40 font-medium	'>
              Your Journey to Tomorrow Begins Here
            </h3>
            <div className='space-y-5'>
              <h1 className='font-kumbh text-7xl text-white font-medium '>
                Explore the Frontiers of Artificial Intelligence
              </h1>
              <h2 className='font-inter text-lg text-grey-50 font-normal'>
                Welcome to the epicenter of AI innovation. FutureTech AI News is
                your passport to a world where machines think, learn, and
                reshape the future. Join us on this visionary expedition into
                the heart of AI.{' '}
              </h2>
            </div>
          </div>
          <div className='w-1/3 relative overflow-hidden '>
            <Image
              className='absolute rotate-45 -top-2 -left-20 z-0'
              src='/abstract-design.svg'
              alt='Abstract Design'
              width={895}
              height={605}
            />
            <div className='z-10 relative space-y-7 mt-64'>
              <Avatars />
              <div className='space-y-3.5'>
                <h2 className='font-inter text-2xl text-white font-medium'>
                  Explore 1000+ resources
                </h2>
                <h3 className='font-inter text-lg text-grey-60 font-normal '>
                  Over 1,000 articles on emerging tech trends and breakthroughs
                </h3>
              </div>

              <Link
                href='/resources'
                className='bg-dark-8 border border-dark-15 py-[18px] px-6 inline-block rounded-xl text-grey-60'
              >
                Explore Resources
                <ArrowUpRightIcon className='h-6 inline-block text-yellow' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
