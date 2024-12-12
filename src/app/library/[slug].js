import { useRouter } from 'next/router';

export default function TechnologyPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Placeholder content for each technology
  return (
    <div className="p-8">
      <h1 className="text-4xl font-heading">{slug.toUpperCase()}</h1>
      <p className="mt-4 text-lg">
        Content for {slug} will be available soon. Stay tuned!
      </p>
    </div>
  );
}
