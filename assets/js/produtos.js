// ===============================================
//  CATÁLOGO DE PRODUTOS — OKB DISTRIBUIDORA
//  Para adicionar um produto, copie uma linha P(...)
//  P(nome, marca, categoria, { img, top, destaque, desc })
//   - foto: cadastre em assets/js/fotos.js ("Nome do produto": "assets/img/produtos/arquivo.webp")
//   - top: true  -> aparece em "Mais vendidos"
//   - destaque: true -> aparece na vitrine de destaques
//   - desc: descrição do produto
// ===============================================

window.OKB_CATEGORIAS = [
  { id: "limpeza",    nome: "Limpeza Geral",          icon: "spray"   },
  { id: "desinf",     nome: "Desinfetantes",          icon: "shield"  },
  { id: "cozinha",    nome: "Cozinha Profissional",   icon: "chef"    },
  { id: "higiene",    nome: "Higiene Pessoal",        icon: "hand"    },
  { id: "papel",      nome: "Papéis e Descartáveis",  icon: "roll"    },
  { id: "epi",        nome: "EPIs e Proteção",        icon: "glove"   },
  { id: "utensilios", nome: "Utensílios",             icon: "broom"   },
  { id: "equip",      nome: "Equipamentos e Dispensers", icon: "box"  },
  { id: "lavanderia", nome: "Lavanderia",             icon: "shirt"   },
  { id: "aroma",      nome: "Aromatizantes",          icon: "flower"  }
];

(function () {
  const L = [];
  const F = window.OKB_FOTOS || {};
  const P = (n, m, c, x = {}) => L.push({ nome: n, marca: m, cat: c, img: F[n + "|" + m] || F[n], ...x });


  // ---------- DESTAQUES ----------
  P("Seven Detergente Máq. Max 5 L", "Sevengel", "cozinha", { top: true, destaque: true,
    desc: "Detergente para máquinas de lavar louças. Limpeza eficiente e alto poder desengordurante, com resultados superiores. Ideal para cozinhas industriais, restaurantes e indústria alimentícia." });
  P("Seven Free Desengordurante 5 L", "Sevengel", "cozinha", { destaque: true,
    desc: "Detergente desengordurante com alto poder de limpeza para ambientes profissionais. Baixa toxicidade e odor, limpeza profunda e eficiente. Ideal para indústrias, cozinhas e frigoríficos." });
  P("Seven Free Amoniacal 5 L", "Sevengel", "cozinha", { top: true,
    desc: "Versão amoniacal do Seven Free: alto poder desengordurante para remoção de gorduras pesadas em pisos, equipamentos e superfícies." });
  P("Seven Free Amoniacal 1 L", "Sevengel", "cozinha", {});
  P("Free 1 L", "Sevengel", "cozinha", {});
  P("Fibra de Limpeza Leve Azul", "Bettanin", "utensilios", { top: true, destaque: true,
    desc: "Fibras de limpeza com qualidade e eficiência para o dia a dia. Pacote com 10 unidades (26 x 10,2 cm). Alta resistência, ideal para diversas superfícies." });
  P("Fibra Limpeza Leve Branca", "Bettanin", "utensilios", {
    desc: "Fibra branca para limpeza leve de superfícies delicadas. Pacote com 10 unidades." });
  P("Fibra Limpeza Pesada Verde", "Bettanin", "utensilios", { top: true,
    desc: "Fibra verde para limpeza pesada. Alta resistência e durabilidade." });
  P("Fibra Uso Geral Verde", "Bettanin", "utensilios", {});
  P("Seven Clearon S.E. 5 L", "Sevengel", "desinf", { destaque: true,
    desc: "Desinfetante e desengordurante para ambientes e superfícies alimentícias. Desinfecção com eficiência, remove gorduras e sujeiras. Ambientes mais seguros para você e seus clientes." });
  P("Seven Clearon S.E. 1 L", "Sevengel", "desinf", {});
  P("Seven Clearon CL 5 L", "Sevengel", "desinf", {
    desc: "Desinfetante clorado da linha Clearon para superfícies e ambientes que exigem alto nível de higienização." });
  P("Seven Clearon CL 1 L", "Sevengel", "desinf", {});
  P("Sanit Clor BD 1 kg", "Sevengel", "desinf", { destaque: true,
    desc: "Desinfecção completa com tripla ação: desinfecção de frutas, legumes e verduras; de água para consumo; e de superfícies e equipamentos em geral." });
  P("Sanit Clor Sachê 4 g", "Sevengel", "desinf", {});
  P("Seven Geleia de Pinho Industrial 5 L", "Sevengel", "limpeza", { destaque: true,
    desc: "Limpeza profunda e desodorizante com óleo essencial de pinho. Excelente poder de limpeza e perfume duradouro. Ideal para escolas, universidades, hospitais e supermercados." });
  P("Seven Geleia de Pinho Industrial 1 L", "Sevengel", "limpeza", {});
  P("Seven Geleia de Pinho 5 L", "Sevengel", "limpeza", {});
  P("Seven Geleia de Pinho 1 L", "Sevengel", "limpeza", {});
  P("Seven Flotador Industrial 5 L", "Sevengel", "cozinha", { destaque: true,
    desc: "Solvente vegetal para uma limpeza eficiente e sustentável. Tecnologia de flotação que remove gorduras com máxima eficiência. Ideal para equipamentos, pisos, paredes e coifas." });
  P("Seven Flotador Industrial 1 L", "Sevengel", "cozinha", {});
  P("Lim+ Limpador Multiuso Álcool/Floral 5 L", "Sevengel", "limpeza", { top: true, destaque: true,
    desc: "Limpador multiuso com álcool e perfume floral. Limpeza rápida, secagem rápida e perfume agradável. Limpeza completa sem complicação." });
  P("Lim+ Limpador Multiuso Álcool/Floral 1 L", "Sevengel", "limpeza", {});
  P("Lim+ Grill 5 L", "Sevengel", "cozinha", { top: true, destaque: true,
    desc: "Limpador desengordurante para grelhas, chapas, fornos e coifas. Remove gordura e resíduos carbonizados. Mais limpeza e praticidade na sua rotina. Disponível em 1 L e 5 L." });
  P("Lim+ Grill 1 L", "Sevengel", "cozinha", {});
  P("Seven Peroxi 3000 5 L", "Sevengel", "limpeza", { destaque: true,
    desc: "Limpador de uso geral à base de peróxido de hidrogênio. Limpeza, controle de odores e alvejamento em um só produto. Mais limpeza, mais segurança para o seu negócio." });
  P("Seven Peroxi 3000 1 L", "Sevengel", "limpeza", {});
  P("Seven Porcelan 1 L", "Sevengel", "limpeza", { destaque: true,
    desc: "Limpador neutro para porcelanatos e pisos finos. Limpeza completa e segura, fórmula biodegradável, não deixa resíduos e realça o brilho." });
  P("Seven Peroxy Guard", "Sevengel", "desinf", { destaque: true,
    desc: "Higienização para ambientes de saúde. Ação eficaz com peróxido, ideal para hospitais, clínicas e consultórios." });

  // ---------- LIMPEZA GERAL ----------
  P("A-704 Detergente Neutro 5 L", "Diprol", "limpeza");
  P("A-730 Limpa Pedra", "Diprol", "limpeza");
  P("Agilfácil Detergente Lava Louças 5 L", "Archote", "limpeza", { top: true, desc: "Detergente lava-louças concentrado em galão de 5 litros. Ótimo rendimento para cozinhas e uso profissional." });
  P("Agilfácil Detergente Lava Louças 500 ml", "Archote", "limpeza");
  P("Agilcook Limpador Amoniacal 5 L", "Archote", "limpeza");
  P("Agilcook Álcool Acendedor 5 L", "Archote", "cozinha");
  P("Agipro Lunnis Detergente Clorado 5 L", "Archote", "limpeza");
  P("Lim+ 3 em 1 Orvalho do Campo 1 L", "Sevengel", "limpeza");
  P("Lim+ Limpador Multiuso Ação e Proteção", "Sevengel", "limpeza");
  P("Lim+ Lava Louça 500 ml", "Sevengel", "limpeza");
  P("Lim+ Clor 1001 Plus 5 L", "Sevengel", "desinf");
  P("Lim+ Limpa Tudo Fort 5 L", "Sevengel", "limpeza");
  P("Lim+ Limpa Canil 2 L", "Sevengel", "desinf");
  P("Seven Glass Limpa Vidros 5 L", "Sevengel", "limpeza");
  P("Seven Passe Fácil Flowers 1 L", "Sevengel", "limpeza");
  P("Seven Crost 5 L", "Sevengel", "limpeza");
  P("Seven Sanit Crost 1 L", "Sevengel", "limpeza");
  P("Seven Desincrustante Alcalino Premium 5 L", "Sevengel", "limpeza");
  P("Seven Desincrustante Alcalino Premium 50 L", "Sevengel", "limpeza");
  P("Seven Deter Pro 5 L", "Sevengel", "limpeza");
  P("Seven Deter Pro 1 L", "Sevengel", "limpeza");
  P("Seven Hidrogen 5000 5 L", "Sevengel", "limpeza");
  P("Seven Hidrogen 5000 50 L", "Sevengel", "limpeza");
  P("Seven Limpgel 5 L", "Sevengel", "limpeza");
  P("Seven Limgel 2 kg", "Sevengel", "limpeza");
  P("Seven Pós Obra Plus 1 L", "Sevengel", "limpeza");
  P("Seven Lava Autos 5 L", "Sevengel", "limpeza");
  P("Magic 3 em 1 5 L", "Sevengel", "limpeza");
  P("Blast Limpeza Pesada 5 L", "Audax", "limpeza");
  P("Gold Limpador Amoniacal 5 L", "Audaxco", "limpeza");
  P("Gold Limpador Geral 5 L", "Audaxco", "limpeza");
  P("Gold Limpa Carpete 5 L", "Audaxco", "limpeza");
  P("Gold Detergente Clorado 5 L", "Audaxco", "limpeza");
  P("Max Limpador Concentrado 5 L", "Audaxco", "limpeza");
  P("Oxy Ativo Concentrado 5 L", "Audaxco", "limpeza");
  P("Conc. Oxy Ativo 5 L", "Audaxco", "limpeza");
  P("I-921 Detergente Amoniacal", "Diprol", "limpeza");
  P("L-864 Clean P 5 kg", "Diprol", "limpeza");
  P("L-890 Tira Ferrugem 5 L", "Diprol", "limpeza");
  P("L-913 Multiuso Limão", "Diprol", "limpeza");
  P("Kalyclean A 628 5 L", "Kalykim", "limpeza");
  P("Kalyclean A 631", "Kalykim", "limpeza");
  P("Kalyclean A 631 Inox", "Kalykim", "limpeza");
  P("Kalyclean C 223 5 L", "Kalykim", "limpeza");
  P("Kalyclean C 223 20 L", "Kalykim", "limpeza");
  P("Kalyclean K 518 5 L", "Kalykim", "limpeza");
  P("Kalyclean K 535 Multiuso", "Kalykim", "limpeza");
  P("Kalyclean N 779 5 L", "Kalykim", "limpeza");
  P("Allkaly PA", "Kalykim", "limpeza");
  P("Detergente Neutro Sol 5 L", "Noordhen", "limpeza");
  P("Detergente em Pó 5 kg", "Noordhen", "limpeza");
  P("Oxiclean 1 L", "Noordhen", "limpeza");
  P("Perfecto 5 L", "Noordhen", "limpeza");
  P("Pinho Gel 5 L", "Noordhen", "limpeza");
  P("Pratic All C 1 L", "Noordhen", "limpeza");
  P("Pratic Glass 5 L", "Noordhen", "limpeza");
  P("Limpa Vidro Glass 5 L", "Sevengel", "limpeza");
  P("Limpa Azulejo", "Sanches", "limpeza");
  P("Limpa Azulejo Big", "Sanches", "limpeza");
  P("Limpa Vidro", "Sanches", "limpeza");
  P("Limpeza Pesada", "Sanches", "limpeza");
  P("Limpeza Pesada Big", "Sanches", "limpeza");
  P("Limpador Multiuso", "Detersid", "limpeza");
  P("Pasta Brilho 4 kg", "Valencialimp", "limpeza");
  P("Det. Cleaning DT10 5 L", "Limsept", "limpeza");
  P("Det. Cleaning DT10 30 L", "Limsept", "limpeza");
  P("Limsept Neutro DT10 25 L", "Limsept", "limpeza");
  P("Acid Flow N 5 L", "Limsept", "limpeza");
  P("Garra Oxiativo Limp. Des. Fácil 4G", "Oleak", "limpeza");
  P("Shock WC 1 L", "Oleak", "limpeza");
  P("Blanco Wiper Germicida Bamboo", "Oleak", "desinf");

  // ---------- COZINHA PROFISSIONAL ----------
  P("Seven Secante Máq. Max 5 L", "Sevengel", "cozinha", { desc: "Secante para máquinas de lavar louças. Secagem rápida e sem manchas." });
  P("Seven Grill 5 L", "Sevengel", "cozinha");
  P("Seven Grill 1 L", "Sevengel", "cozinha");
  P("Seven SS Grease 1 L", "Sevengel", "cozinha");
  P("Seven SS Grease 5 L", "Sevengel", "cozinha");
  P("Seven SS Grease 20 L", "Sevengel", "cozinha");
  P("Foam Alcali 25 L", "Limsept", "cozinha");
  P("Foam Alcali Clor 25 L", "Limsept", "cozinha", { top: true, desc: "Detergente alcalino clorado em espuma para higienização industrial pesada." });
  P("Foam Alcali Clor 5 L", "Limsept", "cozinha");
  P("Alcaliflow 5 L", "Limsept", "cozinha");
  P("Alcaliflow Clor Top 30 L", "Limsept", "cozinha");
  P("Prometal 50 L", "Limsept", "cozinha");
  P("Max Flotador 5 L", "Audaxco", "cozinha");
  P("Desengraxax Concentrado 5 L", "Audaxco", "cozinha");
  P("K-30 Desengraxante 5 L", "Diprol", "cozinha");
  P("Desengordurante Orange 5 L", "Noordhen", "cozinha");
  P("Orange Desengordurante 1 L", "Noordhen", "cozinha");
  P("Limpa Grill 5 L", "Valencialimp", "cozinha");
  P("Kitch Care Detergente Desengordurante 2 L", "Oleak", "cozinha");
  P("Kitch Care Sanitizante Clorado 2 L", "Oleak", "cozinha");
  P("Silvermax Detergente Desengordurante", "Silver Chemical", "cozinha");
  P("WQ 116 Multifuncional p/ Caldeira 20 L", "Acquasystem", "cozinha");

  // ---------- DESINFETANTES ----------
  P("Lim+ Desinfetante Lavanda 5 L", "Sevengel", "desinf", { top: true, desc: "Desinfetante perfumado Lim+ fragrância lavanda. Limpa, desinfeta e perfuma." });
  P("Desinfetante Perfumado Folhas do Cerrado 5 L", "Sevengel", "desinf");
  P("Desinfetante Concentrado Folha do Cerrado 20 L", "Sevengel", "desinf");
  P("I-930 Desinfetante Algas Marinhas 5 L", "Diprol", "desinf");
  P("I-930 Desinfetante Algas Marinhas 20 L", "Diprol", "desinf");
  P("Desinfetante Floral 5 L", "Diprol", "desinf");
  P("Desinfetante Talco 5 L", "Diprol", "desinf");
  P("Desinfetante Floral Pronto Uso 5 L", "Dvisão", "desinf");
  P("Desinfetante Lavanda Pronto Uso 5 L", "Dvisão", "desinf");
  P("Desinfetante Talco Pronto Uso 5 L", "Dvisão", "desinf");
  P("Gold Desinfetante Floral 5 L", "Audaxco", "desinf");
  P("Gold Desinfetante Lavanda 5 L", "Audaxco", "desinf");
  P("Gold Desinfetante Pinho 5 L", "Audaxco", "desinf");
  P("Max Desinfetante Lavanda 5 L", "Audaxco", "desinf");
  P("Max Pine 5 L", "Audaxco", "desinf");
  P("Top Desinfetante Eucalipto 5 L", "Noordhen", "desinf");
  P("Top Desinfetante Floral 5 L", "Noordhen", "desinf");
  P("Top Desinfetante Lavanda 5 L", "Noordhen", "desinf");
  P("Pratic San 5 L", "Noordhen", "desinf");
  P("Bioclor Higer 1 kg", "Noordhen", "desinf");
  P("Bac Sept Lavanda 5 L", "Limsept", "desinf");
  P("Bac Sept Plus Floral 5 L", "Limsept", "desinf");
  P("Sept Bac APA AL 5 L", "Limsept", "desinf");
  P("Sept Bac APA AL 30 L", "Limsept", "desinf");
  P("Sept Bac Quart Industrial 5 L", "Limsept", "desinf");
  P("BL Desinfetante Fácil 4G Floral 2 L", "Oleak", "desinf");
  P("BL Desinfetante Fácil 4G Lavanda 2 L", "Oleak", "desinf");
  P("Synd 250 Fácil 4G 2 L", "Oleak", "desinf");

  // ---------- HIGIENE PESSOAL ----------
  P("Álcool Etílico 70% 1 L", "Sevengel", "higiene", { top: true, desc: "Álcool etílico 70% para higienização de mãos e superfícies." });
  P("Álcool Etílico 70% 5 L", "Sevengel", "higiene");
  P("Álcool Gel 70% 5 L", "Cinord Sudeste", "higiene");
  P("Álcool Gel 70% 500 ml Válvula", "Trilha", "higiene");
  P("Seven Álcool Gel Fire 5 L", "Sevengel", "cozinha");
  P("Lim+ Gel Antisséptico 70% 5 L", "Sevengel", "higiene");
  P("Lim+ Sabonete Líquido Soft Erva Doce 5 L", "Sevengel", "higiene");
  P("Sabonete Líquido Sensações Brisa 5 L", "Sevengel", "higiene");
  P("Sabonete Líquido Sensações Doce 5 L", "Sevengel", "higiene");
  P("Sabonete Líquido Sensações Fofo 5 L", "Sevengel", "higiene");
  P("Sabonete Espuma Flores da Primavera 5 L", "Sevengel", "higiene");
  P("Sabonete Líquido Erva Doce 5 L", "Valência", "higiene");
  P("Sabonete Antisséptico Soap", "Exaccta", "higiene");
  P("Sabonete Cremoso Erva Doce 5 L", "Exaccta", "higiene");
  P("Sabonete Cremoso Proteínas do Leite 5 L", "Exaccta", "higiene");
  P("Sabonete Espuma Erva Doce Plus 5 L", "Exaccta", "higiene");
  P("Sabonete Espuma Lírio Azul Plus 5 L", "Exaccta", "higiene");
  P("Sabonete Espuma Neutro 5 L", "Exaccta", "higiene");
  P("Sabonete Espuma Pitanga Plus 5 L", "Exaccta", "higiene");
  P("Sabonete Líquido Spray Antisséptico 400 ml", "Exaccta", "higiene");
  P("Sabonete Líquido Spray Pêssego 400 ml", "Exaccta", "higiene");
  P("Sabonete Líquido Spray Proteínas do Leite 400 ml", "Exaccta", "higiene");
  P("Munt Sept 70 Spray Antisséptico", "Exaccta", "higiene");
  P("Sabonete Antisséptico 5 L", "Cinord Sudeste", "higiene");
  P("Sabonete Erva Doce Refil 800 ml", "Cinord Sudeste", "higiene");
  P("Sabonete Cremoso Algas Marinhas 500 ml", "Trilha", "higiene");
  P("Sabonete Cremoso Erva Doce 500 ml Válvula", "Trilha", "higiene");
  P("Sabonete Cremoso Framboesa/Amora 500 ml", "Trilha", "higiene");
  P("Sabonete Cremoso Maracujá/Gengibre 500 ml", "Trilha", "higiene");
  P("All Clean Sabonete Líquido Orquídea Branca", "Audaxco", "higiene");
  P("All Clean Sabonete Pôr do Sol 5 L", "Audaxco", "higiene");
  P("Refil de Enxaguante Menta Ice 850 ml", "Machfloss", "higiene");
  P("Refil de Fio Dental 400 m", "Machfloss", "higiene");

  // ---------- PAPÉIS E DESCARTÁVEIS ----------
  P("Papel Higiênico Rolão 8x300 m", "Vó Tudinha", "papel", { top: true, desc: "Papel higiênico rolão, fardo com 8 rolos de 300 metros. Ideal para dispensers de alto fluxo." });
  P("Papel Higiênico Rolão 8x300 m 100%", "Qualipaper", "papel");
  P("Papel Higiênico Rolão 8x300 m Branco", "Isapel", "papel");
  P("Papel Higiênico Rolão 2 kg", "Vó Tudinha", "papel");
  P("Papel Higiênico Folha Dupla Style 250 m", "Nobrepaper", "papel");
  P("Papel Higiênico Cai Cai 8000 fls Touch", "Nobrepaper", "papel");
  P("Papel Higiênico Cai Cai 8000 fls", "Isapel", "papel");
  P("Papel Toalha Bobina Auto Corte", "Vó Tudinha", "papel", { top: true, desc: "Papel toalha em bobina para dispensers de auto corte." });
  P("Papel Toalha Bobina Auto Corte Celulose", "Qualipaper", "papel", { top: true });
  P("Papel Toalha Bobina Bia Auto Corte", "Isapel", "papel");
  P("Papel Toalha Bobina 20x200 Style", "Nobrepaper", "papel");
  P("Papel Toalha Interfolha 2 Dobras c/1000 fls", "Vó Tudinha", "papel");
  P("Papel Toalha Interfolha 2 Dobras 100% Celulose", "Qualipaper", "papel", { top: true });
  P("Papel Acoplado Frios 30x38 400 fls", "Vó Tudinha", "papel");
  P("Guardanapo de Papel 14x14 c/2000", "Vó Tudinha", "papel");
  P("Saco de Lixo Preto 20 L c/100", "Qualipaper", "papel", { top: true, desc: "Saco de lixo preto 20 litros, pacote com 100 unidades." });
  P("Saco de Lixo Preto 60 L c/100 Reforçado", "Qualipaper", "papel", { top: true });
  P("Saco de Lixo Preto 100 L c/100 Reforçado", "Qualipaper", "papel");
  P("Saco de Lixo Preto 100 L c/100 Reforçado", "Amaplastic", "papel");
  P("Saco de Lixo Branco 20 L c/100", "Qualipaper", "papel");
  P("Saco de Lixo Azul 40 L c/100", "Qualipaper", "papel");
  P("Saco de Lixo Azul 60 L c/100 Reforçado", "Qualipaper", "papel");
  P("Saco de Lixo Infectante 30 L c/100", "Plast. Jurema", "papel");
  P("Saco de Lixo Infectante 50 L c/100", "Plast. Jurema", "papel");
  P("Saco de Lixo Infectante 100 L", "Plast. Jurema", "papel");
  P("Saco PEBD 25x35 1 kg", "Farol Plast", "papel");
  P("Saco PEBD 35x45 1 kg", "Farol Plast", "papel");
  P("Saco PEBD 40x60 5 kg", "Farol Plast", "papel");
  P("Saco PEBD 50x70 5 kg", "Farol Plast", "papel");
  P("Saco PEBD 60x100 5 kg", "Farol Plast", "papel");
  P("Bobina Lisa S. Ref. 20x30", "Segplast", "papel");
  P("Bobina Lisa S. Ref. 25x35", "Segplast", "papel");
  P("Bobina Lisa S. Ref. 30x40", "Segplast", "papel");
  P("Bobina Lisa S. Ref. 35x50", "Segplast", "papel");
  P("Bobina Lisa S. Ref. 30x40", "Plask", "papel");
  P("Bobina Lisa S. Ref. 35x50", "Plask", "papel");
  P("Bobina Lisa S. Ref. 40x60", "Plask", "papel");
  P("Bobina Lisa S. Ref. 50x70", "Plask", "papel");
  P("Sacola Branca Virgem 30x40 2,5 kg", "Segplast", "papel");
  P("Sacola Branca Virgem 40x50 2,5 kg", "Segplast", "papel");
  P("Sacola Volte Sempre 30x40 1,5 kg", "Segplast", "papel");
  P("Sacola Volte Sempre 38x49 2,5 kg", "Segplast", "papel");
  P("Sacola Verde Mat. Sec 30x45 c/1000", "Segplast", "papel");
  P("Sacola Verde Mat. Sec 50x60 c/1000", "Segplast", "papel");
  P("Sacola Mat. Sec 42x53 c/1000", "Segplast", "papel");
  P("Toalha Wiper TW2840", "Inoven", "papel");

  // ---------- EPIs ----------
  P("Avental de PVC Branco 0,40", "Maicol", "epi", { top: true, desc: "Avental impermeável de PVC branco, espessura 0,40 mm. Ideal para cozinhas industriais, frigoríficos e limpeza pesada." });
  P("Avental de PVC Branco 0,32", "Maicol", "epi", { top: true });
  P("Avental de Vinil Transparente", "Maicol", "epi");
  P("Avental Thermal Azul 90x60", "Maicol", "epi");
  P("Avental Thermal Azul 120x60", "Maicol", "epi");
  P("Avental Vinil 020 1,20x0,70", "Linabra", "epi");
  P("Avental Vinil 025 1,20x0,70", "Linabra", "epi");
  P("Avental Vinil 028 1,20x0,70", "Linabra", "epi");
  P("Avental Descartável ML Branco c/10", "Protdesc", "epi");
  P("Avental Descartável SM Branco c/10", "Protdesc", "epi");
  P("Luva de Látex Preta XG", "Mucambo", "epi", { top: true, desc: "Luva de látex preta reforçada, ideal para limpeza pesada e manuseio de produtos químicos." });
  P("Luva de Látex Preta G", "Mucambo", "epi");
  P("Luva de Látex Preta M", "Mucambo", "epi");
  P("Luva de Látex Verde G", "Mucambo", "epi", { top: true });
  P("Luva Nitrílica Verde M", "Inoven", "epi", { top: true });
  P("Luva Nitrílica Verde GG", "Inoven", "epi");
  P("Luva de Látex Amarela P", "Inoven", "epi");
  P("Luva de Látex Amarela M", "Inoven", "epi");
  P("Luva de Látex Amarela G", "Inoven", "epi");
  P("Luva de Látex c/ Pó P (procedimento)", "Inoven", "epi");
  P("Luva de Látex c/ Pó M (procedimento)", "Supermax", "epi");
  P("Luva de Látex c/ Pó EP (procedimento)", "Supermax", "epi");
  P("Luva de Vinil G s/ Pó", "Inoven", "epi");
  P("Luva Plástica Descartável c/100", "Inoven", "epi");
  P("Luva Térmica 35 cm Azul", "Maicol", "epi");
  P("Luva Térmica 45 cm Azul", "Maicol", "epi");
  P("Luva Térmica 60 cm Azul", "Maicol", "epi");
  P("Mangote Térmico Azul Royal", "Maicol", "epi");
  P("Touca Sanfonada Branca c/100", "Bestfabril", "epi", { top: true });
  P("Touca Sanfonada Premium Branca c/100", "Protdesc", "epi");
  P("Máscara Tripla c/ Elástico Branca cx 50", "Protdesc", "epi");
  P("Propé / Sapatilha Branca c/100", "Protdesc", "epi");

  // ---------- UTENSÍLIOS ----------
  P("Fibraço Limpeza Pesada Chapa", "Superpro", "utensilios", { top: true, desc: "Fibra de aço para limpeza pesada de chapas e grelhas." });
  P("Esponja Dupla Face Verde/Amarela", "Superpro", "utensilios");
  P("Pulverizador 500 ml", "Uniluk", "utensilios", { top: true });
  P("Pulverizador 1 L Spray", "Perfect", "utensilios");
  P("Pano Multiuso Azul 20x300", "Inoven", "utensilios");
  P("Pano Multiuso Laranja 20x300", "Inoven", "utensilios");
  P("Pano Multiuso Verde 20x300", "Inoven", "utensilios");
  P("Pano Multiuso Smart Azul 40x28", "Vabene", "utensilios");
  P("Saco Alvejado 45x65", "AMT Sacaria", "utensilios");
  P("Saco Alvejado 98x68", "AMT Sacaria", "utensilios");
  P("Esfregão Duraforte", "L.Mania", "utensilios");
  P("Escova Sanitária c/ Estojo", "L.Mania", "utensilios");
  P("Escovão 5S Amarelo", "Odim", "utensilios");
  P("Escovão 5S Azul", "Odim", "utensilios");
  P("Escovão 5S Verde", "Odim", "utensilios");
  P("Escovão Bolina", "Odim", "utensilios");
  P("Escovão Chão Fio Duro c/ Cabo", "Odim", "utensilios");
  P("Escova de PL Nylon c/ Flange 350", "Certec", "utensilios");
  P("Disco Preto 350 mm", "Certec", "utensilios");
  P("Disco Verde 350 mm", "Certec", "utensilios");
  P("Cabo de Alumínio 1,40 m", "Certec", "utensilios");
  P("Cabo de Alumínio 1,40 m Amarelo", "Odim", "utensilios");
  P("Cabo de Alumínio 1,40 m Azul", "Odim", "utensilios");
  P("Cabo Alumínio Leve 1,5 m", "Odim", "utensilios");
  P("Cabo de Alumínio 1,50 m", "Sanches", "utensilios");
  P("Cabo Extensor de Alumínio", "Sanches", "utensilios");
  P("Rodo Alumínio 40 cm c/ Cabo", "Sanches", "utensilios");
  P("Rodo Alumínio 60 cm c/ Cabo", "Sanches", "utensilios");
  P("Rodo Star 40 cm c/ Cabo Alumínio", "Sanches", "utensilios");
  P("Rodo Star 60 cm c/ Cabo Alumínio", "Sanches", "utensilios");
  P("Rodo Combinado 22 cm Limpa Vidro", "Sanches", "utensilios");
  P("Refil Lã Rodo Combinado 22 cm", "Sanches", "utensilios");
  P("Refil Rodo Alumínio 40 cm EVA", "Sanches", "utensilios");
  P("Refil Rodo Alumínio 60 cm EVA", "Sanches", "utensilios");
  P("Refil Rodo Alumínio 80 cm EVA", "Sanches", "utensilios");
  P("Refil Rodo Star 40 cm", "Sanches", "utensilios");
  P("Refil Rodo Star 60 cm", "Sanches", "utensilios");
  P("Rodo Borboleta 30 cm", "L.Mania", "utensilios");
  P("Rodo Borboleta 40 cm", "L.Mania", "utensilios");
  P("Rodo Puxa e Seca 30 cm", "C. Campestre", "utensilios");
  P("Rodo Puxa e Seca 40 cm", "C. Campestre", "utensilios");
  P("Rodo Puxa e Seca 60 cm", "C. Campestre", "utensilios");
  P("Mop Esfregão Vidro e Porcelanato 34", "Sanches", "utensilios");
  P("Refil Mop Esfregão Porcelanato", "Sanches", "utensilios");
  P("Suporte LT c/ Velcro Azul", "Sanches", "utensilios");
  P("Suporte LT c/ Velcro Verde", "Sanches", "utensilios");
  P("Suporte LT c/ Velcro Vermelho", "Sanches", "utensilios");
  P("Suporte LT c/ Velcro Amarelo", "Sanches", "utensilios");
  P("Suporte LT Azul", "Certec", "utensilios");
  P("Suporte Plástico LT Manual", "Superpro", "utensilios");
  P("Passa Cera de Madeira c/ Espuma", "Yoma", "utensilios");
  P("Pá de Lixo Seleta", "L.Mania", "utensilios");
  P("Vassoura Piaçava", "Yoma", "utensilios");
  P("Vassoura Pelo 40 cm Plástica", "Yoma", "utensilios");
  P("Vassoura Pelo Panda 30 cm", "Yoma", "utensilios");
  P("Vassoura Tropicana", "C. Campestre", "utensilios");
  P("Vassoura Florença", "C. Campestre", "utensilios");
  P("Vassoura Ravena", "C. Campestre", "utensilios");
  P("Vassoura Varre Tudo", "C. Campestre", "utensilios");
  P("Vassoura Limpa Canto Color", "C. Campestre", "utensilios");
  P("Vassoura Tropical", "L.Mania", "utensilios");
  P("Vassoura Gran-Mestra", "L.Mania", "utensilios");

  // ---------- EQUIPAMENTOS E DISPENSERS ----------
  P("Dispenser Sabonete Reservatório Espuma", "Exaccta", "equip");
  P("Dispenser Sabonete Branco c/ Reservatório", "Exaccta", "equip");
  P("Dispenser Mini Sabonete c/ Válvula Spray", "Exaccta", "equip");
  P("Dispenser Papel Interfolha Cristal", "Exaccta", "equip");
  P("Dispenser Papel Rolão Cristal", "Exaccta", "equip");
  P("Dispenser Papel Cai Cai", "Exaccta", "equip");
  P("Dispenser Toalheiro Mini Auto Corte", "Exaccta", "equip");
  P("Dispenser Machfloss Evolution Copo", "Machfloss", "equip");
  P("Dispenser Personal Plástico", "Machfloss", "equip");
  P("Pistola Easy Foamer", "Tron", "equip");
  P("Cesto BB 5 L p/ 3 Produtos", "Aramanti Eq", "equip");
  P("Suporte Inox 5 L c/ Alça e Trava", "Aramanti Eq", "equip");
  P("Lavadora MVF 320", "MVF", "equip");
  P("Lavadora MVF 420", "MVF", "equip");
  P("Lavadora MVF 45", "MVF", "equip");

  // ---------- LAVANDERIA ----------
  P("Lava Roupa em Pó Facilt 5 kg", "Audaxco", "lavanderia");
  P("Lava Roupa Ariex 5 L", "Dvisão", "lavanderia");
  P("Lava Roupa Omex 5 L", "Dvisão", "lavanderia");
  P("Amaciante Soft Blue 5 L", "Dvisão", "lavanderia");
  P("Amaciante Soft White 5 L", "Dvisão", "lavanderia");

  // ---------- AROMATIZANTES ----------
  P("Seven Soft Aroma Pro Flowers 1 L", "Sevengel", "lavanderia", { desc: "Amaciante concentrado com cápsulas de fragrância. Alto poder amaciante e perfume duradouro." });
  P("Seven Soft Aroma Pro Flowers 5 L", "Sevengel", "lavanderia");
  P("Perfume Sensações Brisa 60 ml", "Sevengel", "aroma");
  P("Perfume Sensações Doce 60 ml", "Sevengel", "aroma");
  P("Perfume Sensações Fofo 60 ml", "Sevengel", "aroma");
  P("Gold Fresh Air Lavanda 5 L", "Audaxco", "aroma");
  P("Gold Fresh Air Talco 5 L", "Audaxco", "aroma");
  P("Pratic Neutran Air Excelence 5 L", "Noordhen", "aroma");
  P("Aromatizador Odorizante Eucalipto 140 ml", "Noordhen", "aroma");
  P("Difusor Aromático Brisa do Mar 350 ml", "Premisse", "aroma");
  P("Difusor Aromático Chá Branco 350 ml", "Premisse", "aroma");
  P("Difusor Aromático Lavanda 350 ml", "Premisse", "aroma");
  P("Difusor Aromático Pimenta Rosa 350 ml", "Premisse", "aroma");

  L.forEach((p, i) => (p.id = i + 1));
  window.OKB_PRODUTOS = L;
})();
