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
