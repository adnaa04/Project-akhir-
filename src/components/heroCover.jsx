export default function HeroCover() {
  return (
    <div
      className="bg-cover items-center text-white flex flex-col gap-2 justify-center w-full bg-center h-screen"
      style={{
        backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/ID-id-20241223-TRIFECTA-perspective_9b033a84-6711-4ae0-8ad7-3dd90aaab8e8_large.jpg')",
      }}
    >
      <p className="font-bold text-5xl">LIST FILM FAVORIT</p>
      <p className="font-semibold text-2xl">by adna</p>
    </div>
  );
}
