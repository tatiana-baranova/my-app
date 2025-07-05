import { headers } from 'next/headers';
import StatusLabel, { Status } from './components/status-label/StatusLabel';

export default async function Home() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent');
  console.log('User-Agent:', userAgent);
  return (
    <div>
      <main>
        <h1 className="text-xl">Home Page {new Date().toTimeString()} </h1>
        <StatusLabel status={Status.Active}>Active</StatusLabel>
        <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
        <StatusLabel status={Status.Pending}>Pending</StatusLabel>
        <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      </main>
      {/* <footer>
        <h2>Footer</h2>
      </footer> */}
    </div>
  );
}
