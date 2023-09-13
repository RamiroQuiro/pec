export default function LoadingCss() {
    return (
      <div className="w-full h-full z-50 flex items-center justify-center mx-auto absolute top-0 left-0 bg-gradient-to-tr to-primary-100/40 from-primary-200/40 backdrop-blur-sm">
      <div className="lds-ripple  text-xl font-medium m-auto ">
        <div></div>
        <div></div>
      </div>
    </div>
    )
  }