function TitleTag({ text }: { text: string }) {
  return (
    <div className="w-full flex items-center content-center mb-8 mt-2 gap-x-2">
      <p className="font-semibold text-sm w-max shrink-0">{text}</p>
      <div className="horizantalLine grow"></div>
    </div>
  );
}

export default TitleTag;
