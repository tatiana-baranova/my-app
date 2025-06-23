import StatusLabel, { Status } from './components/status-label/StatusLabel';

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="text-xl">Home Page</h1>
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
