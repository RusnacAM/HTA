import React from "react";

const Badge = (props) => {
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
        d="M14.9687 4.99186C11.2802 4.99186 8.29775 7.97426 8.29775 11.6628C8.29775 15.3513 11.2802 18.3338 14.9687 18.3338C18.6572 18.3338 21.6396 15.3513 21.6396 11.6628C21.6396 7.97426 18.6572 4.99186 14.9687 4.99186ZM14.9687 17.2666C11.8678 17.2666 9.36492 14.7637 9.36492 11.6628C9.36492 8.56189 11.8678 6.05903 14.9687 6.05903C18.0696 6.05903 20.5725 8.56189 20.5725 11.6628C20.5725 14.7637 18.0696 17.2666 14.9687 17.2666Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.3"
      />
      <path
        d="M16.6971 9.48934L15.986 8.02977L15.9863 8.02963L15.9814 8.02104C15.8076 7.71697 15.4948 7.48516 15.1223 7.48516C14.7499 7.48516 14.437 7.71697 14.2633 8.02104L14.263 8.02088L14.2587 8.02977L13.5476 9.48934L11.9572 9.71126C11.5966 9.7568 11.2785 10.0234 11.1823 10.3499C11.0483 10.7135 11.1429 11.0793 11.4106 11.3469L11.4106 11.3469L11.4123 11.3487L12.5503 12.45L12.2893 14.0164L12.2892 14.0164L12.2884 14.0224C12.2438 14.3791 12.3781 14.7421 12.6953 14.9686C13.0138 15.1962 13.3777 15.193 13.6854 15.0612L13.6856 15.0616L13.6962 15.056L15.1032 14.3155L16.5079 15.0549C16.8305 15.2379 17.2396 15.1922 17.5155 14.9654C17.8274 14.7401 17.9665 14.3759 17.8777 14.0107L17.6176 12.45L18.7556 11.3487L18.7556 11.3487L18.7574 11.3469C19.0227 11.0816 19.118 10.7198 18.9891 10.3593C18.9339 10.0278 18.651 9.75718 18.2875 9.71126L16.6971 9.48934ZM16.5204 10.5455L17.9308 10.747L16.8976 11.7468L16.8976 11.7468L16.8958 11.7485C16.6671 11.9773 16.579 12.2946 16.6233 12.6046L16.6232 12.6046L16.6238 12.6081L16.8533 13.9851L15.6205 13.3363C15.4695 13.2387 15.3159 13.2388 15.1753 13.2389C15.1704 13.2389 15.1655 13.2389 15.1607 13.2389C15.0209 13.2389 14.8489 13.2836 14.7297 13.3234L14.7181 13.3272L14.7072 13.3329L13.4681 13.9851L13.6976 12.6081L13.6976 12.6081L13.6981 12.6046C13.7424 12.2946 13.6543 11.9773 13.4256 11.7485L13.4256 11.7485L13.4238 11.7468L12.3906 10.747L13.801 10.5455C14.1144 10.5007 14.3915 10.3189 14.5299 9.99923L15.1607 8.70445L15.793 10.0024L15.793 10.0024L15.7937 10.0038C15.9273 10.271 16.1959 10.4991 16.5204 10.5455Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.3"
      />
      <path
        d="M6.73587 24.9175L6.73208 24.927L6.72962 24.9368C6.68706 25.1071 6.67387 25.3293 6.84579 25.5012C6.99816 25.6536 7.21659 25.7141 7.43307 25.6099L9.98262 24.6629L11.151 27.1092L11.1556 27.1189L11.1616 27.1278C11.2443 27.2519 11.3985 27.4247 11.6316 27.4247C11.7446 27.4247 11.8505 27.3831 11.9327 27.3261C12.0121 27.2712 12.0843 27.1915 12.1174 27.0971L14.6863 20.7503H14.6866H14.6873H14.688H14.6887H14.6894H14.6901H14.6908H14.6915H14.6922H14.6929H14.6936H14.6943H14.6949H14.6956H14.6963H14.697H14.6977H14.6984H14.6991H14.6998H14.7005H14.7012H14.7019H14.7026H14.7033H14.704H14.7047H14.7054H14.7061H14.7068H14.7075H14.7082H14.7089H14.7096H14.7103H14.711H14.7117H14.7125H14.7132H14.7139H14.7146H14.7153H14.716H14.7167H14.7174H14.7181H14.7188H14.7195H14.7202H14.7209H14.7216H14.7223H14.723H14.7238H14.7245H14.7252H14.7259H14.7266H14.7273H14.728H14.7287H14.7294H14.7302H14.7309H14.7316H14.7323H14.733H14.7337H14.7344H14.7351H14.7359H14.7366H14.7373H14.738H14.7387H14.7394H14.7402H14.7409H14.7416H14.7423H14.743H14.7438H14.7445H14.7452H14.7459H14.7466H14.7474H14.7481H14.7488H14.7495H14.7502H14.751H14.7517H14.7524H14.7531H14.7539H14.7546H14.7553H14.756H14.7568H14.7575H14.7582H14.759H14.7597H14.7604H14.7611H14.7619H14.7626H14.7633H14.7641H14.7648H14.7655H14.7663H14.767H14.7677H14.7685H14.7692H14.7699H14.7707H14.7714H14.7721H14.7729H14.7736H14.7744H14.7751H14.7758H14.7766H14.7773H14.778H14.7788H14.7795H14.7803H14.781H14.7818H14.7825H14.7832H14.784H14.7847H14.7855H14.7862H14.787H14.7877H14.7885H14.7892H14.7899H14.7907H14.7914H14.7922H14.7929H14.7937H14.7944H14.7952H14.7959H14.7967H14.7975H14.7982H14.799H14.7997H14.8005H14.8012H14.802H14.8027H14.8035H14.8043H14.805H14.8058H14.8065H14.8073H14.808H14.8088H14.8096H14.8103H14.8111H14.8119H14.8126H14.8134H14.8141H14.8149H14.8157H14.8164H14.8172H14.818H14.8187H14.8195H14.8203H14.8211H14.8218H14.8226H14.8234H14.8241H14.8249H14.8257H14.8265H14.8272H14.828H14.8288H14.8296H14.8303H14.8311H14.8319H14.8327H14.8334H14.8342H14.835H14.8358H14.8366H14.8373H14.8381H14.8389H14.8397H14.8405H14.8413H14.8421H14.8428H14.8436H14.8444H14.8452H14.846H14.8468H14.8476H14.8484H14.8492H14.8499H14.8507H14.8515H14.8523H14.8531H14.8539H14.8547H14.8555H14.8563H14.8571H14.8579H14.8587H14.8595H14.8603H14.8611H14.8619H14.8627H14.8635H14.8643H14.8651H14.8659H14.8667H14.8675H14.8683H14.8691H14.87H14.8708H14.8716H14.8724H14.8732H14.874H14.8748H14.8756H14.8764H14.8773H14.8781H14.8789H14.8797H14.8805H14.8813H14.8822H14.883H14.8838H14.8846H14.8854H14.8863H14.8871H14.8879H14.8887H14.8896H14.8904H14.8912H14.892H14.8929H14.8937H14.8945H14.8954H14.8962H14.897H14.8979H14.8987H14.8995H14.9004H14.9012H14.902H14.9029H14.9037H14.9045H14.9054H14.9062H14.9071H14.9079H14.9087H14.9096H14.9104H14.9113H14.9121H14.913H14.9138H14.9147H14.9155H14.9164H14.9172H14.9181H14.9189H14.9198H14.9206H14.9215H14.9223H14.9232H14.924H14.9249H14.9258H14.9266H14.9275H14.9283H14.9292H14.9301H14.9309H14.9318H14.9326H14.9335H14.9344H14.9352H14.9361H14.937H14.9378H14.9387H14.9396H14.9405H14.9413H14.9422H14.9431H14.9439H14.9448H14.9457H14.9466H14.9475H14.9483H14.9492H14.9501H14.951H14.9519H14.9527H14.9536H14.9545H14.9554H14.9563H14.9572H14.9581H14.9589H14.9598H14.9607H14.9616H14.9625H14.9634H14.9643H14.9652H14.9661H14.967H14.9679H14.9688H14.9695H14.9701H14.9708H14.9715H14.9722H14.9728H14.9735H14.9742H14.9749H14.9755H14.9762H14.9769H14.9775H14.9782H14.9789H14.9796H14.9802H14.9809H14.9816H14.9823H14.9829H14.9836H14.9843H14.985H14.9856H14.9863H14.987H14.9877H14.9883H14.989H14.9897H14.9904H14.991H14.9917H14.9924H14.9931H14.9937H14.9944H14.9951H14.9958H14.9964H14.9971H14.9978H14.9985H14.9992H14.9998H15.0005H15.0012H15.0019H15.0025H15.0032H15.0039H15.0046H15.0052H15.0059H15.0066H15.0073H15.0079H15.0086H15.0093H15.01H15.0107H15.0113H15.012H15.0127H15.0134H15.014H15.0147H15.0154H15.0161H15.0168H15.0174H15.0181H15.0188H15.0195H15.0202H15.0208H15.0215H15.0222H15.0229H15.0236H15.0242H15.0249H15.0256H15.0263H15.027H15.0276H15.0283H15.029H15.0297H15.0304H15.031H15.0317H15.0324H15.0331H15.0338H15.0344H15.0351H15.0358H15.0365H15.0372H15.0379H15.0385H15.0392H15.0399H15.0406H15.0413H15.042H15.0426H15.0433H15.044H15.0447H15.0454H15.0461H15.0468H15.0474H15.0481H15.0488H15.0495H15.0502H15.0509H15.0516H15.0522H15.0529H15.0536H15.0543H15.055H15.0557H15.0564H15.0571H15.0578H15.0584H15.0591H15.0598H15.0605H15.0612H15.0619H15.0626H15.0633H15.064H15.0647H15.0653H15.066H15.0667H15.0674H15.0681H15.0688H15.0695H15.0702H15.0709H15.0716H15.0723H15.073H15.0737H15.0744H15.0751H15.0757H15.0764H15.0771H15.0778H15.0785H15.0792H15.0799H15.0806H15.0813H15.082H15.0827H15.0834H15.0841H15.0848H15.0855H15.0862H15.0869H15.0876H15.0883H15.089H15.0897H15.0904H15.0911H15.0918H15.0925H15.0932H15.0939H15.0946H15.0953H15.096H15.0967H15.0974H15.0982H15.0989H15.0996H15.1003H15.101H15.1017H15.1024H15.1031H15.1038H15.1045H15.1052H15.1059H15.1066H15.1073H15.1081H15.1088H15.1095H15.1102H15.1109H15.1116H15.1123H15.113H15.1137H15.1145H15.1152H15.1159H15.1166H15.1173H15.118H15.1187H15.1195H15.1202H15.1209H15.1216H15.1223H15.123H15.1237H15.1245H15.1252H15.1259H15.1266H15.1273H15.1281H15.1288H15.1295H15.1302H15.1309H15.1317H15.1324H15.1331H15.1338H15.1346H15.1353H15.136H15.1367H15.1375H15.1382H15.1389H15.1396H15.1404H15.1411H15.1418H15.1425H15.1433H15.144H15.1447H15.1455H15.1462H15.1469H15.1477H15.1484H15.1491H15.1498H15.1506H15.1513H15.152H15.1528H15.1535H15.1543H15.155H15.1557H15.1565H15.1572H15.1579H15.1587H15.1594H15.1602H15.1609H15.1616H15.1624H15.1631H15.1639H15.1646H15.1653H15.1661H15.1668H15.1676H15.1683H15.1691H15.1698H15.1705H15.1713H15.172H15.1728H15.1735H15.1743H15.175H15.1758H15.1765H15.1773H15.178H15.1788H15.1795H15.1803H15.181H15.1818H15.1825H15.1833H15.1841H15.1848H15.1856H15.1863H15.1871H15.1878H15.1886H15.1894H15.1901H15.1909H15.1916H15.1924H15.1932H15.1939H15.1947H15.1954H15.1962H15.197H15.1977H15.1985H15.1993H15.2H15.2008H15.2016H15.2023H15.2031H15.2039H15.2046H15.2054H15.2062H15.207H15.2077H15.2085H15.2093H15.21H15.2108H15.2116H15.2124H15.2131H15.2139H15.2147H15.2155H15.2163H15.217H15.2178H15.2186H15.2194H15.2202H15.2209H15.2217H15.2225H15.2233H15.2241H15.2249H15.2256H15.2264H15.2272H15.228H15.2288H15.2296H15.2304H15.2312H15.2319H15.2327H15.2335H15.2343H15.2351H15.2359H15.2367H15.2375H15.2383H15.2391H15.2399H15.2407H15.2415H15.2423H15.2431H15.2439H15.2447H15.2455H15.2463H15.2471H15.2479H15.2487H15.2495H15.2503H15.2511H15.2513L17.8182 27.0921C17.8838 27.3295 18.1168 27.4247 18.306 27.4247C18.4938 27.4247 18.7249 27.3308 18.7924 27.0969L19.9549 24.6629L22.5115 25.6125L22.5193 25.6154L22.5274 25.6174C22.7272 25.6673 22.9235 25.6169 23.0689 25.52L23.0813 25.5117L23.0918 25.5012C23.2448 25.3482 23.3052 25.1285 23.199 24.9111L20.6362 18.7679C22.7288 17.0902 24.0563 14.547 24.0563 11.6628C24.0563 6.6313 19.9611 2.57528 14.9688 2.57528C9.97647 2.57528 5.88125 6.6313 5.88125 11.6628C5.88125 14.5085 7.20812 17.0506 9.22627 18.6915L6.73587 24.9175ZM19.7302 19.4003L21.7163 24.2088L19.8577 23.4914C19.8573 23.4913 19.857 23.4911 19.8567 23.491C19.586 23.3832 19.3211 23.5013 19.1747 23.7453L19.1742 23.745L19.1686 23.7564L18.2821 25.5623L16.3285 20.6435C17.5592 20.4434 18.6934 20.0191 19.7302 19.4003ZM10.0436 23.4906L8.17635 24.1785L10.1303 19.3284C11.1685 19.981 12.3342 20.4379 13.5693 20.6098L11.6166 25.5613L10.7329 23.761C10.6183 23.4842 10.2963 23.3907 10.0436 23.4906ZM6.94842 11.6628C6.94842 7.25771 10.5637 3.64245 14.9688 3.64245C19.3739 3.64245 22.9891 7.25771 22.9891 11.6628C22.9891 16.0679 19.3739 19.6832 14.9688 19.6832C10.5637 19.6832 6.94842 16.0679 6.94842 11.6628Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.3"
      />
    </svg>
  );
};

export default Badge;
