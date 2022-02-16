import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import PageHeader from '../PageHeader';

const Root = () => {
  const [title, setTitle] = useState();

  return (
    <div className="min-h-full">
      <Navigation />

      <PageHeader title={title} />

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Outlet context={[title, setTitle]} />
        </div>
      </main>
    </div>
  )
}

export default Root
