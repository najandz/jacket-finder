export type JacketCategory = 'insulated' | 'shell' | 'lightweight';
export type JacketActivity = 'hiking' | 'skiing' | 'climbing' | 'urban' | 'running' | 'mountaineering';
export type JacketWeather = 'rain' | 'snow' | 'wind' | 'mild' | 'cold' | 'extreme-cold';
export type JacketSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
export type JacketColor = 'black' | 'brown' | 'navy' | 'olive' | 'beige' | 'gray';
export type JacketStyle = 'casual' | 'sporty' | 'formal' | 'outdoor' | 'minimalist';
export type JacketMaterial = 'cotton' | 'polyester' | 'nylon' | 'gore-tex' | 'wool' | 'fleece';

export interface Jacket {
  id: string;
  name: string;
  category: JacketCategory;
  activities: JacketActivity[];
  weather: JacketWeather[];
  features: string[];
  sizes: JacketSize[];
  colors: JacketColor[];
  style: JacketStyle;
  material: JacketMaterial;
  price: number;
  imageUrl: string;
  description: string;
}
