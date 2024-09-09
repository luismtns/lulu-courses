import { Link, routes } from "@redwoodjs/router"

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return <>
  <header>
    <h1><Link to={routes.home()}>Lulu Courses</Link></h1>
    <nav>
      <ul>
        <li>
          <Link to={routes.home()}>Home</Link>
        </li>
        <li>
        <Link to={routes.about()}>About</Link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    {children}
  </main>
  </>
}

export default BlogLayout
