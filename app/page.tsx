import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redirect to the home route since this is the root page
  redirect('/home');
}
