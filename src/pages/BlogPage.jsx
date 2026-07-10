import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import PostCard from "../components/PostCard";

const BlogPage = () => {
  const sordos = [
{
id: "1",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczOch6_dXuiuyadZEOqA5HcER-epRKxi9WvD2pGjh_0nvVZMwYt7RPxlckb9WYoaCDqKKevtItmXL3lgfyj7axGAT8TNsRDfkEOzrHcKA5t71pEVg1vHHy3x8xj1RB0-OVqZjOqcZufeYFX_F5tJxhjs=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "2",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczMgPjd7bGjWh9NMmUNrZfsBrm5GDn9mxYV-rkRKcLkGjL9wePaXXP725tkjwV3G8zLy9RTjyAadLeP2hbGs77sQTBta4N77JzavlTswzNY8hG_qndO6SDbo3HRf9ARq1dwy9HykwwT1LmAGTGlLe3HX=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "3",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczP46NVwcVgp7EHZJuzAULJ4Rf-dOUZr2EUp9t_xPyOqB0Wh3uWezF8tu_ym9-aaTUj6GaCZRUqNSVPgxDTlij8xQapjOYjt3gStAqWmA30ChQGIBtcZCewJR3othF7SR0xHduTHMi7GS4a4XY9nHzsX=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "4",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczMcjzyyNpSauenTngnhSbhpptIi4oEV-TUiClyqhnfiPpN6c3li6q1BPMUaPPBZNOD54s_Q2L9X-ptYhynj-FagTu4--yV7rJ305US4zbkMgkYQ7fG2VcEPzm1O55m0T1SZgu6p8ffLVCDCaTjFaTSM=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "5",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczM4vMjB-t_1-JJ-pUx4OM7TbiybGgPNiTr7E03Qpkyi45fIKNRXqI90D7ya5NblH5jWnilFb4OPviB138xrZpzWCNmb4QySSm9rSL1KIQ-xoBB1NeF1KgRJ7odlE0ysD9VEk3eSvZ22C8wVPOWS1YCs=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "6",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczO-Ndr3lbKjdn0miFF3w7hKKSZe30P0br26qxZ61ZmAeqXpplC0AkdC_GuUqTmYqqDXgC64LHcTtQ7Mzi9OfdvUbAdhU2dq5F8768hyFXh0MJaMG1fv5Bk-GIAqy4fw2-22_gUyEuuihr9WlQdcLzdC=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "7",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczOVJYdcynM6HTwQWC7OnLCpBXyJNou2pkC6IWBOHMTDBHVc4dKIXdF8uqOFPHUQHyV_q9_xaP7YrnqMkcze_y0j_PpkqLdRlMZ1cLQtXqtIPVtx3kXRu0LwjG9Cjf5UWXVap2J8jyGb0Khyy6ExMSLs=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "8",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczNyP5WlZE8r7es4grk6sbr52I96TJEpDRYwk2s6dZCF9qXir7zHEJ-S2jBhhjj0AvSKhJqqgcXyLsumedLLoYJ641zV2IRe_IAIDRsfJQMbjaxbygkKajKP82E_j0os5B5vyKdM82_aW9CBI3KPIJzz=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},

{
id: "9",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczNT95EhQFHuI68gfEIO9EIyEUkspvvumeDm56BahZ88Nh9746jmpPzIO4gn7ZOEP6cNqxch4ICCKpzuvNvwI4x3CdydJYMWF8kUY5rhQw1WmRiNB_9OL6RPKu1PHvqy5oUUq4nkY8yme34EaU9LgmbG=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "10",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczO0_LFd9ew6gKxqoHMvWlQoWPXL4H9ZcFQa8deMbrD1lindBh4ZTe4n2t0XVp9CmoqUeKLsN9fdW8cIxpyQa9pOjDuf5rMzHgqc2W0nKrwrpbX4djkPUz4C_9n9sO1yuX60ojSgQakFV3FFkSWnTOHB=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "11",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczNqWgo71pv3ANeTHWE1j9i_MBLnEUR68htO5_cOJlH0CpUgTQzDvNgfhAt4BqUs2ai9w4lj6KmIhhpGGQuwsjfGPq1NAW1Z_N7xx10VY_bpApU4yEGQwk3COLcd1Qdoaq0kmUKIJFJmTy_xxZ9Q7aW0=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "12",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczNUzkkbc-cGunD23JGgWFO8ZyXyUgcAeYtgzn_WacYyB6unQD1NyZ6uyBzbbmHOqAdLKE7A0-18UO1Z1lbzBazjgixmB_vHAVUfEanfRYxKS7MT_2T22uUUeOmFy2N-TVN3kJOkYshniHR3Bbz5HwdH=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "13",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczMAkWkQMsD5fwfM5bPwbUtn5Kkot6BCa-ebBtddU2WcFvE_X5RBIJ0cihL5Gi8Tn0vayXuD6QUnzFKZ-rLS3xPKLimKDnVcLEkFPZeqQg4KV_oZwdzOEChI9nOcnKArypSq9GVHtgEDG5BP0Szvsim5=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "14",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczMnu_ncLaekosTLJhl5-ECMynhxII9i__elCIoTmRJETsgNY0jtDPW4BUUG6bHZD_OtQB08HRyyotGMoMEcSfo0arW9C-ZDesGYH6krs1Et3b3QRDa0TqyPe1a0iIpDc0dPOkooku5dT8sRKfuTFZed=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "15",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczOGhIQzGo1B7VBbx2hMj2_h2ZN3YZfe7FFmVvoU07LLdzbnPDbMlLci6fnkLgA0EHvgIpxC8vYdR7TfPa-won79qJqKNxwUSYTCcPGaL_eQb4-_dXN9X2XwLkxw_ykUgSqYMgBgbAXVPupOa6KcoHMQ=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "16",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczMYWKGzC0KIVb49fJcCNEqJr7V0pu5toMElfT1TRc5d2MISQf9RVttTPUXn9LfTHg3qYWUvVhqrxztODUI-7Tm8uJrgJEhVWg_QZy59U2uHhqPYivHEcWHPUgF_Lp6fsxj5OU9U7V30sakJNW90uEBE=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "17",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczPs0q2FQH9nVw3HZnD90VUqunmT9jG2-o9ASmvdUUyHiANRgRjAEqVr2WFOl3AVf67jidDwr0y7ce2Ne87nzbUtbBDEk8x_aTBJwJOq97SlPiI_6TuFasCZG0dFxW_Nv657Wso7JytdQucTuNqlSf3U=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "18",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczPOPDAtkC3Po4QUMZoMcFoJy9Vb5-4mqR8PTvjo57ggAqlPQE_0c08JIMvADTqmZra7rU6I9B_0j3E6rVNe2iU7bYq4yHNCy0zaKmeFPYm4igI3GkhRe7D7-yTstg2ofxbPwjZ44GcFDxPdZcxtX1iA=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "19",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczNC_elkH7iyEMwywIZDIbShrspbX1TnlZCDXKjGe77Bw5NfomJoEKHtwiINgeEssSZ0EzmgaY927GTNU49ejhKxUD8nhNZN8XG8I5CpFvmnH_l5O-BtiSCClxi4F8mf0C9npxoit-EV4Cvy2GnvtuDo=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "20",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczMgnpY9-ZS9Jpqk918YWE7xgDv1I3UUGqu-bmgmHU9-ncbObpew6C56nBA5-3NpopIqi33TH0OuQZDminj0ileR53nER4bgENhCauOyRJs5RWpejlOqD8Pw-ayBx8zDUAuJaFiaZ6FO2-GmHP24NLJy=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "21",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczM3eDen6eyu3R7oz3x8Jw-gAMDHx90Y-Rcxiir6nSN0m44ggbMBGyh_CRWiRHcNZyHUbZCfPZM_9cJpJDNvzZk3w-4s8aANhwGpG-CtT27d4DAdAeadlZDBZcGAkPlbt-rYh3qZCg5guunLWjlER3BH=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "22",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczPp64cOojfHXmeqIcZUbmkC84pcfHnar-ttq0JdGoZxhhaPvufOGKJuG6JX0StyFWYGGeTPdJiWHO_2F038UNcfa2x9SLbmA7tkd1PqF9WYkfluD5zQ3PODpu1g8PLqJKBB4MZjvYgFLWXtUbryc5pf=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "23",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczM1wOBdMtZFd23rfE4CnQWSv9B2FYskeINsEAU8_cVXwyiXDhcxWUUrLnglWdGlabKQ5-hg5ctxYSqYqKxAtBlEb6bBy_xHa1DFBo_Ipl5gJZKYSV_Wt-RUI99FcjHBOGHNEivekkbsCPQ8U2s5ih_y=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "24",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczNLA_EBoPZ6JDnoJBiCxMuNFrIusW8wJf9qfW0pENOLlyoO_tAwSC8TcbdLOlCeNO_hcPqeRw8r7lg-VnmvhYT5GiVyr1bnozjBc9ET-DsT0t9al_PryRhhhpLZSbOkpOPUj-UbAWBuw-zLwo0GtKP1=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "25",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczOwxxzO48qu7_YiH3R95VNr2WlC7i92fnb1p_QVwM6hmJMbYgm1MuTXGGUSfOZvHnZnxBFmH9Ly7WeSgKEtm7gyUI59P7LB7uWX1p216mj2jDpbJLWVfJ0_WXcF3vJBKXAt0VsZZ4MRCZPeEnMLfstU=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "26",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczNRjdR09QY15kPKDO86oIKJnO0APmQqsg1mdaRLBgxcyg4E2kPgGKCxU_6izVewJAbuTXriLITCbbdihfGYxWZsE2PbnmrE23i15hFSVuvRMeo3hkuFKCM0-2sKqvHieXJyfxCfjuMytYX3yAntGftC=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "27",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczO0_YY6_xs4_GKwqI_mpZU3rft8C6dkmpJAiYiHq-kwpnumXykhruV2PtrtLKuj-DB0M4sGKqHpDaWIdWjrGhyKtuQNGLpzAZp6jF8VVTUUn7F_-P8wqNpWT9YXTkz6KQIa3-gW4k2vXn45tWGl4ouQ=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "28",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczMmBhZWvPxJXjuef2DgeMbe5juhoyIDf1kfo5dLX-q8QQhh_m1r5Nn13fP2vqpaYouBW6mZiTlbv6iXK7tJSEGg8SnY85q_MuGDOPXRX9jrtlQH-3uNI7hr-DFc98CyFIxDumVCS_H6NwMoyOCav3RE=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "29",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczPAGjXpWZcSoqOH7JEYTauU8Jvugq5yOtPc3gZYOeJfFmWQJB_RM_dD2GeTWZ4Z0FgLLYUSgQDZ0Bjg1D5EsmcJzszDBqaoNGpvOS1QBHYfL8KM8k8ONQXrGlHnjbBrzGaj_iwhfKhsSB3SnOY8pf2I=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "30",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczP8zsIz1Df8mCUdwjEP5u7v0qcZaNUshw4Nf53WeEm6RCMyyVAWwADfG4Lgxfa8JNkJdwFQ47L-KBv5SqsSVylCF8Hf1uLnSh2pRzUCj2fHc0poFR5KspcDDgAKh7giyb5lu5ze60qaORFGITxWDoUc=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "31",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczPtApPIWxX2Cn7XCRBmSoCJg-3i41Qluc-b8U9AIAbGecRYKcgRlSVzRgcC7gxIag0yy3dZIeMcuqeE7dIhTfhrW6fPLym2vtRlSkwT3vQkw991QYLUc1GzJc6DZ6QCzahmNEwMeiiWLTwJunQt7SdT=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "32",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczPwaGTpKTS6oXnLE8C2DNrjN-GB4EH2NJM4kRbpyitz6iny7zJeLVwoQ37-bxgmirdP-AAAWLlMemL_KFHxcFU3NU4oZoxzczLV4ZhRAOJ6oKji-V0iEqCgp8Nz5n0Hy-5BbnYV9D1GRVNHR-GpO-bM=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "33",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczOb4S9YWW417Sg-jvZ-SSZjXO-8HPO99Xv12AxtZgeMw79yXH1tBp4xIyTWVCZEjtrckT7Vb-_EL_GLEF3nkA_1t8i_MgrurMYCWkvINAkww5wFUpviXtEjW4-4t1-xPpHyogUf-0kH8CoE-DnFZHRU=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "34",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczOJAu4Wk5C7c_tjTB8_DbFwF8BYSKvZEXOIwHJzMxjv16tVnCKyOvnvd2URwtyx9eJzdQrYhzgs-nmo4auTNJY7z4Muv255sG9-rPsFweqSZhkXq2lAF7nnW-wI1ZBkpKNi4AEOpvG-gEd17Qd2lxag=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "35",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczO8PQHc94JO1ZRzQnZ0OsorNTeBl4iDKqquTs1YAW5mXpWh9sgYvhYBueudfvYDldhTcmq1mdSGKgeD2X2KK3m4jbvH_cawZQn7hBB-IsPvf36rsSgEHa_NPJMT8LSOpUhs4kDGKIXIGsOfmudhmQ9g=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
{
id: "36",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczOGt8qR9KEn1qzbOTgE73hDQvRNKhdzVBbY3Lj9XzXWspa-5l1OCYJadSkl-lEW6eTqbpSu9xpVXEMTOZm3sDdoJoYM6jdXgbBCEE2a4ZRQC-9cPaVBbjG1z8zhf0KN4zv42YbT3ts61efKdgJthg78=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
id: "37",
name: "Captura de pantalla",
img: "https://lh3.googleusercontent.com/pw/AP1GczOQk1N7EgixqKwtBcA-0i4pRAiQKXoDw53cpRDqlLrJXvvhxHWTlb9gVvY4V05ZibfmfHIdnnJZv58O5NgeePA4jaH2NWehiz31n407coKB7Ap5iKeE5UEyj-NmRL3p4vQlsQQ-OYyFVJAvePm1680S=w1080-h720-s-no-gm?authuser=0",
title: "Comprar foto",
},
];

  const postCard = sordos.map((sord) => {
    return (
      <li key={sord.id}>
        <PostCard sord={sord}></PostCard>
      </li>
    );
  });
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      {postCard} 
    </div>
  );
};

export default BlogPage;
