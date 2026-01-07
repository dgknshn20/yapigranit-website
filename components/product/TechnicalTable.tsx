import type { TechnicalSpecs } from "@/types/sanity";

export default function TechnicalTable({ specs }: { specs: TechnicalSpecs }) {
  if (!specs) return null;

  return (
    <div className="bg-white/5 border border-white/10 p-6 md:p-8 backdrop-blur-sm">
      <h3 className="text-xl font-serif font-bold text-white mb-6 flex items-center">
        <span className="w-1 h-6 bg-gold mr-3" />
        Teknik Mühendislik Verileri
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        <div className="flex justify-between border-b border-white/10 pb-2">
          <span className="text-gray-400 text-sm">Menşei</span>
          <span className="text-white font-medium">{specs.origin}</span>
        </div>

        <div className="flex justify-between border-b border-white/10 pb-2">
          <span className="text-gray-400 text-sm">Yoğunluk</span>
          <span className="text-white font-medium">{specs.density}</span>
        </div>

        <div className="flex justify-between border-b border-white/10 pb-2">
          <span className="text-gray-400 text-sm">Su Emme Oranı</span>
          <span className="text-white font-medium">
            {specs.waterAbsorption}
          </span>
        </div>

        <div className="flex justify-between border-b border-white/10 pb-2">
          <span className="text-gray-400 text-sm">Eğilme Dayanımı</span>
          <span className="text-white font-medium">{specs.flexuralStrength}</span>
        </div>

        <div className="flex justify-between border-b border-white/10 pb-2">
          <span className="text-gray-400 text-sm">Aşınma Direnci</span>
          <span className="text-white font-medium">
            {specs.abrasionResistance}
          </span>
        </div>
      </div>

      <div className="mt-6 text-[10px] text-gray-500 italic">
        * Verilen değerler ortalama test sonuçlarıdır. Blok bazında değişiklik
        gösterebilir.
      </div>
    </div>
  );
}
