import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-6xl font-bold text-primary'>GPT4Me </h1>
          <p className='py-6 text-lg leading-loose'>
            GPT4Me: Your AI language companion. Powered by OpenAI, it
            enhances your conversations, content creation, and more!
            Pas de sauvegarde en base de données.
            Pas de context de conversation donc bien préciser sa question.
          </p>
          <Link href='/chat' className='btn btn-secondary'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;