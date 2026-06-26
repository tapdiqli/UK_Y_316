export default function BrandListTableHeader() {
  return (
    <div className="hidden lg:grid grid-cols-[200px_1fr_160px_200px] mb-3 border-b border-[#12122b] pb-3">
      <div className="font-montserrat font-bold text-white text-sm tracking-wide pl-2">Casino</div>
      <div className="font-montserrat font-bold text-white text-sm tracking-wide">Oferta</div>
      <div className="font-montserrat font-bold text-white text-sm tracking-wide text-center">Classificação</div>
      <div className="font-montserrat font-bold text-white text-sm tracking-wide text-center">Visitar Site</div>
    </div>
  );
}
