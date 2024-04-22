import React from "react";

const ThumbsUp = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      {...props}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.0659 15.8522H24.066C24.5821 15.8522 25.0083 15.4107 25.0083 14.8606C25.0083 14.3105 24.5821 13.869 24.066 13.869H17.9899C17.5621 13.869 17.3127 13.3574 17.5597 13.0205L18.0659 12.3292L18.066 12.3291C19.5107 10.3614 19.4623 8.44288 19.4293 7.1312C19.4204 6.77618 19.4126 6.46562 19.4358 6.21057C19.4236 5.53354 18.8923 4.99167 18.2477 4.99167C18.0456 4.99167 17.8807 5.03069 17.7385 5.10689C17.5959 5.18326 17.4714 5.29946 17.3537 5.46064C17.1158 5.78632 16.9145 6.28217 16.6495 6.96901L16.6487 6.97122C16.0155 8.61254 15.1403 10.8815 12.2232 12.2938L10.1493 13.2987V23.6683C10.9873 23.8711 11.6976 24.0621 12.3335 24.2334C14.073 24.7017 15.2133 25.0083 16.9211 25.0083H21.7644C22.2815 25.0083 22.7082 24.5663 22.7082 24.0158C22.7082 23.4653 22.2815 23.0235 21.7644 23.0235H21.7583L21.7583 23.0233C21.422 22.9958 21.0982 23.0007 20.8001 23.0121C20.7145 23.0153 20.6306 23.0191 20.5491 23.0228C20.3484 23.0319 20.1616 23.0404 19.9974 23.0384C19.768 23.0357 19.5655 23.0132 19.4191 22.9336C19.3438 22.8928 19.2825 22.8364 19.2406 22.7604C19.199 22.6849 19.1794 22.5948 19.1794 22.4902C19.1794 22.1968 19.4161 21.9587 19.7093 21.9569L24.0659 15.8522ZM24.0659 15.8522L22.6722 15.853M24.0659 15.8522L22.6722 15.853M22.5831 19.9719C23.0997 19.9719 23.5264 20.4138 23.5264 20.9644C23.5264 21.5149 23.0997 21.9569 22.5831 21.9569H22.5813H22.5794H22.5774H22.5755H22.5734H22.5713H22.5692H22.567H22.5647H22.5624H22.5601H22.5576H22.5552H22.5527H22.5501H22.5475H22.5448H22.5421H22.5394H22.5366H22.5337H22.5308H22.5278H22.5248H22.5217H22.5186H22.5155H22.5123H22.509H22.5057H22.5024H22.499H22.4956H22.4921H22.4885H22.485H22.4813H22.4777H22.4739H22.4702H22.4664H22.4625H22.4586H22.4547H22.4507H22.4467H22.4426H22.4385H22.4343H22.4301H22.4259H22.4216H22.4173H22.4129H22.4085H22.4041H22.3996H22.395H22.3905H22.3858H22.3812H22.3765H22.3717H22.367H22.3622H22.3573H22.3524H22.3475H22.3425H22.3375H22.3324H22.3274H22.3222H22.3171H22.3119H22.3067H22.3014H22.2961H22.2907H22.2853H22.2799H22.2745H22.269H22.2635H22.2579H22.2523H22.2467H22.241H22.2354H22.2296H22.2239H22.2181H22.2122H22.2064H22.2005H22.1946H22.1886H22.1826H22.1766H22.1706H22.1645H22.1584H22.1522H22.146H22.1398H22.1336H22.1273H22.1211H22.1147H22.1084H22.102H22.0956H22.0892H22.0827H22.0762H22.0697H22.0631H22.0565H22.0499H22.0433H22.0367H22.03H22.0233H22.0165H22.0098H22.003H21.9962H21.9893H21.9825H21.9756H21.9687H21.9618H21.9548H21.9478H21.9408H21.9338H21.9267H21.9197H21.9126H21.9055H21.8983H21.8912H21.884H21.8768H21.8696H21.8623H21.855H21.8478H21.8405H21.8331H21.8258H21.8184H21.811H21.8036H21.7962H21.7888H21.7813H21.7738H21.7663H21.7588H21.7513H21.7438H21.7362H21.7286H21.721H21.7134H21.7058H21.6981H21.6905H21.6828H21.6751H21.6674H21.6597H21.652H21.6442H21.6365H21.6287H21.6209H21.6131H21.6053H21.5974H21.5896H21.5818H21.5739H21.566H21.5581H21.5502H21.5423H21.5344H21.5265H21.5185H21.5106H21.5026H21.4946H21.4867H21.4787H21.4707H21.4627H21.4547H21.4466H21.4386H21.4306H21.4225H21.4145H21.4064H21.3983H21.3902H21.3822H21.3741H21.366H21.3579H21.3498H21.3417H21.3335H21.3254H21.3173H21.3092H21.301H21.2929H21.2847H21.2766H21.2684H21.2603H21.2521H21.244H21.2358H21.2277H21.2195H21.2113H21.2032H21.195H21.1868H21.1786H21.1705H21.1623H21.1541H21.146H21.1378H21.1296H21.1215H21.1133H21.1051H21.097H21.0888H21.0806H21.0725H21.0643H21.0562H21.048H21.0399H21.0317H21.0236H21.0154H21.0073H20.9992H20.9911H20.9829H20.9748H20.9667H20.9586H20.9505H20.9424H20.9343H20.9263H20.9182H20.9101H20.9021H20.894H20.886H20.8779H20.8699H20.8619H20.8539H20.8459H20.8379H20.8299H20.8219H20.8139H20.806H20.798H20.7901H20.7822H20.7743H20.7664H20.7585H20.7506H20.7427H20.7349H20.727H20.7192H20.7114H20.7036H20.6958H20.688H20.6802H20.6725H20.6647H20.657H20.6493H20.6416H20.6339H20.6263H20.6186H20.611H20.6033H20.5957H20.5882H20.5806H20.573H20.5655H20.558H20.5505H20.543H20.5355H20.5281H20.5207H20.5132H20.5059H20.4985H20.4911H20.4838H20.4765H20.4692H20.4619H20.4547H20.4474H20.4402H20.433H20.4259H20.4187H20.4116H20.4045H20.3974H20.3903H20.3833H20.3763H20.3693H20.3623H20.3554H20.3485H20.3416H20.3347H20.3279H20.321H20.3142H20.3075H20.3007H20.294H20.2873H20.2806H20.274H20.2674H20.2608H20.2542H20.2477H20.2412H20.2347H20.2283H20.2218H20.2155H20.2091H20.2028H20.1964H20.1902H20.1839H20.1777H20.1715H20.1654H20.1592H20.1531H20.1471H20.141H20.135H20.1291H20.1231H20.1172H20.1114H20.1055H20.0997H20.0939H20.0882H20.0825H20.0768H20.0712H20.0656H20.06H20.0545H20.049H20.0435H20.0381H20.0327H20.0273H20.022H20.0167H20.0115H20.0062H20.0011H19.9959H19.9908H19.9858H19.9807H19.9757H19.9708H19.9659H19.961H19.9562H19.9514H19.9466H19.9419H19.9372H19.9326H19.928H19.9235H19.919H19.9145H19.9101H19.9057H19.9013H19.897H19.8928H19.8885H19.8844H19.8802H19.8761H19.8721H19.8681H19.8641H19.8602H19.8564H19.8525H19.8487H19.845H19.8413H19.8377H19.8341H19.8305H19.827H19.8236H19.8202H19.8168H19.8135H19.8102H19.807H19.8038H19.8007H19.7976H19.7946H19.7916H19.7886H19.7858H19.7829H19.7801H19.7774H19.7747H19.7721H19.7695H19.767H19.7645H19.7621H19.7597H19.7573H19.7551H19.7528H19.7507H19.7486H19.7465H19.7445H19.7425H19.7406H19.7388H19.737H19.7352H19.7335H19.7319H19.7303H19.7288H19.7273H19.7259H19.7246H19.7233H19.722H19.7208H19.7197H19.7186H19.7176H19.7167H19.7158H19.7149H19.7141H19.7134H19.7127H19.7127L22.5831 19.9719ZM22.5831 19.9719H22.5828H22.5824H22.5819H22.5814H22.5808H22.5802H22.5796H22.5789H22.5781H22.5774H22.5765H22.5757H22.5748H22.5738H22.5728H22.5718H22.5707H22.5696H22.5685H22.5673H22.566H22.5648H22.5634H22.5621H22.5607H22.5593H22.5578H22.5563H22.5547H22.5531H22.5515H22.5498H22.5481H22.5464H22.5446H22.5428H22.5409H22.539H22.5371H22.5352H22.5331H22.5311H22.529H22.5269H22.5248H22.5226H22.5204H22.5181H22.5158H22.5135H22.5111H22.5087H22.5063H22.5038H22.5013H22.4988H22.4962H22.4936H22.4909H22.4883H22.4856H22.4828H22.4801H22.4772H22.4744H22.4715H22.4686H22.4657H22.4627H22.4597H22.4567H22.4536H22.4505H22.4474H22.4443H22.4411H22.4379H22.4346H22.4313H22.428H22.4247H22.4213H22.4179H22.4145H22.411H22.4075H22.404H22.4005H22.3969H22.3933H22.3897H22.386H22.3823H22.3786H22.3749H22.3711H22.3673H22.3635H22.3597H22.3558H22.3519H22.3479H22.344H22.34H22.336H22.332H22.3279H22.3238H22.3197H22.3156H22.3114H22.3073H22.303H22.2988H22.2946H22.2903H22.286H22.2817H22.2773H22.2729H22.2685H22.2641H22.2597H22.2552H22.2507H22.2462H22.2417H22.2371H22.2326H22.228H22.2234H22.2187H22.2141H22.2094H22.2047H22.2H22.1952H22.1905H22.1857H22.1809H22.1761H22.1712H22.1664H22.1615H22.1566H22.1517H22.1467H22.1418H22.1368H22.1318H22.1268H22.1218H22.1167H22.1117H22.1066H22.1015H22.0964H22.0913H22.0861H22.081H22.0758H22.0706H22.0654H22.0602H22.0549H22.0497H22.0444H22.0391H22.0338H22.0285H22.0232H22.0179H22.0125H22.0071H22.0018H21.9964H21.9909H21.9855H21.9801H21.9746H21.9692H21.9637H21.9582H21.9527H21.9472H21.9417H21.9362H21.9306H21.9251H21.9195H21.9139H21.9083H21.9027H21.8971H21.8915H21.8859H21.8802H21.8746H21.8689H21.8632H21.8576H21.8519H21.8462H21.8405H21.8348H21.829H21.8233H21.8176H21.8118H21.8061H21.8003H21.7945H21.7888H21.783H21.7772H21.7714H21.7656H21.7598H21.754H21.7482H21.7423H21.7365H21.7307H21.7248H21.719H21.7131H21.7073H21.7014H21.6955H21.6897H21.6838H21.6779H21.6721H21.6662H21.6603H21.6544H21.6485H21.6426H21.6367H21.6308H21.6249H21.619H21.6131H21.6072H21.6013H21.5954H21.5894H21.5835H21.5776H21.5717H21.5658H21.5599H21.5539H21.548H21.5421H21.5362H21.5303H21.5244H21.5184H21.5125H21.5066H21.5007H21.4948H21.4889H21.483H21.4771H21.4712H21.4653H21.4594H21.4535H21.4476H21.4417H21.4358H21.4299H21.4241H21.4182H21.4123H21.4065H21.4006H21.3947H21.3889H21.383H21.3772H21.3714H21.3655H21.3597H21.3539H21.3481H21.3423H21.3365H21.3307H21.3249H21.3191H21.3133H21.3076H21.3018H21.296H21.2903H21.2846H21.2788H21.2731H21.2674H21.2617H21.256H21.2503H21.2446H21.239H21.2333H21.2276H21.222H21.2164H21.2107H21.2051H21.1995H21.1939H21.1884H21.1828H21.1772H21.1717H21.1662H21.1606H21.1551H21.1496H21.1441H21.1387H21.1332H21.1278H21.1223H21.1169H21.1115H21.1061H21.1007H21.0953H21.09H21.0846H21.0793H21.074H21.0687H21.0634H21.0581H21.0529H21.0476H21.0424H21.0372H21.032H21.0268H21.0217H21.0165H21.0114H21.0063H21.0012H20.9961H20.9911H20.986H20.981H20.976H20.971H20.966H20.9611H20.9561H20.9512H20.9463H20.9414H20.9366H20.9317H20.9269H20.9221H20.9173H20.9126H20.9078H20.9031H20.8984H20.8937H20.8891H20.8844H20.8798H20.8752H20.8706H20.8661H20.8615H20.857H20.8525H20.8481H20.8436H20.8392H20.8348H20.8304H20.8261H20.8218H20.8175H20.8132H20.8089H20.8047H20.8005H20.7963H20.7921H20.788H20.7839H20.7798H20.7757H20.7717H20.7677H20.7637H20.7598H20.7558H20.7519H20.748H20.7442H20.7404H20.7366H20.7328H20.7291H20.7253H20.7217H20.718H20.7144H20.7108H20.7072H20.7036H20.7001H20.6966H20.6932H20.6897H20.6863H20.683H20.6796H20.6763H20.673H20.6698H20.6666H20.6634H20.6602H20.6571H20.654H20.6509H20.6479H20.6449H20.6419H20.639H20.6361H20.6332H20.6304H20.6275H20.6248H20.622H20.6193H20.6166H20.614H20.6114H20.6088H20.6063H20.6038H20.6013H20.5989H20.5965H20.5941H20.5918H20.5895H20.5872H20.585H20.5828H20.5806H20.5785H20.5764H20.5744H20.5724H20.5704H20.5685H20.5666H20.5647H20.5629H20.5611H20.5594H20.5577H20.556H20.5543H20.5528H20.5512H20.5497H20.5482H20.5468H20.5454H20.544H20.5427H20.5414H20.5402H20.539H20.5378H20.5367H20.5356H20.5346H20.5336H20.5327H20.5318H20.5309C20.2361 19.9719 19.9976 19.733 19.9976 19.4385C19.9976 19.1451 20.2343 18.907 20.5275 18.9052L22.5831 19.9719ZM22.6722 15.853L21.7471 15.8535M22.6722 15.853L21.7471 15.8535M21.7471 15.8535L21.4503 15.8537M21.7471 15.8535L21.4503 15.8537M21.4503 15.8537L21.3713 15.8537M21.4503 15.8537L21.3713 15.8537M21.3713 15.8537L21.3526 15.8538M21.3713 15.8537L21.3526 15.8538M21.3526 15.8538L21.3491 15.8538M21.3526 15.8538L21.3491 15.8538M21.3491 15.8538C21.3491 15.8538 21.3491 15.8538 21.349 15.8538H21.3491ZM23.7748 24.0158C23.7748 23.5758 23.6341 23.1727 23.4039 22.8392C24.1037 22.5169 24.593 21.7995 24.593 20.9644C24.593 20.5243 24.4523 20.121 24.2222 19.7875C24.9219 19.4651 25.4112 18.7479 25.4112 17.9129C25.4112 17.4465 25.2532 17.0215 24.9974 16.6774C25.6363 16.3327 26.075 15.6502 26.075 14.8606C26.075 13.7273 25.1758 12.8023 24.066 12.8023H19.0374C20.5956 10.5751 20.5332 8.35915 20.4968 7.06708C20.4877 6.74523 20.4803 6.4807 20.4999 6.28761L20.5 6.28653C20.5014 6.26971 20.5025 6.25198 20.5025 6.23371C20.5025 4.96225 19.4926 3.925 18.2477 3.925C17.4636 3.925 16.9415 4.2554 16.5526 4.75637C16.1694 5.24996 15.9143 5.91109 15.6573 6.57709L15.6542 6.58514L15.6542 6.58515C15.0453 8.16393 14.2952 10.1056 11.7581 11.3339L11.7581 11.3339L10.1492 12.1134C10.1458 11.5693 9.70223 11.1281 9.15759 11.1281H6.29167C4.98669 11.1281 3.925 12.1898 3.925 13.4948V23.3272C3.925 24.6322 4.98669 25.6939 6.29167 25.6939H9.15759C9.68268 25.6939 10.1139 25.2837 10.1472 24.7667C10.8646 24.9435 11.4916 25.1114 12.0564 25.2634L12.0584 25.264C13.8021 25.7334 15.0708 26.075 16.9211 26.075H21.7644C22.8747 26.075 23.7748 25.1496 23.7748 24.0158ZM6.28778 24.6272C5.57276 24.6251 4.99167 24.0427 4.99167 23.3272V13.4948C4.99167 12.778 5.57487 12.1948 6.29167 12.1948H9.08259V12.9644V12.9646V24.0897C9.08259 24.0927 9.08277 24.0955 9.08304 24.098V24.6272H6.29167H6.28778ZM21.3491 15.8544C21.3536 15.8592 21.3805 15.8893 21.3818 15.9287L21.3491 15.9288V15.8544ZM21.3484 15.8538C21.054 15.8541 20.8157 16.0928 20.8157 16.3871C20.8157 16.6816 21.0543 16.9204 21.3491 16.9204H23.4013C23.9179 16.9204 24.3446 17.3624 24.3446 17.9129C24.3446 18.4634 23.9179 18.9052 23.4013 18.9052H23.3995H23.3976H23.3956H23.3937H23.3916H23.3895H23.3874H23.3852H23.3829H23.3806H23.3783H23.3758H23.3734H23.3709H23.3683H23.3657H23.363H23.3603H23.3576H23.3548H23.3519H23.349H23.346H23.343H23.3399H23.3368H23.3337H23.3305H23.3272H23.3239H23.3206H23.3172H23.3138H23.3103H23.3067H23.3032H23.2995H23.2959H23.2921H23.2884H23.2846H23.2807H23.2768H23.2729H23.2689H23.2649H23.2608H23.2567H23.2525H23.2483H23.2441H23.2398H23.2355H23.2311H23.2267H23.2223H23.2178H23.2132H23.2087H23.204H23.1994H23.1947H23.1899H23.1852H23.1804H23.1755H23.1706H23.1657H23.1607H23.1557H23.1506H23.1456H23.1404H23.1353H23.1301H23.1248H23.1196H23.1143H23.1089H23.1035H23.0981H23.0927H23.0872H23.0817H23.0761H23.0705H23.0649H23.0592H23.0536H23.0478H23.0421H23.0363H23.0304H23.0246H23.0187H23.0128H23.0068H23.0008H22.9948H22.9888H22.9827H22.9766H22.9704H22.9642H22.958H22.9518H22.9455H22.9393H22.9329H22.9266H22.9202H22.9138H22.9074H22.9009H22.8944H22.8879H22.8813H22.8747H22.8681H22.8615H22.8549H22.8482H22.8415H22.8347H22.828H22.8212H22.8144H22.8075H22.8007H22.7938H22.7869H22.78H22.773H22.766H22.759H22.752H22.7449H22.7379H22.7308H22.7237H22.7165H22.7094H22.7022H22.695H22.6878H22.6805H22.6732H22.666H22.6587H22.6513H22.644H22.6366H22.6292H22.6218H22.6144H22.607H22.5995H22.592H22.5845H22.577H22.5695H22.562H22.5544H22.5468H22.5392H22.5316H22.524H22.5163H22.5087H22.501H22.4933H22.4856H22.4779H22.4702H22.4624H22.4547H22.4469H22.4391H22.4313H22.4235H22.4156H22.4078H22.4H22.3921H22.3842H22.3763H22.3684H22.3605H22.3526H22.3447H22.3367H22.3288H22.3208H22.3128H22.3049H22.2969H22.2889H22.2809H22.2729H22.2648H22.2568H22.2488H22.2407H22.2327H22.2246H22.2165H22.2084H22.2004H22.1923H22.1842H22.1761H22.168H22.1599H22.1517H22.1436H22.1355H22.1274H22.1192H22.1111H22.1029H22.0948H22.0866H22.0785H22.0703H22.0622H22.054H22.0459H22.0377H22.0295H22.0214H22.0132H22.005H21.9968H21.9887H21.9805H21.9723H21.9642H21.956H21.9478H21.9397H21.9315H21.9233H21.9152H21.907H21.8988H21.8907H21.8825H21.8744H21.8662H21.8581H21.8499H21.8418H21.8336H21.8255H21.8174H21.8092H21.8011H21.793H21.7849H21.7768H21.7687H21.7606H21.7525H21.7444H21.7364H21.7283H21.7203H21.7122H21.7042H21.6961H21.6881H21.6801H21.6721H21.6641H21.6561H21.6481H21.6401H21.6321H21.6242H21.6162H21.6083H21.6004H21.5925H21.5846H21.5767H21.5688H21.5609H21.5531H21.5452H21.5374H21.5296H21.5218H21.514H21.5062H21.4984H21.4907H21.4829H21.4752H21.4675H21.4598H21.4521H21.4445H21.4368H21.4292H21.4215H21.4139H21.4064H21.3988H21.3912H21.3837H21.3762H21.3687H21.3612H21.3537H21.3463H21.3389H21.3314H21.3241H21.3167H21.3093H21.302H21.2947H21.2874H21.2801H21.2729H21.2656H21.2584H21.2512H21.244H21.2369H21.2298H21.2227H21.2156H21.2085H21.2015H21.1945H21.1875H21.1805H21.1736H21.1667H21.1598H21.1529H21.146H21.1392H21.1324H21.1257H21.1189H21.1122H21.1055H21.0988H21.0922H21.0856H21.079H21.0724H21.0659H21.0594H21.0529H21.0465H21.04H21.0337H21.0273H21.021H21.0146H21.0084H21.0021H20.9959H20.9897H20.9836H20.9774H20.9713H20.9653H20.9592H20.9532H20.9473H20.9413H20.9354H20.9296H20.9237H20.9179H20.9121H20.9064H20.9007H20.895H20.8894H20.8838H20.8782H20.8727H20.8672H20.8617H20.8563H20.8509H20.8455H20.8402H20.8349H20.8297H20.8244H20.8193H20.8141H20.809H20.804H20.7989H20.7939H20.789H20.7841H20.7792H20.7744H20.7696H20.7648H20.7601H20.7554H20.7508H20.7462H20.7417H20.7372H20.7327H20.7283H20.7239H20.7195H20.7152H20.711H20.7067H20.7026H20.6984H20.6943H20.6903H20.6863H20.6823H20.6784H20.6746H20.6707H20.6669H20.6632H20.6595H20.6559H20.6523H20.6487H20.6452H20.6418H20.6383H20.635H20.6317H20.6284H20.6252H20.622H20.6189H20.6158H20.6128H20.6098H20.6068H20.604H20.6011H20.5983H20.5956H20.5929H20.5903H20.5877H20.5852H20.5827H20.5802H20.5779H20.5755H20.5733H20.571H20.5689H20.5668H20.5647H20.5627H20.5607H20.5588H20.557H20.5552H20.5534H20.5517H20.5501H20.5485H20.547H20.5455H20.5441H20.5428H20.5415H20.5402H20.539H20.5379H20.5368H20.5358H20.5349H20.534H20.5331H20.5323H20.5316H20.5309H20.5309H20.5303H20.5303H20.5298H20.5297H20.5293H20.5292H20.5289H20.5288H20.5285H20.5284H20.5282H20.5281H20.5279H20.5279H20.5277H20.5277H20.5276H20.5276L21.3484 15.8538ZM9.08562 24.1112C9.08573 24.1116 9.08561 24.1112 9.08539 24.1104L9.08562 24.1112Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.15"
      />
    </svg>
  );
};

export default ThumbsUp;
