import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const Index = ({ shows }) => (
  <div>
    <img
      src="/next-on-netlify.png" alt="NextJS on Netlify Banner"
      style={{ maxWidth: '100%' }}/>
    <h1>NextJS on Netlify</h1>
    <p>
      This is a demo of a NextJS application with Server-Side Rendering (SSR).
      <br/>
      It is hosted on Netlify.
      <br/>
      Server-side rendering is handled by Netlify Functions.
      <br/>
      Minimal configuration is required.<br/>
      Everything is handled by the
      {' '}
      <a href="https://www.npmjs.com/package/next-on-netlify">
        next-on-netlify
      </a>
      {' '}
      npm package.
    </p>

    <hr/>

    <p>
      This page is server-side rendered.
      <br/>
      It fetches a random list of five TV shows
      from the TVmaze REST API.
      <br/>
      Refresh this page to see it change.
    </p>

    <h3>TV Shows</h3>
    <ul>
      {shows.map(({ id, name }) => (
        <li key={id}>
          <Link href="/shows/[id]" as={`/shows/${id}`}>
            <a>#{id}: {name}</a>
          </Link>
        </li>
      ))}
    </ul>

    <p>
      Click on a show to check out a server-side rendered page with dynamic
      routing (/shows/:id).
      <br/>
      <br/>
      Or check out one of these other pages:
    </p>

    <ul>
      <li>
        <Link href="/static">
          <a>Static NextJS page: /static</a>
        </Link>
      </li>
      <li>
        <Link href="/static/[id]" as="/static/123456789">
          <a>Static NextJS page with dynamic routing: /static/:id</a>
        </Link>
      </li>
    </ul>

    <p>
      Or check out the
      {' '}
      <a href="https://github.com/FinnWoelm/next-on-netlify-demo">
        source code on GitHub
      </a>.
    </p>
  </div>
)

Index.getInitialProps = async function() {
  // Set a random page between 1 and 100
  const randomPage  = Math.floor(Math.random()*100) + 1

  // Get the data
  const res = await fetch(`https://api.tvmaze.com/shows?page=${randomPage}`);
  const data = await res.json();

  return { shows: data.slice(0, 5) }
}

export default Index
