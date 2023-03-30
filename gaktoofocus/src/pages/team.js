import Head from "next/head";
import Link from "next/link";
import ToDoHeader from "../../components/to-do-list/ToDoHeader";
export default function Teams() {
  return (
    <>
      <ToDoHeader />
      <Head>
        <title>Teams - GaktooFocus</title>
        <meta name="description" content="Teams page for GaktooFocus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto mt-20 my-12 max-w-3xl px-4 md:px-0">
        <h1 className="font-bold text-4xl mb-6 text-center">
          We would do anything to make us ACTUALLY do stuff.
        </h1>
        <p className="text-lg mb-4">
          The motivation behind the GaktooFocus project is to tackle the human
          nature of laziness and the tendency to make excuses or pretend to be
          productive. We believe that to bring about lasting change, it's
          crucial to surround ourselves with like-minded individuals who are
          focused on building habits, rather than relying on temporary
          motivation.
        </p>
        <p className="text-lg mb-4">
          Our approach is based on the golden rule of habituation, which helps
          us train our brain to forget the pain associated with tasks by
          embedding them into our unconscious mind. In doing so, we can overcome
          resistance and truly commit to our goals.
        </p>
        <div className="my-8 text-center">
          <Link href="https://discord.com/invite/your-invite-link"
              className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join our Discord community
            
          </Link>
        </div>
        <div className="my-8 text-center">
          <Link href="https://docs.google.com/forms/your-feedback-form-link"
              className="inline-block bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Share your feedback
            
          </Link>
        </div>
        <div className="my-8 text-center">
          <Link href="https://docs.google.com/forms/your-application-form-link"
              className="inline-block bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply to join our team as a programmer, community manager, or more
            
          </Link>
        </div>
      </main>
    </>
  );
}
