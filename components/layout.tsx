import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen text-stone-800 font-openSauce">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
