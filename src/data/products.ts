
export interface Product {
    id: number;
    nome: string;
    categoria: string;
    descricao: string;
    imagem: string;
}

export const produtos: Product[] = [
    { id: 1, nome: "Composto Antiox", categoria: "estetica", descricao: "Rejuvenescimento e brilho da pele.", imagem: "/assets/imagens/MascFemPote.png" },
    { id: 2, nome: "Whey Isolado Roval", categoria: "fitness", descricao: "Ganho de massa magra com alta pureza.", imagem: "/assets/imagens/MascMasFit.png" },
    { id: 3, nome: "Pré-Treino Explosão", categoria: "fitness", descricao: "Energia e foco para seus treinos.", imagem: "/assets/imagens/MascFemFit.png" },
    { id: 4, nome: "Melatonina Gotas", categoria: "sono", descricao: "Para noites de sono profundo e reparador.", imagem: "/assets/imagens/MascFemPote.png" },
    { id: 5, nome: "Polivitamínico", categoria: "nutricao", descricao: "Imunidade e disposição para o dia a dia.", imagem: "/assets/imagens/MascMasFit.png" }
];

// Criamos um novo tipo que herda tudo de Product, mas adiciona a quantidade
export interface CartItem extends Product {
    quantidade: number;
}