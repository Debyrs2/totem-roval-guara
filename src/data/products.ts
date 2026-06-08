export interface Product {
    id: number;
    nome: string;
    categoria: string;
    descricao: string;
    imagem: string;
    preco: number;
}

export interface CartItem extends Product {
    quantidade: number;
}

export const produtos: Product[] = [
    {
        "id": 1,
        "nome": "Água Micelar Roval 200ml",
        "categoria": "Higienização",
        "descricao": "Água micelar dermatológica de altíssima pureza e eficiência facial. Serve para demaquilar, purificar e tonificar o rosto em um único passo rápido, sem precisar de enxágue. Suas micelas de alta tecnologia capturam as impurezas e a poluicao como um íma, sem irritar o rosto. É um item essencial para uma rotina de skincare prática, deixando a cútis limpa, equilibrada e revigorada.",
        "imagem": "/assets/produtos/Agua-Micelar-Roval-200ml.webp",
        "preco": 37.9
    },
    {
        "id": 2,
        "nome": "Colágeno Active Gummies 240g",
        "categoria": "Sono & Bem Estar",
        "descricao": "Suplemento de colágeno hidrolisado em gomas sabor frutas vermelhas. Serve para promover a saúde da pele, fortalecer cabelos e unhas, ajudando na firmeza e na elasticidade. Com tecnologia alema e peptídeos bioativos, a sua fórmula garante uma absorcao mais rápida e eficiente pelo organismo. Além de ser muito prático para consumir diariamente, o pote traz 30 gomas totalmente livres de acúcares, glúten e lactose.",
        "imagem": "/assets/produtos/Colageno-Active-Gummies-240g.webp",
        "preco": 154.0
    },
    {
        "id": 3,
        "nome": "Condicionador Antiqueda 250mL",
        "categoria": "Produtos Capilares",
        "descricao": "Condicionador Antiqueda da Roval, formulado com uma rica combinacao de Niacinamida e Pantenol. Serve para complementar o tratamento contra a queda, atuando na revitalizacao profunda dos fios desde a raiz até as pontas. A presenca desses ativos garante uma hidratacao intensa, devolvendo a maciez, a força e o brilho natural para o seu cabelo. Com fórmula dermatologicamente testada, a embalagem de 250ml oferece um rendimento excelente para o seu cuidado capilar diário.",
        "imagem": "/assets/produtos/Condicionador-Antiqueda-250mL.webp",
        "preco": 67.9
    },
    {
        "id": 4,
        "nome": "Creatina Gummies Frutas Vermelhas 240g",
        "categoria": "Nutrição Esportiva",
        "descricao": "Suplemento de creatina monohidratada em formato de gomas mastigáveis sabor Frutas Vermelhas. Serve para aumentar a força, a resistência e o desempenho físico geral durante treinos de alta intensidade. A creatina também auxilia na recuperacao muscular e contribui para o ganho de massa magra após os exercícios. Essa apresentacao em goma oferece praticidade para o consumo diário, sendo livre de acúcar, glúten e lactose.",
        "imagem": "/assets/produtos/Creatina-Gummies-Frutas-Vermelhas-240g.webp",
        "preco": 149.0
    },
    {
        "id": 5,
        "nome": "Creatina Gummies Uva 240g",
        "categoria": "Nutrição Esportiva",
        "descricao": "Suplemento de creatina monohidratada em formato de gomas mastigáveis sabor uva. Serve para aumentar a força, a resistência e o desempenho físico geral durante treinos de alta intensidade. A creatina também auxilia na recuperacao muscular e contribui para o ganho de massa magra após os exercícios. Essa apresentacao em goma oferece praticidade para o consumo diário, sendo livre de acúcar, glúten e lactose.",
        "imagem": "/assets/produtos/Creatina-Gummies-Uva-240g.png",
        "preco": 149.0
    },
    {
        "id": 6,
        "nome": "Creatina Monohidratada 300g",
        "categoria": "Nutrição Esportiva",
        "descricao": "Suplemento alimentar de creatina monohidratada em pó, 100% pura e com sabor neutro. Serve para aumentar a força muscular, a energia e o desempenho geral durante atividades físicas intensas. O uso contínuo ajuda na hipertrofia, facilitando o ganho de massa magra e acelerando a recuperacao dos músculos. Sua versao em pó com zero calorias permite uma mistura fácil na água ou em shakes, tornando o consumo diário bem prático.",
        "imagem": "/assets/produtos/Creatina-Monohidratada-300g.webp",
        "preco": 129.9
    },
    {
        "id": 7,
        "nome": "Creme para Mãos 60g Roval",
        "categoria": "Cosméticos",
        "descricao": "Creme hidratante formulado especificamente para o cuidado premium das mãos. Serve para nutrir profundamente a pele, devolvendo a maciez e prevenindo o ressecamento severo. Sua textura de alta qualidade garante uma absorcao rápida, sem deixar aquela sensacao pegajosa. É o produto ideal para manter as mãos sempre protegidas e com um toque aveludado o dia todo.",
        "imagem": "/assets/produtos/Creme-para-Maos-60g-Roval.webp",
        "preco": 27.9
    },
    {
        "id": 8,
        "nome": "Creme para Pés 60g Roval",
        "categoria": "Cosméticos",
        "descricao": "Creme de hidratacao intensiva voltado para a recuperacao da pele dos pés. Serve para combater rachaduras e áreas ásperas, promovendo uma renovacao celular profunda e eficaz. Com ingredientes de excelência, ele proporciona alívio para o cansaco e protecao de longa duracao. A aplicacao contínua garante pés visivelmente mais saudáveis, lisos e com uma textura impecável.",
        "imagem": "/assets/produtos/Creme-para-Pes-60g-Roval.webp",
        "preco": 27.9
    },
    {
        "id": 9,
        "nome": "Home Spray Renaissance Figo Negro Roval",
        "categoria": "Higienização",
        "descricao": "Aromatizador de ambientes sofisticado com a fragrância exclusiva de figo negro. Serve para perfumar e trazer uma atmosfera de aconchego e elegância para os cômodos da sua casa. A qualidade da sua essência premium garante uma fixacao prolongada e uma difusao muito agradável no ar. É a escolha perfeita para quem deseja um toque de requinte olfativo para o conforto do dia a dia.",
        "imagem": "/assets/produtos/home-spray-renaissance.webp",
        "preco": 69.9
    },
    {
        "id": 10,
        "nome": "Magnésio Dimalato 433mg 120 Caps ROVAL",
        "categoria": "Sono & Bem Estar",
        "descricao": "Suplemento em cápsulas de alta absorcao com o selo AlbionMinerals. Ele serve para otimizar o funcionamento muscular e auxiliar ativamente na producao de energia do metabolismo. A sua fórmula também atua como um suporte estrutural importante, contribuindo para a formacao de ossos e dentes. O frasco traz 120 cápsulas de 530mg, rendendo 40 dias completos de uso seguindo a recomendacao de três ao dia.",
        "imagem": "/assets/produtos/Magnesio-Dimalato-433mg-120-Caps-ROVAL.webp",
        "preco": 139.9
    },
    {
        "id": 11,
        "nome": "Neurocaps 60 Cápsulas",
        "categoria": "Sono & Bem Estar",
        "descricao": "Suplemento alimentar em cápsulas voltado para o desempenho cognitivo. Serve principalmente para aumentar o estado de alerta e melhorar a sua concentracao no dia a dia. A sua fórmula também atua como um suporte importante para auxiliar no funcionamento neuromuscular. O frasco contém 60 cápsulas de 700mg, rendendo um mês completo de uso com a dose de duas ao dia.",
        "imagem": "/assets/produtos/Neurocaps-60-Capsulas.webp",
        "preco": 89.9
    },
    {
        "id": 12,
        "nome": "Ômega 3 1g (180 EPA 120 DHA) 120 Caps",
        "categoria": "Sono & Bem Estar",
        "descricao": "Suplemento alimentar de óleo de peixe em cápsulas. Serve para promover a saúde cardiovascular e apoiar o bom funcionamento cognitivo e cerebral. A fórmula com o selo MEG-3 garante alta pureza, sendo totalmente livre de metais pesados e de fácil absorcao. O frasco contém 120 cápsulas de 1,4g, rendendo 40 dias completos de uso com a recomendacao de três ao dia.",
        "imagem": "/assets/produtos/Omega-3-1g-(180-EPA-120-DHA)-120-Caps-Roval.webp",
        "preco": 133.9
    },
    {
        "id": 13,
        "nome": "Pré Treino Max Power 300g",
        "categoria": "Nutrição Esportiva",
        "descricao": "Suplemento pré-treino em pó da linha Max Power, no sabor frutas vermelhas. Serve para aumentar rapidamente a sua energia, o foco e a disposicao antes dos exercícios. Com cafeína, taurina e beta-alanina na fórmula, ele atua diminuindo a sensacao de fadiga muscular. É ideal para elevar o seu rendimento e garantir máxima intensidade nos seus treinos de força.",
        "imagem": "/assets/produtos/Pre-Treino-Max-Power-300g.webp",
        "preco": 114.9
    },
    {
        "id": 14,
        "nome": "Protetor Facial Roval Beige FPS 50 60ml",
        "categoria": "Cosméticos",
        "descricao": "Fotoprotetor Facial Color Base da Roval com FPS 50 na tonalidade bege. Serve para garantir alta protecao contra os raios UVA e UVB enquanto atua como uma maquiagem de alta cobertura. Sua fórmula com ácido hialurônico uniformiza o tom do rosto, combate radicais livres e proporciona um efeito anti-brilho. É a opcao perfeita para a sua rotina diária de cuidados com a pele, unindo protecao solar e beleza em um só passo.",
        "imagem": "/assets/produtos/Protetor-Facial-Roval-Beige-FPS-50-60ml.webp",
        "preco": 83.9
    },
    {
        "id": 15,
        "nome": "Protetor Facial Roval Peach FPS 50 60ml",
        "categoria": "Cosméticos",
        "descricao": "Protetor solar facial com FPS 50 que traz um leve toque de cor na tonalidade Peach. Serve para blindar o rosto contra os raios solares enquanto uniformiza sutilmente o tom da pele. A qualidade da fórmula garante uma alta protecao com um acabamento elegante e textura super confortável. Além de prevenir o envelhecimento, ele disfarca pequenas imperfeicões deixando um aspecto muito natural.",
        "imagem": "/assets/produtos/Protetor-Facial-Roval-Peach-FPS-50-60ml.webp",
        "preco": 83.9
    },
    {
        "id": 16,
        "nome": "Sabonete Facial Pele Mista a Oleosa 200ml",
        "categoria": "Higienização",
        "descricao": "Sabonete facial de alta performance formulado para equilibrar peles mistas e oleosas. Serve para realizar uma limpeza profunda, desobstruindo os poros e removendo o excesso de brilho diário. Sua fórmula de qualidade superior purifica o rosto sem causar aquele indesejado efeito rebote de ressecamento. É a escolha ideal para manter a cútis controlada, fresca e com um aspecto mate ao longo de todo o dia.",
        "imagem": "/assets/produtos/Sabonete-Facial-Pele-Mista-a-Oleosa-200ml-Roval.webp",
        "preco": 37.9
    },
    {
        "id": 17,
        "nome": "Sabonete Facial Pele Normal a Seca 200ml",
        "categoria": "Higienização",
        "descricao": "Sabonete facial desenvolvido com ativos ultra-hidratantes para peles normais a secas. Serve para higienizar o rosto de forma extremamente gentil, preservando a barreira protetora natural. A excelência da sua composicao garante uma lavagem suave que devolve o vico e a maciez cutânea imediata. É indispensável para quem busca uma pele limpa e profundamente nutrida, sem nenhuma sensacao de repuxamento.",
        "imagem": "/assets/produtos/Sabonete-Facial-Pele-Normal-a-Seca-200ml-Roval.webp",
        "preco": 37.9
    },
    {
        "id": 18,
        "nome": "Sabonete Íntimo Aroeira 210ml",
        "categoria": "Higienização",
        "descricao": "Sabonete íntimo formulado com extrato natural de aroeira para um cuidado diário superior. Serve para higienizar com seguranca, mantendo o pH natural equilibrado e prevenindo possíveis desconfortos. A excelência do produto se destaca pela sua acao suave e protetora, entregando uma sensacao prolongada de frescor. Sua composicao ginecológica de alta qualidade proporciona uma limpeza delicada que respeita o seu corpo.",
        "imagem": "/assets/produtos/Sabonete-Intimo-Aroeira-210ml.png",
        "preco": 32.9
    },
    {
        "id": 19,
        "nome": "Sabonete Líquido Renaissance Figo Negro",
        "categoria": "Higienização",
        "descricao": "Sabonete líquido luxuoso que acompanha a mesma linha aromática de figo negro. Serve para limpar a pele de forma extremamente delicada, sem causar nenhum tipo de ressecamento. Sua fórmula de alta qualidade proporciona uma espuma cremosa que deixa as mãos profundamente hidratadas. Além de cuidar da pele, ele prolonga a experiência sensorial com uma perfumacao sofisticada e duradoura.",
        "imagem": "/assets/produtos/Sabonete-Liquido-Renaissance-Figo-Negro-Roval.webp",
        "preco": 59.9
    },
    {
        "id": 20,
        "nome": "Sérum Antiacne Oil Control 30mL",
        "categoria": "Cosméticos",
        "descricao": "Sérum facial altamente tecnológico desenvolvido para o controle da oleosidade. Serve para desobstruir os poros, reduzir inflamacões de acne e equilibrar a producao de sebo. Feito com ativos de ponta, ele purifica o rosto sem causar aquele efeito de repuxamento indesejado. É a escolha perfeita para manter a pele matificada, uniforme e com uma aparência super limpa.",
        "imagem": "/assets/produtos/Serum-Antiacne-Oil-Control-30mL.webp",
        "preco": 114.9
    },
    {
        "id": 21,
        "nome": "Sérum Multifuncional Antiaging 30mL",
        "categoria": "Cosméticos",
        "descricao": "Sérum multifuncional com poderosa acao focada no cuidado anti-idade. Serve para atenuar linhas de expressao, melhorando a firmeza e a elasticidade natural do rosto. Sua formulacao sofisticada entrega um tratamento revitalizante que devolve o vico e o brilho da juventude. A textura leve e de alta performance desliza facilmente e penetra na pele para resultados visíveis.",
        "imagem": "/assets/produtos/Serum-Multifuncional-Antiaging-30mL.webp",
        "preco": 139.9
    },
    {
        "id": 22,
        "nome": "Shampoo Antiqueda Roval 250mL",
        "categoria": "Produtos Capilares",
        "descricao": "Shampoo de tratamento intensivo desenvolvido para combater a queda capilar. Serve para revitalizar o couro cabeludo e fortalecer a raiz, promovendo um crescimento mais resistente. Formulado com ativos de alta performance, ele limpa profundamente sem agredir a estrutura dos fios. É um excelente aliado para garantir cabelos mais fortes e auxiliar na manutencao da vitalidade do couro cabeludo.",
        "imagem": "/assets/produtos/Shampoo-Antiqueda-Roval-250mL.webp",
        "preco": 64.9
    },
    {
        "id": 23,
        "nome": "Tônico Capilar Antiqueda 30mL",
        "categoria": "Produtos Capilares",
        "descricao": "Tônico Capilar Antiqueda da Roval, formulado com o poderoso complexo de Kopexil e cafeína. Serve para reverter a perda de cabelo, agindo diretamente no couro cabeludo para fortalecer a raiz dos fios. A sua aplicacao contínua estimula ativamente o crescimento saudável, proporcionando muito mais volume e resistência. O frasco de 30ml conta com um aplicador em conta-gotas, o que torna o uso diário extremamente prático e preciso.",
        "imagem": "/assets/produtos/Tonico-Capilar-Antiqueda-30mL.webp",
        "preco": 64.9
    },
    {
        "id": 24,
        "nome": "Supra Ômega 3 1g (DHA 440mg EPA 660mg) 120 Caps",
        "categoria": "Sono & Bem Estar",
        "descricao": "Suplemento de óleo de peixe enriquecido com vitamina E em cápsulas. Serve para apoiar a saúde cardiovascular e cerebral, enquanto a vitamina E atua como um potente antioxidante. A fórmula possui o selo internacional IFOS de pureza e traz altas concentracões de EPA e DHA para fácil absorcao. O frasco contém 120 cápsulas de 1,35g, rendendo 60 dias completos de uso com a recomendacao de duas ao dia.",
        "imagem": "/assets/produtos/Supra-Omega-3-1g-(DHA-440mg-EPA-660ml)-120-Caps.webp",
        "preco": 224.9
    },
    {
        "id": 25,
        "nome": "Adocante Xylitol Taumatina e Stevia 60ml",
        "categoria": "Nutrição",
        "descricao": "Xylitol, Taumatina e Stevia da Roval é ideal para ser um adocante de mesa e acompanhar cafés e outros tipos de bebidas. Produto natural, com ingredientes escolhidos e balanceados para apresentar o melhor poder de docura, com baixo índice glicêmico e reducao calórica.",
        "imagem": "/assets/produtos/Adocante-Xylitol-Taumatina-e-Stevia-60mL-Roval.webp",
        "preco": 36.0
    },
    {
        "id": 26,
        "nome": "Home Spray Renaissance Limão Siciliano",
        "categoria": "Higienização",
        "descricao": "Aromatizador de ambientes da linha Renaissance com notas de limão siciliano. Serve para transformar a atmosfera da sua casa, trazendo um frescor cítrico super elegante e revigorante. A qualidade premium da sua essência proporciona uma perfumacao sofisticada e com excelente fixacao no ar. É perfeito para criar um clima de limpeza, conforto e muito requinte em qualquer cômodo do seu lar.",
        "imagem": "/assets/produtos/Home-Spray-Renaissance-Limao-Siciliano-Roval.webp",
        "preco": 69.9
    },
    {
        "id": 27,
        "nome": "Sabonete Líquido Renaissance Limão Siciliano",
        "categoria": "Higienização",
        "descricao": "Sabonete líquido sofisticado que complementa a experiência aromática de limão siciliano. Serve para limpar as mãos com extrema delicadeza enquanto entrega uma hidratacao rica e prolongada. Sua formulacao de altíssimo padrao cria uma espuma cremosa que deixa a pele aveludada e muito bem cuidada. Além da acao de assepsia, ele proporciona uma experiência sensorial única com sua fragrância cítrica marcante.",
        "imagem": "/assets/produtos/Sabonete-Liquido-Renaissance-Limao-Siciliano-Roval.webp",
        "preco": 59.9
    },
    {
        "id": 28,
        "nome": "Calcium MDK 60 cápsulas",
        "categoria": "Sono & Bem Estar",
        "descricao": "Suplemento em cápsulas que combina Cálcio, Magnésio, Vitamina K e D3. Serve essencialmente para fortalecer a sua estrutura óssea e apoiar o bom funcionamento muscular. As vitaminas da fórmula garantem que o cálcio seja absorvido e direcionado corretamente para os ossos. O frasco traz 60 cápsulas de 500mg, rendendo um mês completo de uso com a indicacao de duas ao dia.",
        "imagem": "/assets/produtos/Calcium-MDK-60-capsulas.webp",
        "preco": 65.9
    },
    {
        "id": 29,
        "nome": "PowerTreino Roval 60 Cápsulas",
        "categoria": "Nutrição Esportiva",
        "descricao": "Suplemento em cápsulas rico em Zinco, Magnésio e Vitamina B6. Serve para otimizar a recuperacao muscular e melhorar a qualidade do sono após os seus treinos full-body. Os nutrientes da fórmula auxiliam diretamente na síntese de proteínas e ajudam a combater a fadiga. A embalagem contém 60 cápsulas, oferecendo bastante praticidade já que a dose é de apenas uma por dia.",
        "imagem": "/assets/produtos/PowerTreino-Roval-60-Capsulas.webp",
        "preco": 50.9
    },
    {
        "id": 30,
        "nome": "Sabonete Líquido Roval 300ml",
        "categoria": "Higienização",
        "descricao": "Sabonete líquido nutritivo pensado para o bem-estar e conforto da rotina diária. Serve para promover uma limpeza corporal eficaz, protegendo a pele e mantendo o seu equilíbrio natural. A qualidade superior dos seus ingredientes garante um toque macio e previne o ressecamento durante as lavagens. É um cuidado premium excelente para deixar o corpo sempre limpo, delicadamente perfumado e hidratado.",
        "imagem": "/assets/produtos/Sabonete-Liquido-Roval-300ml.webp",
        "preco": 43.9
    },
    {
        "id": 31,
        "nome": "Melatonina 30mL ROVAL",
        "categoria": "Sono & Bem Estar",
        "descricao": "Suplemento de melatonina em gotas de rápida absorcao e com sabor de maracujá. Serve para regular o seu relógio biológico, ajudando a pegar no sono mais rápido e a dormir com mais qualidade. Um descanso profundo é essencial para manter a sua disposicao diária e otimizar a sua recuperacao muscular. O frasco de 30ml nao contém adicao de acúcar e a sua dosagem é super prática, sendo de apenas uma gota antes de deitar.",
        "imagem": "/assets/produtos/Melatonina-30mL-ROVAL.webp",
        "preco": 55.9
    },
    {
        "id": 32,
        "nome": "OsteoComplex 592mg 60 Caps ROVAL",
        "categoria": "Sono & Bem Estar",
        "descricao": "Suplemento alimentar em cápsulas rico em curcuminóides, magnésio e manganês. Serve para auxiliar na manutencao da funcao articular, ajudando a proteger as cartilagens e a reduzir inflamacões. A combinacao desses nutrientes é excelente para melhorar a mobilidade e promover mais conforto durante os movimentos. O frasco contém 60 cápsulas de 592mg, rendendo dois meses completos de tratamento com a indicacao de apenas uma ao dia.",
        "imagem": "/assets/produtos/OsteoComplex-592mg-60-Caps-ROVAL.webp",
        "preco": 91.9
    },
    {
        "id": 33,
        "nome": "Coenzima Q10 690mg 60 Caps ROVAL",
        "categoria": "Sono & Bem Estar",
        "descricao": "Suplemento alimentar formulado em cápsulas oleosas. Serve para fornecer uma potente acao antioxidante, protegendo as células contra os danos dos radicais livres.\nA sua ingestao também é muito importante para auxiliar na producao de energia celular e na manutencao da vitalidade. O frasco contém 60 cápsulas de 700mg, rendendo um mês completo de uso com a indicacao de duas ao dia.",
        "imagem": "/assets/produtos/Coenzima-Q10-690mg-60-Caps-ROVAL.webp",
        "preco": 165.9
    },
    {
        "id": 34,
        "nome": "Booster Cabelo Pele e Unha 403mg 120 Caps",
        "categoria": "Sono & Bem Estar",
        "descricao": "Suplemento vitamínico e mineral em cápsulas. Serve para fortalecer os fios e as unhas, promovendo também mais saúde e vitalidade para a sua pele. A fórmula possui um excelente mix de nutrientes e alto teor de Biotina (B7) para agir de dentro para fora. O frasco traz 120 cápsulas de 403mg, rendendo um mês completo de uso com a indicacao de quatro ao dia.",
        "imagem": "/assets/produtos/Booster-Cabelo-Pele-e-Unha-403mg-120-Caps-ROVAL.webp",
        "preco": 119.9
    },
    {
        "id": 35,
        "nome": "Mater+ 30 Cápsulas Roval",
        "categoria": "Nutrição",
        "descricao": "Suplemento alimentar em cápsulas formulado especialmente para gestantes. Combina óleo de peixe rico em DHA e EPA com 12 vitaminas essenciais e 8 minerais importantes.\nSua composicao serve para garantir as concentracões ideais de nutrientes durante toda a gravidez. O frasco contém 30 cápsulas de 1350mg, rendendo um mês de uso com a indicacao de uma ao dia.",
        "imagem": "/assets/produtos/Mater+-30-Capsulas-Roval.webp",
        "preco": 106.9
    },
    {
        "id": 36,
        "nome": "NightCaps 60 cápsulas Roval",
        "categoria": "Sono & Bem Estar",
        "descricao": "Suplemento em cápsulas formulado com Inositol e L-Triptofano. Serve para favorecer o relaxamento mental e auxiliar diretamente na melhora da eficiência do sono. Um descanso de qualidade é fundamental para recarregar a mente e otimizar a sua recuperacao muscular. O frasco contém 60 cápsulas de 456mg, rendendo um mês completo de uso com a recomendacao de duas ao dia.",
        "imagem": "/assets/produtos/NightCaps-60-capsulas-Roval.webp",
        "preco": 87.9
    },
    {
        "id": 37,
        "nome": "Slim Blend Sabor Hortela 210g Roval",
        "categoria": "Nutrição",
        "descricao": "Chá misto solúvel sabor hortela formulado com sete extratos naturais. Serve como uma bebida leve que auxilia no seu bem-estar diário e na manutencao de um estilo de vida saudável. A sua composicao é adocada naturalmente, totalmente livre de glúten e nao possui corantes artificiais. A lata vem com 210g do pó já pronto para o consumo, bastando misturar na água para um preparo rápido e prático.",
        "imagem": "/assets/produtos/Slim-Blend-Sabor-Hortela-210g-Roval.webp",
        "preco": 94.9
    },
    {
        "id": 38,
        "nome": "Vitamina D3 Roval 2000UI 60 Caps",
        "categoria": "Sono & Bem Estar",
        "descricao": "Suplemento essencial em cápsulas para o dia a dia. Serve principalmente para fortalecer o seu sistema imunológico e melhorar a absorcao de cálcio. Essa acao é muito importante para manter a saúde dos ossos e garantir o bom funcionamento muscular.\nO frasco traz 60 cápsulas, sendo um ótimo investimento para dois meses de uso diário.",
        "imagem": "/assets/produtos/Vitamina-D3-Roval-2000UI–60-Caps.webp",
        "preco": 65.0
    },
    {
        "id": 39,
        "nome": "Supra Ômega 3 1g (DHA 440mg EPA 660mg) 60 Caps",
        "categoria": "Sono & Bem Estar",
        "descricao": "Óleo de peixe concentrado com excelentes níveis de EPA e DHA. Serve para proteger a sua saúde cardiovascular e atuar como um poderoso anti-inflamatório natural. O seu uso diário também é excelente para apoiar o foco e o desempenho das suas funcões cerebrais. O pote vem com 60 cápsulas, oferecendo alta pureza para a sua suplementacao.",
        "imagem": "/assets/produtos/Supra-Omega-3–1g-(DHA-440mg-EPA-660ml)-60-Caps-Roval.webp",
        "preco": 121.9
    },
    {
        "id": 40,
        "nome": "Super DHA 1000mg 60 Caps Roval",
        "categoria": "Sono & Bem Estar",
        "descricao": "Suplemento focado especificamente na saúde do cérebro. Serve para otimizar a memória, a concentracao e o raciocínio, ideal para dar suporte em rotinas intensas de estudo. Além de proteger o sistema nervoso central, ele também ajuda na manutencao de uma visao saudável. Este frasco entrega 60 cápsulas com uma dose super concentrada de DHA puro.",
        "imagem": "/assets/produtos/Super-DHA-1000mg–60-Caps.webp",
        "preco": 151.9
    },
    {
        "id": 41,
        "nome": "Óleo de Coco 1g 60 Caps Roval",
        "categoria": "Sono & Bem Estar",
        "descricao": "Óleo de Coco em cápsulas de 1G, uma fonte muito prática de gorduras boas. Serve para fornecer energia rápida ao corpo e auxiliar na aceleracao natural do seu metabolismo. Suas propriedades antioxidantes também contribuem para o fortalecimento da imunidade de forma geral. O pote com 60 cápsulas traz os benefícios do óleo de coco sem deixar aquele sabor forte na boca.",
        "imagem": "/assets/produtos/Oleo-de-Coco-1g–60-Caps-Roval.webp",
        "preco": 56.9
    },
    {
        "id": 42,
        "nome": "Óleo de Cartamo 1g com Vitamina E 60 Caps",
        "categoria": "Nutrição Esportiva",
        "descricao": "Óleo de Cártamo de 1G enriquecido com Vitamina E, focado no cuidado metabólico. Serve para auxiliar na queima de gordura e na melhora da composicao corporal quando aliado aos seus treinos full-body. A presenca da Vitamina E adiciona uma acao antioxidante que protege as células contra o envelhecimento. Oferece 60 cápsulas para dar aquele suporte extra aos seus objetivos físicos.",
        "imagem": "/assets/produtos/Oleo-de-Cartamo-1g-com-Vitamina-E –60-Caps-Roval.webp",
        "preco": 50.9
    },
    {
        "id": 43,
        "nome": "Óleo de Linhaca 1G 60 Caps Roval",
        "categoria": "Sono & Bem Estar",
        "descricao": "Óleo de Linhaca em cápsulas de 1G da Roval. Serve como uma excelente fonte vegetal de ômegas 3, 6 e 9 para o seu corpo. Essa composicao ajuda a regular o colesterol, protege o coracao e possui uma forte acao anti-inflamatória. O frasco traz 60 cápsulas, sendo uma ótima alternativa natural para manter a saúde cardiovascular em dia.",
        "imagem": "/assets/produtos/Oleo-de-Linhaca-1G–60-Caps-Roval.webp",
        "preco": 63.9
    },
    {
        "id": 44,
        "nome": "Nutricomplex Roval 60 Caps",
        "categoria": "Nutrição",
        "descricao": "Suplemento vitamínico e mineral bastante completo. Serve para repor nutrientes essenciais que podem faltar na sua alimentacao, garantindo mais vitalidade. O seu uso é ideal para combater o cansaco diário e apoiar o bom funcionamento de todo o seu metabolismo. O pote conta com 60 cápsulas, oferecendo muita praticidade e suporte para a sua rotina de saúde.",
        "imagem": "/assets/produtos/Nutricomplex-Roval-60-Caps.webp",
        "preco": 95.9
    },
    {
        "id": 45,
        "nome": "Gel de Massagem Pernas e Pés 200g Roval",
        "categoria": "Cosméticos",
        "descricao": "Gel de massagem revigorante formulado especificamente para o cuidado de pernas e pés. Serve para aliviar a sensacao de peso e fadiga, estimulando o conforto com uma agradável sensacao de frescor. Sua textura refinada e ativos de alta pureza proporcionam um relaxamento profundo e verdadeiramente terapêutico. É excelente para um momento de autocuidado premium, especialmente após um dia cansativo ou de treinos intensos.",
        "imagem": "/assets/produtos/Gel-de-Massagem-Pernas-e-Pes-200g-Roval.webp",
        "preco": 55.9
    },
    {
        "id": 46,
        "nome": "Protetor Facial Roval FPS 60 60ML",
        "categoria": "Cosméticos",
        "descricao": "Protetor solar facial incolor com altíssimo fator de protecao 60 contra os danos solares. Serve para criar uma barreira invisível e extremamente eficaz contra queimaduras e o envelhecimento precoce. Sua qualidade superior entrega um toque seco e confortável, perfeito para ser usado diariamente sem obstruir os poros. É indispensável para quem exige o máximo de seguranca dermatológica atrelada a uma textura cosmética impecável.",
        "imagem": "/assets/produtos/Protetor-Facial-Roval-FPS-60-60ML.webp",
        "preco": 86.9
    },
    {
        "id": 47,
        "nome": "Base fortalecedora de unhas Roval 10ml",
        "categoria": "Cosméticos",
        "descricao": "Base Fortalecedora de Unhas da Roval com queratina, óleo de cravo e melaleuca. Serve para tratar unhas fracas e quebradicas, garantindo mais resistência e um crescimento saudável. Os óleos essenciais presentes na fórmula oferecem uma excelente acao protetora e antifúngica natural. O frasco contém 10mL e é ideal para ser aplicado de forma rápida e prática antes da esmaltacao.",
        "imagem": "/assets/produtos/Base-fortalecedora-de-unhas-Roval-10ml.webp",
        "preco": 31.9
    },
    {
        "id": 48,
        "nome": "Imuno Roval 30 Caps",
        "categoria": "Sono & Bem Estar",
        "descricao": "Suplemento totalmente focado nas defesas do seu corpo. Serve para fortalecer o seu sistema imunológico, ajudando na prevencao de gripes e outras infeccões. Sua fórmula concentra vitaminas e minerais estratégicos para aumentar a sua resistência natural. A embalagem vem com 30 cápsulas, rendendo a dosagem perfeita para garantir a sua protecao por um mês inteiro.",
        "imagem": "/assets/produtos/Imuno-Roval-30-Caps.webp",
        "preco": 80.9
    },
    {
        "id": 49,
        "nome": "Ômega 3 1g (180 EPA 120 DHA) 60 Caps",
        "categoria": "Sono & Bem Estar",
        "descricao": "Suplemento de óleo de peixe com 180 EPA e 120 DHA. Serve para proteger a saúde do seu coracao e auxiliar no bom funcionamento das funcões cerebrais. O consumo diário atua como um anti-inflamatório natural e ajuda a manter os seus níveis de triglicerídeos saudáveis. O frasco com 60 cápsulas oferece um excelente custo-benefício para o cuidado diário.",
        "imagem": "/assets/produtos/Omega-3-1g-(180-EPA-120-DHA)-60-Caps-Roval.webp",
        "preco": 76.9
    },
    {
        "id": 50,
        "nome": "Magnésio Dimalato 433mg 60 Caps ROVAL",
        "categoria": "Nutrição Esportiva",
        "descricao": "Mineral essencial com excelente nível de absorcao pelo organismo. Serve para otimizar a producao de energia celular e melhorar diretamente o funcionamento do sistema muscular. É um ótimo aliado para reduzir a fadiga e acelerar a recuperacao muscular após os seus treinos de força. O pote traz 60 cápsulas, entregando o suporte perfeito para a sua rotina e bem-estar.",
        "imagem": "/assets/produtos/Magnesio-Dimalato-433mg–60-Caps-ROVAL.webp",
        "preco": 77.9
    },
    {
        "id": 51,
        "nome": "Colágeno Active Plus Hidrolisado sem sabor",
        "categoria": "Sono & Bem Estar",
        "descricao": "O colágeno é vital para a pele e cabelos, mas sua producao natural cai significativamente após os 30 anos de idade. A reposicao é essencial para manter o tônus muscular, prevenir rugas, estrias, celulite e auxiliar no emagrecimento. O Colágeno Hidrolisado da Roval Quality Nutrition oferece todos esses benefícios em uma solucao de suplementacao diária. Por nao ter sabor, o produto é super prático e pode ser facilmente misturado em águas, sucos, leites ou sopas.",
        "imagem": "/assets/produtos/Colageno-Active-Plus-Hidrolisado-sem-sabor-300g-Roval.webp",
        "preco": 139.9
    },
    {
        "id": 52,
        "nome": "Hidratante Corporal Roval 300mL ",
        "categoria": "Cosméticos",
        "descricao": "Locao hidratante corporal desenvolvida para proporcionar um cuidado intensivo e duradouro. Serve para nutrir as camadas mais profundas da pele, devolvendo a elasticidade e o vico natural de todo o corpo. Com uma formulacao de altíssima qualidade, o creme espalha com muita facilidade e possui rápida absorcao. É a escolha ideal para quem busca uma pele incrivelmente macia, aveludada e protegida contra o ressecamento diário.",
        "imagem": "/assets/produtos/Hidratante-Corporal-Roval-300mL.webp",
        "preco": 51.91
    }
];