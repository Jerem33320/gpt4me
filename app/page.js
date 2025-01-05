import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='hero min-h-screen'>
      <div className='hero-content text-center'>
        <div className='max-w-l'>
          <h1 className='text-6xl font-bold text-primary'>GPT4Me </h1>
          <p className='py-6 text-lg leading-loose'>
            Votre compagnon IA: 🤖 <br /> Il 🌶 &nbsp;vos conversations, <br />la création de contenu et bien plus encore! <br />
            Pas de sauvegarde en base de données.<br />
            Pas de context de conversation donc bien il faut bien étayer sa question.
          </p>
          <Link href='/chat' className='btn btn-secondary text-white'>
            Entrer
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;