// import Alert from './alert'
// import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-[#F9F9F9] text-stone-800 font-['Open_Sauce_Two']">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Layout