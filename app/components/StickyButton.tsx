const StickyButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=681299900150"
      className="text-xs lg:text-base floating-button flex justify-center items-center gap-2 font-bold rounded-xl py-2 px-2 lg:py-3 lg:px-4"
    >
      <img
        src="/icons/whatsapp.svg"
        alt="Whatsapp Icon"
        className="w-4 lg:w-6"
      />
      Butuh Bantuan?
    </a>
  );
};

export default StickyButton;
