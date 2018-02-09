import React from "react";

// snake plant color array
const colors = ["#e7e8d4", "#003333", "#8f9a5e", "#ffff94", "#4D8C57", "#00755E", "#C9A0DC", "#AFE313", "#B33B24", "#FD0E35", "#00CC99", "#01786F", "#76D7EA", "#805533"];

// snake plant random color picker
const snakeColor = colors[Math.floor(Math.random() * colors.length)]

export default function SnakeyA(props) {
	return ( <
		svg width = "100%"
		height = "auto"
		version = "1.1"
		viewBox = "0 -20 200 100"
		preserveAspectRatio="xMinYMax slice">
    xmlns = "http://www.w3.org/2000/svg" >
		<g transform = "translate(-21.36670814154523,-5.415203829674397)"
			fill = { snakeColor }
			fillOpacity = "0.5" >
			<
				path d = "m 46.72042943283209,169.1438288904859 c -0.090858048618,-0.090858040553 -0.76036218996022,-0.1747389979943 -1.48778698076039,-0.1864021276478 -1.32259052872741,-0.021205690279 -1.32259052872741,-0.021205690279 -1.49761264493678,-2.1621934571555 -0.096262163915,-1.1775432717817 -0.29683593689311,-3.387798289939 -0.4457194955068,-4.9116778181272 -0.1488835586136,-1.5238795281882 -0.4928454397828,-6.3977752092531 -0.7643597359315,-10.830879291255 -0.5845812511865,-9.5446522251572 -0.6161355086375,-9.9792840394333 -1.40806413671659,-19.394830358759 -0.3379064379509,-4.0175005743144 -0.84617561102111,-8.8913962553792 -1.12948705126722,-10.830879291255 -0.70315503898279,-4.81363289994 -1.9482371639928,-12.043902901309 -2.36393344492988,-13.7275097993815 -0.18812914498892,-0.7619397640941 -0.53241011733089,-2.2921163151261 -0.76506882742621,-3.4003923356266 -0.2326587100954,-1.1082760205006 -0.85527955251419,-3.3752042442516 -1.3836018720414,-5.03761827500236 C 34.946472923788,96.99903210552513 34.43605059795632,94.90212349855545 34.3405234081338,94.00164923189875 34.1399963136383,92.11140742015854 33.341911472077,88.31263994426254 32.8222418670837,86.77485047938641 32.626023174223,86.19420647828745 32.2297700696502,84.21064428250534 31.94167941247758,82.36693448875934 31.65358875530498,80.52322469501352 31.37131768467767,78.78804204139173 31.31441036663937,78.5109730362666 31.1514457577522,77.71753480000049 27.21142974023284,71.08059962549322 26.13619261359984,69.7882938914128 24.25600042319192,67.52852896267917 21.36670814154523,60.91403105899259 21.36670814154523,58.86944527146944 c 0,-0.89700509341672 0,-0.89700509341672 0.94455351041058,-0.40916123570621 2.52028242603578,1.3016777638175 8.61401022125756,7.51193019336238 11.39478658624099,11.61267838987441 0.6106245587389,0.90047426665667 1.52756687740759,2.14728478971989 2.03764959704161,2.77069005125139 0.51008271963399,0.62340526153152 1.0583304645024,1.38849353704748 1.2183283219297,1.70019616781319 0.15999785742751,0.31170263076588 0.40026366346099,0.56673205593782 0.53392401340808,0.56673205593782 0.6081498466173,0 0.077299445638,-3.66439773989862 -1.3865910730921,-9.57147472250449 -0.32615010460289,-1.31607777434431 -0.66992957114029,-3.01627394215761 -0.76395437008298,-3.7782137062523 -0.17490157572232,-1.4173331593761 -0.38841220649851,-2.42702331278381 -1.49136749786713,-7.05266558500268 -0.96325551869198,-4.03976070569594 -1.15088859222348,-5.61418664790731 -1.12567671675859,-9.44553426563002 0.032908624305,-5.00099167593249 0.11412027753061,-5.17565492853633 1.3972563696518,-3.00510250132131 3.12014966175939,5.27804374235179 5.64174353596921,11.53243233604151 6.89844644034788,17.11043367132791 0.28090176236271,1.24681052306309 0.61546839707022,2.66364066290738 0.74348141046111,3.1485114218764 0.12801301339089,0.48487075896897 0.2855061935897,1.2216224316885 0.349984844886,1.6372259393758 0.064478651296,0.41560350768771 0.4593096228302,2.24990741607614 0.87740215896421,4.07623090753019 0.41809253613399,1.82632349145382 0.8698951348837,4.26327133198633 1.00400577499938,5.41543964562747 0.3954661428746,3.39751982799433 1.04040747360173,8.46734570896703 1.4039880428217,11.03662391747679 0.1862391954087,1.31607777434442 0.35828162973111,3.06627686774827 0.38231652071619,3.88933131867526 0.024034890985,0.82305445092706 0.096664401717,1.58216115332145 0.16139891273662,1.68690378309887 0.06473451102,0.10474262977731 0.17145203907279,2.48764431595508 0.23715006233978,5.295337080395 0.065698023267,2.8076927644402 0.18421242805711,5.30894126199627 0.263365343978,5.55832999456918 0.29498754669829,0.9294233767639 0.611407230035,0.1076113434191 0.611407230035,-1.58796005867367 0,-0.96385722427694 0.23440810924681,-3.19575948071952 0.5209069094375,-4.95978279209488 0.92646181912331,-5.70438774942652 0.9985387014841,-7.02971084405803 0.47548386839331,-8.74302177433312 -1.59187565423791,-5.21432512520423 -2.00235255608392,-8.23372023658835 -2.01047011545892,-14.78866072829509 -0.00616328913,-4.9768645532947 0.12126730965572,-6.52389448466698 0.9121338946735,-11.0734662621819 0.15309635348761,-0.8807084055169 0.074668928381,-1.01056147276519 -1.82554377042166,-3.0225709650014 -3.43817350561092,-3.64045442576019 -4.11765325325122,-4.46906091819169 -4.11765325325122,-5.02136263968363 0,-0.79165747916863 1.33258239135251,-0.46796560289103 4.26876288283081,1.03690689288013 2.76910186614809,1.41924014836691 2.7815817163883,1.41717175592639 2.79135904213349,-0.46263583540302 0.0230442727291,-4.43053652309633 1.27993385285859,-11.81115348151205 2.20851857615539,-12.96870458140686 0.13375169102799,-0.1667316004431 0.3091410233129,-0.98322683156725 0.38975407174371,-1.8144338469424 0.30686134761217,-3.16406971138047 1.19579957385539,-6.73402800483789 2.37310540916248,-9.53034427655471 0.35083073707932,-0.83328704342785 0.36603214153322,-1.23225443739549 0.11036704395602,-2.89663050812638 -0.16307724789572,-1.06163051449167 -0.41557514360984,-2.72366217738848 -0.56110643492021,-3.69340369532647 -0.1455312913106,-0.9697415179379 -0.54425014544561,-2.95330371372011 -0.8860418980782,-4.40791599062701 -0.3417917526323,-1.45461227690688 -0.90967280506101,-4.00490652862688 -1.26195789428601,-5.66732055937757 -0.3522850892249,-1.662414030750801 -0.80319139126361,-3.574673664893594 -1.00201400453059,-4.24946585365082 -0.43863275923842,-1.488693639036002 -0.11419514384311,-2.54583938545219 0.39480314630488,-1.286424406366387 0.16674773767112,0.412584094320712 0.6205421083204,1.486904571484102 1.00843193477651,2.387378838140708 1.26388449437809,2.9340688659251 2.01248533375258,6.07842076565121 2.5080107191594,10.534410134927178 0.30621513700109,2.75362561711861 0.83462692266167,4.1321549321911 3.39633725665909,8.86042022383186 1.01325767627132,1.87021578459455 1.92149874588171,3.68375836359542 2.01831348802362,4.03009462000181 0.096814742142,0.34633625640648 0.61403356594071,1.81983960184463 1.14937516399749,3.27445187875154 0.53534159805691,1.45461227690697 1.21300533089491,3.61548135497491 1.50591940630671,4.80193128459556 0.53766046866242,2.17779642138261 0.86005541294049,2.97634266720462 1.10339004683641,2.73300805492346 0.26916719056559,-0.26916716665633 0.90207535751309,-3.82955867244732 0.90207535751309,-5.07457733712441 0,-2.31351744549837 0.2301360445327,-1.12446645493968 0.64772216659559,3.3466060710374 0.26567191812731,2.84453517802389 0.35747044216663,5.41574258047907 0.26030117177831,7.29083944157399 -0.15380206573982,2.9679524148555 0.190499540525,3.52156422659721 0.47129746662678,0.75781187081643 0.47697324254021,-4.69460704719161 1.03726115497712,-6.0399675644111 1.76154320490718,-4.22980868345153 0.54863191851813,1.37116602541721 1.0098358808424,0.90245256690401 1.26362364686865,-1.28419844183081 0.24015421236813,-2.0691834714853 0.48111542186805,-2.3504138316184 1.22430579185928,-1.42891031910191 0.56632850587108,0.70220730578691 0.61133333117571,0.71559313572223 0.84685496347052,0.2518809137501 0.4339057815437,-0.85430545010098 2.17722824387532,-6.39707313479971 2.4621408848455,-7.82819887116323 0.18444642039519,-0.92648054613676 1.73578888254258,-3.92988925764748 2.25057181027168,-4.35712110367544 0.46617550802104,-0.38689127423729 0.75875920985702,0.45026710260107 0.55194991146359,1.57927283398655 -0.14870847326233,0.81182383927077 -0.74347177709481,6.5727238405033 -1.03141944879889,9.99036804316679 -0.45129994247856,5.35646849632839 -0.34928492544212,14.63272896007514 0.15914774186949,14.47135871448684 0.57218529632928,-0.18160454220802 0.49530606659377,2.58294411243327 -0.18869567188591,6.78542654035087 -0.62414295142364,3.8347121627158 0.14422634193518,2.89768000699451 0.90717942116468,-1.10631215482831 1.04809956947371,-5.5004463252465 1.50188875946255,-4.64620836640271 1.44292616494342,2.7162443026323 -0.050277120067,6.27792789393959 0.030217571622,6.97251424114576 0.83234434566891,7.18227508597468 0.5723304568883,0.14966776330461 0.67648467093998,1.45782088177799 0.23480284862049,2.94907010192719 -0.37003098704768,1.24933468615059 0.15347386225801,4.0475751779038 0.78829236712822,4.21358393138658 0.74453985239194,0.19470152786282 1.09634762079017,1.72307979655483 1.0416201003503,4.52516876718312 -0.055496579096,2.84146533485364 0.21256764954437,3.46704161148193 0.70493698820468,1.6450977386105 0.417797211129,-1.54600014491281 2.30230963653003,-6.54534500540761 3.6299977855561,-9.62987058520811 0.32796563649346,-0.76193976409415 0.74886808144393,-2.39612205280937 0.93533876655673,-3.63151619714543 0.34114406521877,-2.26012673408438 0.77140703512778,-2.98227176792436 1.06941997054716,-1.79489376225777 0.25920331230449,1.03274816441491 0.45146271421558,0.89077791640571 1.65211585520485,-1.21997309557746 0.24531090744793,-0.43125714535624 1.21344468230875,-2.08758762930449 2.15140838857971,-3.680734408774 0.93796370627102,-1.59314677946963 1.85834307813745,-3.2572555935449 2.04528749303643,-3.69801958683431 0.32704334564646,-0.77107909901288 0.77681963839046,-1.24615195114147 0.9838195506603,-1.03915205726055 0.17874969018908,0.17874967430977 -0.59355412193634,3.09316926005816 -1.75486460942028,6.62227961034736 -2.07988534390961,6.32057057411761 -3.890016822787,20.1217375238657 -3.0684525113533,23.39511017886072 0.39270590519997,1.56466481521518 1.06628205843934,1.32467015243057 2.31528798841229,-0.82493532075965 1.41386052053301,-2.43332897012796 2.0282425707949,-3.08328085662447 2.28415144223318,-2.41639308682538 0.18635421514018,0.48563125705303 -0.45611869831755,3.2869036501248 -1.21330699855146,5.29018940435951 -1.34942035537277,3.57014836805743 -1.78763988776149,5.92438206912141 -1.85197241869352,9.94929609312953 -0.06642559145,4.1558647033859 -0.6621110639162,8.1589998609311 -2.11768062511662,14.2312716268817 -1.23791047657674,5.1642525620637 -1.23562255108222,5.8406170066504 0.0137034816611,4.0510706241396 0.3304459946155,-0.473333956693 1.56805118563808,-2.0318471105219 2.75023375782922,-3.4633625640641 4.61511469994939,-5.5884836811646 4.95219022511907,-6.2647354580133 5.62878355786515,-11.2926468944556 0.54841238820239,-4.0753711056199 0.65567613324492,-5.4527002971096 0.90233602315594,-11.5865220325055 0.15811915477569,-3.93203251933399 0.33178504378445,-5.73754017684645 0.633997992703,-6.59132450941358 0.48152502747857,-1.36036038717474 1.04500852905035,-1.72594601034953 1.38282024962639,-0.89716770994769 0.3805721331438,0.93368556055196 0.79022553686501,8.95427815548648 0.60940289166088,11.931482262289 -0.10889634966772,1.79295385862858 -0.078337610705,2.84401623729347 0.085633706709,2.94535607563948 0.34612275593415,0.2139156084579 1.86938513108791,-2.3558975854974 2.5878227434781,-4.36577515356589 2.5330636479226,-7.0864160181018 8.7681347358672,-17.88354487625828 10.3272985876875,-17.88354487625828 0.7618027504086,2e-13 1.0202637324472,5.75900123612148 0.3620996498359,8.06826745977619 -0.215894184904,0.75749674321916 -0.5982282880027,2.1706916841662 -0.8496313402196,3.14043320210412 -2.2105835371488,8.52692366278215 -5.1392572434068,13.20676065694475 -11.0230465358704,17.61413736761305 -2.69240957678474,2.0168062917381 -2.76428719500788,2.1529184049114 -3.06854080619091,5.8107876111478 -0.27557195996482,3.3130459242099 -0.86395473494771,6.091265555151 -1.65367563808003,7.8083083262537 -1.13270123954348,2.4627643354287 -2.32661790313638,6.6822030784045 -2.92212267505539,10.3271174637547 -0.43082956458966,2.63698454094 -1.59007022229551,7.2949917769749 -3.25965809600656,13.0978075150063 -1.57288251894903,5.4667068315135 -3.27828831843006,16.9197635749025 -3.27828831843006,22.0161219948874 0,2.0064573042469 1.69357621126075,1.8424538715091 -20.0690794112336,1.9434601722961 -10.66850639893168,0.049515389343 -19.47162276510871,0.015689583807 -19.56248081372726,-0.075168456744 z M 45.3200487415736,144.4947763982888 c -0.00288927825,-0.4205513299674 -0.20718382180111,-1.2139762082801 -0.45398787454998,-1.7631663962507 -0.4487346413615,-0.9985276144921 -0.4487346413615,-0.9985276144921 -0.53407714980002,0.1349364973835 -0.046938379641,0.6234052615315 -0.00288088841,1.983562195782 0.097905536069,3.0225709650013 0.18324804450761,1.8891068531258 0.18324804450761,1.8891068531258 0.53933038298841,0.6297022843754 0.1958452861645,-0.692672512813 0.35371838354601,-1.6034920205422 0.35082910529259,-2.0240433505095 z m 8.4340833226963,-60.87335192408881 c -0.20573303591648,-1.28658361274924 0.25264904352342,-1.44668677641863 2.03128305193161,-0.7094841999926 0.75553112157958,0.3131501403693 1.42766701904619,0.51538982565236 1.49363532770338,0.44942152285097 0.15711262884539,-0.15711261489844 0.6860124316973,-5.3857139290146 0.64351593302832,-6.3616742432923 -0.0180967337021,-0.41560350768772 -0.061289110646,-1.85411003567127 -0.095983059876,-3.1966811732964 -0.071027354495,-2.7485852214224 -0.21935198872221,-3.03159670147967 -3.3409914017348,-6.37479354920819 -1.7610972764966,-1.88609063519111 -1.7800492471365,-1.86209484985672 -2.37995492308401,3.01334824355325 -0.24328835485881,1.97720837951843 -0.51471594849449,3.71202707480171 -0.60317243030119,3.85515265618511 -0.088456481807,0.14312558138333 0.0132809249401,1.17806624699972 0.22608312610371,2.29986814581389 0.21280220116369,1.12180189881444 0.3967852604788,3.37161580254781 0.40885124292238,4.99958645274083 0.028375179259,3.8284457352444 0.45872206614452,5.15092295008827 1.25179316992582,3.84682216921608 0.39220546139939,-0.64493012799815 0.48167817842559,-1.0915253979461 0.36493996338078,-1.82156602457064 z M 57.49504673892,62.03959328479849 c 0.076502384913,-0.12378344802211 -0.02901332746,-0.7015312414795 -0.23447936082978,-1.28388398546069 C 56.396253724875,58.30598357409171 55.15446282136289,48.41288610024911 55.6172864463163,47.66402181075459 c 0.1220778623513,-0.19752611302416 0.12874215604121,-0.53526533483977 0.014809541533,-0.75053160403467 -0.11393261450821,-0.21526626919492 -0.2735541601992,-2.39234442698843 -0.35471454597991,-4.83795146176333 -0.12357567763069,-3.72370761466182 -0.67425161455887,-8.62113099730448 -1.00676546961732,-8.95364482284462 -0.25030360909847,-0.25030358687821 -0.40099449180957,4.52621643593959 -0.4028870446557,12.7705007835145 -0.001160769181,5.05650934353362 -0.075399834565,10.01068543638163 -0.16497570086428,11.00928020632891 -0.1628652114532,1.81562685444969 -0.1628652114532,1.81562685444969 1.5494749028538,3.58930302093907 1.7191872253213,1.78076854113759 1.98563606274008,1.96474541666651 2.24281860933412,1.54861535190404 z" /
			>
		<
		/g> < /
		svg >
	);
}
