-- CREATE DATABASE projeto_individual;
-- USE projeto_individual;

CREATE TABLE personagem (
	idPersonagem INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
    funcao VARCHAR(45),
	descricao VARCHAR(1300)
);

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45) UNIQUE,
    senha VARCHAR(12),
    epAtual INT,
    qtdEpsDia INT,
    fkPersonagem INT,
    CONSTRAINT fkUsuarioPersonagem FOREIGN KEY (fkPersonagem) REFERENCES personagem(idPersonagem)
);

CREATE TABLE saga (
	idSaga INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45)
);

CREATE TABLE arco (
	idArco INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    tipo VARCHAR(8),
    epInicial INT,
    epFinal INT,
    fkSaga INT,
    CONSTRAINT fkArcoSaga FOREIGN KEY (fkSaga) REFERENCES saga(idSaga)
);

INSERT INTO personagem(nome, funcao, descricao) VALUES
	('Luffy', 'Capitão', 'Monkey D Luffy é o capitão dos piratas do Chapéu de Palha, sempre buscando aventuras e desafiando adversidades. Sua coragem é lendária, pois ele não hesita em enfrentar inimigos poderosos para proteger seus amigos e alcançar seus sonhos. Apesar de sua natureza impulsiva e às vezes ingênua, Luffy possui uma inteligência surpreendente quando se trata de estratégia e combate. Ele é extremamente leal aos seus companheiros e está disposto a fazer qualquer coisa por eles. Sua jornada para se tornar o Rei dos Piratas é impulsionada não apenas pelo desejo de fama e riqueza, mas também pela busca da liberdade e pela realização de seus próprios ideais de justiça e aventura. Além disso, Luffy é um verdadeiro líder, capaz de inspirar e motivar aqueles ao seu redor com sua determinação inabalável e sua capacidade de superar qualquer obstáculo. Sua habilidade de esticar seu corpo, adquirida ao comer a Fruta do Diabo Gomu Gomu no Mi, adiciona um elemento único e divertido às suas batalhas, tornando ele um dos personagens mais memoráveis e carismáticos do mundo dos animes e mangás.'),
    ('Zoro', 'Imediato', 'Zoro é um espadachim habilidoso e extremamente determinado, cujo sonho é se tornar o maior espadachim do mundo. Zoro é conhecido por sua personalidade séria e focada, contrastando com a natureza mais extrovertida de Luffy. Zoro é um homem de poucas palavras, preferindo agir ao invés de falar. Ele é extremamente leal a Luffy e ao seu objetivo de se tornar o Rei dos Piratas, e está disposto a arriscar sua vida para proteger seus amigos e alcançar seus objetivos. Sua força física é extraordinária, e ele é capaz de cortar até mesmo o aço com suas espadas. Apesar de sua aparência intimidadora e de seu temperamento sério, Zoro possui um código de honra forte e é conhecido por sua generosidade e lealdade para com seus amigos. Ele também é bastante competitivo e está sempre buscando desafios mais difíceis para testar suas habilidades como espadachim.'),
    ('Nami', 'Navegadora', 'Nami é uma mulher inteligente, determinada e astuta, com um talento excepcional para a navegação e a cartografia. Nami é guiada por seu grande sonho de desenhar um mapa completo do mundo, uma ambição que a impulsiona em suas aventuras. Inicialmente introduzida como uma ladra egoísta e manipuladora, Nami logo revela suas motivações profundas e emocionais. Ela carrega um peso emocional significativo devido ao seu passado, que envolve a perda de sua família e sua busca para libertar sua terra natal do domínio de um vilão cruel. Apesar de sua natureza pragmática e muitas vezes cínica, Nami é incrivelmente compassiva e leal aos seus amigos, especialmente a Luffy e sua tripulação. Ela é uma estrategista brilhante e contribui de maneira valiosa para o sucesso das missões dos Piratas do Chapéu de Palha, seja com sua habilidade em navegar ou sua inteligência para lidar com situações difíceis.'),
    ('Usopp', 'Atirador', 'Usopp é um personagem complexo, cuja personalidade oscila entre bravata e insegurança. Usopp é um contador de histórias talentoso e um inventor habilidoso, mas sua tendência a exagerar e a criar mentiras muitas vezes o coloca em apuros. Inicialmente apresentado como um covarde que evita o confronto direto, Usopp demonstra coragem e determinação quando se trata de proteger seus amigos e realizar seus sonhos. Ele tem um grande senso de responsabilidade, especialmente em relação à sua vila natal, onde é visto como um herói pelas crianças locais. Usopp tem um profundo desejo de se tornar um bravo guerreiro do mar, inspirado pelo legado de seu pai, que é um pirata. Sua jornada de autodescoberta é marcada por desafios emocionais e físicos, nos quais ele enfrenta seus medos e inseguranças para se tornar o homem que ele aspira ser. Apesar de suas falhas e imperfeições, Usopp é um membro valioso da tripulação dos Piratas do Chapéu de Palha, contribuindo com sua inteligência, habilidades de tiro e engenhosidade para superar obstáculos. Sua relação com seus companheiros é baseada em lealdade e camaradagem, e ele está disposto a sacrificar tudo para proteger aqueles que ama.'),
    ('Sanji', 'Cozinheiro', 'Sanji é um cavalheiro refinado, com um grande apreço pela beleza feminina e uma predileção por cavalheirismo. Ele foi criado como parte da família Vinsmoke, uma família de assassinos poderosos, mas renegou suas raízes violentas em favor de seguir seu próprio caminho como cozinheiro e pirata. Sanji é leal aos seus amigos e está disposto a sacrificar tudo para protegê-los, especialmente as mulheres, em quem ele tem um profundo respeito e admiração. Sanji é conhecido por seu código de ética pessoal, que o impede de usar seus punhos em combate contra mulheres, independentemente da situação. No entanto, ele é extremamente habilidoso em batalha, usando uma variedade de técnicas de artes marciais que enfatizam o uso de suas pernas poderosas. Além de suas habilidades de combate, Sanji é um cozinheiro talentoso e apaixonado, capaz de criar pratos deliciosos que inspiram aqueles ao seu redor. Sua comida não só satisfaz a fome física, mas também nutre o espírito, demonstrando sua habilidade de trazer conforto e alegria aos outros por meio de sua culinária.'),
    ('Chopper', 'Médico', 'Chopper é um dos personagens mais adoráveis e únicos da série. Ele é uma rena com um nariz azul que comeu a Hito Hito no Mi, uma Fruta do Diabo que lhe concedeu a habilidade de se transformar e raciocinar como os humanos. Chopper foi inicialmente rejeitado por sua aparência única, mas encontrou aceitação e amizade na tripulação de Luffy. Ele é extremamente gentil, inocente e dedicado a ajudar os outros, especialmente quando se trata de cuidar da saúde de seus companheiros de tripulação. Sua experiência como médico é ampliada por sua capacidade de usar diferentes formas para se adaptar a situações médicas variadas. Além de suas habilidades médicas, Chopper é um combatente competente, capaz de usar suas diversas formas para lutar contra inimigos e proteger seus amigos. Ele tem um grande coração e está sempre disposto a arriscar tudo para garantir a segurança e o bem-estar daqueles que ama.'),
    ('Robin', 'Arqueologa', 'Robin possui uma história de vida marcada por tragédias e adversidades, incluindo a perda de sua mãe e o massacre de sua ilha natal, Ohara, pela Marinha devido à busca pelo conhecimento do século perdido. Robin é uma mulher inteligente, perspicaz e extremamente culta, com um conhecimento profundo da história e dos mistérios do mundo de "One Piece". Ela é movida por seu desejo de desvendar os segredos do Século Perdido e descobrir a verdade por trás dos Poneglyphs, antigas placas de pedra que guardam informações cruciais sobre o mundo. Apesar de sua natureza reservada e muitas vezes sombria, Robin é leal aos seus amigos e está disposta a lutar ao lado deles para alcançar seus objetivos. Ela possui habilidades únicas de combate, utilizando seus poderes da Fruta do Diabo Hana Hana no Mi para criar múltiplas partes do corpo em qualquer superfície, permitindo-lhe realizar ataques surpreendentes e escapar de situações perigosas.'),
    ('Franky', 'Carpinteiro', 'Franky é um homem robusto e excêntrico, com um corpo construído a partir de peças mecânicas após ele próprio se transformar em um ciborgue. Franky é um inventor talentoso e possui uma paixão por construir e modificar coisas, especialmente navios. Ele é responsável por projetar e construir o Thousand Sunny, o navio dos Piratas do Chapéu de Palha, que se tornou um símbolo de sua jornada e amizade. Apesar de sua aparência intimidadora e de seu comportamento extravagante, Franky tem um coração generoso e é leal aos seus amigos. Ele se preocupa profundamente com a tripulação e está disposto a fazer qualquer coisa para protegê-los e garantir seu sucesso. Franky é um combatente formidável, capaz de usar suas habilidades mecânicas e força física para enfrentar inimigos poderosos. Ele é conhecido por suas técnicas de luta únicas, que envolvem o uso de armas embutidas em seu corpo cibernético e sua capacidade de absorver ataques e se regenerar rapidamente. Além de suas habilidades técnicas e de combate, Franky é uma fonte constante de humor e energia positiva para a tripulação. Sua personalidade extrovertida e exuberante adiciona uma dinâmica única ao grupo, tornando-o uma parte indispensável da equipe dos Piratas do Chapéu de Palha.'),
    ('Brook', 'Músico', "Brook é um esqueleto vivo, que após comer a Yomi Yomi no Mi, uma Fruta do Diabo que lhe concedeu uma segunda vida após a morte. Brook é um músico talentoso, cujo maior sonho é reencontrar seu antigo grupo, os Piratas Rumbar, e cumprir a promessa que fez a seu capitão de levar uma melodia especial para o mundo todo. Ele é conhecido por tocar o violino e por sua canção característica, Bink's Sake. Apesar de sua aparência esquelética e de ter perdido a maior parte de suas memórias de sua vida passada, Brook mantém um espírito alegre e brincalhão. Ele é extremamente enérgico e tem um grande apreço pela vida, apesar de já não ter um corpo humano. Brook é um espadachim habilidoso, usando uma técnica de esgrima chamada Fencing Style (Estilo de Esgrima), que combina seus movimentos elegantes com sua agilidade e habilidades sobrenaturais. Ele é um membro valioso da tripulação de Luffy, contribuindo não só com sua destreza em combate, mas também com seu senso de humor e otimismo."),
    ('Jinbe', 'Timoneiro', "Jinbe é um homem-peixe, especificamente um tubarão-baleia, o que lhe confere habilidades aquáticas excepcionais, como a capacidade de respirar e se mover livremente debaixo d'água. Jinbe é conhecido por sua calma, sabedoria e senso de honra. Ele possui um forte código moral e está comprometido com a justiça e a proteção dos fracos. Como um ex-shichibukai e ex-capitão dos Piratas do Sol, Jinbe tem uma vasta experiência em combate e liderança, tornando-o uma figura respeitada no mundo pirata. Além de suas habilidades de combate, Jinbe é um mestre em técnicas de luta baseadas em artes marciais aquáticas, usando seu poderoso estilo de luta de Karatê dos Homem-Peixe. Ele é capaz de combinar sua força física impressionante com sua agilidade e velocidade debaixo d'água para derrotar seus oponentes. Jinbe é conhecido por sua lealdade inabalável aos seus amigos e aliados. Ele se torna um membro vital dos Piratas do Chapéu de Palha, contribuindo com sua experiência e habilidades para ajudar a tripulação de Luffy em suas aventuras. Sua presença traz uma sensação de segurança e estabilidade para o grupo, especialmente em situações perigosas.");

INSERT INTO saga(nome) VALUES
	('Eastblue'),
    ('Alabasta'),
    ('Skypiea'),
    ('Water 7'),
    ('Thriller Bark'),
	('Marineford'),
    ('Ilha dos Homens-Peixe'),
    ('Aliança Pirata'),
    ('Yonkous'),
    ('Final');

INSERT INTO arco(nome, tipo, epInicial, epFinal, fkSaga) VALUES
	('Romance Dawn', 'Canônico', 1, 4, 1),
    ('Orange Town', 'Canônico', 5, 8, 1),
    ('Vila Syrup', 'Canônico', 9, 18, 1),
    ('Baratie', 'Canônico', 19, 39, 1),
    ('Arlong Park', 'Canônico', 31, 44, 1),
    ('Loguetown', 'Canônico', 45, 53, 1),
    ('Dragão Milenar', 'Filler', 54, 61, 1),
    
    ('Reverse Mountain', 'Canônico', 62, 63, 2),
    ('Whiskey Peak', 'Canônico', 64, 67, 2),
    ('Coby e Helmeppo', 'Canônico', 68, 69, 2),
    ('Little Garden', 'Canônico', 70, 77, 2),
    ('Ilha Drum', 'Canônico', 78, 91, 2),
    ('Alabasta', 'Canônico', 92, 130, 2),
    ('pós-Alabasta', 'Filler', 131, 135, 2),
    
    ('Ilha dos Carneiros', 'Filler', 136, 138, 3),
    ('Névoa Arco-Íris', 'Filler', 139, 143, 3),
    ('Jaya', 'Canônico', 144, 152, 3),
    ('Skypiea', 'Canônico', 153, 195, 3),
    ('G-8', 'Filler', 196, 206, 3),
    
    ('Davy Back Fight', 'Canônico', 207, 219, 4),
    ('Sonho do Oceano', 'Filler', 220, 224, 4),
    ('Retorno de Foxy', 'Filler', 225, 226, 4),
    ('Water 7', 'Canônico', 227, 265, 4),
    ('Enies Lobby', 'Canônico', 266, 312, 4),
    ('pós-Enies Lobby', 'Canônico', 313, 325, 4),
    
    ('Adorável Terra', 'Filler', 326, 336, 5),
    ('Thriller Bark', 'Canônico', 337, 381, 5),
    ('Ilha Spa', 'Filler', 382, 384, 5),
    
    ('Arquipélago Sabaody', 'Canônico', 385, 407, 6),
	('Amazon Lily', 'Canônico', 408, 421, 6),
	('Impel Down', 'Canônico', 422, 425, 6),
	('Pequeno-oriente Azul', 'Filler', 426, 429, 6),
	('Impel Down', 'Canônico', 430, 456, 6),
	('Marineford', 'Canônico', 457, 489, 6),
	('Pós-Marineford', 'Canônico', 490, 516, 6),

    ('Retorno a Sabaody', 'Canônico', 517, 522, 7),
    ('Ilha dos Homens-Peixe', 'Canônico', 523, 574, 7),

    ('Ambição de Z', 'Filler', 575, 578, 8),
    ('Punk Hazard', 'Canônico', 579, 625, 8),
    ('Recuperando César', 'Filler', 626, 628, 8),
    ('Dressrosa', 'Canônico', 629, 746, 8),
    ('Minas de Prata', 'Filler', 747, 750, 8),

    ('Zou', 'Canônico', 751, 779, 9),
    ('Marinha Supernova', 'Filler', 780, 782, 9),
    ('Whole Cake', 'Canônico', 783, 877, 9),
    ('Devaneio', 'Canônico', 878, 889, 9),
    ('País de Wano', 'Canônico', 890, 894, 9),
    ('Rei do Ácido Carbônico', 'Filler', 895, 896, 9),
    ('País de Wano', 'Canônico', 897, 906, 9),
    ('Episódio de Romance Dawn', 'Filler', 907, null, 9),
    ('País de Wano', 'Canônico', 908, 1028, 9),
    ('Passado de Uta', 'Filler', 1029, 1030, 9),
    ('País de Wano', 'Canônico', 1031, 1088, 9),

    ('Egghead', 'Canônico', 1089, null, 10);

INSERT INTO usuario(nome, email, senha, epAtual, qtdEpsDia, fkPersonagem) VALUES
	('matheus', 'matheus@gmail.com', '12345678', 563, 5, 5),
    ('layssa', 'layssa@gmail.com', '12345678', 364, 2, 3),
    ('marcela', 'marcela@gmail.com', '12345678', 946, 4, 7),
    ('stephanie', 'stephanie@gmail.com', '12345678', 754, 1, 3),
    ('reynald', 'reynald@gmail.com', '12345678', 698, 2, 2);
    
SELECT personagem.nome, COUNT(usuario.fkPersonagem) FROM personagem LEFT JOIN usuario
ON idPersonagem = fkPersonagem GROUP BY nome;

select epAtual from usuario;

