declare module "sanity" {
  export type Image = {
    _type?: "image";
    asset?: {
      _ref?: string;
      _type?: "reference";
    };
    crop?: {
      top?: number;
      bottom?: number;
      left?: number;
      right?: number;
    };
    hotspot?: {
      x?: number;
      y?: number;
      height?: number;
      width?: number;
    };
  };
}
