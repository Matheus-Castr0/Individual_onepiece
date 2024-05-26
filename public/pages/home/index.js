function trocarDesc(personagem) {
    var lista_jollyrogers = document.querySelectorAll('.jollyroger');

    for (var i = 0; i < lista_jollyrogers.length; i++) {
        lista_jollyrogers[i].style.filter = ''
    }

    if (personagem == 1) {
        document.getElementById('jollyroger_luffy').style.filter = 'drop-shadow(0 0 5px #FF0000)'
        charImage.src = `../../assets/images/cartazes/Wanted${personagem}.jpg`
        charDesc.innerHTML = `
            <h3>LUFFY, O Capitão</h3>
            <p>Monkey D Luffy é o capitão dos piratas do Chapéu de Palha, sempre buscando aventuras e desafiando adversidades. Sua coragem é lendária, pois ele não hesita em enfrentar inimigos poderosos para proteger seus amigos e alcançar seus sonhos. <br>
            Apesar de sua natureza impulsiva e às vezes ingênua, Luffy possui uma inteligência surpreendente quando se trata de estratégia e combate. Ele é extremamente leal aos seus companheiros e está disposto a fazer qualquer coisa por eles. Sua jornada para se tornar o Rei dos Piratas é impulsionada não apenas pelo desejo de fama e riqueza, mas também pela busca da liberdade e pela realização de seus próprios ideais de justiça e aventura. <br>
            Além disso, Luffy é um verdadeiro líder, capaz de inspirar e motivar aqueles ao seu redor com sua determinação inabalável e sua capacidade de superar qualquer obstáculo. Sua habilidade de esticar seu corpo, adquirida ao comer a Fruta do Diabo Gomu Gomu no Mi, adiciona um elemento único e divertido às suas batalhas, tornando ele um dos personagens mais memoráveis e carismáticos do mundo dos animes e mangás.</p>
        `
    } else if(personagem == 2) {
        document.getElementById('jollyroger_zoro').style.filter = 'drop-shadow(0 0 5px #00FF00)'
        charImage.src = `../../assets/images/cartazes/Wanted${personagem}.jpg`
        charDesc.innerHTML = `
            <h3>Zoro, O Imediato</h3>
            <p>Zoro é um espadachim habilidoso e extremamente determinado, cujo sonho é se tornar o maior espadachim do mundo. Zoro é conhecido por sua personalidade séria e focada, contrastando com a natureza mais extrovertida de Luffy. <br>
            Zoro é um homem de poucas palavras, preferindo agir ao invés de falar. Ele é extremamente leal a Luffy e ao seu objetivo de se tornar o Rei dos Piratas, e está disposto a arriscar sua vida para proteger seus amigos e alcançar seus objetivos. Sua força física é extraordinária, e ele é capaz de cortar até mesmo o aço com suas espadas. <br>
            Apesar de sua aparência intimidadora e de seu temperamento sério, Zoro possui um código de honra forte e é conhecido por sua generosidade e lealdade para com seus amigos. Ele também é bastante competitivo e está sempre buscando desafios mais difíceis para testar suas habilidades como espadachim.</p>
        `
    } else if(personagem == 3) {
        document.getElementById('jollyroger_nami').style.filter = 'drop-shadow(0 0 5px #FDAE04)'
        charImage.src = `../../assets/images/cartazes/Wanted${personagem}.jpg`
        charDesc.innerHTML = `
            <h3>Nami, A Navegadora</h3>
            <p>Nami é uma mulher inteligente, determinada e astuta, com um talento excepcional para a navegação e a cartografia. Nami é guiada por seu grande sonho de desenhar um mapa completo do mundo, uma ambição que a impulsiona em suas aventuras. <br>
            Inicialmente introduzida como uma ladra egoísta e manipuladora, Nami logo revela suas motivações profundas e emocionais. Ela carrega um peso emocional significativo devido ao seu passado, que envolve a perda de sua família e sua busca para libertar sua terra natal do domínio de um vilão cruel. <br>
            Apesar de sua natureza pragmática e muitas vezes cínica, Nami é incrivelmente compassiva e leal aos seus amigos, especialmente a Luffy e sua tripulação. Ela é uma estrategista brilhante e contribui de maneira valiosa para o sucesso das missões dos Piratas do Chapéu de Palha, seja com sua habilidade em navegar ou sua inteligência para lidar com situações difíceis.</p>
        `
    } else if(personagem == 4) {
        document.getElementById('jollyroger_usopp').style.filter = 'drop-shadow(0 0 5px #7E6B09)'
        charImage.src = `../../assets/images/cartazes/Wanted${personagem}.jpg`
        charDesc.innerHTML = `
            <h3>Usopp, O Atirador de Elite</h3>
            <p>Usopp é um personagem complexo, cuja personalidade oscila entre bravata e insegurança. Usopp é um contador de histórias talentoso e um inventor habilidoso, mas sua tendência a exagerar e a criar mentiras muitas vezes o coloca em apuros. <br>
            Inicialmente apresentado como um covarde que evita o confronto direto, Usopp demonstra coragem e determinação quando se trata de proteger seus amigos e realizar seus sonhos. Ele tem um grande senso de responsabilidade, especialmente em relação à sua vila natal, onde é visto como um herói pelas crianças locais. <br>
            Usopp tem um profundo desejo de se tornar um bravo guerreiro do mar, inspirado pelo legado de seu pai, que é um pirata. Sua jornada de autodescoberta é marcada por desafios emocionais e físicos, nos quais ele enfrenta seus medos e inseguranças para se tornar o homem que ele aspira ser. <br>
            Apesar de suas falhas e imperfeições, Usopp é um membro valioso da tripulação dos Piratas do Chapéu de Palha, contribuindo com sua inteligência, habilidades de tiro e engenhosidade para superar obstáculos. Sua relação com seus companheiros é baseada em lealdade e camaradagem, e ele está disposto a sacrificar tudo para proteger aqueles que ama.</p>
        `
    } else if(personagem == 5) {
        document.getElementById('jollyroger_sanji').style.filter = 'drop-shadow(0 0 5px #FFFF00)'
        charImage.src = `../../assets/images/cartazes/Wanted${personagem}.jpg`
        charDesc.innerHTML = `
            <h3>Sanji, O Cozinheiro</h3>
            <p>Sanji é um cavalheiro refinado, com um grande apreço pela beleza feminina e uma predileção por cavalheirismo. <br>
            Ele foi criado como parte da família Vinsmoke, uma família de assassinos poderosos, mas renegou suas raízes violentas em favor de seguir seu próprio caminho como cozinheiro e pirata. Sanji é leal aos seus amigos e está disposto a sacrificar tudo para protegê-los, especialmente as mulheres, em quem ele tem um profundo respeito e admiração. <br>
            Sanji é conhecido por seu código de ética pessoal, que o impede de usar seus punhos em combate contra mulheres, independentemente da situação. No entanto, ele é extremamente habilidoso em batalha, usando uma variedade de técnicas de artes marciais que enfatizam o uso de suas pernas poderosas. <br>
            Além de suas habilidades de combate, Sanji é um cozinheiro talentoso e apaixonado, capaz de criar pratos deliciosos que inspiram aqueles ao seu redor. Sua comida não só satisfaz a fome física, mas também nutre o espírito, demonstrando sua habilidade de trazer conforto e alegria aos outros por meio de sua culinária.</p>
        `
    } else if(personagem == 6) {
        document.getElementById('jollyroger_chopper').style.filter = 'drop-shadow(0 0 5px #E998DE)'
        charImage.src = `../../assets/images/cartazes/Wanted${personagem}.jpg`
        charDesc.innerHTML = `
            <h3>Chopper, O Médico</h3>
            <p>Chopper é um dos personagens mais adoráveis e únicos da série. Ele é uma rena com um nariz azul que comeu a Hito Hito no Mi, uma Fruta do Diabo que lhe concedeu a habilidade de se transformar e raciocinar como os humanos. <br>
            Chopper foi inicialmente rejeitado por sua aparência única, mas encontrou aceitação e amizade na tripulação de Luffy. Ele é extremamente gentil, inocente e dedicado a ajudar os outros, especialmente quando se trata de cuidar da saúde de seus companheiros de tripulação. Sua experiência como médico é ampliada por sua capacidade de usar diferentes formas para se adaptar a situações médicas variadas. <br>
            Além de suas habilidades médicas, Chopper é um combatente competente, capaz de usar suas diversas formas para lutar contra inimigos e proteger seus amigos. Ele tem um grande coração e está sempre disposto a arriscar tudo para garantir a segurança e o bem-estar daqueles que ama.</p>
        `
    } else if(personagem == 7) {
        document.getElementById('jollyroger_robin').style.filter = 'drop-shadow(0 0 5px #A72AFA)'
        charImage.src = `../../assets/images/cartazes/Wanted${personagem}.jpg`
        charDesc.innerHTML = `
            <h3>Robin, A Arqueologa</h3>
            <p>Robin possui uma história de vida marcada por tragédias e adversidades, incluindo a perda de sua mãe e o massacre de sua ilha natal, Ohara, pela Marinha devido à busca pelo conhecimento do século perdido. <br>
            Robin é uma mulher inteligente, perspicaz e extremamente culta, com um conhecimento profundo da história e dos mistérios do mundo de "One Piece". Ela é movida por seu desejo de desvendar os segredos do Século Perdido e descobrir a verdade por trás dos Poneglyphs, antigas placas de pedra que guardam informações cruciais sobre o mundo. <br>
            Apesar de sua natureza reservada e muitas vezes sombria, Robin é leal aos seus amigos e está disposta a lutar ao lado deles para alcançar seus objetivos. Ela possui habilidades únicas de combate, utilizando seus poderes da Fruta do Diabo Hana Hana no Mi para criar múltiplas partes do corpo em qualquer superfície, permitindo-lhe realizar ataques surpreendentes e escapar de situações perigosas.</p>
        `
    } else if(personagem == 8) {
        document.getElementById('jollyroger_franky').style.filter = 'drop-shadow(0 0 5px #13E3F7)'
        charImage.src = `../../assets/images/cartazes/Wanted${personagem}.jpg`
        charDesc.innerHTML = `
            <h3>Franky, O Carpinteiro</h3>
            <p>Franky é um homem robusto e excêntrico, com um corpo construído a partir de peças mecânicas após ele próprio se transformar em um ciborgue. <br>
            Franky é um inventor talentoso e possui uma paixão por construir e modificar coisas, especialmente navios. Ele é responsável por projetar e construir o Thousand Sunny, o navio dos Piratas do Chapéu de Palha, que se tornou um símbolo de sua jornada e amizade. <br>
            Apesar de sua aparência intimidadora e de seu comportamento extravagante, Franky tem um coração generoso e é leal aos seus amigos. Ele se preocupa profundamente com a tripulação e está disposto a fazer qualquer coisa para protegê-los e garantir seu sucesso. <br>
            Franky é um combatente formidável, capaz de usar suas habilidades mecânicas e força física para enfrentar inimigos poderosos. Ele é conhecido por suas técnicas de luta únicas, que envolvem o uso de armas embutidas em seu corpo cibernético e sua capacidade de absorver ataques e se regenerar rapidamente. <br>
            Além de suas habilidades técnicas e de combate, Franky é uma fonte constante de humor e energia positiva para a tripulação. Sua personalidade extrovertida e exuberante adiciona uma dinâmica única ao grupo, tornando-o uma parte indispensável da equipe dos Piratas do Chapéu de Palha.</p>
        `
    } else if(personagem == 9) {
        document.getElementById('jollyroger_brook').style.filter = 'drop-shadow(0 0 5px #6d6d6d)'
        charImage.src = `../../assets/images/cartazes/Wanted${personagem}.jpg`
        charDesc.innerHTML = `
            <h3>Brook, O Músico</h3>
            <p>Brook é um esqueleto vivo, que após comer a Yomi Yomi no Mi, uma Fruta do Diabo que lhe concedeu uma segunda vida após a morte. <br>
            Brook é um músico talentoso, cujo maior sonho é reencontrar seu antigo grupo, os Piratas Rumbar, e cumprir a promessa que fez a seu capitão de levar uma melodia especial para o mundo todo. Ele é conhecido por tocar o violino e por sua canção característica, "Bink's Sake". <br>
            Apesar de sua aparência esquelética e de ter perdido a maior parte de suas memórias de sua vida passada, Brook mantém um espírito alegre e brincalhão. Ele é extremamente enérgico e tem um grande apreço pela vida, apesar de já não ter um corpo humano. <br>
            Brook é um espadachim habilidoso, usando uma técnica de esgrima chamada "Fencing Style" (Estilo de Esgrima), que combina seus movimentos elegantes com sua agilidade e habilidades sobrenaturais. Ele é um membro valioso da tripulação de Luffy, contribuindo não só com sua destreza em combate, mas também com seu senso de humor e otimismo.</p>
        `
    } else {
        document.getElementById('jollyroger_jinbe').style.filter = 'drop-shadow(0 0 5px #0000FF)'
        charImage.src = `../../assets/images/cartazes/Wanted${personagem}.jpg`
        charDesc.innerHTML = `
            <h3>Jinbe, O Timoneiro</h3>
            <p>Jinbe é um homem-peixe, especificamente um tubarão-baleia, o que lhe confere habilidades aquáticas excepcionais, como a capacidade de respirar e se mover livremente debaixo d'água. <br>
            Jinbe é conhecido por sua calma, sabedoria e senso de honra. Ele possui um forte código moral e está comprometido com a justiça e a proteção dos fracos. Como um ex-shichibukai e ex-capitão dos Piratas do Sol, Jinbe tem uma vasta experiência em combate e liderança, tornando-o uma figura respeitada no mundo pirata. <br>
            Além de suas habilidades de combate, Jinbe é um mestre em técnicas de luta baseadas em artes marciais aquáticas, usando seu poderoso estilo de luta de Karatê dos Homem-Peixe. Ele é capaz de combinar sua força física impressionante com sua agilidade e velocidade debaixo d'água para derrotar seus oponentes. <br>
            Jinbe é conhecido por sua lealdade inabalável aos seus amigos e aliados. Ele se torna um membro vital dos Piratas do Chapéu de Palha, contribuindo com sua experiência e habilidades para ajudar a tripulação de Luffy em suas aventuras. Sua presença traz uma sensação de segurança e estabilidade para o grupo, especialmente em situações perigosas.</p>
        `
    }
}

document.getElementById('jollyroger_luffy').style.filter = 'drop-shadow(0 0 5px #FF0000)'

function trocarPagina(pagina) {
    if(pagina == 1) {
        window.open("/pages/cadastro/index.html", "_self")
    } else if (pagina == 2) {
        window.open("/pages/guia/index.html", "_self")
    } else {
        window.open("/pages/sagas/index.html", "_self")
    }
}