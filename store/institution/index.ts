import { GetterTree, ActionTree, MutationTree } from 'vuex'
import Vue from 'vue'
import { IInstitution } from './interfaces'

export const state = () => ({
  guid: 'b382e2e9-12bd-4d5b-941a-b3b04cfe81b1',
  name: 'North Bank',
  type: 'SA',
  applications: [],
  faqs: []
  /*
  faqs: [
    {
      categoryName: 'Shannon',
      categoryId: '5e3c5775e2f2b5e76642a69a',
      categoryIndex: 0,
      questions: [
        {
          questionId: '5e3c57751a9a084158b7a82f',
          question: 'cupidatat eiusmod id?',
          answer: 'Officia mollit pariatur sunt eu excepteur nisi laboris laborum exercitation commodo dolor. Sunt proident fugiat nulla magna irure elit anim minim quis est exercitation consectetur ex. Est aliquip eiusmod nisi aliqua anim mollit esse veniam cupidatat nostrud do amet ipsum id. Velit proident aliquip aute anim quis dolore cupidatat laborum mollit id ea ut ullamco pariatur. Commodo Lorem duis dolor laboris est ad adipisicing aliquip occaecat magna tempor aliquip consectetur veniam. Tempor in deserunt quis elit culpa sit. Adipisicing laboris aliquip culpa ex.'
        },
        {
          questionId: '5e3c5775b141a89b4d72f506',
          question: 'amet in amet?',
          answer: 'Cillum enim tempor aliquip aliqua reprehenderit nulla et nisi consectetur voluptate laboris sunt dolore tempor. Do id ullamco ex laborum aliqua sint officia. Et Lorem labore tempor consectetur consectetur aliqua labore culpa. Culpa aute aliquip voluptate sunt ipsum dolor nisi sunt eu sit nisi excepteur. Pariatur do mollit enim aliquip cillum exercitation ut anim est qui. Duis qui occaecat ad elit proident magna quis eiusmod sint. Veniam ullamco culpa ut amet occaecat amet culpa Lorem culpa sunt aliqua duis magna mollit.'
        },
        {
          questionId: '5e3c577590f5f89dffe9251d',
          question: 'reprehenderit sint et?',
          answer: 'Consequat commodo id proident pariatur. Mollit aute ad sunt pariatur duis do mollit veniam incididunt anim Lorem. Eu ex ea officia voluptate consequat est consequat Lorem Lorem pariatur laborum. Magna non enim ut nisi consequat. Cupidatat voluptate amet est tempor sint ut voluptate sunt nulla consequat minim nulla in. Dolor occaecat et occaecat dolor tempor aliquip irure occaecat ut nostrud nostrud non voluptate duis.'
        },
        {
          questionId: '5e3c57752c96e2fe368d37dd',
          question: 'deserunt officia duis?',
          answer: 'Minim do qui sint minim ex veniam velit excepteur. Cillum ad ad quis amet. Magna excepteur ut voluptate qui fugiat. Ad consequat labore anim veniam laboris Lorem occaecat in ad ex ullamco exercitation. Irure veniam sit eu aute nostrud laborum voluptate culpa aliqua sint culpa non eiusmod proident.'
        },
        {
          questionId: '5e3c5775a3f5cf29ae75517f',
          question: 'officia adipisicing nisi?',
          answer: 'Laborum elit eu sunt ex ex labore nisi sint ex elit deserunt consectetur ullamco officia. Lorem commodo quis adipisicing sunt incididunt et non elit excepteur culpa minim aliquip. Commodo commodo duis duis esse ullamco nisi. Sint quis mollit sit fugiat duis qui enim consectetur esse nostrud dolor in aute.'
        },
        {
          questionId: '5e3c5775c3d71b919322540f',
          question: 'sint aliqua sunt?',
          answer: 'Incididunt magna pariatur ipsum tempor mollit adipisicing consectetur laborum commodo ipsum aliquip voluptate veniam. Commodo esse sunt fugiat officia do pariatur aute enim aute aliquip. Fugiat proident velit quis nisi elit commodo magna est velit voluptate Lorem aute qui eu. Voluptate mollit eu duis anim non do labore consequat dolore deserunt Lorem. Consectetur excepteur est nisi occaecat. Anim aliquip ipsum qui pariatur magna incididunt amet quis.'
        },
        {
          questionId: '5e3c57753949a0b336ef6514',
          question: 'magna eu veniam?',
          answer: 'Ut et laborum proident eiusmod veniam nisi occaecat sint ut qui. Aute elit ipsum enim id pariatur laboris excepteur nisi mollit eiusmod consequat. Excepteur nostrud velit deserunt reprehenderit. Est nisi excepteur tempor cupidatat est sit exercitation ad non qui officia. Adipisicing duis ut est aute quis nisi. Est enim do sunt ipsum aute proident cillum elit nostrud et. Laborum enim cillum voluptate sunt aliquip minim cupidatat est veniam mollit esse aliqua.'
        },
        {
          questionId: '5e3c57754fb5722289ce0c0d',
          question: 'amet laborum eiusmod?',
          answer: 'Enim ex aliqua magna consequat ipsum proident quis reprehenderit aliqua. Qui reprehenderit elit ea aute Lorem ut reprehenderit pariatur adipisicing. Est proident culpa aliqua fugiat nostrud eu eu officia ad minim in. Nulla in magna id commodo aliquip nostrud deserunt nulla anim dolore laborum esse. Incididunt laborum sint dolor sunt minim occaecat voluptate id cupidatat. Lorem sint anim aliqua enim amet.'
        },
        {
          questionId: '5e3c5775badbd4359686f121',
          question: 'incididunt aute eiusmod?',
          answer: 'Excepteur proident adipisicing dolor occaecat do. Consectetur consectetur esse amet et nulla duis commodo cillum pariatur reprehenderit aute sint nisi. Id do quis pariatur exercitation incididunt deserunt deserunt occaecat occaecat. Elit minim occaecat officia proident incididunt excepteur. Est enim dolore labore adipisicing duis commodo. Eiusmod ut reprehenderit irure elit quis culpa Lorem deserunt dolor exercitation deserunt ad. Magna eiusmod ipsum proident tempor laborum aute fugiat ut officia nostrud fugiat laboris aliquip.'
        },
        {
          questionId: '5e3c577582db0bf2b3b799bb',
          question: 'anim ex mollit?',
          answer: 'Officia dolor reprehenderit velit eiusmod magna occaecat officia laborum commodo duis. Reprehenderit incididunt qui id in pariatur consectetur incididunt incididunt est ad fugiat. Culpa magna pariatur laboris ex magna tempor sunt. Culpa in minim adipisicing ullamco ex tempor cupidatat exercitation sit.'
        },
        {
          questionId: '5e3c5775dac4b5faa601896d',
          question: 'laborum laboris culpa?',
          answer: 'Qui consectetur eiusmod exercitation labore excepteur commodo do proident enim laboris adipisicing veniam elit. Irure voluptate aliqua est eu laborum ut commodo eiusmod magna et. Dolore incididunt nostrud proident sunt officia elit adipisicing. Quis officia ea do quis dolore enim occaecat aute esse commodo nulla sunt reprehenderit.'
        }
      ]
    },
    {
      categoryName: 'Marylou',
      categoryId: '5e3c577582f595a974a43145',
      categoryIndex: 4,
      questions: [
        {
          questionId: '5e3c5775c976d064d6804906',
          question: 'est tempor et?',
          answer: 'Lorem nostrud excepteur ad id mollit sunt ipsum incididunt duis et incididunt dolore. Tempor ad cillum magna labore esse. Irure elit enim Lorem officia cupidatat nisi duis irure eiusmod ipsum. Deserunt sint exercitation ut in aliqua et nostrud officia ut ex aliqua deserunt proident. Sunt ipsum officia esse laboris sit deserunt do dolor eu est nulla non. Magna mollit nulla culpa esse eu velit dolor exercitation enim.'
        },
        {
          questionId: '5e3c5775e9938cd576f63077',
          question: 'anim aute Lorem?',
          answer: 'Eu labore labore mollit ullamco nisi laborum magna consequat exercitation aliqua laborum. Incididunt proident duis voluptate sit ipsum laborum proident sint commodo qui id quis deserunt excepteur. Eu veniam veniam labore non cillum ipsum ad. Ea labore duis occaecat exercitation.'
        },
        {
          questionId: '5e3c577581c2b3d2edd97241',
          question: 'proident enim officia?',
          answer: 'Deserunt pariatur magna deserunt ullamco deserunt velit. Laborum incididunt pariatur fugiat tempor incididunt duis nostrud sunt mollit id. Nostrud minim sit non cupidatat dolore. Pariatur irure labore dolor reprehenderit sit tempor aliqua. Laboris magna officia consequat Lorem mollit commodo id nisi ipsum ex deserunt enim cupidatat.'
        },
        {
          questionId: '5e3c57756e81befba18026ef',
          question: 'dolore adipisicing aliquip?',
          answer: 'Nisi elit nostrud tempor laborum dolore laboris elit deserunt reprehenderit esse culpa ipsum. Nostrud deserunt tempor id magna mollit. Lorem in aliquip consectetur ea occaecat Lorem. Laborum amet et commodo do tempor cupidatat ea. Sit nulla velit ea voluptate aliqua ex voluptate. Dolore Lorem occaecat ad do occaecat reprehenderit deserunt irure.'
        },
        {
          questionId: '5e3c577568302e4e3b946c5f',
          question: 'proident reprehenderit sint?',
          answer: 'Irure et non Lorem nulla eu et sint dolore excepteur qui enim. Consectetur mollit eiusmod dolore ad anim. Officia adipisicing aliquip incididunt sint nulla. Consequat exercitation anim enim non ullamco veniam. Sint id proident aute commodo officia et veniam duis. Adipisicing labore ex fugiat laboris culpa magna ea nulla non. Non magna et adipisicing eu ut consequat nulla quis id.'
        },
        {
          questionId: '5e3c5775613113d5bb6f500b',
          question: 'occaecat id minim?',
          answer: 'Sunt aliquip anim commodo adipisicing do quis amet labore do irure. Sunt anim sunt tempor mollit culpa elit officia. Cillum est anim pariatur sint anim dolore tempor labore quis qui. Ullamco do ad sit do labore consectetur amet qui enim ad proident.'
        },
        {
          questionId: '5e3c5775627f4a962f99ee2a',
          question: 'ad aute consequat?',
          answer: 'Quis non cupidatat ipsum do magna labore officia voluptate esse enim cupidatat velit incididunt. Sunt velit qui in ad sint quis enim ut nulla ex. Laborum ea esse reprehenderit consequat eiusmod cupidatat consequat fugiat ex proident aute.'
        },
        {
          questionId: '5e3c57751c70ab79ddeabe78',
          question: 'incididunt non aliqua?',
          answer: 'Incididunt amet nulla ipsum ad aute proident incididunt commodo eiusmod excepteur ea qui officia. Ea ullamco minim consequat occaecat. Labore anim nostrud sunt tempor laboris adipisicing proident commodo officia eu consequat laboris. Elit esse enim quis id amet id eu do magna labore quis adipisicing dolor. Laborum enim et adipisicing commodo aliquip dolor est. Aute veniam proident laboris sit dolor magna commodo commodo et.'
        },
        {
          questionId: '5e3c57756e34746958970aa1',
          question: 'ex eiusmod eiusmod?',
          answer: 'Fugiat nulla irure tempor sunt ipsum elit deserunt dolor laborum. Laboris cillum anim aliquip reprehenderit aliqua consectetur id exercitation et magna ad id fugiat elit. Officia officia elit occaecat adipisicing ut ullamco nulla. Laborum laborum enim aliquip excepteur tempor non consectetur elit duis consectetur.'
        },
        {
          questionId: '5e3c577532c78679a93b4238',
          question: 'fugiat sunt excepteur?',
          answer: 'Nulla aliqua do reprehenderit ullamco eiusmod reprehenderit ad est sit mollit minim elit. Aliquip deserunt reprehenderit ea enim sunt duis. Esse velit minim consectetur laboris pariatur et consectetur tempor quis officia.'
        }
      ]
    },
    {
      categoryName: 'Neva',
      categoryId: '5e3c5775630fb48c29193f68',
      categoryIndex: 1,
      questions: [
        {
          questionId: '5e3c57752712783dbd718404',
          question: 'ipsum aute cupidatat?',
          answer: 'Minim officia officia pariatur mollit do amet. Occaecat occaecat commodo velit eiusmod. Dolore cillum excepteur occaecat culpa minim. Adipisicing officia eiusmod do pariatur commodo ullamco amet amet eu dolore nisi dolor in. Aliqua culpa ipsum eiusmod labore. Id dolor tempor reprehenderit aliqua excepteur magna sunt sunt anim consequat.'
        },
        {
          questionId: '5e3c5775d69a328f31c2eaf7',
          question: 'consequat magna exercitation?',
          answer: 'Commodo exercitation esse ea minim cupidatat deserunt deserunt anim laboris enim consectetur ex. Esse nisi aliqua quis quis Lorem cupidatat minim aute voluptate. Cupidatat laboris in dolore officia quis irure Lorem. Et sit do aute elit.'
        },
        {
          questionId: '5e3c57758ff361da9e151d12',
          question: 'minim ut enim?',
          answer: 'Adipisicing pariatur consectetur incididunt dolor dolor esse qui aliqua et aute veniam labore irure. Lorem et ut fugiat consequat minim qui nostrud. Laborum labore labore dolor sunt ut labore dolore ullamco voluptate sit. In ad do aute cillum ut. Qui proident sit et ut deserunt consequat ad eiusmod id sunt.'
        },
        {
          questionId: '5e3c57756f408e2a9cacb309',
          question: 'aute consectetur sunt?',
          answer: 'Aute proident elit consequat id anim amet Lorem officia occaecat. Magna nisi dolore aliqua et veniam id laborum ex minim ullamco cillum dolor eiusmod. Ex magna mollit duis ad commodo laboris fugiat ullamco. Eu est est mollit pariatur commodo reprehenderit aliquip velit pariatur veniam proident esse ipsum.'
        },
        {
          questionId: '5e3c5775aea333f6e51c508b',
          question: 'nisi laborum commodo?',
          answer: 'Irure sit ex ut fugiat anim reprehenderit proident aliqua irure ex pariatur sunt. Aliquip in dolore excepteur tempor nisi eiusmod deserunt. Nulla velit enim non excepteur incididunt enim fugiat laboris in consequat duis.'
        },
        {
          questionId: '5e3c57754e455ce936e0e11a',
          question: 'dolore sunt commodo?',
          answer: 'Laboris duis deserunt sint magna sunt nisi officia culpa id ea commodo. Adipisicing magna sit duis non ex et laborum non deserunt ad. Ad mollit eiusmod laboris est consequat fugiat ea dolor laboris. Lorem culpa commodo tempor eiusmod ut eiusmod qui quis Lorem eu veniam mollit qui culpa. Et magna ut enim aute.'
        },
        {
          questionId: '5e3c577542498aaaca1da7e1',
          question: 'consequat eiusmod deserunt?',
          answer: 'Ad ea nostrud ullamco aute id reprehenderit ullamco nisi cillum occaecat laborum occaecat. Exercitation proident in anim veniam ex duis proident. Lorem reprehenderit sint reprehenderit incididunt laborum qui incididunt aliquip commodo. Tempor culpa occaecat magna fugiat irure reprehenderit.'
        },
        {
          questionId: '5e3c5775fca44b254729e214',
          question: 'consectetur quis aliqua?',
          answer: 'Nisi anim exercitation dolore aliquip sit eu dolor. Fugiat laboris laboris aliqua nisi ipsum do elit laboris velit laborum esse. In pariatur elit ipsum proident excepteur elit ut pariatur. Id officia cillum eu tempor incididunt duis aliqua reprehenderit tempor duis. Anim consectetur id magna culpa consectetur occaecat cillum fugiat consectetur irure. Aliqua reprehenderit aliquip laboris nostrud.'
        },
        {
          questionId: '5e3c5775e751cb505015af26',
          question: 'consectetur esse reprehenderit?',
          answer: 'Pariatur nulla ea id elit ullamco. Eiusmod cillum laboris reprehenderit consectetur adipisicing non culpa est esse minim laboris nulla mollit. Magna id est magna dolor non.'
        },
        {
          questionId: '5e3c577592fee129e8836007',
          question: 'culpa sit ut?',
          answer: 'Lorem ex et ad enim culpa veniam non in duis elit est ex. Occaecat nisi veniam labore anim cupidatat aliqua id sint anim. Pariatur aute pariatur dolore eiusmod sunt tempor laborum elit fugiat non sit sunt. Labore fugiat sit ipsum esse adipisicing cupidatat mollit dolor non sit irure. Aliquip exercitation elit duis ad commodo tempor in est deserunt. Nostrud labore ad officia cillum excepteur pariatur enim exercitation in nisi reprehenderit cupidatat nulla ut. Irure occaecat proident ea dolore cillum elit sit anim est aliqua.'
        }
      ]
    },
    {
      categoryName: 'Karina',
      categoryId: '5e3c57753ba92ca683e1befd',
      categoryIndex: 2,
      questions: [
        {
          questionId: '5e3c57751c93f7861946a00c',
          question: 'proident non dolore?',
          answer: 'Commodo esse incididunt cupidatat labore enim magna occaecat. Exercitation magna eu irure consequat non incididunt. Enim sit cupidatat et aliqua laborum nisi. Eiusmod esse esse velit consequat ut. Consequat nulla nulla nulla nulla in laboris dolore reprehenderit qui ipsum veniam sit. Exercitation reprehenderit consectetur adipisicing exercitation irure irure elit pariatur nulla commodo in. Proident exercitation consequat et cupidatat sunt occaecat consectetur culpa laboris labore.'
        },
        {
          questionId: '5e3c577554c41f58a8669d8b',
          question: 'officia exercitation dolor?',
          answer: 'Veniam excepteur incididunt irure est commodo duis occaecat nulla reprehenderit excepteur officia amet esse culpa. Sunt amet magna veniam minim commodo nostrud occaecat sint. Sint nisi et deserunt Lorem sint duis eu Lorem mollit cillum. Est tempor labore do mollit officia mollit laborum in sint ex adipisicing Lorem esse. Est commodo excepteur minim culpa anim consequat exercitation exercitation. Aute quis officia est occaecat in reprehenderit amet nisi anim irure. Deserunt veniam excepteur aliqua voluptate Lorem sunt ipsum commodo eiusmod fugiat aliquip minim id nulla.'
        },
        {
          questionId: '5e3c577557005fe84c911c8f',
          question: 'ipsum mollit labore?',
          answer: 'Nisi qui deserunt labore ipsum. Officia est commodo ad ipsum cillum officia ullamco Lorem aliquip adipisicing adipisicing officia et ut. Laboris Lorem aute quis velit culpa exercitation dolor ut sint exercitation et fugiat sunt ipsum. Reprehenderit minim excepteur ut sunt minim pariatur deserunt dolore sunt ad pariatur tempor nisi.'
        },
        {
          questionId: '5e3c57757a661d596da1bdec',
          question: 'aliqua eu officia?',
          answer: 'Eiusmod nulla voluptate ex consequat fugiat aliqua culpa. Est cupidatat proident officia ea ad eu velit duis amet eiusmod fugiat. Excepteur quis non ipsum aliquip ea. Reprehenderit cillum velit est enim sunt. Exercitation irure cillum do amet enim sit enim ex proident nostrud eu excepteur mollit.'
        },
        {
          questionId: '5e3c5775a6f41bff650b4c80',
          question: 'et sint veniam?',
          answer: 'Qui sunt fugiat aliqua mollit ut sunt ipsum tempor sint cupidatat dolore velit deserunt non. Non magna culpa dolor ullamco cillum magna. Consectetur qui elit et dolor qui commodo incididunt minim mollit aliquip id tempor incididunt. Dolore nostrud id mollit tempor. Voluptate sint cupidatat ut eu voluptate. Ex ullamco veniam dolore consectetur eu magna veniam magna.'
        },
        {
          questionId: '5e3c57751dbb12c4e7038e50',
          question: 'Lorem deserunt veniam?',
          answer: 'Non officia voluptate aute cupidatat. Incididunt laboris reprehenderit Lorem cillum commodo sunt duis voluptate cupidatat aliquip aliqua nostrud et. Dolore duis ea veniam eu do eu nulla qui dolore labore aliqua adipisicing cupidatat. Laborum irure minim nostrud officia ad labore nulla. Eu veniam laboris qui nulla exercitation in ut.'
        },
        {
          questionId: '5e3c57754a0e9ecbe817403e',
          question: 'officia aliqua et?',
          answer: 'Aliquip occaecat cillum sunt nulla. Pariatur laboris tempor non ipsum eiusmod ut eu deserunt dolore. Non ea duis proident minim nisi in deserunt occaecat et nostrud culpa anim laboris. Reprehenderit Lorem minim culpa excepteur aliquip.'
        }
      ]
    },
    {
      categoryName: 'Mcgee',
      categoryId: '5e3c5775b15072f9e467006b',
      categoryIndex: 3,
      questions: [
        {
          questionId: '5e3c57756eac910f06815685',
          question: 'aliqua voluptate labore?',
          answer: 'Sit elit laboris sunt irure duis cillum laborum cillum. Lorem amet laboris laboris enim amet culpa Lorem dolore voluptate. Incididunt nulla est labore veniam aute. Ea minim quis magna ipsum officia ut do. Pariatur magna eu mollit ad. Irure incididunt Lorem consectetur tempor do mollit magna.'
        },
        {
          questionId: '5e3c5775355c4710d574c0dd',
          question: 'ad nisi quis?',
          answer: 'Ut magna eiusmod cupidatat sunt. Velit qui elit Lorem non dolore id culpa voluptate veniam occaecat veniam esse proident. Labore aliquip quis Lorem est voluptate culpa pariatur pariatur adipisicing officia adipisicing Lorem. Laborum cillum incididunt irure ad irure et do veniam proident esse magna aliqua. Minim velit minim aliqua irure sint.'
        },
        {
          questionId: '5e3c5775d136c0ecfd2e2812',
          question: 'enim anim mollit?',
          answer: 'Reprehenderit est labore ipsum duis eu voluptate amet voluptate ut. Et do eiusmod veniam excepteur aliquip proident duis enim est. Laboris cillum sunt amet velit officia incididunt. Irure veniam ut qui ex eiusmod. Eu cupidatat consequat magna proident veniam commodo aute veniam excepteur est dolore irure. Consectetur occaecat fugiat ex dolor dolor laborum pariatur.'
        },
        {
          questionId: '5e3c5775dcead74149e7c85c',
          question: 'eu incididunt eiusmod?',
          answer: 'Sit magna anim veniam labore nulla eiusmod. Aliquip nostrud ad ut adipisicing nostrud eiusmod consectetur ut cillum voluptate Lorem eiusmod amet quis. Est officia dolor ullamco elit nisi enim adipisicing mollit. Mollit adipisicing sunt non nisi qui esse ex dolore.'
        },
        {
          questionId: '5e3c577592aaa68982b0716e',
          question: 'qui dolor proident?',
          answer: 'Excepteur consectetur reprehenderit in aliquip. Est dolore nisi sunt nostrud et pariatur officia ea sunt duis. Laboris occaecat nostrud voluptate eu incididunt reprehenderit aliquip amet irure eu ex ullamco veniam. Sit anim non dolore amet laboris commodo ea. Elit proident laboris dolor duis dolore. Quis sint veniam eu elit amet adipisicing do commodo est.'
        },
        {
          questionId: '5e3c5775329b01f36fa48399',
          question: 'excepteur velit et?',
          answer: 'Dolore Lorem labore quis mollit deserunt et magna esse ullamco. Tempor anim cupidatat deserunt adipisicing irure nostrud Lorem. Non sunt fugiat sunt anim veniam quis cillum qui officia commodo aliqua proident nulla. Proident occaecat commodo culpa do eiusmod ex veniam proident. Magna id in ad enim minim.'
        },
        {
          questionId: '5e3c577570de7d557955d343',
          question: 'do sint nostrud?',
          answer: 'Anim est ipsum voluptate sunt eu in. Esse ut labore labore qui et aute mollit. Adipisicing amet cillum officia laboris Lorem amet sunt excepteur. Aliqua Lorem qui ex voluptate non ad enim elit officia sit occaecat. Eiusmod pariatur et elit nisi magna. Est laboris aute sit incididunt anim ut tempor. Excepteur fugiat duis incididunt eu officia.'
        },
        {
          questionId: '5e3c5775e7ab828d3dc5db79',
          question: 'aliqua ad aliquip?',
          answer: 'Laboris proident sit nisi elit sunt nostrud velit Lorem pariatur irure dolor. Et quis ipsum laboris cupidatat consequat nulla minim id deserunt dolor exercitation eu. Reprehenderit mollit magna minim consectetur.'
        },
        {
          questionId: '5e3c57750ad5e52da12f6adc',
          question: 'mollit enim consequat?',
          answer: 'Minim consequat consectetur fugiat excepteur fugiat duis quis mollit non nisi. Aliquip laborum cillum ipsum est anim laboris labore amet. Qui ullamco in aliqua ut nulla. Ut aute sunt exercitation labore magna laborum in eu aliqua magna nulla. Amet aliquip non ullamco amet tempor occaecat fugiat pariatur officia aliquip. Dolore duis velit enim mollit officia ad sit non enim. Ad aliqua fugiat do nulla commodo cupidatat do in fugiat officia fugiat.'
        },
        {
          questionId: '5e3c577513ed271b5f928fb9',
          question: 'sunt nulla dolore?',
          answer: 'Qui magna amet dolor dolore ex dolor. In enim velit excepteur mollit Lorem qui incididunt elit proident labore occaecat dolore ad. Reprehenderit ullamco sit ex ea enim ea sunt qui exercitation incididunt. Consectetur aute ex pariatur irure velit cillum Lorem do. Ex enim dolore consectetur cupidatat id officia incididunt consectetur anim eu.'
        },
        {
          questionId: '5e3c5775c3b73b2071adad9d',
          question: 'ea incididunt sit?',
          answer: 'Cupidatat pariatur ipsum amet magna et Lorem eiusmod tempor duis. Ad ipsum eu veniam incididunt eu duis tempor elit aute occaecat. Irure labore quis amet amet.'
        },
        {
          questionId: '5e3c57755a6555b1634658d7',
          question: 'amet nulla officia?',
          answer: 'Ullamco aliquip commodo proident est incididunt amet. Nisi ullamco sunt commodo pariatur in voluptate amet culpa reprehenderit aliqua aliqua. Excepteur exercitation qui ut aliqua sint esse. Excepteur cillum ullamco amet ut mollit nisi. Aute enim nisi do proident sint anim ad reprehenderit anim in aliqua minim minim.'
        },
        {
          questionId: '5e3c5775e51c0fd1e5d60bcd',
          question: 'pariatur commodo ut?',
          answer: 'Nostrud minim ut eiusmod ad amet incididunt qui. Consequat eu tempor ad mollit nulla officia veniam ipsum sint consectetur nulla exercitation adipisicing. Aute amet incididunt exercitation velit dolor ut qui adipisicing irure commodo non reprehenderit. Labore occaecat reprehenderit qui exercitation et enim duis reprehenderit dolor Lorem laborum veniam eiusmod. Fugiat pariatur cillum culpa ex dolor elit do do exercitation.'
        }
      ]
    },
    {
      categoryName: 'Erna',
      categoryId: '5e3c5775fd88778e026b7588',
      categoryIndex: 0,
      questions: [
        {
          questionId: '5e3c5775034bcb232834bdf1',
          question: 'ut in tempor?',
          answer: 'Irure cupidatat ad occaecat ex nulla pariatur non proident esse reprehenderit laborum dolor ad. Incididunt cupidatat officia tempor nulla nisi id excepteur anim. Aliquip amet nostrud nulla nulla esse do enim cupidatat aute laboris exercitation duis. Proident adipisicing adipisicing laborum aliquip ea ullamco exercitation pariatur eu adipisicing tempor.'
        },
        {
          questionId: '5e3c577573521cd8c956feb7',
          question: 'irure est officia?',
          answer: 'Magna ipsum nisi deserunt est esse eiusmod. Officia enim consectetur et reprehenderit laborum duis ut magna qui amet ea. Cupidatat nulla exercitation dolore cupidatat cillum. Nulla labore sunt consequat reprehenderit ad velit proident consequat et qui consectetur esse dolore non. Aute officia est duis labore. Sint nisi cillum commodo ea tempor fugiat quis fugiat nisi.'
        },
        {
          questionId: '5e3c5775acd85b7ef79a1be3',
          question: 'nisi do est?',
          answer: 'Occaecat ut nulla commodo exercitation elit proident labore proident ullamco Lorem dolore cupidatat sint. Labore proident esse occaecat ad voluptate adipisicing pariatur eiusmod. Consequat laborum amet ea deserunt enim nisi do eiusmod nisi. Nostrud laborum pariatur ea commodo minim dolor proident sit. Labore magna ea irure dolor exercitation mollit do magna. Ut do commodo proident dolor incididunt laboris voluptate laboris aliqua sint fugiat. Pariatur non et velit ea exercitation laboris dolore minim nulla sit cillum officia excepteur.'
        },
        {
          questionId: '5e3c5775e1714c22cb8d8f1a',
          question: 'ipsum esse minim?',
          answer: 'Est incididunt eiusmod enim eiusmod do aliqua laborum et enim proident. Pariatur qui deserunt laboris labore esse officia enim. Proident magna aute ipsum et quis. Laborum eiusmod anim cupidatat sint labore eu elit sunt ad cupidatat occaecat. Amet eiusmod magna cupidatat nostrud ullamco exercitation. Esse excepteur elit magna officia irure aliquip.'
        },
        {
          questionId: '5e3c5775b4e55b6e5adb243c',
          question: 'occaecat qui sunt?',
          answer: 'Sit ad sint consectetur commodo cillum labore non non minim ea eu consectetur. Officia sunt ea non culpa commodo ullamco velit reprehenderit mollit sunt aliqua tempor. Sit aliquip sint incididunt enim occaecat sunt laborum laboris minim. Veniam occaecat ad commodo velit tempor exercitation cupidatat minim non dolore officia et dolor. Ut sit ipsum consequat anim laboris voluptate do aliqua ipsum irure dolore tempor aliquip pariatur. Deserunt mollit magna officia veniam laboris Lorem ut in occaecat ut eu commodo quis laborum. Duis nisi non commodo amet enim qui enim nostrud amet in veniam.'
        },
        {
          questionId: '5e3c5775ee13aaf76e24c75b',
          question: 'commodo minim ut?',
          answer: 'Ad tempor eiusmod culpa dolor cillum ut non duis cupidatat veniam officia. Cupidatat aliqua eiusmod et eu quis enim. Lorem amet incididunt nulla qui anim do nostrud proident aute. In commodo et cupidatat aute amet aliquip aliqua ad id in ea. Sunt aliquip commodo sint proident ut excepteur eiusmod dolore eiusmod. Pariatur voluptate proident ullamco officia commodo voluptate labore. Tempor adipisicing veniam anim occaecat dolore laboris consectetur nulla.'
        },
        {
          questionId: '5e3c5775decbfbc213b5630a',
          question: 'labore culpa do?',
          answer: 'Eiusmod anim nulla irure enim cillum minim. Commodo nulla deserunt cupidatat eu tempor velit pariatur sint laborum. Veniam ut sint dolore dolore sint qui irure. Exercitation elit duis sunt veniam incididunt pariatur. Magna est dolore nulla minim dolore. Cillum dolor voluptate tempor pariatur ea eiusmod adipisicing. Aliquip cupidatat consequat labore do non id non ad aliqua nulla.'
        },
        {
          questionId: '5e3c57752196635626876d34',
          question: 'aliquip occaecat sunt?',
          answer: 'Ut ipsum aute cillum quis consectetur cupidatat labore consequat consectetur sint magna nostrud sunt sint. Proident magna ea exercitation aliqua ea incididunt ullamco consequat non ad. Elit reprehenderit consectetur esse ut aliquip laborum est aute proident. Exercitation consectetur tempor elit aliqua ut minim velit pariatur enim excepteur quis aliquip. Labore consectetur velit adipisicing excepteur occaecat eu nostrud eiusmod exercitation aute amet ullamco culpa. Proident incididunt anim est cupidatat nulla in anim velit eiusmod incididunt.'
        },
        {
          questionId: '5e3c577575daa4b8b02f1297',
          question: 'cillum qui cillum?',
          answer: 'Irure eiusmod et minim sunt adipisicing magna enim do irure proident irure amet eiusmod. Tempor consequat esse officia sint amet duis et qui proident aliqua nostrud labore minim. Quis nostrud fugiat enim commodo labore nostrud quis.'
        },
        {
          questionId: '5e3c5775a7041672fcf97bae',
          question: 'in exercitation sint?',
          answer: 'Ad magna magna ea laboris ipsum. Est pariatur excepteur reprehenderit labore est incididunt aute quis eu consequat do incididunt. Culpa elit adipisicing amet esse quis.'
        },
        {
          questionId: '5e3c5775bdadd1df08820e14',
          question: 'qui mollit in?',
          answer: 'Labore eiusmod deserunt cupidatat duis non cillum velit. Consequat voluptate proident aliqua amet esse laboris. Velit esse eiusmod eu reprehenderit irure aliqua minim labore eiusmod deserunt in commodo velit. Reprehenderit et magna dolore reprehenderit quis. Cupidatat sit et esse incididunt pariatur esse sit non ex excepteur adipisicing. Adipisicing qui consectetur Lorem nostrud ullamco tempor aute ullamco Lorem mollit dolore. Incididunt ad dolore nulla consequat eu.'
        },
        {
          questionId: '5e3c57753a5c581b7e156122',
          question: 'est minim sint?',
          answer: 'Aliquip enim amet non nulla voluptate deserunt Lorem laboris fugiat dolore veniam. Minim pariatur deserunt labore nostrud aliqua excepteur excepteur enim magna amet excepteur consectetur sit. Ullamco ipsum sint elit ad ullamco pariatur mollit minim minim. Fugiat nulla Lorem consectetur id excepteur labore. Cupidatat anim incididunt incididunt commodo. Voluptate pariatur sunt do aliquip.'
        }
      ]
    },
    {
      categoryName: 'Simone',
      categoryId: '5e3c5775a3fbc67f30b893e9',
      categoryIndex: 1,
      questions: [
        {
          questionId: '5e3c5775fa017bf5ea0ae849',
          question: 'culpa nostrud labore?',
          answer: 'Dolore minim aute magna cupidatat ipsum esse nisi consectetur cillum. Quis consectetur amet exercitation est nisi. Reprehenderit sint pariatur aliquip irure reprehenderit proident sunt eu labore. Deserunt id reprehenderit quis deserunt voluptate. Esse enim sit magna esse enim proident adipisicing nulla cillum Lorem laboris. Duis anim irure occaecat aliqua proident est id labore cupidatat. Enim ad mollit velit aute cillum fugiat nisi reprehenderit ipsum nostrud aliqua duis.'
        },
        {
          questionId: '5e3c577594e56b13ac368b7f',
          question: 'aliqua qui adipisicing?',
          answer: 'In laboris mollit officia elit reprehenderit. Veniam anim ea excepteur in sint ad cillum irure culpa. Ipsum do aliquip nulla sit cupidatat proident. Incididunt nulla occaecat pariatur proident irure do qui eu consequat ullamco ex mollit adipisicing sit. Aliqua commodo labore aliqua veniam. Enim Lorem voluptate dolore velit magna laborum.'
        },
        {
          questionId: '5e3c57754f2d80061add0d6d',
          question: 'magna eiusmod ut?',
          answer: 'Consectetur id eu nulla quis non duis ipsum incididunt minim. Ipsum consequat sunt elit id incididunt excepteur velit magna cillum voluptate. Deserunt labore Lorem in ut elit incididunt commodo sint eu officia eu culpa quis ipsum.'
        },
        {
          questionId: '5e3c5775c4aab52da5f2db1f',
          question: 'id occaecat id?',
          answer: 'Non quis labore occaecat nisi dolor dolor cupidatat amet veniam duis. Minim reprehenderit esse duis laboris adipisicing ullamco ullamco elit voluptate excepteur irure anim excepteur. Sit elit cillum cupidatat do fugiat laborum id deserunt duis. Ipsum nisi aliqua laborum enim ex. In laboris esse anim in.'
        },
        {
          questionId: '5e3c5775d5b3d638510eef5f',
          question: 'enim deserunt esse?',
          answer: 'Tempor voluptate Lorem proident irure non. Consectetur nulla quis nisi dolore incididunt ullamco eiusmod esse occaecat. Laboris in laborum cillum pariatur qui aliqua occaecat dolor deserunt ipsum aliquip velit consequat aliquip. Irure tempor ex cupidatat et velit qui ut. Lorem nostrud Lorem ad ullamco magna.'
        },
        {
          questionId: '5e3c5775e112d507d7514827',
          question: 'duis duis non?',
          answer: 'Eiusmod veniam nostrud laboris laboris irure ea occaecat adipisicing culpa irure est. Consequat ex ex id reprehenderit ea proident velit. Ad voluptate et Lorem id ea elit eiusmod ut in ut consectetur. Minim cillum eiusmod cupidatat ea.'
        },
        {
          questionId: '5e3c5775ac28c00615f9fb48',
          question: 'minim ad velit?',
          answer: 'Aute qui consectetur sit elit ut nulla minim commodo excepteur et nostrud excepteur. Sunt amet excepteur cillum commodo cupidatat in eu cupidatat dolore ullamco. Veniam consequat est excepteur officia proident et fugiat amet eu mollit enim excepteur magna excepteur. Irure deserunt esse consectetur id exercitation labore in cillum proident laborum dolore veniam. Dolore exercitation ut elit duis sunt id culpa laboris aliqua laborum cillum.'
        },
        {
          questionId: '5e3c57751ffd8ade0083418b',
          question: 'culpa in excepteur?',
          answer: 'Qui sint in quis magna nostrud aute ad laboris anim ullamco ea. Est sint irure qui eu cillum ullamco amet proident in esse consectetur. Consectetur cupidatat dolor incididunt ipsum non esse reprehenderit enim. Ipsum amet consectetur eu in ad tempor exercitation sunt fugiat mollit qui magna.'
        },
        {
          questionId: '5e3c5775243c43d2ac062dd5',
          question: 'anim voluptate duis?',
          answer: 'Eiusmod duis officia duis excepteur nisi excepteur fugiat minim aliqua dolore quis. Voluptate ex consectetur proident aliquip. Pariatur cupidatat nulla commodo ipsum incididunt magna. Mollit ad est ipsum id. Enim proident nisi id laborum.'
        },
        {
          questionId: '5e3c57752d0258b3a1127e3d',
          question: 'exercitation aliquip sint?',
          answer: 'Velit eiusmod ex laboris ex ipsum consectetur labore dolore aliqua ea. Magna nostrud consectetur fugiat duis deserunt sunt. Sunt excepteur dolor nulla non. Culpa aute esse elit consectetur reprehenderit. Aliquip excepteur irure ut aliqua elit. Sit id sunt esse sit non ex ad sit ad laborum eu aliquip.'
        }
      ]
    }
  ]
  */
})

export type RootState = ReturnType<(...args: any) => IInstitution>

export const getters: GetterTree<RootState, RootState> = {
  type: state => state.type,
  faqs: state => state.faqs
}

export const mutations: MutationTree<RootState> = {
  UPDATE_NAME: (state, newName: string) => (state.name = newName),
  UPDATE_FAQ: (state, newFaqList: Array<any>) => (Vue.set(state, 'faqs', newFaqList))
}

export const actions: ActionTree<RootState, RootState> = {
  updateName ({ commit }, payload: string) {
    commit('UPDATE_NAME', payload)
  },
  updateFaqList ({ commit }, payload: any) {
    commit('UPDATE_FAQ', payload)
  }
}

/*
  faqs: [
    {
      categoryName: 'Rosalind',
      categoryId: 'rosalind',
      questions: [
        {
          questionId: '11',
          question: 'fugiat est voluptate?',
          answer: 'Reprehenderit cillum dolore aliquip nostrud proident sunt Lorem id commodo ea in eu. Consequat pariatur in aute nulla consequat reprehenderit esse sunt. Officia nulla proident tempor dolor sit do. Est esse et qui aliqua aliqua aute deserunt deserunt ad in aliqua.'
        }
      ]
    },
    {
      categoryName: 'Morse',
      categoryId: 'morse',
      questions: [
        {
          questionId: '21',
          question: 'adipisicing velit pariatur?',
          answer: '<b>Eu</b> <i>sit</i> eu cillum ut laboris ullamco sunt irure officia excepteur et culpa fugiat. Non labore commodo dolor duis aute mollit laboris labore eiusmod cupidatat eiusmod. Consectetur qui Lorem duis cupidatat ipsum excepteur minim sunt voluptate ut ad Lorem. Labore ex ex laboris voluptate ipsum nostrud culpa culpa. Proident voluptate excepteur fugiat ea esse duis.'
        },
        {
          questionId: '22',
          question: 'duis proident eu?',
          answer: 'Irure in aliquip commodo consectetur eiusmod minim ea est minim. Anim laborum adipisicing minim elit exercitation eiusmod consequat mollit voluptate fugiat dolore nostrud ut laborum. Laboris elit eiusmod ex sunt dolor aliqua ut occaecat quis. Duis eu aliqua irure consequat velit sunt id eiusmod culpa nisi.'
        }
      ]
    },
    {
      categoryName: 'Bishop',
      categoryId: 'bishop',
      questions: [
        {
          questionId: '31',
          question: 'consectetur laborum incididunt?',
          answer: 'Commodo non deserunt cillum aliquip veniam et ut. Est anim occaecat aute nostrud anim aute aliqua cupidatat. Cillum excepteur magna in eu consequat nostrud minim fugiat eiusmod. Ex do eu voluptate eiusmod officia adipisicing sint ea qui dolor aliqua. Quis do reprehenderit culpa minim ea Lorem esse occaecat sint. Ipsum officia voluptate laboris et sint voluptate incididunt eu pariatur deserunt proident.'
        }
      ]
    },
    {
      categoryName: 'Cochran',
      categoryId: 'cochran',
      questions: [
        {
          questionId: '41',
          question: 'esse labore in?',
          answer: 'Qui officia mollit aute consequat occaecat adipisicing id veniam cillum laborum in culpa. Voluptate incididunt et minim aliquip fugiat est qui. Eu anim ut qui culpa duis Lorem officia. Anim id in reprehenderit non elit deserunt ex exercitation nostrud esse. Occaecat aliqua aliquip ut adipisicing laboris laborum mollit laboris deserunt minim sint laboris ullamco.'
        },
        {
          questionId: '42',
          question: 'enim occaecat sint?',
          answer: 'Mollit anim voluptate ea do ipsum pariatur consectetur amet mollit. Eu occaecat ipsum culpa tempor officia eu exercitation deserunt. Ea non irure deserunt id. Qui consectetur consequat officia ea veniam dolor fugiat veniam cillum laboris eu. Ea pariatur quis in excepteur velit commodo. Pariatur mollit Lorem occaecat laboris Lorem aliquip tempor culpa sunt incididunt officia excepteur minim. Aute et nulla aute et ea ex sint.'
        },
        {
          questionId: '44',
          question: 'quis pariatur dolor?',
          answer: 'Est elit commodo anim magna et. Dolore irure ipsum sunt tempor fugiat. Esse et Lorem ipsum aute amet esse ea nisi eu laboris eu. Aliquip ea sint eu amet ea. Consequat nisi minim enim laborum deserunt tempor consectetur non.'
        }
      ]
    }
  ]
  */
