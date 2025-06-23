import ActiveLabel from './components/active-label/ActiveLabel';
import NotActiveLabel from './components/not-active/NotActiveLabel';

export default function Home() {
  return (
    <div>
      <main>
        <h1>Home Page</h1>
        <ActiveLabel>Active</ActiveLabel>
        <NotActiveLabel>Not active</NotActiveLabel>
      </main>
      {/* <footer>
        <h2>Footer</h2>
      </footer> */}
    </div>
  );
}
