(function(){
  const I18N = {
    pt: {
      hero_h1: "Você chegou<br>sabendo<br>quem eu sou.",
      hero_impact: "Não vim negar. O beijo, a prata, o nome que virou sinônimo de traição: é tudo meu. Só te peço uma coisa antes de fechar a página. Me escuta até o fim. Depois, se ainda quiser me chamar do mesmo jeito, chama.",
      scrollcue: "descer",
      silver_kicker: "O pedido",
      silver_h2: "Não começou<br>com a prata.",
      silver_p1: "A prata foi a última coisa. Quando ela apareceu, a decisão já tinha peso, forma e caminho. E <strong>não fui eu que desenhei esse caminho.</strong>",
      silver_p2: "Começou antes. Longe da mesa, longe dos outros, quando ele me chamou de lado e me entregou uma tarefa que ninguém deveria receber. Eu volto nisso. Primeiro preciso que você veja o que todo mundo viu, só que do meu lado.",
      gallery_h2: "Escreveram sobre mim",
      gallery_p: "Cinco histórias que eu mesmo nunca pude contar:",

      c1_title: "A confiança",
      c1_teaser: "Me deram a bolsa do grupo. Ninguém guarda o dinheiro de quem já desconfia.",
      c1d_idx: "Prova I",
      c1d_title: "A confiança",
      c1d_p1: "Eu cuidava do dinheiro dos doze. Pensa no que isso quer dizer antes de me chamar de ladrão. Ninguém entrega a bolsa a um homem em quem já não confia. Eles entregaram. Por anos fui eu que comprei o pão da mesa, paguei o teto onde a gente dormia e separei o que sobrava para os pobres, sem ninguém contar as moedas atrás de mim.",
      c1d_p2: "Depois que tudo aconteceu, foi fácil me reduzir à pior coisa que fiz. Mas antes de eu virar explicação para o horror, eu fui alguém a quem se entregavam coisas. Dinheiro. Recados. Silêncios. Talvez tenha sido por isso que, quando veio o pedido maior, ele soube que eu não largaria no chão.",

      c2_title: "O perfume",
      c2_teaser: "Reclamei do perfume derramado. Foi essa frase que pregaram em mim.",
      c2d_idx: "Prova II",
      c2d_title: "O perfume",
      c2d_p1: "Custava quase um ano de trabalho. Trezentos denários, disseram depois, como se alguém naquela casa não tivesse feito a conta em silêncio. Ela quebrou o frasco e derramou tudo nos pés dele. O cheiro tomou a sala inteira, doce e pesado, desses que parecem anunciar uma morte antes que alguém tenha coragem de dizer a palavra.",
      c2d_p2: "Eu falei. Essa foi a minha culpa mais fácil de escrever. Disse que aquilo podia ter sido vendido, que dava para alimentar muita gente. Talvez eu tenha dito por piedade. Talvez por cálculo. Talvez porque a bolsa comum ficava comigo e eu já não sabia separar uma coisa da outra.",
      c2d_p3: "Depois contaram que eu não pensava nos pobres. Que eu roubava. Que minha frase já carregava a traição inteira dentro dela. Uma frase pequena, dita no calor de uma sala cheia, virou prova de uma alma inteira.",
      c2d_p4: "Só sei que naquela noite, antes do beijo, antes de tudo virar acusação contra mim, eu vi perfume escorrendo como riqueza sobre pés cansados. Eu não pensei em prata. Eu pensei em pão.",

      c3_title: "O pão",
      c3_teaser: "Na ceia, ele molhou o pão e me entregou. \"Faça logo.\"",
      c3d_idx: "Prova III",
      c3d_title: "O pão",
      c3d_p1: "Ele sabia. Antes de qualquer um na mesa, ele já sabia. Mesmo assim molhou o pão e colocou na minha mão. \"O que você tem para fazer, faça logo.\" Os outros acharam que era recado sobre a bolsa, sobre comprar comida, sobre alguma obrigação pequena que cabia numa noite comum. Eu entendi outra coisa.",
      c3d_p2: "Aquilo não era recado. Era entrega. Ele estava colocando nas minhas mãos o começo do fim que dizia precisar atravessar. Não levantei por cobiça. Levantei porque a ordem veio de quem eu tinha seguido até ali, e porque havia coisas que só acontecem quando alguém aceita ser odiado por fazê-las acontecer.",
      c3d_p3: "Saí para o escuro com o pão ainda na boca. Ninguém me segurou. Ninguém perguntou para onde eu ia. Às vezes penso que, se alguém tivesse perguntado, eu teria contado tudo. Ou teria ficado. Ou teria desobedecido tarde demais.",

      c4_title: "A noite",
      c4_teaser: "Esperei no jardim com os soldados, sabendo o que ia fazer.",
      c4d_idx: "Prova IV",
      c4d_title: "A noite",
      c4d_p1: "Fiquei parado no escuro com homens armados que não conheciam o rosto dele. Eu conhecia. Era para isso que eu servia ali: para ser os olhos deles. A lanterna tremia na mão de alguém, e eu ouvia a minha própria respiração mais alta que os passos.",
      c4d_p2: "Eles tinham força. Tinham cordas, lâminas, ordens, pressa. Mas não tinham o rosto. Sem mim, eram só homens procurando no escuro alguém que eu amava. Eu era a ponte entre a vontade deles e o corpo dele. A parte pequena, precisa, indispensável. A parte que ninguém ia perdoar.",
      c4d_p3: "Tive tempo de desistir. Foi o pior do castigo, ter tido tempo. Cada segundo era uma porta aberta para eu virar e ir embora, e eu não virei. Não porque eu não quisesse. Quis. Cada parte de mim quis.",
      c4d_p4: "Mas fugir ali não era só salvar a minha pele. Era largar no escuro aquilo que ele tinha posto nas minhas mãos. Era deixar sem rosto os homens que vieram buscá-lo. Era fazer falhar a coisa que ele disse que precisava acontecer. Você já prometeu uma coisa rezando para que o mundo acabasse antes de você cumprir?",

      c5_title: "O beijo",
      c5_teaser: "Um beijo. Era o sinal combinado. A última vez que toquei nele.",
      c5d_idx: "Prova V",
      c5d_title: "O beijo",
      c5d_p1: "Combinamos que seria um beijo. De todos os sinais do mundo, ele deixou que fosse esse. Eu podia ter apontado. Podia ter dito o nome em voz alta. Podia ter escolhido um gesto sem pele, sem calor, sem lembrança. Mas foi um beijo. Porque ainda era amor. Porque talvez só o amor obedecesse a um pedido daqueles.",
      c5d_p2: "Encostei o rosto no dele e senti a barba, o calor, a calma de quem já sabia de tudo. Ele me chamou de amigo. Naquele instante. Com os soldados chegando. Não sei se foi misericórdia ou a parte mais cruel.",
      c5d_p3: "Carrego esse \"amigo\" faz dois mil anos. Pesa mais que a prata, mais que a corda, mais que o nome que me deram depois. Porque se ele ainda me chamou assim, então sabia exatamente o que estava me pedindo. E eu fiz porque era ele. Porque foi ele que pediu. Porque eu acreditei que até aquilo precisava caber no amor que eu tinha por ele.",

      turn_eyebrow: "O que ninguém ouviu",
      turn_h2: "Ele me pediu.",
      turn_p1: "Me chamou para longe dos outros, onde ninguém escutava, e me disse o que precisava acontecer. E que era eu quem tinha que fazer.",
      turn_p2: "Eu disse não. <strong>Você precisa saber que eu disse não.</strong> Implorei para ele escolher outro, qualquer outro. Falei que não tinha tamanho para aquilo, que ia me partir ao meio. Ele me olhou do jeito que só ele olhava, como quem já viu o fim de tudo, e não tirou o pedido.",
      turn_p3: "Como é que você nega uma coisa a ele? Me diz. O homem que eu tinha largado tudo para seguir, o único que nunca me olhou com o desprezo dos outros. Ele me pediu. Não ao mais forte. Não ao mais amado. A mim.",
      turn_p4: "E eu entendi, do jeito torto e doente que a gente entende essas coisas, que aquilo era confiança. Que ele estava me entregando a parte que ninguém mais ia conseguir carregar. Não porque eu era melhor. Talvez porque eu já fosse o único capaz de sobreviver alguns passos dentro daquele ódio antes de ser engolido por ele.",
      turn_p5: "Ele disse que voltaria. Que era necessário. Que havia uma porta estreita demais para todos passarem, e que alguém precisava abri-la pelo lado errado. Eu acreditei, porque amar alguém é fazer a conta absurda de que ele sabe mais que você sobre a dor que está te entregando.",
      turn_p6: "Então eu fiz. A coisa mais pesada que um homem já carregou, achando que era obediência, rezando que fosse amor.",
      turn_p7: "E ninguém ouviu ele me pedir. Só eu. É a minha palavra, dois mil anos depois, contra tudo que escreveram. Eu sei como isso soa. Soa como o que um traidor inventaria para conseguir dormir. Tem dias que eu mesmo não sei se estou lembrando ou só tentando me perdoar.",

      echo_h2: "Mas eu era<br>só um homem.",
      echo_b1: "Devolvi a prata. Joguei no chão do templo na frente deles, e nem isso aliviou. Não quiseram de volta. Disseram que era dinheiro de sangue, como se eu não soubesse.",
      echo_b2: "Eu esperei. Precisa entender que eu esperei. Queria ficar para ver ele voltar e me dizer, na frente de todos, que tinha sido como ele falou. Que aquilo que me destruiu tinha servido para alguma coisa. Que eu não tinha confundido obediência com perdição.",
      echo_b3: "Mas a manhã não chegava. E o silêncio depois do que eu fiz era grande demais para um homem caber dentro.",
      echo_b4: "Ele aguentaria. Era mais que um homem. Eu não era. O peso que ele me deu para carregar foi feito para costas que não eram as minhas, e em algum momento daquela noite eu simplesmente não consegui mais ficar de pé debaixo dele.",
      echo_b5: "Se fosse só ganância, eu teria gastado a prata e seguido em frente. Ganância não mata ninguém de dentro para fora. O que me matou foi maior que dinheiro. Foi ter feito o necessário sem conseguir sobreviver ao necessário.",
      echo_v1: "Agora você ouviu. Não vou te dizer o que eu fui. Eu mesmo não consegui decidir, e tive <em>dois mil anos.</em>",
      echo_v2: "Você chegou sabendo quem eu sou.",
      echo_v3: "Sai sabendo o que eu te contei.",
      echo_v4: "A distância entre as duas coisas é o que você leva daqui.",

      reread: "ler de novo desde o começo",
      more: "toque para o depoimento",
      __title: "Trinta moedas",
      __desc: "A traição contada em primeira pessoa. As trinta moedas, o beijo, a noite — tudo dele. Antes de julgar de novo, escute até o fim. Narrativa interativa no claro-escuro de Caravaggio."
    },

    en: {
      hero_h1: "You came here<br>already knowing<br>who I am.",
      hero_impact: "I'm not here to deny it. The kiss, the silver, the name that became another word for betrayal: all of it is mine. I ask only one thing before you close the page. Hear me through. After that, if you still want to call me by the same name, call me.",
      scrollcue: "scroll",
      silver_kicker: "The request",
      silver_h2: "It didn't start<br>with the silver.",
      silver_p1: "The silver came last. By the time it appeared, the decision already had weight, shape, and a path. And <strong>I was not the one who drew that path.</strong>",
      silver_p2: "It began earlier. Away from the table, away from the others, when he took me aside and handed me a task no one should ever receive. I will come back to that. First I need you to see what everyone saw, only from my side.",
      gallery_h2: "They wrote about me",
      gallery_p: "Five stories I never got to tell:",

      c1_title: "The trust",
      c1_teaser: "They gave me the group's purse. No one hands the money to a man they already doubt.",
      c1d_idx: "Exhibit I",
      c1d_title: "The trust",
      c1d_p1: "I kept the money for the twelve of us. Think about what that means before you call me a thief. No one hands the purse to a man they no longer trust. They handed it to me. For years I was the one who bought the bread on the table, paid for the roof we slept under, and set aside what was left for the poor, with no one counting the coins behind my back.",
      c1d_p2: "After everything happened, it was easy to reduce me to the worst thing I did. But before I became an explanation for the horror, I was someone things were entrusted to. Money. Messages. Silences. Maybe that was why, when the greater request came, he knew I would not drop it on the ground.",

      c2_title: "The perfume",
      c2_teaser: "I complained about the wasted perfume. That one sentence is what they nailed to me.",
      c2d_idx: "Exhibit II",
      c2d_title: "The perfume",
      c2d_p1: "It cost almost a year's work. Three hundred denarii, they said later, as if anyone in that house had not done the math in silence. She broke the jar and poured everything over his feet. The smell took over the whole room, sweet and heavy, the kind that seems to announce a death before anyone has the courage to say the word.",
      c2d_p2: "I spoke. That was the easiest guilt to write down for me. I said it could have been sold, that it could have fed many people. Maybe I said it out of pity. Maybe out of calculation. Maybe because the common purse was in my hands and I no longer knew how to separate one thing from the other.",
      c2d_p3: "Later they said I was not thinking of the poor. That I stole. That my sentence already carried the whole betrayal inside it. One small sentence, spoken in the heat of a crowded room, became proof of an entire soul.",
      c2d_p4: "All I know is that that night, before the kiss, before everything became an accusation against me, I saw perfume running like wealth over tired feet. I did not think of silver. I thought of bread.",

      c3_title: "The bread",
      c3_teaser: "At the supper, he dipped the bread and handed it to me. \"Do it quickly.\"",
      c3d_idx: "Exhibit III",
      c3d_title: "The bread",
      c3d_p1: "He knew. Before anyone else at the table, he already knew. Even so, he dipped the bread and placed it in my hand. \"What you have to do, do quickly.\" The others thought it was about the purse, about buying food, about some small duty that could fit inside an ordinary night. I understood something else.",
      c3d_p2: "That was not an errand. It was a handing over. He was placing in my hands the beginning of the end he said he had to cross. I did not rise out of greed. I rose because the order came from the one I had followed this far, and because some things only happen when someone agrees to be hated for making them happen.",
      c3d_p3: "I walked out into the dark with the bread still in my mouth. No one stopped me. No one asked where I was going. Sometimes I think that, if anyone had asked, I would have told them everything. Or stayed. Or disobeyed too late.",

      c4_title: "The night",
      c4_teaser: "I waited in the garden with the soldiers, knowing what I was about to do.",
      c4d_idx: "Exhibit IV",
      c4d_title: "The night",
      c4d_p1: "I stood in the dark with armed men who did not know his face. I did. That was what I was there for: to be their eyes. The lantern shook in someone's hand, and I could hear my own breathing louder than the footsteps.",
      c4d_p2: "They had force. They had ropes, blades, orders, urgency. But they did not have the face. Without me, they were only men searching in the dark for someone I loved. I was the bridge between their will and his body. The small, precise, indispensable part. The part no one would forgive.",
      c4d_p3: "I had time to turn back. That was the worst of the punishment, having had the time. Every second was an open door for me to turn and walk away, and I did not turn. Not because I did not want to. I did. Every part of me did.",
      c4d_p4: "But fleeing there was not only saving my own skin. It was leaving in the dark what he had placed in my hands. It was leaving the men who came for him without a face. It was making fail the thing he said had to happen. Have you ever promised something while praying the world would end before you had to keep it?",

      c5_title: "The kiss",
      c5_teaser: "A kiss. That was the signal we agreed on. The last time I ever touched him.",
      c5d_idx: "Exhibit V",
      c5d_title: "The kiss",
      c5d_p1: "We agreed it would be a kiss. Of all the signals in the world, he let it be that one. I could have pointed. I could have said the name aloud. I could have chosen a gesture without skin, without warmth, without memory. But it was a kiss. Because it was still love. Because perhaps only love would obey a request like that.",
      c5d_p2: "I pressed my face to his and felt the beard, the warmth, the calm of someone who already knew everything. He called me friend. In that instant. With the soldiers closing in. I do not know whether it was mercy or the cruelest part.",
      c5d_p3: "I have carried that \"friend\" for two thousand years. It weighs more than the silver, more than the rope, more than the name they gave me afterward. Because if he still called me that, then he knew exactly what he was asking of me. And I did it because it was him. Because he was the one who asked. Because I believed that even that had to fit inside the love I had for him.",

      turn_eyebrow: "What no one heard",
      turn_h2: "He asked me.",
      turn_p1: "He took me away from the others, where no one could hear, and told me what had to happen. And that I was the one who had to do it.",
      turn_p2: "I said no. <strong>You need to know that I said no.</strong> I begged him to choose someone else, anyone else. I told him I was not large enough for it, that it would split me in two. He looked at me the way only he could, like someone who had already seen the end of everything, and he did not take the request back.",
      turn_p3: "How do you refuse him anything? Tell me. The man I had left everything to follow, the only one who never looked at me with the contempt of the others. He asked me. Not the strongest. Not the most beloved. Me.",
      turn_p4: "And I understood, in the crooked, sick way we understand these things, that it was trust. That he was handing me the part no one else could carry. Not because I was better. Maybe because I was already the only one able to survive a few steps inside that hatred before being swallowed by it.",
      turn_p5: "He said he would return. That it was necessary. That there was a door too narrow for everyone to pass through, and someone had to open it from the wrong side. I believed him, because loving someone is making the absurd calculation that he knows more than you do about the pain he is handing you.",
      turn_p6: "So I did it. The heaviest thing a man ever carried, thinking it was obedience, praying it was love.",
      turn_p7: "And no one heard him ask me. Only me. It is my word, two thousand years later, against everything they wrote. I know how this sounds. It sounds like what a traitor invents so he can sleep. Some days I do not even know if I am remembering, or only trying to forgive myself.",

      echo_h2: "But I was<br>only a man.",
      echo_b1: "I gave the silver back. I threw it on the temple floor in front of them, and even that brought no relief. They would not take it. They called it blood money, as if I did not know.",
      echo_b2: "I waited. You need to understand that I waited. I wanted to stay and see him return and tell me, in front of everyone, that it had gone the way he said. That what destroyed me had served some purpose. That I had not confused obedience with damnation.",
      echo_b3: "But morning did not come. And the silence after what I did was too large for a man to fit inside.",
      echo_b4: "He would have borne it. He was more than a man. I was not. The weight he gave me to carry was made for a back that was not mine, and somewhere in that night I simply could no longer keep standing under it.",
      echo_b5: "If it had only been greed, I would have spent the silver and moved on. Greed does not kill a man from the inside out. What killed me was greater than money. It was doing what was necessary and not surviving the necessary.",
      echo_v1: "Now you have heard it. I will not tell you what I was. I could not decide it myself, and I had <em>two thousand years.</em>",
      echo_v2: "You came here knowing who I am.",
      echo_v3: "You leave knowing what I told you.",
      echo_v4: "The distance between those two things is what you carry out of here.",

      reread: "read it again from the start",
      more: "tap for the testimony",
      __title: "Thirty pieces",
      __desc: "Betrayal told in first person. The thirty pieces, the kiss, the night — all his. Before you judge again, hear it to the end. An interactive piece in Caravaggio's chiaroscuro."
    }
  };

  function applyLang(lang){
    if(!I18N[lang]) lang="pt";
    try{localStorage.setItem("tp_lang",lang);}catch(e){}
    document.documentElement.lang = (lang==="en") ? "en" : "pt-BR";
    if(I18N[lang].__title) document.title = I18N[lang].__title;
    var __md=document.querySelector('meta[name="description"]'); if(__md && I18N[lang].__desc) __md.setAttribute("content", I18N[lang].__desc);
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      const v = I18N[lang][el.getAttribute("data-i18n")];
      if(v!=null) el.innerHTML = v;
    });
    document.querySelectorAll(".langsel button").forEach(function(b){
      const on = b.dataset.lang===lang;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", on?"true":"false");
    });
    if(window.ScrollTrigger) ScrollTrigger.refresh();
  }

  document.querySelectorAll(".langsel button").forEach(function(b){
    b.addEventListener("click", function(){ applyLang(b.dataset.lang); });
  });

  function pickLang(){
    const supported=["pt","en"];
    try{var saved=localStorage.getItem("tp_lang");if(saved&&supported.indexOf(saved)!==-1)return saved;}catch(e){}
    const list=(navigator.languages&&navigator.languages.length)?navigator.languages:[navigator.language||"en"];
    for(let i=0;i<list.length;i++){
      const base=(list[i]||"").toLowerCase().slice(0,2);
      if(supported.indexOf(base)!==-1) return base;
    }
    return "en"; // visitante de outro idioma -> inglês (língua franca)
  }

  window.__setLang = applyLang;
  applyLang(pickLang());
})();
