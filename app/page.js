import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-6xl font-bold text-primary'>GPT4Me </h1>
          <p className='py-6 text-lg leading-loose'>
            Votre compagnon IA, il pimente vos conversations, la création de contenu et bien plus encore!
            Pas de sauvegarde en base de données.
            Pas de context de conversation donc bien préciser sa question.
          </p>
          <Link href='/chat' className='btn btn-secondary'>
            Entrer
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;