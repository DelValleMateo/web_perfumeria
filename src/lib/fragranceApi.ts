export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: "HOMBRE" | "MUJER" | "UNISEX" | "FLORAL" | "AMADERADO" | "FRESCO" | "ORIENTAL" | string;
  brand?: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "midnight-bloom",
    title: "Midnight Bloom",
    description: "Una mezcla profundamente misteriosa y embriagadora. El rico y ahumado oud se envuelve alrededor de un corazón de rosa de terciopelo, descansando sobre una base cálida y persistente de ámbar y vainilla oscura.",
    price: 185,
    imageUrl: "/curated_1.png",
    category: "MUJER",
    brand: "Alexis",
    notes: {
      top: ["Bergamota", "Pimienta Negra", "Azafrán"],
      heart: ["Rosa de Terciopelo", "Jazmín", "Incienso"],
      base: ["Oud", "Vainilla Oscura", "Ámbar"]
    }
  },
  {
    id: "vetiver-root",
    title: "Vetiver Root",
    description: "Raíz de Vetiver Haitiano, Madera de Cedro, Humo. Una fragancia amaderada e intensa diseñada para el hombre moderno.",
    price: 210,
    imageUrl: "/curated_2.png",
    category: "HOMBRE",
    brand: "Alexis",
    notes: {
      top: ["Limón", "Hojas Verdes"],
      heart: ["Cedro", "Pimienta"],
      base: ["Vetiver", "Humo", "Almizcle"]
    }
  },
  {
    id: "coastal-rain",
    title: "Coastal Rain",
    description: "Bergamota, Sal Marina, Musgo Blanco. Una fragancia fresca y limpia para cualquier ocasión.",
    price: 175,
    imageUrl: "/curated_3.png",
    category: "UNISEX",
    brand: "Alexis",
    notes: {
      top: ["Bergamota", "Sal Marina"],
      heart: ["Lirio de Agua", "Ozono"],
      base: ["Musgo Blanco", "Madera Clara"]
    }
  },
  {
    id: "noir-absolu",
    title: "Noir Absolu",
    description: "Una sinfonía audaz de cuero oscuro y maderas exóticas, suavizada por sutiles toques de cardamomo.",
    price: 240,
    imageUrl: "/hombre.jpeg",
    category: "HOMBRE",
    brand: "Alexis",
    notes: {
      top: ["Cardamomo", "Pimienta Rosa"],
      heart: ["Cuero", "Abedul"],
      base: ["Madera de Gaiac", "Ámbar Negro"]
    }
  },
  {
    id: "rose-elegance",
    title: "Rose Élégance",
    description: "Un jardín floreciente capturado en un frasco. Rosas frescas de Damasco entrelazadas con peonía y un toque de lichi.",
    price: 195,
    imageUrl: "/mujer.jpeg",
    category: "MUJER",
    brand: "Alexis",
    notes: {
      top: ["Lichi", "Pera"],
      heart: ["Rosa de Damasco", "Peonía"],
      base: ["Almizcle Blanco", "Cedro"]
    }
  },
  {
    id: "botanical-infusion",
    title: "Botanical Infusion",
    description: "Hierbas aromáticas y maderas ligeras se unen en una esencia limpia y revitalizante para todos.",
    price: 160,
    imageUrl: "/unisex.jpeg",
    category: "UNISEX",
    brand: "Alexis",
    notes: {
      top: ["Menta Silvestre", "Cítricos"],
      heart: ["Romero", "Hojas de Té"],
      base: ["Musgo", "Maderas Claras"]
    }
  },
  {
    id: "amber-nights",
    title: "Amber Nights",
    description: "Rico, cálido y seductor. Notas especiadas y ámbar resplandeciente para veladas inolvidables.",
    price: 220,
    imageUrl: "/curated_1.png",
    category: "UNISEX",
    brand: "Alexis",
    notes: {
      top: ["Canela", "Nuez Moscada"],
      heart: ["Incienso", "Mirra"],
      base: ["Ámbar Dorado", "Sándalo"]
    }
  },
  {
    id: "ocean-breeze",
    title: "Ocean Breeze",
    description: "La frescura del mar y la brisa marina. Tonos acuáticos con un final cítrico vibrante.",
    price: 150,
    imageUrl: "/curated_3.png",
    category: "HOMBRE",
    brand: "Alexis",
    notes: {
      top: ["Mandarina", "Pomelo"],
      heart: ["Notas Marinas", "Albahaca"],
      base: ["Pachulí", "Ámbar Gris"]
    }
  },
  {
    id: "silk-blossom",
    title: "Silk Blossom",
    description: "Flores suaves de seda, magnolia y un toque aterciopelado de durazno blanco.",
    price: 180,
    imageUrl: "/mujer.jpeg",
    category: "MUJER",
    brand: "Alexis",
    notes: {
      top: ["Durazno Blanco", "Azahar"],
      heart: ["Magnolia", "Flor de Seda"],
      base: ["Vainilla", "Almizcle Suave"]
    }
  },
  {
    id: "oud-majesty",
    title: "Oud Majesty",
    description: "Oud puro y majestuoso de Oriente Medio, equilibrado con maderas preciosas.",
    price: 290,
    imageUrl: "/curated_2.png",
    category: "HOMBRE",
    brand: "Alexis",
    notes: {
      top: ["Azafrán", "Clavo"],
      heart: ["Oud", "Madera de Agar"],
      base: ["Cuero", "Pachulí Oscuro"]
    }
  }
];

export async function getFragrances(query?: string): Promise<Product[]> {
  if (query) {
    const q = query.toLowerCase();
    return MOCK_PRODUCTS.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q) ||
      p.brand?.toLowerCase().includes(q)
    );
  }
  return MOCK_PRODUCTS;
}

export async function getFragranceById(id: string): Promise<Product> {
  const match = MOCK_PRODUCTS.find(p => p.id === id);
  if (!match) {
    throw new Error(`Fragrance with ID ${id} not found`);
  }
  return match;
}
