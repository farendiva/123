export default async function Alur() {
  return (
    <main className="w-full flex flex-col justify-center items-center bg-white mx-auto rounded-xl h-screen p-4">
      <img
        src="/icons/fulusme.svg"
        alt="Fulusme Logo"
        width={150}
        height={150}
        className=" animate-bounce"
      />
      <h1 className="text-4xl font-bold mb-4">ALUR PAGE</h1>
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-2">
          <div className="h-8 w-8 bg-emerald-light rounded-full mr-2 animate-blink"></div>
          <span className="text-xl">Page Under Construction</span>
        </div>
        <div className="text-center mt-2 text-black">
          We are working hard to bring you the best experience. Stay tuned!
        </div>
      </div>
    </main>
  );
}
